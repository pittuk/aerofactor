# AEROFACTOR - Sitio Web Institucional

Sitio web corporativo para AEROFACTOR, proveedor líder de soluciones de vigilancia aérea persistente con aerostatos en Chile y Latinoamérica.

## Tecnologías

- **Next.js 14** con App Router (Static Export)
- **TypeScript** para type-safety
- **Tailwind CSS** para estilos
- **Nodemailer** para formulario de contacto
- **Gray Matter** para procesamiento de contenido Markdown
- **Multi-idioma**: Español (ES), Inglés (EN), Portugués (PT)
- **Detección automática de idioma** con caché y priorización
- **Rate Limiting** en memoria para protección anti-spam
- **Sanitización HTML** para prevención de XSS

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
├── components/              # Componentes de la aplicación
│   ├── ui/                 # Componentes UI reutilizables
│   │   ├── Navbar.tsx          # Navegación principal
│   │   ├── Hero.tsx            # Hero section
│   │   ├── KPIs.tsx            # KPIs display
│   │   ├── ProductCard.tsx     # Tarjeta de producto
│   │   ├── ServicesList.tsx    # Lista de servicios
│   │   ├── AppGrid.tsx         # Grid de aplicaciones
│   │   ├── CTAWide.tsx         # Call-to-action banner
│   │   ├── ContactForm.tsx     # Formulario de contacto
│   │   └── Footer.tsx          # Footer
│   ├── LangUpdater.tsx     # Actualiza atributo lang del HTML
│   ├── PageTransition.tsx  # Transiciones de página
│   ├── SchemaOrg.tsx       # Schema.org JSON-LD
│   └── GoogleAnalytics.tsx # Google Analytics 4
├── content/                 # Contenido en Markdown
│   ├── home.md
│   ├── products.md
│   ├── services.md
│   ├── applications.md
│   ├── company.md
│   └── contact.md
├── contexts/                # Contextos de React
│   └── LanguageContext.tsx  # Contexto multi-idioma con detección automática
├── lib/                     # Utilidades
│   ├── markdown.ts         # Helper para leer archivos Markdown
│   └── rateLimit.ts        # Sistema de rate limiting en memoria
├── public/                  # Assets estáticos
│   ├── images/             # Imágenes
│   ├── logos/              # Logos de AEROFACTOR
│   ├── og/                 # Imágenes Open Graph
│   ├── .htaccess           # Configuración Apache (headers de seguridad)
│   ├── robots.txt          # Directivas para crawlers
│   ├── sitemap.xml         # Sitemap con hreflang tags
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
# Crear build estático para producción
npm run build

# Esto genera una carpeta 'out/' con archivos estáticos listos para deployment
```

**Nota**: Este proyecto está configurado con `output: 'export'` en `next.config.js` para generar un sitio completamente estático.

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

## Despliegue a Producción

### Checklist Pre-Deployment

Antes de subir a producción, verificar:

- [ ] Variables de entorno SMTP configuradas en `.env.local` o en el servidor
- [ ] Build ejecutado sin errores (`npm run build`)
- [ ] Todas las imágenes optimizadas (WebP/AVIF cuando sea posible)
- [ ] Videos tienen `preload="none"` para carga lazy
- [ ] Sitemap.xml actualizado con fecha correcta
- [ ] robots.txt apunta al dominio correcto
- [ ] Google Analytics configurado (si aplica)
- [ ] Certificado SSL/HTTPS activo en el servidor
- [ ] .htaccess presente en la carpeta de deployment (para Apache)

### Opción 1: Hosting Estático (Recomendado para este proyecto)

Ya que el sitio usa `output: 'export'`, se genera como archivos estáticos en la carpeta `out/`.

#### Apache (cPanel, HostGator, etc.)

1. **Ejecutar build:**
   ```bash
   npm run build
   ```

2. **Subir archivos:**
   - Subir TODO el contenido de la carpeta `out/` a `public_html/` o la raíz de tu dominio
   - Verificar que `.htaccess` esté presente en la raíz

3. **Verificar .htaccess:**
   El archivo `public/.htaccess` ya incluye:
   - Headers de seguridad (HSTS, CSP, X-Frame-Options, etc.)
   - Redirección forzada a HTTPS
   - Compresión gzip

   Si tu servidor NO es Apache, los headers de seguridad deben configurarse manualmente.

4. **Configurar SMTP:**
   - Crear `.env.local` en el servidor con credenciales SMTP
   - O configurar variables de entorno desde el panel de control

#### Nginx

1. **Build y subir archivos:**
   ```bash
   npm run build
   # Subir contenido de 'out/' a /var/www/aerofactor.cl/
   ```

2. **Configurar Nginx (`/etc/nginx/sites-available/aerofactor.cl`):**
   ```nginx
   server {
       listen 443 ssl http2;
       server_name aerofactor.cl www.aerofactor.cl;

       root /var/www/aerofactor.cl;
       index index.html;

       # SSL certificates
       ssl_certificate /etc/letsencrypt/live/aerofactor.cl/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/aerofactor.cl/privkey.pem;

       # Security headers
       add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;

       # Gzip compression
       gzip on;
       gzip_types text/css application/javascript application/json image/svg+xml;

       # Static files
       location /_next/static {
           add_header Cache-Control "public, max-age=31536000, immutable";
       }

       location / {
           try_files $uri $uri.html $uri/ =404;
       }
   }

   # Redirect HTTP to HTTPS
   server {
       listen 80;
       server_name aerofactor.cl www.aerofactor.cl;
       return 301 https://$server_name$request_uri;
   }
   ```

3. **Habilitar sitio:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/aerofactor.cl /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Opción 2: Vercel / Netlify (También compatible)

Aunque el sitio es estático, puede desplegarse en plataformas serverless:

```bash
# Conectar repositorio a Vercel/Netlify
# Configurar variables de entorno en dashboard
# Deploy automático en cada push a main
```

**Variables de entorno necesarias:**
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO`
- `CONTACT_FROM`

### Configuración DNS

Configurar registros DNS en tu proveedor:

```
Tipo    Nombre    Valor                           TTL
A       @         [IP del servidor]              3600
A       www       [IP del servidor]              3600
CNAME   www       aerofactor.cl                  3600
```

### SSL/HTTPS

**Con cPanel/Hosting compartido:**
- Usar AutoSSL o Let's Encrypt desde el panel de control

**Con servidor propio (Certbot):**
```bash
sudo certbot --nginx -d aerofactor.cl -d www.aerofactor.cl
```

### Verificación Post-Deployment

Después del deployment, verificar:

1. **Funcionalidad básica:**
   - [ ] Todas las páginas cargan correctamente
   - [ ] Navegación funciona
   - [ ] Imágenes se muestran
   - [ ] Videos cargan (pero lazy)

2. **Formulario de contacto:**
   - [ ] Enviar mensaje de prueba
   - [ ] Verificar que llega el email
   - [ ] Probar rate limiting (3 requests en 10 min)
   - [ ] Verificar mensajes multiidioma

3. **SEO:**
   - [ ] `https://aerofactor.cl/robots.txt` accesible
   - [ ] `https://aerofactor.cl/sitemap.xml` accesible
   - [ ] Meta tags visibles en View Source
   - [ ] Enviar sitemap a Google Search Console

4. **Seguridad:**
   - [ ] Forzar HTTPS funciona
   - [ ] Headers de seguridad presentes (verificar en https://securityheaders.com)
   - [ ] No hay advertencias SSL

5. **Performance:**
   - [ ] Test en PageSpeed Insights
   - [ ] Test en GTmetrix
   - [ ] Verificar tiempos de carga < 3s

### Solución de Problemas

**El formulario no envía emails:**
- Verificar credenciales SMTP en variables de entorno
- Verificar puerto (587 para TLS, 465 para SSL)
- Revisar logs del servidor
- Confirmar que el servidor permite conexiones SMTP salientes

**Headers de seguridad no se aplican:**
- En Apache: verificar que `mod_headers` está habilitado
- En Nginx: verificar sintaxis de la configuración
- Restart del servidor web

**Rate limiting no funciona:**
- El rate limiting usa memoria en tiempo de ejecución
- En hosting compartido puede no persistir entre requests
- Considerar implementar con Redis o base de datos para producción

**Problemas con idioma:**
- Verificar que el navegador envía header `Accept-Language`
- El sistema prioriza: localStorage > navegador > geolocalización > español
- Caché de geolocalización: 7 días en localStorage

## Características de Seguridad

### Protección XSS (Cross-Site Scripting)
- Sanitización HTML en todos los inputs del formulario con `escapeHtml()`
- Eliminación de `dangerouslySetInnerHTML` en favor de componentes React
- Content Security Policy (CSP) configurada en headers

### Rate Limiting
- Sistema en memoria: máximo 3 requests por IP cada 10 minutos
- Implementado en `lib/rateLimit.ts`
- Mensajes de error multiidioma para rate limit excedido
- Limpieza automática de registros expirados

### Validación de Inputs
- Email: RFC 5322 compliant, máx 254 caracteres
- Teléfono: regex para formatos internacionales, opcional
- Nombre: mínimo 2 caracteres, máx 100
- Empresa: mínimo 2 caracteres, máx 200
- Mensaje: mínimo 10 caracteres, máx 2000
- Honeypot anti-bot en formulario

### Headers de Seguridad HTTP
Configurados en `.htaccess` (Apache) o Nginx config:
- **HSTS**: Fuerza HTTPS por 2 años
- **X-Frame-Options**: Previene clickjacking
- **X-Content-Type-Options**: Previene MIME sniffing
- **X-XSS-Protection**: Protección XSS del navegador
- **Referrer-Policy**: Control de información de referrer
- **CSP**: Content Security Policy restrictiva
- **Permissions-Policy**: Bloquea acceso a cámara, micrófono, geolocalización

### Multi-idioma con Detección Inteligente
Sistema de 4 niveles de prioridad:
1. **Preferencia del usuario** (localStorage) - Instantáneo
2. **Idioma del navegador** (`navigator.language`) - <5ms
3. **Geolocalización cacheada** (localStorage, 7 días) - Instantáneo
4. **IP Geolocation** (ipapi.co, timeout 5s) - Solo si falla todo lo anterior

Idiomas soportados: ES (Español), EN (English), PT (Português)

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
