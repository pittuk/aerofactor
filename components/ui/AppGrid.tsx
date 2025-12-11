import Image from 'next/image';

interface Application {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface AppGridProps {
  applications: Application[];
}

// Mapeo de títulos a imágenes
const imageMap: { [key: string]: string } = {
  'Defensa e ISR': '/images/Apliccaciones/Defensa e ISR.webp',
  'Defense & ISR': '/images/Apliccaciones/Defensa e ISR.webp',
  'Defesa e ISR': '/images/Apliccaciones/Defensa e ISR.webp',
  'Control de Fronteras': '/images/Apliccaciones/Control de fronteras.webp',
  'Border Control': '/images/Apliccaciones/Control de fronteras.webp',
  'Controle de Fronteiras': '/images/Apliccaciones/Control de fronteras.webp',
  'Infraestructura Crítica': '/images/Apliccaciones/Infraestructura Crítica.webp',
  'Critical Infrastructure': '/images/Apliccaciones/Infraestructura Crítica.webp',
  'Infraestrutura Crítica': '/images/Apliccaciones/Infraestructura Crítica.webp',
  'Safe City': '/images/Apliccaciones/Safe City.webp',
  'Rescate y Emergencias': '/images/Apliccaciones/Rescate y Emergencias.webp',
  'Rescue & Emergencies': '/images/Apliccaciones/Rescate y Emergencias.webp',
  'Resgate e Emergências': '/images/Apliccaciones/Rescate y Emergencias.webp',
  'Puertos y Marítimo': '/images/Apliccaciones/Puertos y Marítimo.webp',
  'Ports & Maritime': '/images/Apliccaciones/Puertos y Marítimo.webp',
  'Portos e Marítimo': '/images/Apliccaciones/Puertos y Marítimo.webp',
};

export default function AppGrid({ applications }: AppGridProps) {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => {
            const imageSrc = app.image || imageMap[app.title];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200 hover:shadow-xl hover:border-primary-600 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Content Section */}
                <div className="p-6 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <svg
                        className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-bold text-primary-900 mb-2">
                        {app.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Section with Zoom Effect */}
                {imageSrc && (
                  <div className="relative w-full aspect-square overflow-hidden rounded-b-2xl flex-shrink-0">
                    <Image
                      src={imageSrc}
                      alt={app.title}
                      fill
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
