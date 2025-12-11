'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  honey: string; // honeypot field
}

export default function ContactForm() {
  const { t } = useLanguage();
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

        // Google Analytics - Evento de conversión
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            event_category: 'Contact Form',
            event_label: 'Form Submission Success',
            value: 1
          });

          // Evento adicional para Google Ads (si lo usas)
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Contact Form',
            event_label: formData.company,
            value: 1
          });
        }

        // Meta Pixel - Evento Lead (si lo usas)
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }

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
        setErrorMessage(data.error || t.contact.form.error);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t.contact.form.error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show success message instead of form
  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200 p-8 sm:p-12 shadow-lg text-center">
        <div className="max-w-md mx-auto">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
            {t.contact.form.successTitle || '¡Mensaje Enviado!'}
          </h3>

          {/* Success Message */}
          <p className="text-base sm:text-lg text-neutral-600 mb-6">
            {t.contact.form.successMessage || 'Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos en menos de 24 horas.'}
          </p>

          {/* Additional Info */}
          <div className="bg-primary-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-primary-800">
              <strong>{t.contact.form.nextSteps || '¿Qué sigue?'}</strong>
            </p>
            <ul className="mt-2 space-y-2 text-sm text-primary-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.contact.form.step1 || 'Revisaremos tu consulta'}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.contact.form.step2 || 'Un especialista te contactará pronto'}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.contact.form.step3 || 'Recibirás una propuesta personalizada'}</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              {t.contact.form.sendAnother || 'Enviar otro mensaje'}
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all"
            >
              {t.contact.form.backHome || 'Volver al inicio'}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-2">
            {t.contact.form.name} <span className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-2">
            {t.contact.form.email} <span className="text-accent-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-2">
            {t.contact.form.organization} <span className="text-accent-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-800 mb-2">
            {t.contact.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-2">
            {t.contact.form.message} <span className="text-accent-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition resize-none"
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

        {/* Error Message */}
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
          {status === 'loading' ? t.contact.form.sending : t.contact.form.submit}
        </button>
      </form>
    </div>
  );
}
