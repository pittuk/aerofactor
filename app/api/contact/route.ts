import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit } from '@/lib/rateLimit';

// Mensajes de error multiidioma
const errorMessages = {
  es: {
    tooMany: 'Demasiadas solicitudes. Por favor intente nuevamente en 10 minutos.',
    nameLength: 'El nombre debe tener al menos 2 caracteres',
    invalidEmail: 'Por favor ingrese un correo electrónico válido',
    companyLength: 'El nombre de la organización debe tener al menos 2 caracteres',
    messageLength: 'El mensaje debe tener al menos 10 caracteres',
    invalidPhone: 'Por favor ingrese un número de teléfono válido',
    success: 'Mensaje enviado correctamente',
    genericError: 'Error al enviar el mensaje. Por favor intente nuevamente.',
  },
  en: {
    tooMany: 'Too many requests. Please try again in 10 minutes.',
    nameLength: 'Name must be at least 2 characters',
    invalidEmail: 'Please enter a valid email address',
    companyLength: 'Organization name must be at least 2 characters',
    messageLength: 'Message must be at least 10 characters',
    invalidPhone: 'Please enter a valid phone number',
    success: 'Message sent successfully',
    genericError: 'Error sending message. Please try again.',
  },
  pt: {
    tooMany: 'Muitas solicitações. Por favor, tente novamente em 10 minutos.',
    nameLength: 'O nome deve ter pelo menos 2 caracteres',
    invalidEmail: 'Por favor, insira um endereço de e-mail válido',
    companyLength: 'O nome da organização deve ter pelo menos 2 caracteres',
    messageLength: 'A mensagem deve ter pelo menos 10 caracteres',
    invalidPhone: 'Por favor, insira um número de telefone válido',
    success: 'Mensagem enviada com sucesso',
    genericError: 'Erro ao enviar mensagem. Por favor, tente novamente.',
  }
};

// Detectar idioma del header Accept-Language
function getLanguage(request: NextRequest): 'es' | 'en' | 'pt' {
  const acceptLanguage = request.headers.get('accept-language') || 'es';
  const lang = acceptLanguage.toLowerCase();

  if (lang.includes('en')) return 'en';
  if (lang.includes('pt')) return 'pt';
  return 'es';
}

// Función de sanitización HTML para prevenir XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Función para sanitizar y validar inputs
function sanitizeInput(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

// Validación de email mejorada
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validación de teléfono
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return !phone || phoneRegex.test(phone);
}

export async function POST(request: NextRequest) {
  try {
    const lang = getLanguage(request);
    const msgs = errorMessages[lang];

    // Rate limiting por IP
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';

    if (!checkRateLimit(ip, 3, 600000)) { // 3 requests por 10 minutos
      return NextResponse.json(
        { error: msgs.tooMany },
        { status: 429 }
      );
    }

    const body = await request.json();
    let { name, email, company, phone, message, honey } = body;

    // Honeypot check
    if (honey) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Sanitizar inputs
    name = sanitizeInput(name, 100);
    email = sanitizeInput(email, 254);
    company = sanitizeInput(company, 200);
    phone = phone ? sanitizeInput(phone, 20) : '';
    message = sanitizeInput(message, 2000);

    // Validaciones
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: msgs.nameLength },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: msgs.invalidEmail },
        { status: 400 }
      );
    }

    if (!company || company.length < 2) {
      return NextResponse.json(
        { error: msgs.companyLength },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: msgs.messageLength },
        { status: 400 }
      );
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: msgs.invalidPhone },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const phoneText = phone || 'No proporcionado';

    // Prepare email content con sanitización
    const mailOptions = {
      from: process.env.CONTACT_FROM || 'noreply@aerofactorlatam.com',
      to: process.env.CONTACT_TO || 'info@aerofactorlatam.com',
      replyTo: email,
      subject: `Consulta desde Web - ${escapeHtml(company)}`,
      text: `Nueva consulta desde el sitio web AEROFACTOR

Nombre: ${name}
Email: ${email}
Organización: ${company}
Teléfono: ${phoneText}

Mensaje:
${message}
      `,
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #021442; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #021442; }
    .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #0064CC; }
    .message { margin-top: 20px; padding: 15px; background: white; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Nueva Consulta - AEROFACTOR</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nombre:</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
      </div>
      <div class="field">
        <div class="label">Organización:</div>
        <div class="value">${escapeHtml(company)}</div>
      </div>
      <div class="field">
        <div class="label">Teléfono:</div>
        <div class="value">${escapeHtml(phoneText)}</div>
      </div>
      <div class="message">
        <div class="label">Mensaje:</div>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: msgs.success },
      { status: 200 }
    );
  } catch (error) {
    // Log seguro sin exponer detalles sensibles
    console.error('Error sending contact form email:', {
      timestamp: new Date().toISOString(),
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });

    const lang = getLanguage(request);
    const msgs = errorMessages[lang];

    return NextResponse.json(
      { error: msgs.genericError },
      { status: 500 }
    );
  }
}
