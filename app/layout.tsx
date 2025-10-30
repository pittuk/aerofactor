import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import PageTransition from '@/components/PageTransition';
import SchemaOrg from '@/components/SchemaOrg';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AEROFACTOR | Vigilancia Aérea Persistente con Aerostatos',
  description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos, sensores multi-espectro e inteligencia artificial para seguridad territorial, fronteras e infraestructura crítica en Chile y Latinoamérica.',
  keywords: ['vigilancia aérea', 'aerostatos', 'seguridad territorial', 'ISR', 'defensa', 'control de fronteras', 'infraestructura crítica', 'Chile', 'Latinoamérica'],
  authors: [{ name: 'AEROFACTOR' }],
  creator: 'AEROFACTOR',
  publisher: 'AEROFACTOR',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://aerofactor.cl',
    siteName: 'AEROFACTOR',
    title: 'AEROFACTOR | Vigilancia Aérea Persistente con Aerostatos',
    description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos para seguridad territorial',
    images: [
      {
        url: 'https://aerofactor.cl/images/hero-aerostato-nuevo.webp',
        width: 1200,
        height: 630,
        alt: 'AEROFACTOR - Sistema Aerostático de Vigilancia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEROFACTOR | Vigilancia Aérea Persistente',
    description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos',
    images: ['https://aerofactor.cl/images/hero-aerostato-nuevo.webp'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
