'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  honey: string; // honeypot field
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    honey: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honey !== '') {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          honey: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje. Por favor intente nuevamente.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Por favor verifique su conexión e intente nuevamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-2">
            Nombre completo <span className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
            placeholder="Ej: Juan Pérez González"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-2">
            Correo electrónico <span className="text-accent-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
            placeholder="correo@organización.cl"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-2">
            Organización <span className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
            placeholder="Nombre de su institución o empresa"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-800 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
            placeholder="+56 9 XXXX XXXX"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-2">
            Mensaje <span className="text-accent-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition resize-none"
            placeholder="Describa brevemente sus necesidades de vigilancia aérea, área de cobertura requerida y cualquier requisito específico..."
          />
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="honey"
          value={formData.honey}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Status Messages */}
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium">
              ✓ Mensaje enviado correctamente. Nos contactaremos con usted dentro de 24 horas hábiles.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-medium">
              ✗ {errorMessage}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-accent-500 hover:bg-accent-600 active:bg-accent-700 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg touch-manipulation min-h-[44px]"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Consulta'}
        </button>

        <p className="text-xs text-neutral-500 text-center">
          Al enviar este formulario, acepta que AEROFACTOR procese sus datos para responder a su consulta.
        </p>
      </form>
    </div>
  );
}
