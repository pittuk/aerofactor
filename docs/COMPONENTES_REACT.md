# Componentes React Sugeridos - AeroFactor

Este documento detalla los componentes React recomendados para el sitio web de AeroFactor, con sus interfaces TypeScript y ejemplos de uso.

---

## 1. Navbar.tsx

Barra de navegación principal con soporte para submenús.

```typescript
interface NavbarProps {
  logo: string;
  menuItems: Array<{
    label: string;
    href: string;
    submenu?: Array<{ label: string; href: string }>;
  }>;
  ctaButton?: {
    text: string;
    href: string;
  };
  sticky?: boolean;
}

// Ejemplo de uso:
<Navbar
  logo="/images/aerofactor-logo.svg"
  menuItems={[
    { label: "Inicio", href: "/" },
    {
      label: "Productos",
      href: "/productos",
      submenu: [
        { label: "Vigilancia Fronteriza", href: "/productos/sistema-vigilancia-fronteriza" },
        { label: "Seguridad Urbana", href: "/productos/sistema-seguridad-urbana" }
      ]
    },
    { label: "Servicios", href: "/servicios" },
    { label: "Aplicaciones", href: "/aplicaciones" },
    { label: "Nosotros", href: "/nosotros" }
  ]}
  ctaButton={{ text: "Contacto", href: "/contacto" }}
  sticky={true}
/>
```

---

## 2. HeroVideo.tsx

Hero section con video de fondo y CTAs.

```typescript
interface HeroVideoProps {
  videoSrc: string;
  videoPoster?: string;
  title: string;
  subtitle: string;
  description?: string;
  ctaButtons: Array<{
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  }>;
  overlay?: boolean;
  overlayOpacity?: number;
}

// Ejemplo de uso:
<HeroVideo
  videoSrc="/videos/aerostat-operation.mp4"
  videoPoster="/images/hero-poster.jpg"
  title="Vigilancia aérea persistente para un mundo más seguro"
  subtitle="Monitoreo continuo 24/7 con visión de 360°"
  ctaButtons={[
    { text: "Solicitar demostración", href: "/contacto", variant: "primary" },
    { text: "Ver productos", href: "/productos", variant: "secondary" }
  ]}
  overlay={true}
  overlayOpacity={0.5}
/>
```

---

## 3. ProductCard.tsx

Tarjeta para mostrar productos en grid o lista.

```typescript
interface ProductCardProps {
  product: {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category?: string;
    featured?: boolean;
  };
  variant?: 'grid' | 'list';
  ctaText?: string;
}

// Ejemplo de uso:
<ProductCard
  product={{
    slug: "sistema-vigilancia-fronteriza",
    title: "Sistema de Vigilancia Fronteriza",
    excerpt: "Sistema de aerostato para vigilancia aérea continua en control fronterizo...",
    image: "/images/products/sistema-vigilancia-fronteriza.jpg",
    category: "Control Fronterizo",
    featured: true
  }}
  variant="grid"
  ctaText="Ver detalles"
/>
```

---

## 4. ServiceCard.tsx

Tarjeta para servicios.

```typescript
interface ServiceCardProps {
  service: {
    slug: string;
    title: string;
    excerpt: string;
    icon: string;
  };
  variant?: 'compact' | 'detailed';
}

// Ejemplo de uso:
<ServiceCard
  service={{
    slug: "integracion-sistemas",
    title: "Integración de Sistemas",
    excerpt: "Adaptamos aerostatos y sensores a cada necesidad operativa...",
    icon: "integration"
  }}
  variant="compact"
/>
```

---

## 5. ApplicationCard.tsx

Tarjeta para aplicaciones e industrias.

```typescript
interface ApplicationCardProps {
  application: {
    slug: string;
    title: string;
    excerpt: string;
    icon: string;
    sector: string;
  };
  imagePosition?: 'left' | 'right' | 'top';
}

// Ejemplo de uso:
<ApplicationCard
  application={{
    slug: "defensa-isr",
    title: "Defensa e ISR",
    excerpt: "Inteligencia, vigilancia y reconocimiento continuo...",
    icon: "shield",
    sector: "gobierno"
  }}
  imagePosition="left"
/>
```

---

## 6. CTAWide.tsx

Call-to-action de ancho completo.

```typescript
interface CTAWideProps {
  title: string;
  subtitle?: string;
  description: string;
  buttons: Array<{
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'outline';
  }>;
  backgroundImage?: string;
  backgroundColor?: string;
}

// Ejemplo de uso:
<CTAWide
  title="¿Listo para fortalecer su seguridad territorial?"
  description="Nuestro equipo está disponible para evaluar sus necesidades y diseñar la solución adecuada."
  buttons={[
    { text: "Solicitar consultoría", href: "/contacto", variant: "primary" },
    { text: "Ver casos de uso", href: "/aplicaciones", variant: "outline" }
  ]}
  backgroundImage="/images/cta-background.jpg"
/>
```

---

## 7. ContactForm.tsx

Formulario de contacto completo.

```typescript
interface ContactFormProps {
  formId?: string;
  successMessage?: string;
  errorMessage?: string;
  submitButtonText?: string;
  fields?: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox';
    placeholder?: string;
    required?: boolean;
    options?: Array<{ value: string; label: string }>;
  }>;
  onSubmit?: (data: FormData) => Promise<void>;
}

// Ejemplo de uso:
<ContactForm
  formId="contact-main"
  submitButtonText="Enviar consulta"
  successMessage="¡Gracias! Nos contactaremos pronto."
  fields={[
    { name: "nombre", label: "Nombre completo", type: "text", required: true, placeholder: "Juan Pérez" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "juan@empresa.cl" },
    { name: "telefono", label: "Teléfono", type: "tel", required: true, placeholder: "+56 9 XXXX XXXX" },
    {
      name: "tipo_organizacion",
      label: "Tipo de organización",
      type: "select",
      required: true,
      options: [
        { value: "gobierno", label: "Gobierno / Defensa" },
        { value: "policia", label: "Policía / Seguridad Pública" },
        { value: "municipalidad", label: "Municipalidad" },
        { value: "privado", label: "Empresa Privada" }
      ]
    },
    { name: "mensaje", label: "Mensaje", type: "textarea", required: true, placeholder: "Describa su necesidad..." }
  ]}
/>
```

---

## 8. SpecsTable.tsx

Tabla de especificaciones técnicas.

```typescript
interface SpecsTableProps {
  specifications: Record<string, string>;
  title?: string;
  variant?: 'compact' | 'detailed';
}

// Ejemplo de uso:
<SpecsTable
  title="Especificaciones técnicas principales"
  specifications={{
    "Altitud de operación": "500-1500 metros",
    "Tiempo de permanencia": "Hasta 30 días continuos",
    "Radio de cobertura": "50 km de diámetro",
    "Capacidad de carga útil": "Hasta 200 kg de sensores"
  }}
  variant="detailed"
/>
```

---

## 9. BenefitsList.tsx

Lista de beneficios con iconos.

```typescript
interface BenefitsListProps {
  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  columns?: 1 | 2 | 3;
  variant?: 'icon' | 'bullet' | 'numbered';
}

// Ejemplo de uso:
<BenefitsList
  benefits={[
    {
      title: "Vigilancia continua",
      description: "Cobertura permanente sobre extensas áreas territoriales sin interrupciones",
      icon: "eye"
    },
    {
      title: "Detección temprana",
      description: "Identificación anticipada de riesgos antes de que se conviertan en incidentes",
      icon: "alert"
    }
  ]}
  columns={3}
  variant="icon"
/>
```

---

## 10. Breadcrumbs.tsx

Navegación breadcrumb.

```typescript
interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  separator?: string;
}

// Ejemplo de uso:
<Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Sistema de Vigilancia Fronteriza" }
  ]}
  separator="/"
/>
```

---

## 11. SEOHead.tsx

Componente para metadatos SEO.

```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  keywords?: string[];
  structuredData?: object;
}

// Ejemplo de uso:
<SEOHead
  title="Sistema de Vigilancia Fronteriza | AeroFactor"
  description="Sistema de aerostato para vigilancia aérea continua. Monitoreo 360° para control fronterizo."
  ogImage="/public/og/products/sistema-vigilancia-fronteriza.jpg"
  canonical="https://aerofactor.cl/productos/sistema-vigilancia-fronteriza"
  keywords={["vigilancia aérea", "aerostato", "control fronterizo", "ISR"]}
/>
```

---

## 12. Footer.tsx

Footer del sitio con múltiples columnas.

```typescript
interface FooterProps {
  logo: string;
  company: {
    name: string;
    tagline: string;
    address: string;
  };
  menuColumns: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  contact: {
    email: string;
    phone: string;
  };
  social?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  copyright?: string;
}

// Ejemplo de uso:
<Footer
  logo="/images/aerofactor-logo-white.svg"
  company={{
    name: "AeroFactor",
    tagline: "Vigilancia aérea persistente para un mundo más seguro",
    address: "Santiago, Chile"
  }}
  menuColumns={[
    {
      title: "Productos",
      links: [
        { label: "Vigilancia Fronteriza", href: "/productos/sistema-vigilancia-fronteriza" },
        { label: "Seguridad Urbana", href: "/productos/sistema-seguridad-urbana" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { label: "Integración", href: "/servicios/integracion-sistemas" },
        { label: "Soporte", href: "/servicios/soporte-mantenimiento" }
      ]
    }
  ]}
  contact={{
    email: "contacto@aerofactor.cl",
    phone: "+56 X XXXX XXXX"
  }}
  copyright="© 2025 AeroFactor. Todos los derechos reservados."
/>
```

---

## 13. KPICard.tsx

Tarjeta para mostrar KPIs (métricas clave).

```typescript
interface KPICardProps {
  value: string;
  label: string;
  icon?: string;
  variant?: 'default' | 'highlighted';
}

// Ejemplo de uso:
<KPICard
  value="360°"
  label="Cobertura visual completa sin puntos ciegos"
  variant="highlighted"
/>
```

---

## Notas de Implementación

### Estilos
- Usar Tailwind CSS para todos los componentes
- Paleta de colores corporativos: azul (#0A4C8F), gris (#4A5568), blanco (#FFFFFF)
- Tipografía: Inter o Roboto para sans-serif

### Accesibilidad
- Todos los componentes deben ser navegables por teclado
- Incluir ARIA labels apropiados
- Contraste WCAG AA mínimo

### Responsividad
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Performance
- Lazy loading de imágenes
- Code splitting por ruta
- Optimización de componentes con React.memo cuando corresponda
