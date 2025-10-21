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
    <section className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-3">
                {kpi.value}
              </div>
              <div className="text-xl font-semibold text-primary-900 mb-2">
                {kpi.label}
              </div>
              {kpi.description && (
                <p className="text-neutral-600 text-sm leading-relaxed">
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
