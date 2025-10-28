interface KPI {
  value: string;
  label: string;
  description?: string;
}

interface KPIsProps {
  kpis: KPI[];
}

export default function KPIs({ kpis }: KPIsProps) {
  return (
    <section className="relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-16 md:-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all text-center border border-neutral-200"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-1 sm:mb-2 md:mb-3">
                {kpi.value}
              </div>
              <div className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 mb-1 sm:mb-2">
                {kpi.label}
              </div>
              {kpi.description && (
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed break-words">
                  {kpi.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
