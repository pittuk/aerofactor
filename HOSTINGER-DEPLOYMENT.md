# Guía de Deployment en Hostinger - AEROFACTOR

Esta guía te ayudará a subir el sitio AEROFACTOR a Hostinger paso a paso.

## ✅ Pre-requisitos Completados

- [x] Build de producción generado en carpeta `out/`
- [x] Archivo `.htaccess` incluido con headers de seguridad
- [x] `robots.txt` y `sitemap.xml` generados
- [x] Optimizaciones de performance aplicadas

## 📋 Checklist Antes de Subir

Antes de comenzar, asegúrate de tener:

- [ ] Cuenta de Hostinger activa
- [ ] Dominio configurado (aerofactor.cl)
- [ ] Acceso a hPanel de Hostinger
- [ ] Credenciales SMTP para el formulario de contacto

## 🚀 Pasos para Deployment

### Paso 1: Acceder a hPanel

1. Inicia sesión en tu cuenta de Hostinger
2. Ve a **hPanel** (panel de control de hosting)
3. Selecciona tu dominio **aerofactor.cl**

### Paso 2: Configurar Variables de Entorno

Antes de subir archivos, configura las variables de entorno SMTP:

1. En hPanel, ve a **Avanzado** → **Variables de Entorno PHP**
2. Agrega las siguientes variables:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@aerofactor.cl
SMTP_PASS=[tu-contraseña-smtp]
CONTACT_TO=contacto@aerofactor.cl
CONTACT_FROM=noreply@aerofactor.cl
```

**Nota:** Si usas otro proveedor SMTP (Gmail, SendGrid, etc.), ajusta los valores:

**Gmail:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASS=[contraseña de aplicación]
```

**SendGrid:**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=[tu-api-key-de-sendgrid]
```

### Paso 3: Preparar Archivos para Subir

1. Abre el **Administrador de Archivos** en hPanel
2. Navega a la carpeta `public_html/` (o la raíz de tu dominio)
3. **IMPORTANTE:** Elimina cualquier archivo existente de instalación por defecto de Hostinger (index.html, etc.)

### Paso 4: Subir Archivos del Sitio

**Opción A: Usando Administrador de Archivos de hPanel**

1. En `public_html/`, haz clic en **Cargar Archivos**
2. Selecciona **TODOS** los archivos y carpetas de la carpeta `out/`:
   - `.htaccess` ⚠️ MUY IMPORTANTE
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.png`
   - Carpeta `_next/`
   - Carpeta `images/`
   - Carpeta `logos/`
   - Carpeta `og/`
   - Todas las demás carpetas y archivos

3. Espera a que termine la carga (puede tomar varios minutos)

**Opción B: Usando FTP (Recomendado para archivos grandes)**

1. Descarga un cliente FTP como **FileZilla**
2. Conecta con las credenciales FTP de Hostinger:
   - Host: `ftp.aerofactor.cl` (o IP del servidor)
   - Usuario: [tu usuario FTP]
   - Contraseña: [tu contraseña FTP]
   - Puerto: 21

3. Navega a `public_html/`
4. Arrastra TODO el contenido de la carpeta `out/` a `public_html/`

### Paso 5: Verificar .htaccess

Es CRÍTICO que el archivo `.htaccess` esté en la raíz de `public_html/`

1. En el Administrador de Archivos, verifica que ves `.htaccess`
2. Si NO lo ves, activa **Mostrar archivos ocultos** en el panel
3. Haz clic derecho en `.htaccess` → **Editar**
4. Verifica que contenga los headers de seguridad (debe tener ~60 líneas)

### Paso 6: Configurar SSL/HTTPS

1. En hPanel, ve a **Seguridad** → **SSL**
2. Activa **SSL Gratuito** (Let's Encrypt)
3. Espera 5-10 minutos para que se active
4. Marca la opción **Forzar HTTPS** para redirigir todo el tráfico a HTTPS

### Paso 7: Configurar DNS (Si es necesario)

Si tu dominio aún no apunta a Hostinger:

1. Ve a tu registrador de dominio (NIC Chile, GoDaddy, etc.)
2. Configura los nameservers de Hostinger:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
   (O los que Hostinger te proporcione en hPanel → Dominios)

3. Espera 24-48 horas para la propagación DNS

### Paso 8: Configurar Email (Opcional pero Recomendado)

Para crear la cuenta de email `noreply@aerofactor.cl`:

1. En hPanel, ve a **Emails** → **Cuentas de Email**
2. Crea una nueva cuenta:
   - Email: `noreply@aerofactor.cl`
   - Contraseña: [elige una contraseña segura]
3. Usa estas credenciales en las variables de entorno del Paso 2

## ✅ Verificación Post-Deployment

Una vez subidos los archivos, verifica:

### 1. Funcionalidad Básica

- [ ] **Home page carga:** `https://aerofactor.cl`
- [ ] **Navegación funciona:** Todos los links del menú funcionan
- [ ] **Imágenes se muestran:** Hero, logos, productos
- [ ] **Videos lazy load:** No cargan automáticamente

### 2. Páginas Individuales

Verifica que cada página cargue correctamente:

- [ ] https://aerofactor.cl/productos
- [ ] https://aerofactor.cl/aplicaciones
- [ ] https://aerofactor.cl/empresa
- [ ] https://aerofactor.cl/contacto
- [ ] https://aerofactor.cl/privacidad
- [ ] https://aerofactor.cl/terminos

### 3. Formulario de Contacto

- [ ] Abre https://aerofactor.cl/contacto
- [ ] Completa el formulario con datos de prueba
- [ ] Envía el mensaje
- [ ] Verifica que llegue el email a `contacto@aerofactor.cl`
- [ ] Intenta enviar 4 mensajes seguidos → Debe bloquear el 4to (rate limiting)
- [ ] Cambia idioma del navegador → Mensajes de error deben cambiar

### 4. SEO y Crawlers

- [ ] **robots.txt accesible:** https://aerofactor.cl/robots.txt
- [ ] **sitemap.xml accesible:** https://aerofactor.cl/sitemap.xml
- [ ] **Meta tags visibles:** Ver código fuente de cualquier página
- [ ] **Certificado SSL activo:** Debe mostrar candado 🔒 en el navegador

### 5. Headers de Seguridad

Verifica headers en: https://securityheaders.com

1. Ingresa: `https://aerofactor.cl`
2. Deberías obtener al menos grado **A** o **A+**
3. Verifica que estén presentes:
   - `Strict-Transport-Security`
   - `X-Frame-Options`
   - `X-Content-Type-Options`
   - `Content-Security-Policy`

### 6. Performance

Verifica velocidad en: https://pagespeed.web.dev

1. Ingresa: `https://aerofactor.cl`
2. Revisa las métricas de Core Web Vitals
3. Score Mobile debería ser > 80
4. Score Desktop debería ser > 90

## 🔧 Solución de Problemas Comunes

### El sitio no carga / Error 500

**Causa:** Archivo `.htaccess` con sintaxis incorrecta o no compatible

**Solución:**
1. Renombra `.htaccess` a `.htaccess.bak`
2. Si el sitio carga, el problema está en `.htaccess`
3. Contacta a soporte de Hostinger para verificar módulos Apache

### El formulario no envía emails

**Causa:** Variables de entorno SMTP mal configuradas

**Solución:**
1. Verifica credenciales SMTP en hPanel → Variables de Entorno
2. Prueba con SMTP de Hostinger: `smtp.hostinger.com:587`
3. Revisa logs de error en hPanel → Logs de Errores

### Imágenes no se muestran

**Causa:** Rutas incorrectas o archivos no subidos

**Solución:**
1. Verifica que las carpetas `images/`, `logos/`, `og/` existan en `public_html/`
2. Verifica permisos de archivos (deben ser 644 para archivos, 755 para carpetas)
3. Limpia caché del navegador (Ctrl + Shift + R)

### Rate limiting no funciona

**Causa:** Hosting compartido puede reiniciar el servidor frecuentemente

**Solución:**
- El rate limiting usa memoria en tiempo de ejecución
- En hosting compartido puede no persistir entre reinicios
- Para producción robusta, considerar implementar con base de datos

### Cambio de idioma no funciona

**Causa:** JavaScript bloqueado o caché del navegador

**Solución:**
1. Verifica que JavaScript esté habilitado
2. Limpia caché del navegador
3. Verifica que los archivos `_next/static/` se hayan subido correctamente

## 📊 Monitoreo Post-Deployment

### Google Search Console

1. Accede a: https://search.google.com/search-console
2. Agrega la propiedad `https://aerofactor.cl`
3. Verifica propiedad (método HTML tag o DNS)
4. Envía el sitemap: `https://aerofactor.cl/sitemap.xml`

### Google Analytics (Si configurado)

1. Verifica que el tracking esté funcionando
2. Haz una visita de prueba al sitio
3. Confirma que aparezca en tiempo real en GA4

## 📞 Soporte

### Soporte Técnico de Hostinger

- **Chat en vivo:** Disponible 24/7 en hPanel
- **Email:** support@hostinger.com
- **Base de conocimientos:** https://support.hostinger.com

### Documentación del Sitio

- README.md: Información general del proyecto
- Repositorio: (agregar URL del repositorio si existe)

---

## 🎉 ¡Listo para Producción!

Si completaste todos los pasos y verificaciones, tu sitio AEROFACTOR está oficialmente en producción en Hostinger.

**Próximos pasos recomendados:**

1. ✅ Monitorear tráfico en Google Analytics
2. ✅ Revisar emails del formulario de contacto diariamente
3. ✅ Hacer backups semanales desde hPanel
4. ✅ Actualizar sitemap.xml cuando agregues contenido
5. ✅ Revisar métricas de rendimiento mensualmente

---

**Última actualización:** 2025-12-11
**Versión del sitio:** FASE 3 (Optimizaciones SEO y Documentación)
