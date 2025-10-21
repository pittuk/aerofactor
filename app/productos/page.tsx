import Hero from '@/components/ui/Hero';
import ProductCard from '@/components/ui/ProductCard';
import CTAWide from '@/components/ui/CTAWide';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plataformas Aerostáticas de Vigilancia | AEROFACTOR',
  description: 'Sistemas aerostáticos configurables para vigilancia persistente: desde plataformas tácticas desplegables hasta soluciones estratégicas de cobertura regional. Sensores EO/IR, radar e IA integrada.',
  keywords: 'plataformas aerostáticas, sistemas ISR, vigilancia persistente, sensores EO/IR, radar aerotransportado',
  openGraph: {
    title: 'Plataformas Aerostáticas de Vigilancia | AEROFACTOR',
    description: 'Sistemas aerostáticos configurables para vigilancia persistente con sensores EO/IR, radar e IA integrada.',
    images: ['/og/productos.jpg'],
  },
};

const products = [
  {
    title: 'Sistema Táctico',
    excerpt: 'Plataforma compacta transportable en vehículo estándar, desplegable por un equipo de 3 operadores en menos de 60 minutos. Ideal para apoyo táctico, eventos especiales y respuesta a emergencias.',
    specs: {
      autonomy: '12-24 horas de operación continua',
      altitude: '150-500 pies AGL',
      sensors: ['Cámara EO/IR giroestabilizada', 'Enlace de video HD', 'Iluminador IR'],
    },
  },
  {
    title: 'Sistema Regional',
    excerpt: 'Plataforma de autonomía intermedia con capacidad para múltiples sensores simultáneos. Configuración estándar para control de fronteras, protección de infraestructura y vigilancia urbana persistente.',
    specs: {
      autonomy: '48-72 horas de operación continua',
      altitude: '500-800 pies AGL',
      sensors: ['Suite EO/IR de largo alcance', 'Radar de vigilancia terrestre', 'AIS/ADS-B'],
    },
  },
  {
    title: 'Sistema Estratégico',
    excerpt: 'Plataforma de mayor capacidad para operaciones estratégicas prolongadas, con payload de hasta 250 kg. Integración nativa con centros C4ISR y distribución multi-usuario.',
    specs: {
      autonomy: 'Ciclos de 5-7 días con recarga automática',
      altitude: '800-1.000 pies AGL',
      sensors: ['Radar multi-modo', 'Suite EO/IR muy largo alcance', 'SIGINT/COMINT', 'Servidor IA embarcado'],
    },
  },
];

export default function ProductosPage() {
  return (
    <>
      <Hero
        title="Productos y Tecnologías"
        subtitle="Plataformas aerostáticas configurables para cada misión"
        description="Sistemas de vigilancia aérea persistente diseñados modularmente para adaptarse a cada escenario operacional, desde despliegues tácticos hasta vigilancia estratégica regional."
        ctaText="Solicitar información técnica"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none mb-16">
            <p className="text-lg text-neutral-700 leading-relaxed">
              AEROFACTOR diseña, integra y despliega sistemas de vigilancia aérea persistente basados en plataformas aerostáticas de última generación. 
              Cada solución se configura específicamente según los requisitos operacionales del cliente: alcance de cobertura, tipo de amenazas, 
              entorno de despliegue y nivel de integración con sistemas existentes.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary-900 mb-8">Plataformas Disponibles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                excerpt={product.excerpt}
                specs={product.specs}
              />
            ))}
          </div>

          <div className="bg-neutral-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Cómo Seleccionamos la Plataforma Óptima
            </h2>
            <p className="text-neutral-700 mb-6">
              Nuestro equipo técnico evalúa sus requerimientos operacionales mediante un proceso estructurado:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">Análisis de misión</h3>
                  <p className="text-sm text-neutral-600">Objetivos, amenazas, área de cobertura y duración de operación</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">Evaluación de entorno</h3>
                  <p className="text-sm text-neutral-600">Condiciones climáticas, restricciones aéreas e infraestructura</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">Integración</h3>
                  <p className="text-sm text-neutral-600">Compatibilidad con sistemas C2, redes y formatos de datos existentes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">Capacitación y sostenimiento</h3>
                  <p className="text-sm text-neutral-600">Perfil de operadores, tiempos de entrenamiento y logística de repuestos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAWide
        title="¿Necesita una configuración personalizada?"
        description="Contacte a nuestro equipo técnico para una evaluación detallada de sus requerimientos operacionales."
        ctaText="Solicitar consulta técnica"
      />
    </>
  );
}
