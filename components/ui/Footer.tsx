import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/aplicaciones', label: 'Aplicaciones' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/Logo-Aerofactor---gris.png"
              alt="AEROFACTOR"
              width={220}
              height={60}
              className="h-14 w-auto mb-4 -ml-1"
            />
            <p className="text-neutral-500 text-sm leading-relaxed pr-4">
              Vigilancia aérea persistente de nueva generación para seguridad territorial.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-500 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Productos</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">
                  Sistema Táctico
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">
                  Sistema Regional
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">
                  Sistema Estratégico
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Empresa</h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Soporte</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contacto" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="mailto:info@aerofactor.cl" className="text-sm text-neutral-500 hover:text-accent-500 transition-colors">
                  Email
                </a>
              </li>
              <li>
                <span className="text-sm text-neutral-500">
                  Santiago, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-neutral-400">
              © {currentYear} AEROFACTOR. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacidad" className="text-neutral-400 hover:text-accent-500 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-neutral-400 hover:text-accent-500 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
