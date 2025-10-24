import Hero from '@/components/ui/Hero';
import AppGrid from '@/components/ui/AppGrid';
import CTAWide from '@/components/ui/CTAWide';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aplicaciones de Vigilancia Aérea | Defensa, Fronteras, Safe City',
  description: 'Soluciones de vigilancia aérea persistente para defensa e ISR, control de fronteras, protección de infraestructura crítica, Safe City y operaciones de rescate y emergencias.',
  keywords: 'ISR, control fronteras, infraestructura crítica, Safe City, rescate emergencias, vigilancia aérea',
  openGraph: {
    title: 'Aplicaciones de Vigilancia Aérea | AEROFACTOR',
    description: 'Soluciones para defensa, fronteras, infraestructura crítica, Safe City y emergencias.',
    images: ['/og/aplicaciones.jpg'],
  },
};

const applications = [
  {
    title: 'Defensa e ISR',
    description: 'Vigilancia de zonas de operaciones, apoyo táctico en tiempo real, reconocimiento de áreas negadas y evaluación de daños.',
  },
  {
    title: 'Control de Fronteras',
    description: 'Detección automática de cruces irregulares, monitoreo de tráfico ilícito y coordinación con patrullas terrestres.',
  },
  {
    title: 'Infraestructura Crítica',
    description: 'Protección perimetral de puertos, aeropuertos, plantas energéticas, minas y oleoductos con alertas automáticas.',
  },
  {
    title: 'Safe City',
    description: 'Vigilancia urbana, monitoreo de eventos masivos, seguimiento de vehículos y coordinación de respuesta rápida.',
  },
  {
    title: 'Rescate y Emergencias',
    description: 'Búsqueda y rescate en áreas extensas, evaluación de desastres y apoyo a combate de incendios forestales.',
  },
  {
    title: 'Puertos y Marítimo',
    description: 'Vigilancia portuaria, detección de aproximaciones no autorizadas y monitoreo de tráfico marítimo.',
  },
];

export default function AplicacionesPage() {
  return (
    <>
      <Hero
        title="Aplicaciones"
        subtitle="Vigilancia aérea persistente para escenarios operacionales diversos"
        description="Desde misiones de defensa hasta protección de infraestructura civil y apoyo a emergencias. Cada aplicación aprovecha la capacidad única de los aerostatos para permanecer en posición durante períodos extendidos."
        ctaText="Consultar aplicación"
        imageSrc="/images/aplicaciones.webp"
        imageAlt="Aplicaciones del sistema aerostático AEROFACTOR: vigilancia de infraestructura crítica y defensa"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Nuestras plataformas aerostáticas se despliegan en escenarios operacionales diversos, proporcionando cobertura continua 
              sin los costos operacionales de aeronaves tripuladas ni las limitaciones de autonomía de UAV convencionales.
            </p>
          </div>
        </div>
      </section>

      <AppGrid applications={applications} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Cómo Trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-primary-900 mb-2">Evaluación de Requerimientos</h3>
              <p className="text-sm text-neutral-600">
                Reunión con stakeholders para entender objetivos y métricas de éxito
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-primary-900 mb-2">Diseño de Solución</h3>
              <p className="text-sm text-neutral-600">
                Selección de plataforma, sensores e integración con sistemas existentes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-primary-900 mb-2">Demostración Operacional</h3>
              <p className="text-sm text-neutral-600">
                Demo en condiciones reales para evaluar capacidades y rendimiento del sistema
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="font-bold text-primary-900 mb-2">Implementación</h3>
              <p className="text-sm text-neutral-600">
                Instalación, integración y entrenamiento de operadores
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">5</div>
              <h3 className="font-bold text-primary-900 mb-2">Soporte Continuo</h3>
              <p className="text-sm text-neutral-600">
                Mantenimiento, actualizaciones y optimización continua
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAWide
        title="¿Tiene un caso de uso específico?"
        description="Nuestro equipo técnico puede evaluar sus necesidades y proponer la configuración óptima para su aplicación."
        ctaText="Consultar aplicación"
      />
    </>
  );
}
