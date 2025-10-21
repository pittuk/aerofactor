# Checklist de QA - Contenido AeroFactor

Este checklist debe completarse antes del lanzamiento del sitio web.

---

## 1. BRAND & MESSAGING

- [ ] No se menciona RT, Skystar ni nombres de proveedores externos
- [ ] Toda la marca está en "AeroFactor" consistentemente
- [ ] El tagline "Vigilancia aérea persistente para un mundo más seguro" está presente en Home
- [ ] Tono corporativo tecnológico mantenido (serio, moderno, directo)
- [ ] No hay jerga técnica excesiva o innecesaria
- [ ] Vocabulario simple y accesible para público GOV/POL/PRIV
- [ ] No se usan emojis en el contenido

---

## 2. ESTRUCTURA Y SEO

- [ ] Cada página tiene meta_title (máx 60 caracteres)
- [ ] Cada página tiene meta_description (140-155 caracteres)
- [ ] Slugs son consistentes y en formato kebab-case
- [ ] Títulos H1 únicos por página
- [ ] Subtítulos H2 descriptivos
- [ ] Estructura jerárquica de headings correcta (H1 > H2 > H3)
- [ ] og_image especificado para todas las páginas/productos/servicios
- [ ] URLs amigables y descriptivas

---

## 3. CONTENIDO TEXTUAL

- [ ] Textos introductorios tienen 1-3 párrafos
- [ ] Beneficios listados en bullets (3-6 items)
- [ ] CTAs claros y específicos en cada página
- [ ] Sin duplicación de contenido entre páginas
- [ ] Gramática y ortografía revisadas
- [ ] Consistencia en tiempos verbales
- [ ] Uso correcto de mayúsculas/minúsculas
- [ ] Números y unidades de medida consistentes

---

## 4. PRODUCTOS

- [ ] Cada producto tiene plantilla completa llenada
- [ ] Especificaciones técnicas en formato tabla
- [ ] Sección "¿Qué es?" presente
- [ ] Sección "¿Para qué sirve?" presente
- [ ] Beneficios clave listados
- [ ] Aplicaciones principales definidas
- [ ] Configuraciones disponibles detalladas
- [ ] No se mencionan proveedores externos
- [ ] Imágenes sugeridas descritas

---

## 5. SERVICIOS

- [ ] Los 3 servicios principales están completos:
  - [ ] Integración de Sistemas
  - [ ] Soporte y Mantenimiento
  - [ ] Entrenamiento Especializado
- [ ] Cada servicio tiene beneficios claros
- [ ] Alcance del servicio definido
- [ ] CTAs específicos para cada servicio

---

## 6. APLICACIONES

- [ ] Las 4 aplicaciones están completas:
  - [ ] Defensa e ISR
  - [ ] Control de Fronteras
  - [ ] Infraestructura Crítica
  - [ ] Safe City
- [ ] Sectores objetivo definidos (GOV/POL/PRIV)
- [ ] Casos de uso específicos listados
- [ ] Beneficios operacionales claros

---

## 7. PÁGINAS CORPORATIVAS

- [ ] Home tiene hero statement claro
- [ ] Nosotros incluye Misión y Visión
- [ ] Valores corporativos definidos (4 valores)
- [ ] Sectores objetivo (GOV, POL, PRIV) descritos
- [ ] Contacto tiene formulario completo definido
- [ ] Información de contacto directo presente
- [ ] Placeholders para campos de formulario definidos
- [ ] Mensaje de confirmación post-envío redactado

---

## 8. JSON PAYLOAD (SUPABASE)

- [ ] Estructura JSON válida
- [ ] Arrays de products[], services[], applications[], pages[] completos
- [ ] IDs únicos para cada entrada
- [ ] Slugs consistentes con archivos markdown
- [ ] Timestamps (created_at, updated_at) presentes
- [ ] Campos content_html incluidos
- [ ] Especificaciones de productos en formato objeto
- [ ] Relaciones entre entidades definidas

---

## 9. COMPONENTES REACT

- [ ] Props interface definidas con TypeScript
- [ ] Ejemplos de uso proporcionados
- [ ] Componentes cubren todas las necesidades:
  - [ ] Navbar con submenu
  - [ ] HeroVideo con overlay
  - [ ] ProductCard (grid/list variants)
  - [ ] ServiceCard
  - [ ] ApplicationCard
  - [ ] CTAWide
  - [ ] ContactForm
  - [ ] SpecsTable
  - [ ] BenefitsList
  - [ ] Breadcrumbs
  - [ ] SEOHead
  - [ ] Footer
- [ ] Variantes y opciones de personalización definidas

---

## 10. IMÁGENES Y ASSETS

- [ ] Descripción de imagen sugerida en cada página
- [ ] Rutas de imágenes consistentes (/public/og/...)
- [ ] Convenciones de nombrado claras
- [ ] og_image definido para redes sociales
- [ ] Hero images descritas
- [ ] Iconos para servicios y aplicaciones especificados

---

## 11. EXPERIENCIA DE USUARIO

- [ ] CTAs distribuidos estratégicamente
- [ ] Flujo lógico de información (problema > solución > beneficio > CTA)
- [ ] Lenguaje orientado a beneficios, no solo features
- [ ] Información relevante para cada público (GOV/POL/PRIV)
- [ ] Formulario de contacto simple y directo
- [ ] Navegación clara entre secciones

---

## 12. TÉCNICO / IMPLEMENTACIÓN

- [ ] Estructura de carpetas definida
- [ ] Frontmatter YAML correcto en archivos .md
- [ ] Nombres de archivo consistentes
- [ ] Categorías y taxonomías coherentes
- [ ] Orden de elementos definido (order field)
- [ ] Featured flags utilizados estratégicamente
- [ ] Schema de datos Supabase normalizado

---

## 13. CONTENIDO OPCIONAL

- [ ] Se considera sección de Noticias (futuro)
- [ ] Se considera sección de Descargas (futuro)
- [ ] Se considera sección de FAQ (futuro)
- [ ] Estructura flexible para escalar

---

## 14. LEGAL Y COMPLIANCE

- [ ] No hay claims sin fundamento
- [ ] No hay información confidencial o sensible
- [ ] Copyright notice en footer
- [ ] Consentimiento de datos en formulario
- [ ] Información de contacto actualizada

---

## 15. REVISIÓN FINAL

- [ ] Todo el contenido revisado por stakeholder
- [ ] Aprobación de textos finales
- [ ] Validación técnica de especificaciones
- [ ] Revisión de diseñador sobre imágenes sugeridas
- [ ] Test de responsive en componentes
- [ ] Validación de integración con Supabase
- [ ] SEO audit completo
- [ ] Test de envío de formulario de contacto

---

## NOTAS ADICIONALES

Usa este espacio para agregar observaciones específicas durante la revisión:

```
Fecha: _______________
Revisor: ______________

Observaciones:
-
-
-
```

---

**Última actualización:** Enero 2025
