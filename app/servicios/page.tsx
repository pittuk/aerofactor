import Hero from '@/components/ui/Hero';
import ServicesList from '@/components/ui/ServicesList';
import CTAWide from '@/components/ui/CTAWide';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Integración, Soporte y Entrenamiento | AEROFACTOR',
  description: 'Servicios completos de integración C4ISR, soporte técnico 24/7 y programas de entrenamiento certificado para operadores y técnicos de sistemas aerostáticos de vigilancia.',
  keywords: 'integración C4ISR, soporte técnico, entrenamiento especializado, mantenimiento aerostatos, capacitación operadores',
  openGraph: {
    title: 'Servicios Especializados | AEROFACTOR',
    description: 'Integración C4ISR, soporte 24/7 y capacitación certificada para sistemas de vigilancia aérea persistente.',
    images: ['/og/servicios.jpg'],
  },
};

const services = [
  {
    title: 'Integración de Sistemas',
    description: 'Conexión sin fricciones con infraestructura existente',
    bullets: [
      'Análisis de arquitectura y definición de puntos de interconexión',
      'Desarrollo de adaptadores para protocolos propietarios',
      'Pruebas de integración en laboratorio y campo',
      'Soporte para STANAG 4609, CoT, KML/KMZ, APIs RESTful',
    ],
  },
  {
    title: 'Soporte y Mantenimiento',
    description: 'Disponibilidad operacional garantizada con contratos 24/7',
    bullets: [
      'Diagnóstico remoto mediante telemetría en tiempo real',
      'Mantenimiento preventivo programado según horas de vuelo',
      'Stock de repuestos críticos en Chile con entrega en 12-48h',
      'Disponibilidad operacional superior al 95% en contratos Premium',
    ],
  },
  {
    title: 'Entrenamiento Especializado',
    description: 'Capacitación técnica y operacional certificada',
    bullets: [
      'Programas para operadores de plataforma (5 días)',
      'Capacitación de operadores de sensores (7 días)',
      'Formación de analistas de inteligencia (5 días)',
      'Entrenamiento de técnicos de mantenimiento (10 días)',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Hero
        title="Servicios Especializados"
        subtitle="Acompañamiento completo durante todo el ciclo de vida operacional"
        description="Servicios de integración C4ISR, soporte técnico 24/7 y programas de capacitación certificada para maximizar la disponibilidad operacional de sus sistemas."
        ctaText="Contratar servicios"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              AEROFACTOR acompaña a nuestros clientes durante todo el ciclo de vida operacional con servicios de integración, 
              soporte técnico y capacitación especializada. Nuestro objetivo es maximizar la disponibilidad operacional, 
              reducir tiempos de respuesta y garantizar que cada sistema entregue su máximo potencial desde el primer día.
            </p>
          </div>

          <ServicesList services={services} />

          <div className="mt-16 bg-primary-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Beneficios para su Operación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Reducción de Riesgos</h3>
                <p className="text-blue-50 text-sm">
                  Integración probada y validada antes del despliegue operacional
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Maximización de ROI</h3>
                <p className="text-blue-50 text-sm">
                  Aprovechamiento de sistemas existentes sin reemplazos innecesarios
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Continuidad Operacional</h3>
                <p className="text-blue-50 text-sm">
                  Soporte técnico local con tiempos de respuesta garantizados
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Autonomía Técnica</h3>
                <p className="text-blue-50 text-sm">
                  Personal capacitado para operación y mantenimiento de primer nivel
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Actualización Continua</h3>
                <p className="text-blue-50 text-sm">
                  Acceso a mejoras de software y nuevas capacidades en contratos Premium
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-100">Compromiso de Largo Plazo</h3>
                <p className="text-blue-50 text-sm">
                  Autonomía operacional completa dentro de los primeros 90 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAWide
        title="¿Necesita soporte especializado?"
        description="Consulte por nuestros contratos de servicio personalizados según sus necesidades operacionales."
        ctaText="Solicitar información"
      />
    </>
  );
}
