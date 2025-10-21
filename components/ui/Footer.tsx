import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/aplicaciones', label: 'Aplicaciones' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/logos/logo-white.png"
              alt="AEROFACTOR"
              width={280}
              height={80}
              className="h-20 w-auto mb-4 brightness-0 invert -ml-2"
            />
            <p className="text-blue-100 text-sm leading-relaxed max-w-md">
              Vigilancia aérea persistente de nueva generación para seguridad territorial, 
              control de fronteras e infraestructura crítica en Chile y Latinoamérica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <strong className="text-white">Email:</strong><br />
                contacto@aerofactor.cl
              </li>
              <li>
                <strong className="text-white">Teléfono:</strong><br />
                +56 2 XXXX XXXX
              </li>
              <li>
                <strong className="text-white">Ubicación:</strong><br />
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-100">
              © {currentYear} AEROFACTOR. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-blue-100">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
