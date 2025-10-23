import Hero from '@/components/ui/Hero';
import KPIs from '@/components/ui/KPIs';
import AppGrid from '@/components/ui/AppGrid';
import CTAWide from '@/components/ui/CTAWide';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEROFACTOR | Vigilancia Aérea Persistente con Aerostatos en Chile',
  description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos, sensores multi-espectro e inteligencia artificial para seguridad territorial, fronteras e infraestructura crítica.',
  keywords: 'vigilancia aérea, aerostatos, seguridad territorial, ISR, fronteras, infraestructura crítica',
  openGraph: {
    title: 'AEROFACTOR | Vigilancia Aérea Persistente con Aerostatos en Chile',
    description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos, sensores multi-espectro e inteligencia artificial para seguridad territorial.',
    images: ['/og/home.jpg'],
  },
};

const kpis = [
  {
    value: '360°',
    label: 'Cobertura Total',
    description: 'Vigilancia omnidireccional continua sobre áreas extensas. Sectores de interés y/o Activos de alto valor',
  },
  {
    value: '72h',
    label: 'Operación Continua',
    description: 'Hasta 72 horas de vigilancia continuas',
  },
  {
    value: '1.000 ft',
    label: 'Altitud Operacional',
    description: 'Despliegue flexible entre 300 y 1.000 pies según misión',
  },
];

const applications = [
  {
    title: 'Defensa e ISR',
    description: 'Vigilancia táctica, reconocimiento de áreas y evaluación de daños para operaciones militares.',
  },
  {
    title: 'Control de Fronteras',
    description: 'Detección temprana de cruces irregulares y monitoreo de tráfico ilícito en zonas extensas.',
  },
  {
    title: 'Infraestructura Crítica',
    description: 'Protección perimetral de puertos, plantas energéticas, minas y oleoductos.',
  },
  {
    title: 'Safe City',
    description: 'Vigilancia urbana, monitoreo de eventos masivos y coordinación de respuesta rápida.',
  },
  {
    title: 'Rescate y Emergencias',
    description: 'Búsqueda y rescate, evaluación de desastres y apoyo a incendios forestales.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Vigilancia Aérea Persistente de Nueva Generación"
        subtitle="Protección territorial continua con tecnología aerostática avanzada"
        description="Sistemas aerostáticos equipados con sensores de última generación e inteligencia artificial aplicada para organismos gubernamentales, fuerzas de seguridad y empresas de infraestructura crítica en Chile y Latinoamérica."
      />

      <KPIs kpis={kpis} />

      {/* Productos y Tecnologías */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Productos y Tecnologías
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Plataformas aerostáticas modulares configurables para cada escenario operacional, 
              desde despliegues tácticos hasta vigilancia estratégica regional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Sistema Táctico</h3>
              <p className="text-neutral-600 mb-4">
                Despliegue rápido en menos de 60 minutos, transportable en vehículo estándar.
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• Autonomía: 12-24 horas</li>
                <li>• Altitud: 150-500 pies</li>
                <li>• Sensores EO/IR giroestabilizados</li>
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Sistema Regional</h3>
              <p className="text-neutral-600 mb-4">
                Cobertura extendida para vigilancia de fronteras e infraestructura crítica.
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• Autonomía: 48-72 horas</li>
                <li>• Altitud: 500-800 pies</li>
                <li>• Suite EO/IR + Radar + AIS/ADS-B</li>
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-3">Sistema Estratégico</h3>
              <p className="text-neutral-600 mb-4">
                Vigilancia multi-misión con integración C4ISR completa.
              </p>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li>• Autonomía: 5-7 días (ciclos)</li>
                <li>• Altitud: 800-1.000 pies</li>
                <li>• Radar multi-modo + SIGINT + IA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <AppGrid applications={applications} />

      {/* CTA Final */}
      <CTAWide
        title="Solicite una Reunión"
        description="Conozca cómo nuestras soluciones de vigilancia aérea persistente pueden fortalecer sus capacidades operacionales. Nuestro equipo técnico está disponible para evaluar sus requerimientos."
      />
    </>
  );
}
