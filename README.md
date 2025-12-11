# AEROFACTOR - Sitio Web Institucional

Sitio web corporativo para AEROFACTOR, proveedor líder de soluciones de vigilancia aérea persistente con aerostatos en Chile y Latinoamérica.

## Tecnologías

- **Next.js 14** con App Router
- **TypeScript** para type-safety
- **Tailwind CSS** para estilos
- **Nodemailer** para formulario de contacto
- **Gray Matter** para procesamiento de contenido Markdown

## Estructura del Proyecto

```
aerofactor/
├── app/                      # Páginas de Next.js (App Router)
│   ├── layout.tsx           # Layout principal con Navbar y Footer
│   ├── page.tsx             # Página de inicio
│   ├── productos/           # Página de productos
│   ├── servicios/           # Página de servicios
│   ├── aplicaciones/        # Página de aplicaciones
│   ├── empresa/             # Página de empresa
│   ├── contacto/            # Página de contacto con formulario
│   └── api/
│       └── contact/         # API handler para formulario de contacto
│           └── route.ts
├── components/ui/           # Componentes UI reutilizables
│   ├── Navbar.tsx          # Navegación principal
│   ├── Hero.tsx            # Hero section
│   ├── KPIs.tsx            # KPIs display
│   ├── ProductCard.tsx     # Tarjeta de producto
│   ├── ServicesList.tsx    # Lista de servicios
│   ├── AppGrid.tsx         # Grid de aplicaciones
│   ├── CTAWide.tsx         # Call-to-action banner
│   ├── ContactForm.tsx     # Formulario de contacto
│   └── Footer.tsx          # Footer
├── content/                 # Contenido en Markdown
│   ├── home.md
│   ├── products.md
│   ├── services.md
│   ├── applications.md
│   ├── company.md
│   └── contact.md
├── lib/                     # Utilidades
│   └── markdown.ts         # Helper para leer archivos Markdown
├── public/                  # Assets estáticos
│   ├── images/             # Imágenes
│   ├── logos/              # Logos de AEROFACTOR
│   ├── og/                 # Imágenes Open Graph
│   └── favicon.png         # Favicon
└── .env.example            # Variables de entorno de ejemplo
```

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar archivo de entorno
cp .env.example .env.local

# Configurar variables de entorno SMTP en .env.local
```

### Variables de Entorno

Edite `.env.local` con sus credenciales SMTP:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

CONTACT_TO=contacto@aerofactor.cl
CONTACT_FROM=noreply@aerofactor.cl
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

### Build de Producción

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Paleta de Colores

La paleta está basada en el logo de AEROFACTOR:

- **primary-900**: `#021442` - Azul navy oscuro (principal)
- **primary-600**: `#0064CC` - Azul corporativo
- **accent-500**: `#FC420A` - Naranja (CTAs y acentos)
- **neutral-800**: `#1E1E1E` - Gris oscuro para texto
- **neutral-600**: `#5A6772` - Gris medio
- **neutral-100**: `#F5F6F7` - Gris claro para fondos

## Componentes Principales

### Navbar
Navegación sticky con links a todas las páginas y CTA destacado.

```tsx
import Navbar from '@/components/ui/Navbar';
// Usado en app/layout.tsx
```

### Hero
Banner principal con imagen de fondo, título, subtítulo y CTA.

```tsx
<Hero
  title="Título principal"
  subtitle="Subtítulo"
  description="Descripción opcional"
  ctaText="Texto del botón"
  ctaHref="/ruta"
/>
```

### KPIs
Muestra métricas clave en cards destacados.

```tsx
<KPIs kpis={[
  { value: '360°', label: 'Cobertura', description: 'Descripción' },
  // ...
]} />
```

### ProductCard
Tarjeta de producto con especificaciones técnicas.

```tsx
<ProductCard
  title="Sistema Táctico"
  excerpt="Descripción breve"
  specs={{
    autonomy: '12-24 horas',
    altitude: '150-500 pies',
    sensors: ['Sensor 1', 'Sensor 2'],
  }}
/>
```

### ContactForm
Formulario con validación y honeypot anti-spam.

```tsx
import ContactForm from '@/components/ui/ContactForm';
// Envía a /api/contact
```

## Contenido

Todo el contenido del sitio está en archivos Markdown en la carpeta `content/` con frontmatter para metadatos SEO:

```markdown
---
title: "Título de la página"
slug: "/ruta"
meta_title: "Título SEO"
meta_description: "Descripción SEO"
og_image: "/og/imagen.jpg"
keywords: "keywords, separadas, por, comas"
---

# Contenido en Markdown
```

## SEO

Cada página incluye:
- Meta title (≤60 caracteres)
- Meta description (120-155 caracteres)
- Open Graph images
- Keywords relevantes
- Estructura semántica HTML correcta

## Accesibilidad

- Contraste de colores ≥ 4.5:1
- Focus visible en todos los elementos interactivos
- Navegación por teclado
- Etiquetas semánticas HTML5
- Alt text en todas las imágenes

## Formulario de Contacto

El formulario incluye:
- Validación client-side y server-side
- Honeypot anti-spam
- Mensajes de éxito/error claros
- Envío por email vía Nodemailer
- Template HTML profesional para emails

## Despliegue

### Vercel (Recomendado)

```bash
# Conectar repositorio a Vercel
# Configurar variables de entorno en dashboard
# Deploy automático en cada push
```

### Otros proveedores

El sitio es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- etc.

## Assets Necesarios

Para completar el sitio, proporcione:

1. **Imágenes Open Graph** (1200x630px):
   - `/public/og/home.jpg`
   - `/public/og/productos.jpg`
   - `/public/og/servicios.jpg`
   - `/public/og/aplicaciones.jpg`
   - `/public/og/empresa.jpg`
   - `/public/og/contacto.jpg`

2. **Favicon** optimizado:
   - Ya incluido: `/public/favicon.png` (isotipo)
   - Considerar generar favicon.ico de 16x16, 32x32, 48x48

## Licencia

Código propietario de AEROFACTOR. Todos los derechos reservados.

## Contacto

Para consultas sobre el sitio web:
- Email: contacto@aerofactor.cl
- Web: https://aerofactor.cl

---

**Desarrollado con Next.js 14 + TypeScript + Tailwind CSS**

🤖 Estructura inicial generada con Claude Code
