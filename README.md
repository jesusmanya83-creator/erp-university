# ERP University - Sistema Académico

Sistema de gestión académica para la Universidad Andina del Cusco.

## 📁 Estructura del Proyecto

```
erp-university-project/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
└── images/
    └── logo-uac.png    # Logo de la Universidad Andina del Cusco
```

## 🚀 Cómo usar en Visual Studio Code

### Opción 1: Abrir directamente
1. Abre Visual Studio Code
2. Ve a `Archivo > Abrir Carpeta`
3. Selecciona la carpeta `erp-university-project`
4. Haz clic derecho en `index.html` y selecciona `Open with Live Server`
   (Si no tienes Live Server instalado, ve al paso siguiente)

### Opción 2: Instalar Live Server (recomendado)
1. En VS Code, ve a la pestaña de Extensiones (Ctrl+Shift+X)
2. Busca "Live Server" de Ritwick Dey
3. Haz clic en "Instalar"
4. Luego, haz clic derecho en `index.html` y selecciona `Open with Live Server`
5. Se abrirá automáticamente en tu navegador en `http://localhost:5500`

### Opción 3: Abrir directamente en el navegador
1. Navega a la carpeta `erp-university-project` en tu explorador de archivos
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

## ✨ Características

### 1. Reporte de Notas Detalladas
- Haz clic en "Reporte de Notas Detalladas" para ver el modal con:
  - Logo de la Universidad Andina del Cusco
  - Tabla completa de notas con 3 aportes
  - Notas en rojo cuando son menores a 13
  - Sección de "Aporte Único"
  - Marca de agua "OFICIAL"

### 2. Páginas en Mantenimiento
- Todas las demás opciones de reportes mostrarán un modal de mantenimiento
- Incluye:
  - Icono animado de herramientas
  - Mensaje personalizado
  - Logo de la universidad
  - Firma: "Atte. UNIVERSIDAD ANDINA DEL CUSCO"

### 3. Funcionalidades Interactivas
- Menú lateral navegable
- Selector de semestre
- Modales con animaciones suaves
- Cierre con botón X, botón "Cerrar", clic fuera del modal, o tecla ESC
- Diseño responsive para móviles y tablets

## 🎨 Personalización

### Cambiar el logo
Si quieres usar otro logo, simplemente reemplaza el archivo `images/logo-uac.png` con tu imagen.

### Modificar colores
Los colores principales se encuentran en `styles.css`:
- Azul principal: `#003d7a`
- Azul secundario: `#0056a8`
- Dorado: `#FFD700` y `#FFA500`

### Agregar más reportes funcionales
En `index.html`, busca el link que quieras hacer funcional y:
1. Quítale el atributo `data-maintenance="true"`
2. Dale un ID único, por ejemplo: `id="miNuevoReporte"`
3. En `script.js`, agrega un nuevo event listener similar al de "detailedGradesLink"

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y diseño responsive)
- JavaScript (Vanilla JS - sin frameworks)
- Font Awesome 6.4.0 (para íconos)

## 📝 Notas

- El logo debe estar en formato PNG para mejor calidad
- Todos los archivos deben mantenerse en la misma estructura de carpetas
- Para hacer cambios, edita los archivos y recarga el navegador (o Live Server lo hará automáticamente)

## 🐛 Solución de Problemas

**El logo no se muestra:**
- Verifica que el archivo `logo-uac.png` esté en la carpeta `images/`
- Verifica que el nombre del archivo sea exactamente `logo-uac.png`

**Los modales no se abren:**
- Abre la consola del navegador (F12) y verifica si hay errores
- Asegúrate de que `script.js` esté correctamente vinculado

**Los estilos no se aplican:**
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Limpia la caché del navegador (Ctrl+Shift+R)

## 📧 Contacto

Para soporte o consultas, contacta con el administrador del sistema.

---

**Desarrollado para Universidad Andina del Cusco**
