import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  bullets: string[];
}

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200 p-8 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-neutral-700">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                className="inline-block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Solicitar servicio
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
