import Hero from '@/components/ui/Hero';
import CTAWide from '@/components/ui/CTAWide';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre AeroFactor | Vigilancia Aérea Persistente en Chile',
  description: 'AeroFactor es una empresa chilena especializada en soluciones de vigilancia aérea persistente con aerostatos y sensores avanzados para seguridad territorial e infraestructura crítica.',
  keywords: 'AEROFACTOR, vigilancia aérea Chile, aerostatos, seguridad territorial, infraestructura crítica',
  openGraph: {
    title: 'Sobre AeroFactor',
    description: 'Empresa chilena especializada en vigilancia aérea persistente con aerostatos y sensores avanzados.',
    images: ['/og/empresa.jpg'],
  },
};

export default function EmpresaPage() {
  return (
    <>
      <Hero
        title="Sobre AeroFactor"
        subtitle="Tecnología aérea al servicio de la seguridad y la vigilancia inteligente"
        description="Empresa chilena especializada en soluciones de vigilancia aérea persistente con cobertura 24/7 y alcance de 360°."
        ctaText="Contáctenos"
        imageSrc="/images/empresa.webp"
        imageAlt="Sistema aerostático AEROFACTOR desplegado con estación terrestre de control"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              AeroFactor es una empresa chilena especializada en el desarrollo e implementación de soluciones de
              vigilancia aérea persistente, basadas en sistemas de aerostatos y sensores avanzados. Nuestra tecnología
              permite una observación continua 24/7, con cobertura de 360°, destinada a fortalecer la seguridad territorial,
              la protección de infraestructura crítica y el apoyo táctico a operaciones civiles y gubernamentales.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Con un equipo multidisciplinario de ingenieros, técnicos y analistas, trabajamos bajo los más altos
              estándares de calidad y confidencialidad, asegurando que cada solución se adapte a las condiciones
              operativas y estratégicas de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="bg-gradient-to-br from-primary-900 to-primary-600 text-white p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Misión</h2>
              <p className="text-lg leading-relaxed text-blue-50">
                Proveer soluciones aéreas avanzadas que fortalezcan la seguridad territorial y operativa mediante
                el uso de tecnología confiable, autónoma y persistente, diseñada para responder a los desafíos
                actuales de vigilancia y control.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-orange-600 text-white p-10 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Visión</h2>
              <p className="text-lg leading-relaxed">
                Ser el referente latinoamericano en tecnología de vigilancia aérea inteligente, destacando por
                la innovación, la confiabilidad y la integración efectiva con organismos de seguridad y empresas
                estratégicas.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-12 text-center">Valores Corporativos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">Innovación</h3>
                <p className="text-neutral-700">
                  Buscamos permanentemente nuevas formas de optimizar la vigilancia aérea.
                </p>
              </div>

              <div className="bg-neutral-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">Confianza</h3>
                <p className="text-neutral-700">
                  Cada operación se ejecuta con precisión, transparencia y responsabilidad.
                </p>
              </div>

              <div className="bg-neutral-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">Compromiso</h3>
                <p className="text-neutral-700">
                  Acompañamos a nuestros clientes durante todo el ciclo operativo.
                </p>
              </div>

              <div className="bg-neutral-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">Eficiencia</h3>
                <p className="text-neutral-700">
                  Diseñamos soluciones que equilibran costo, rendimiento y autonomía.
                </p>
              </div>

              <div className="bg-neutral-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-3">Seguridad</h3>
                <p className="text-neutral-700">
                  Protegemos información, infraestructura y entornos críticos.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 text-white rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6">Equipo y Capacidades</h2>
            <p className="text-lg text-blue-50 mb-6 leading-relaxed">
              Nuestro equipo está compuesto por profesionales con experiencia en aeronáutica, electrónica,
              telecomunicaciones y defensa, capaces de integrar sensores ópticos, infrarrojos y de radar en
              entornos de alta exigencia.
            </p>
            <p className="text-lg text-blue-50 leading-relaxed">
              Además, colaboramos con expertos en análisis de datos, inteligencia artificial y mantenimiento
              logístico, garantizando operaciones continuas y sostenibles.
            </p>
          </div>
        </div>
      </section>

      <CTAWide
        title="¿Desea conocer más sobre AeroFactor?"
        description="Contáctenos a través del formulario o escriba a contacto@aerofactor.cl para agendar una presentación."
        ctaText="Contáctenos"
      />
    </>
  );
}
