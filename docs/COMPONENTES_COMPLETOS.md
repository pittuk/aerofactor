# Componentes React - AeroFactor

Documentación completa de todos los componentes con props TypeScript, ejemplos de uso y clases Tailwind.

---

## Índice de Componentes

### Layout
1. [Navbar](#1-navbar) - Barra de navegación sticky
2. [Footer](#2-footer) - Footer con múltiples columnas

### Sections
3. [Hero](#3-hero) - Hero con imagen/video
4. [KPIs](#4-kpis) - Tarjetas de métricas clave
5. [ProductHighlights](#5-producthighlights) - Grid de productos destacados
6. [ServicesList](#6-serviceslist) - Lista de servicios
7. [AppGrid](#7-appgrid) - Grid de aplicaciones
8. [CTAWide](#8-ctawide) - Call-to-action ancho completo

### Forms
9. [ContactForm](#9-contactform) - Formulario de contacto

### Cards
10. [ProductCard](#10-productcard) - Tarjeta de producto
11. [ServiceCard](#11-servicecard) - Tarjeta de servicio
12. [ApplicationCard](#12-applicationcard) - Tarjeta de aplicación

### UI
13. [Button](#13-button) - Botón reutilizable
14. [Breadcrumbs](#14-breadcrumbs) - Navegación breadcrumb
15. [SEOHead](#15-seohead) - Metadata SEO

---

## 1. Navbar

**Ubicación:** `components/layout/Navbar.tsx`

### Props

```typescript
interface NavItem {
  label: string;
  href: string;
  submenu?: Array<{ label: string; href: string }>;
}

interface NavbarProps {
  logo?: string;
  logoText?: string;
  menuItems: NavItem[];
  ctaButton?: {
    text: string;
    href: string;
  };
  sticky?: boolean;
}
```

### Ejemplo de Uso

```tsx
<Navbar
  logoText="AeroFactor"
  menuItems={[
    { label: "Inicio", href: "/" },
    {
      label: "Productos",
      href: "/productos",
      submenu: [
        { label: "Vigilancia Fronteriza", href: "/productos/fronteriza" },
        { label: "Seguridad Urbana", href: "/productos/urbana" }
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

### Clases Tailwind Principales

```css
/* Container */
.bg-white .shadow-md .sticky .top-0 .z-50

/* Logo */
.text-2xl .font-bold .text-primary

/* Menu Items */
.text-gray-700 .hover:text-primary .px-3 .py-2 .text-sm .font-medium

/* CTA Button */
.bg-primary .text-white .px-4 .py-2 .rounded-md .hover:bg-primary-dark
```

---

## 2. Footer

**Ubicación:** `components/layout/Footer.tsx`

### Props

```typescript
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: string;
  logoText?: string;
  tagline?: string;
  menuColumns: FooterColumn[];
  contact?: {
    email: string;
    phone: string;
    address: string;
  };
  social?: Array<{
    platform: string;
    url: string;
    icon: React.ReactNode;
  }>;
  copyright?: string;
}
```

### Ejemplo de Uso

```tsx
<Footer
  logoText="AeroFactor"
  tagline="Vigilancia aérea persistente para un mundo más seguro"
  menuColumns={[
    {
      title: "Productos",
      links: [
        { label: "Vigilancia Fronteriza", href: "/productos/fronteriza" },
        { label: "Seguridad Urbana", href: "/productos/urbana" }
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
    phone: "+56 X XXXX XXXX",
    address: "Santiago, Chile"
  }}
  copyright="© 2025 AeroFactor. Todos los derechos reservados."
/>
```

### Clases Tailwind Principales

```css
/* Container */
.bg-gray-900 .text-white .py-12

/* Grid */
.grid .grid-cols-1 .md:grid-cols-4 .gap-8

/* Links */
.text-gray-400 .hover:text-white .text-sm

/* Copyright */
.border-t .border-gray-800 .mt-8 .pt-8 .text-center .text-sm
```

---

## 3. Hero

**Ubicación:** `components/sections/Hero.tsx`

### Props

```typescript
interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  videoPoster?: string;
  ctaButtons: CTAButton[];
  overlay?: boolean;
  overlayOpacity?: number;
  height?: 'small' | 'medium' | 'large' | 'full';
}
```

### Ejemplo de Uso

```tsx
<Hero
  title="Vigilancia aérea persistente para un mundo más seguro"
  subtitle="Monitoreo continuo 24/7 con visión de 360°"
  backgroundImage="/images/hero/aerostat-sky.jpg"
  ctaButtons={[
    { text: "Solicitar demostración", href: "/contacto", variant: "primary" },
    { text: "Ver productos", href: "/productos", variant: "secondary" }
  ]}
  overlay={true}
  overlayOpacity={0.6}
  height="large"
/>
```

### Clases Tailwind Principales

```css
/* Container */
.relative .min-h-[80vh] .flex .items-center .justify-center .overflow-hidden

/* Overlay */
.absolute .inset-0 .bg-black .opacity-60

/* Title */
.text-4xl .md:text-5xl .lg:text-6xl .font-bold .mb-6 .leading-tight .text-white

/* Subtitle */
.text-xl .md:text-2xl .lg:text-3xl .mb-8 .text-gray-100

/* CTA Primary */
.bg-white .text-primary .px-8 .py-3 .rounded-lg .font-semibold .hover:bg-gray-100

/* CTA Secondary */
.bg-transparent .border-2 .border-white .text-white .hover:bg-white .hover:text-primary
```

---

## 4. KPIs

**Ubicación:** `components/sections/KPIs.tsx`

### Props

```typescript
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
```

### Ejemplo de Uso

```tsx
<KPIs
  kpis={[
    { value: "360°", label: "Cobertura visual completa sin puntos ciegos", color: "primary" },
    { value: "24/7", label: "Operación continua e ininterrumpida", color: "primary" },
    { value: "50km", label: "Radio de vigilancia desde un solo punto", color: "primary" }
  ]}
  columns={3}
  variant="card"
  background="gray"
/>
```

### Clases Tailwind Principales

```css
/* Container */
.py-16 .bg-gray-50

/* Grid */
.grid .grid-cols-1 .md:grid-cols-3 .gap-8

/* Card */
.bg-white .p-8 .rounded-lg .shadow-md .hover:shadow-lg .text-center

/* Value */
.text-5xl .md:text-6xl .font-bold .mb-3 .text-primary

/* Label */
.text-gray-600 .text-base .md:text-lg .leading-relaxed
```

---

## 5. ProductHighlights

**Ubicación:** `components/sections/ProductHighlights.tsx`

### Props

```typescript
interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface ProductHighlightsProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
  ctaText?: string;
  showAllLink?: boolean;
}
```

### Ejemplo de Uso

```tsx
<ProductHighlights
  title="Nuestros Productos"
  subtitle="Sistemas de aerostatos configurables para cada misión"
  products={[
    {
      slug: "sistema-vigilancia-fronteriza",
      title: "Sistema de Vigilancia Fronteriza",
      description: "Control territorial de largo alcance",
      image: "/images/products/frontera.jpg",
      featured: true
    }
  ]}
  columns={3}
  showAllLink={true}
/>
```

### Clases Tailwind Principales

```css
/* Container */
.py-16 .bg-white

/* Grid */
.grid .grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3 .gap-8

/* Card */
.group .block .bg-white .rounded-lg .shadow-md .overflow-hidden .hover:shadow-xl

/* Image */
.relative .h-48 .bg-gray-200

/* Title */
.text-xl .font-semibold .text-gray-900 .mb-2 .group-hover:text-primary
```

---

## 6. ServicesList

**Ubicación:** `components/sections/ServicesList.tsx`

### Props

```typescript
interface Service {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServicesListProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  layout?: 'grid' | 'list';
  columns?: 2 | 3 | 4;
}
```

### Ejemplo de Uso

```tsx
<ServicesList
  title="Nuestros Servicios"
  subtitle="Soluciones integrales que acompañan toda la vida útil del sistema"
  services={[
    {
      slug: "integracion-sistemas",
      title: "Integración de Sistemas",
      description: "Adaptación completa a su infraestructura operativa"
    },
    {
      slug: "soporte-mantenimiento",
      title: "Soporte y Mantenimiento",
      description: "Acompañamiento técnico 24/7"
    }
  ]}
  layout="grid"
  columns={3}
/>
```

### Clases Tailwind Principales

```css
/* Container */
.py-16 .bg-gray-50

/* Grid */
.grid .grid-cols-1 .md:grid-cols-3 .gap-8

/* Card */
.bg-white .p-6 .rounded-lg .shadow-md .hover:shadow-lg .transition

/* Icon */
.mb-4 .flex .justify-center

/* Title */
.text-xl .font-semibold .mb-2 .text-primary
```

---

## 7. AppGrid

**Ubicación:** `components/sections/AppGrid.tsx`

### Props

```typescript
interface Application {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  sector: 'gobierno' | 'policia' | 'privado' | 'todos';
}

interface AppGridProps {
  title?: string;
  subtitle?: string;
  applications: Application[];
  columns?: 2 | 3 | 4 | 5;
  filterBySector?: boolean;
}
```

### Ejemplo de Uso

```tsx
<AppGrid
  title="Aplicaciones e Industrias"
  subtitle="Protegemos lo que más importa en sectores críticos"
  applications={[
    {
      slug: "defensa-isr",
      title: "Defensa e ISR",
      description: "Inteligencia, vigilancia y reconocimiento continuo",
      sector: "gobierno"
    },
    {
      slug: "control-fronteras",
      title: "Control de Fronteras",
      description: "Detección temprana de cruces ilegales",
      sector: "gobierno"
    }
  ]}
  columns={3}
/>
```

### Clases Tailwind Principales

```css
/* Container */
.py-16 .bg-white

/* Grid */
.grid .grid-cols-1 .md:grid-cols-2 .lg:grid-cols-3 .gap-6

/* Card */
.bg-white .p-6 .rounded-lg .shadow-md .border-l-4 .border-primary .hover:shadow-lg

/* Title */
.text-xl .font-semibold .mb-2 .text-gray-900
```

---

## 8. CTAWide

**Ubicación:** `components/sections/CTAWide.tsx`

### Props

```typescript
interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

interface CTAWideProps {
  title: string;
  subtitle?: string;
  description: string;
  buttons: CTAButton[];
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: 'white' | 'dark';
}
```

### Ejemplo de Uso

```tsx
<CTAWide
  title="¿Listo para fortalecer su seguridad territorial?"
  description="Nuestro equipo está disponible para evaluar sus necesidades y diseñar la solución adecuada."
  buttons={[
    { text: "Solicitar consultoría", href: "/contacto", variant: "primary" },
    { text: "Ver casos de uso", href: "/aplicaciones", variant: "outline" }
  ]}
  backgroundColor="primary"
  textColor="white"
/>
```

### Clases Tailwind Principales

```css
/* Container */
.py-16 .bg-primary .text-white

/* Content */
.max-w-4xl .mx-auto .px-4 .text-center

/* Title */
.text-4xl .font-bold .mb-6

/* Description */
.text-xl .mb-8

/* Button Primary */
.bg-white .text-primary .px-8 .py-3 .rounded-lg .font-semibold .hover:bg-gray-100

/* Button Outline */
.border-2 .border-white .text-white .px-8 .py-3 .rounded-lg .hover:bg-white .hover:text-primary
```

---

## 9. ContactForm

**Ubicación:** `components/forms/ContactForm.tsx`

### Props

```typescript
interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
}

interface ContactFormProps {
  formId?: string;
  fields?: FormField[];
  successMessage?: string;
  errorMessage?: string;
  submitButtonText?: string;
  onSubmit?: (data: FormData) => Promise<void>;
}
```

### Ejemplo de Uso

```tsx
<ContactForm
  formId="contact-main"
  submitButtonText="Enviar consulta"
  successMessage="¡Gracias! Nos contactaremos pronto."
  fields={[
    { name: "nombre", label: "Nombre completo", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
  ]}
/>
```

### Clases Tailwind Principales

```css
/* Form Container */
.space-y-6

/* Label */
.block .text-sm .font-medium .text-gray-700 .mb-2

/* Input */
.w-full .px-4 .py-2 .border .border-gray-300 .rounded-md .focus:ring-primary .focus:border-primary

/* Textarea */
.w-full .px-4 .py-2 .border .rounded-md .focus:ring-primary

/* Button */
.w-full .bg-primary .text-white .px-6 .py-3 .rounded-md .font-semibold .hover:bg-primary-dark

/* Success Message */
.bg-green-50 .border .border-green-200 .rounded-lg .p-8

/* Error Message */
.bg-red-50 .border .border-red-200 .rounded-lg .p-4
```

---

## 10-12. Cards (ProductCard, ServiceCard, ApplicationCard)

### Props Compartidas

```typescript
interface BaseCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
  variant?: 'compact' | 'detailed';
}
```

### Clases Tailwind Compartidas

```css
/* Card */
.block .bg-white .rounded-lg .shadow-md .overflow-hidden .hover:shadow-xl .transition

/* Image */
.relative .h-48 .bg-gray-200

/* Content */
.p-6

/* Title */
.text-xl .font-semibold .text-gray-900 .mb-2

/* Description */
.text-gray-600 .mb-4
```

---

## 13. Button

**Ubicación:** `components/ui/Button.tsx`

### Props

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}
```

### Ejemplo de Uso

```tsx
<Button variant="primary" size="lg">
  Solicitar demostración
</Button>

<Button variant="outline" href="/productos">
  Ver productos
</Button>
```

### Clases Tailwind

```css
/* Primary */
.bg-primary .text-white .hover:bg-primary-dark

/* Secondary */
.bg-secondary .text-white .hover:bg-secondary-dark

/* Outline */
.border-2 .border-primary .text-primary .hover:bg-primary .hover:text-white

/* Sizes */
sm: .px-4 .py-2 .text-sm
md: .px-6 .py-2 .text-base
lg: .px-8 .py-3 .text-lg
```

---

## 14. Breadcrumbs

**Ubicación:** `components/ui/Breadcrumbs.tsx`

### Props

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: string;
}
```

### Ejemplo de Uso

```tsx
<Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Integración de Sistemas" }
  ]}
  separator="/"
/>
```

### Clases Tailwind

```css
.text-sm .text-gray-500 .mb-8

/* Link */
.hover:text-primary

/* Current */
.text-gray-900
```

---

## 15. SEOHead

**Ubicación:** `components/ui/SEOHead.tsx`

### Props

```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  keywords?: string[];
  structuredData?: object;
}
```

### Ejemplo de Uso

```tsx
<SEOHead
  title="Sistema de Vigilancia Fronteriza | AeroFactor"
  description="Sistema de aerostato para vigilancia aérea continua..."
  ogImage="/og/products/fronteriza.jpg"
  canonical="https://aerofactor.cl/productos/sistema-vigilancia-fronteriza"
  keywords={["vigilancia aérea", "aerostato", "control fronterizo"]}
/>
```

---

## Resumen de Clases Tailwind por Categoría

### Colores
```css
.text-primary        /* #0A4C8F */
.bg-primary          /* #0A4C8F */
.text-primary-dark   /* #083A6B */
.bg-primary-dark     /* #083A6B */
.text-secondary      /* #4A5568 */
.bg-secondary        /* #4A5568 */
```

### Tipografía
```css
.text-4xl .text-5xl .text-6xl   /* Títulos */
.font-bold .font-semibold       /* Pesos */
.leading-tight .leading-relaxed /* Line height */
```

### Espaciado
```css
.py-16 .px-4           /* Padding */
.mb-6 .mt-8 .gap-8     /* Margin y Gap */
.max-w-7xl .max-w-4xl  /* Max width */
```

### Efectos
```css
.shadow-md .shadow-lg .shadow-xl  /* Sombras */
.hover:shadow-lg                  /* Hover shadows */
.rounded-lg .rounded-md           /* Bordes redondeados */
.transition                       /* Transiciones */
```

---

**Última actualización:** Enero 2025
