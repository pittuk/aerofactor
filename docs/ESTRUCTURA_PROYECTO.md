# Estructura del Proyecto AeroFactor

## Árbol de Carpetas Completo

```
aerofactor-web/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Layout raíz con metadata
│   ├── page.tsx                 # Página de inicio (/)
│   ├── globals.css              # Estilos globales + Tailwind
│   ├── productos/
│   │   └── page.tsx             # Página de productos (/productos)
│   ├── servicios/
│   │   ├── page.tsx             # Index de servicios (/servicios)
│   │   └── [slug]/
│   │       └── page.tsx         # Página dinámica de servicio
│   ├── aplicaciones/
│   │   ├── page.tsx             # Index de aplicaciones (/aplicaciones)
│   │   └── [slug]/
│   │       └── page.tsx         # Página dinámica de aplicación
│   ├── nosotros/
│   │   └── page.tsx             # Página Nosotros (/nosotros)
│   └── contacto/
│       └── page.tsx             # Página Contacto (/contacto)
│
├── components/                   # Componentes React reutilizables
│   ├── layout/
│   │   ├── Navbar.tsx           # Barra de navegación sticky
│   │   └── Footer.tsx           # Footer con múltiples columnas
│   ├── sections/
│   │   ├── Hero.tsx             # Hero con imagen/video
│   │   ├── KPIs.tsx             # Tarjetas de KPIs (360°, 24/7, 50km)
│   │   ├── ProductHighlights.tsx # Grid de productos destacados
│   │   ├── ServicesList.tsx     # Lista de servicios
│   │   ├── AppGrid.tsx          # Grid de aplicaciones
│   │   └── CTAWide.tsx          # Call-to-action ancho completo
│   ├── forms/
│   │   └── ContactForm.tsx      # Formulario de contacto
│   ├── cards/
│   │   ├── ProductCard.tsx      # Tarjeta de producto
│   │   ├── ServiceCard.tsx      # Tarjeta de servicio
│   │   └── ApplicationCard.tsx  # Tarjeta de aplicación
│   └── ui/
│       ├── Button.tsx           # Botón reutilizable
│       ├── Breadcrumbs.tsx      # Navegación breadcrumb
│       └── SEOHead.tsx          # Componente para metadata SEO
│
├── content/                      # Contenido Markdown
│   ├── home.md                  # Contenido página inicio
│   ├── products.md              # Contenido página productos
│   ├── services.md              # Contenido página servicios
│   ├── applications.md          # Contenido página aplicaciones
│   ├── company.md               # Contenido página nosotros
│   ├── contact.md               # Contenido página contacto
│   ├── services/                # Servicios individuales
│   │   ├── integracion.md
│   │   ├── soporte.md
│   │   └── entrenamiento.md
│   ├── applications/            # Aplicaciones individuales
│   │   ├── defensa.md
│   │   ├── fronteras.md
│   │   ├── infraestructura.md
│   │   └── safecity.md
│   └── products/                # Productos (plantilla)
│       └── product-template.md
│
├── lib/                         # Utilidades y helpers
│   ├── markdown.ts              # Funciones para cargar Markdown
│   ├── utils.ts                 # Utilidades generales
│   └── types.ts                 # Tipos TypeScript compartidos
│
├── public/                      # Assets estáticos
│   ├── images/                  # Imágenes del sitio
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── products/
│   │   ├── services/
│   │   └── applications/
│   ├── og/                      # Imágenes Open Graph
│   │   ├── home-hero.jpg
│   │   ├── products-hero.jpg
│   │   ├── services-hero.jpg
│   │   ├── applications-hero.jpg
│   │   ├── company-team.jpg
│   │   └── contact-hero.jpg
│   └── videos/                  # Videos (opcional)
│       └── hero-background.mp4
│
├── data/                        # Datos estructurados
│   └── supabase_payload.json   # JSON para Supabase
│
├── docs/                        # Documentación
│   ├── COMPONENTES_REACT.md    # Guía de componentes
│   ├── CHECKLIST_QA.md         # Checklist de calidad
│   └── ESTRUCTURA_PROYECTO.md  # Este archivo
│
├── styles/                      # Estilos adicionales (opcional)
│   └── markdown.css            # Estilos para contenido Markdown
│
├── .gitignore                   # Archivos ignorados por Git
├── next.config.js               # Configuración de Next.js
├── tailwind.config.ts           # Configuración de Tailwind
├── tsconfig.json                # Configuración de TypeScript
├── postcss.config.js            # Configuración de PostCSS
├── package.json                 # Dependencias del proyecto
└── README.md                    # Documentación principal

```

---

## Convenciones de Nombres

### Componentes
- **PascalCase**: `Navbar.tsx`, `Hero.tsx`, `ProductCard.tsx`
- Componentes de layout en `components/layout/`
- Componentes de secciones en `components/sections/`
- Componentes de UI genéricos en `components/ui/`

### Archivos de Contenido
- **kebab-case**: `integracion.md`, `defensa.md`
- Todos en la carpeta `content/`
- Subcarpetas por tipo: `services/`, `applications/`, `products/`

### Páginas (App Router)
- Carpetas en minúsculas: `servicios/`, `aplicaciones/`, `nosotros/`
- Rutas dinámicas: `[slug]/page.tsx`

---

## Rutas del Sitio

| Ruta | Archivo | Tipo |
|------|---------|------|
| `/` | `app/page.tsx` | Estática |
| `/productos` | `app/productos/page.tsx` | Estática |
| `/servicios` | `app/servicios/page.tsx` | Estática |
| `/servicios/[slug]` | `app/servicios/[slug]/page.tsx` | Dinámica |
| `/aplicaciones` | `app/aplicaciones/page.tsx` | Estática |
| `/aplicaciones/[slug]` | `app/aplicaciones/[slug]/page.tsx` | Dinámica |
| `/nosotros` | `app/nosotros/page.tsx` | Estática |
| `/contacto` | `app/contacto/page.tsx` | Estática |

---

## Gestión de Contenido

### Sistema de Markdown

El proyecto usa **gray-matter** para parsear Markdown con frontmatter YAML.

**Ejemplo de archivo Markdown:**

```markdown
---
title: "Título de la Página"
slug: "/ruta"
meta_title: "Meta Title SEO"
meta_description: "Meta description SEO"
og_image: "/og/imagen.jpg"
---

# Título H1

Contenido en Markdown...
```

### Carga de Contenido

El archivo `lib/markdown.ts` proporciona funciones para:

1. **getMarkdownContent(folder, filename)** - Cargar un archivo específico
2. **getAllMarkdownFiles(folder)** - Listar todos los archivos de una carpeta

**Ejemplo de uso en página:**

```typescript
import { getMarkdownContent } from '@/lib/markdown';

export default function ServicePage({ params }) {
  const { frontmatter, content } = getMarkdownContent('services', params.slug);

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
```

---

## Dependencias Principales

### Core
- **next**: ^14.2.0
- **react**: ^18.3.0
- **react-dom**: ^18.3.0

### Markdown
- **gray-matter**: ^4.0.3 - Parser de frontmatter
- **react-markdown**: ^9.0.1 - Renderizar Markdown en React
- **remark-gfm**: ^4.0.0 - Soporte para GitHub Flavored Markdown

### Styling
- **tailwindcss**: ^3.4.1
- **autoprefixer**: ^10.4.20
- **postcss**: ^8.4.49

### TypeScript
- **typescript**: ^5
- **@types/node**: ^20
- **@types/react**: ^18
- **@types/react-dom**: ^18

---

## Configuración de Tailwind

### Paleta de Colores Corporativa

```javascript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#0A4C8F',  // Azul corporativo
    dark: '#083A6B',
    light: '#0D5AA8',
  },
  secondary: {
    DEFAULT: '#4A5568',  // Gris
    dark: '#2D3748',
    light: '#718096',
  },
}
```

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

---

## Metadata y SEO

Cada página debe incluir metadata en el layout o componente:

```typescript
export const metadata: Metadata = {
  title: "Título de la Página | AeroFactor",
  description: "Descripción SEO de la página",
  openGraph: {
    title: "Título OG",
    description: "Descripción OG",
    images: ['/og/imagen.jpg'],
  },
};
```

---

## Variables de Entorno (futuras)

Crear archivo `.env.local` para:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Formulario de contacto
NEXT_PUBLIC_CONTACT_EMAIL=contacto@aerofactor.cl

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## Scripts de Desarrollo

```json
{
  "dev": "next dev",           // Servidor de desarrollo
  "build": "next build",       // Build de producción
  "start": "next start",       // Servidor de producción
  "lint": "next lint"          // Linter
}
```

---

## Flujo de Trabajo

### 1. Desarrollo Local
```bash
npm run dev
# Abrir http://localhost:3000
```

### 2. Agregar Contenido
- Crear archivo `.md` en `content/`
- Agregar frontmatter YAML
- Escribir contenido en Markdown

### 3. Crear Página Dinámica
- Crear carpeta `[slug]/` en `app/`
- Crear `page.tsx` que use `getMarkdownContent()`
- Implementar `generateStaticParams()` para SSG

### 4. Deploy
- Push a GitHub
- Conectar repo a Vercel
- Deploy automático

---

## Mejores Prácticas

### Componentes
- ✅ Crear componentes pequeños y reutilizables
- ✅ Usar TypeScript para props
- ✅ Mantener componentes sin lógica de negocio
- ✅ Usar "use client" solo cuando sea necesario

### Markdown
- ✅ Validar frontmatter antes de usar
- ✅ Sanitizar contenido Markdown
- ✅ Usar ReactMarkdown con remark-gfm

### Performance
- ✅ Optimizar imágenes con Next.js Image
- ✅ Lazy loading de componentes pesados
- ✅ Usar SSG para páginas de contenido estático

### SEO
- ✅ Meta-titles únicos por página
- ✅ Meta-descriptions descriptivas
- ✅ Open Graph images
- ✅ Sitemap.xml automático

---

## Recursos Adicionales

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Markdown**: https://github.com/remarkjs/react-markdown
- **Gray Matter**: https://github.com/jonschlinkert/gray-matter
