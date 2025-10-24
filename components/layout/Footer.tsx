import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y tagline */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">AeroFactor</h3>
            <p className="text-gray-400 text-sm">
              Vigilancia aérea persistente para un mundo más seguro
            </p>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/productos" className="hover:text-white">
                  Ver todos los productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/servicios/integracion-sistemas" className="hover:text-white">
                  Integración de Sistemas
                </Link>
              </li>
              <li>
                <Link href="/servicios/soporte-mantenimiento" className="hover:text-white">
                  Soporte y Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="/servicios/entrenamiento-especializado" className="hover:text-white">
                  Entrenamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@aerofactor.cl</li>
              <li>+56 X XXXX XXXX</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 AeroFactor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
