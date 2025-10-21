/**
 * KPIs Component
 *
 * Tarjetas de métricas clave (Key Performance Indicators).
 * Ideal para mostrar números impactantes: 360°, 24/7, 50km, etc.
 *
 * @example
 * <KPIs
 *   kpis={[
 *     { value: "360°", label: "Cobertura visual completa sin puntos ciegos" },
 *     { value: "24/7", label: "Operación continua e ininterrumpida" },
 *     { value: "50km", label: "Radio de vigilancia desde un solo punto" }
 *   ]}
 *   columns={3}
 * />
 */

interface KPI {
  value: string;
  label: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent';
}

interface KPIsProps {
  kpis: KPI[];
  columns?: 1 | 2 | 3 | 4;
  variant?: 'card' | 'minimal';
  background?: 'white' | 'gray' | 'transparent';
}

export default function KPIs({
  kpis,
  columns = 3,
  variant = 'card',
  background = 'gray',
}: KPIsProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent',
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-blue-600',
  };

  return (
    <section className={`py-16 ${bgClasses[background]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`
                text-center
                ${
                  variant === 'card'
                    ? 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition'
                    : 'p-4'
                }
              `}
            >
              {kpi.icon && (
                <div className="mb-4 flex justify-center">{kpi.icon}</div>
              )}

              <div
                className={`
                  text-5xl md:text-6xl font-bold mb-3
                  ${colorClasses[kpi.color || 'primary']}
                `}
              >
                {kpi.value}
              </div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
