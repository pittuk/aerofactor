import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, honey } = body;

    // Honeypot check
    if (honey) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos requeridos' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingrese un correo electrónico válido' },
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

    // Prepare email content
    const mailOptions = {
      from: process.env.CONTACT_FROM || 'noreply@aerofactorlatam.com',
      to: process.env.CONTACT_TO || 'info@aerofactorlatam.com',
      replyTo: email,
      subject: `Consulta desde Web - ${company}`,
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
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Organización:</div>
        <div class="value">${company}</div>
      </div>
      <div class="field">
        <div class="label">Teléfono:</div>
        <div class="value">${phoneText}</div>
      </div>
      <div class="message">
        <div class="label">Mensaje:</div>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intente nuevamente.' },
      { status: 500 }
    );
  }
}
