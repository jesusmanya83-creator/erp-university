# 📱 Guía: Cómo Compartir y Ver en Celular

Hay varias formas de compartir este proyecto para que se vea en celular:

## 🌐 Opción 1: GitHub Pages (GRATIS y FÁCIL) ⭐ RECOMENDADO

Esta es la mejor opción porque es gratis, fácil y profesional.

### Pasos:

1. **Crea una cuenta en GitHub** (si no tienes): https://github.com/signup

2. **Crea un nuevo repositorio:**
   - Haz clic en el botón verde "New" o ve a: https://github.com/new
   - Nombre del repositorio: `erp-university` (o el nombre que quieras)
   - Marca como "Public"
   - Haz clic en "Create repository"

3. **Sube los archivos:**
   - Arrastra y suelta todos los archivos de la carpeta `erp-university-project` a GitHub
   - O usa GitHub Desktop (más fácil): https://desktop.github.com/

4. **Activa GitHub Pages:**
   - Ve a tu repositorio
   - Haz clic en "Settings" (Configuración)
   - En el menú lateral, haz clic en "Pages"
   - En "Source", selecciona "main" o "master"
   - Haz clic en "Save"
   - ¡Listo! En unos minutos tendrás tu URL

5. **Tu URL será algo como:**
   ```
   https://tu-usuario.github.io/erp-university/
   ```

6. **Comparte esta URL** por WhatsApp, correo, o donde quieras. ¡Funciona en cualquier celular!

---

## 🚀 Opción 2: Netlify (GRATIS y RÁPIDO)

Otra excelente opción, incluso más rápida que GitHub Pages.

### Pasos:

1. **Ve a Netlify**: https://www.netlify.com/
2. **Registrate** (puedes usar tu cuenta de GitHub)
3. **Arrastra y suelta** la carpeta `erp-university-project` completa
4. **¡Listo!** Te dará una URL automáticamente como: `https://nombre-aleatorio.netlify.app`
5. **Puedes cambiar el nombre** en Site settings > Change site name

---

## 📁 Opción 3: Vercel (GRATIS)

Similar a Netlify, muy profesional.

### Pasos:

1. **Ve a Vercel**: https://vercel.com/
2. **Registrate** con tu GitHub
3. **Importa tu proyecto** o arrastra los archivos
4. **Deploy automático** - Te da una URL como: `https://erp-university.vercel.app`

---

## 💻 Opción 4: Hostear en tu misma Red WiFi (LOCAL)

Si solo quieres probarlo en tu celular conectado a la misma WiFi:

### En Windows:

1. **Instala Python** (si no lo tienes): https://www.python.org/downloads/
2. **Abre la carpeta del proyecto** en el explorador
3. **Escribe `cmd` en la barra de direcciones** y presiona Enter
4. **Ejecuta:**
   ```bash
   python -m http.server 8000
   ```
5. **Encuentra tu IP local:**
   - En cmd escribe: `ipconfig`
   - Busca "IPv4 Address" (ej: 192.168.1.100)
6. **En tu celular** (conectado a la misma WiFi), abre el navegador y ve a:
   ```
   http://192.168.1.100:8000
   ```

### En Mac/Linux:

1. **Abre Terminal**
2. **Navega a la carpeta:**
   ```bash
   cd ruta/a/erp-university-project
   ```
3. **Ejecuta:**
   ```bash
   python3 -m http.server 8000
   ```
4. **Encuentra tu IP:**
   - En Terminal: `ifconfig | grep inet`
5. **En tu celular**, ve a: `http://TU-IP:8000`

---

## 📲 Opción 5: Ngrok (Para compartir temporalmente)

Si quieres compartirlo por unas horas con alguien que no está en tu WiFi:

1. **Descarga ngrok**: https://ngrok.com/download
2. **Extrae y ejecuta** en la carpeta del proyecto
3. **Inicia el servidor local** (como en Opción 4)
4. **En otra terminal, ejecuta:**
   ```bash
   ngrok http 8000
   ```
5. **Te dará una URL temporal** como: `https://abc123.ngrok.io`
6. **Comparte esta URL** - funcionará en cualquier celular con internet

---

## 🎯 ¿Cuál es la mejor opción?

- **Para producción/permanente**: GitHub Pages, Netlify o Vercel
- **Para pruebas rápidas en tu WiFi**: Python HTTP Server
- **Para compartir temporalmente**: Ngrok

---

## ✨ Consejos Extra

### Para que se vea perfecto en celular:

El proyecto ya está **100% responsive** y se adapta automáticamente a celulares, pero puedes probarlo en tu computadora:

1. **Abre Chrome/Edge**
2. **Presiona F12** (para abrir DevTools)
3. **Haz clic en el ícono de celular** 📱 (Toggle device toolbar)
4. **Selecciona un modelo** de celular (iPhone, Samsung, etc.)
5. **Prueba la navegación**

### Agregar ícono de app en celular:

Puedes agregar un ícono para que se vea como una app cuando alguien guarde el sitio en su pantalla de inicio:

1. **Consigue un ícono** (logo de 192x192 px)
2. **Guárdalo** como `icon.png` en la carpeta `images/`
3. **Agrega esto** en `index.html` dentro del `<head>`:
   ```html
   <link rel="apple-touch-icon" href="images/icon.png">
   <link rel="icon" type="image/png" href="images/icon.png">
   ```

---

## 🔒 Seguridad

Si necesitas agregar login o contraseña:
- Para GitHub Pages/Netlify/Vercel necesitarías un backend
- O puedes usar servicios como **Auth0** o **Firebase Authentication**

---

¿Necesitas ayuda con alguna de estas opciones? ¡Déjame saber y te guío paso a paso! 🚀
