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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-center border border-neutral-200"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-3">
                {kpi.value}
              </div>
              <div className="text-xl font-semibold text-neutral-900 mb-2">
                {kpi.label}
              </div>
              {kpi.description && (
                <p className="text-neutral-700 text-sm leading-relaxed">
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
