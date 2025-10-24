import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import PageTransition from '@/components/PageTransition';
import SchemaOrg from '@/components/SchemaOrg';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AEROFACTOR | Vigilancia Aérea Persistente',
  description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos en Chile',
  icons: {
    icon: '/favicon.png',
  },
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
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
