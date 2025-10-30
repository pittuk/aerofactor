export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AEROFACTOR',
    description: 'Soluciones avanzadas de vigilancia aérea persistente con aerostatos en Chile y Latinoamérica',
    url: 'https://aerofactor.cl',
    logo: 'https://aerofactor.cl/logos/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+56-9-9821-9839',
      contactType: 'sales',
      areaServed: ['CL', 'LATAM'],
      availableLanguage: ['es', 'en', 'pt'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
      addressLocality: 'Santiago',
    },
    sameAs: [
      // Agregar aquí redes sociales cuando las tengan
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Vigilancia Aérea Persistente',
    provider: {
      '@type': 'Organization',
      name: 'AEROFACTOR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Chile',
    },
    description: 'Sistemas aerostáticos equipados con sensores de última generación e inteligencia artificial aplicada para organismos gubernamentales, fuerzas de seguridad y empresas de infraestructura crítica.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
