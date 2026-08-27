# Guía de Configuración: Tema cdiezgil para Google Workspace

Como no es posible inyectar archivos directamente en tu Google Drive por seguridad, la forma profesional de tener tus plantillas es **configurar el Tema (Theme) maestro** en Google Docs y Google Slides. Una vez lo configures (tardarás 3 minutos), cualquier documento nuevo que crees heredará tu marca automáticamente.

## 1. Configuración de Colores del Tema (Google Slides & Docs)
Ve a `Formato > Tema` (o editar maestro en Slides) y modifica la paleta de colores personalizada con los valores HEX del manual:

- **Énfasis 1 (Color Principal):** Azul Marino Oscuro `#0A1122` (Usado para textos principales, líneas y formas sólidas).
- **Énfasis 2 (Color Secundario):** Oro `#FFD700` (Usado para resaltar palabras, botones o iconos).
- **Énfasis 3 (Gris de soporte):** Gris Técnico `#E5E5E5` (Usado para fondos de diapositiva o tablas).
- **Fondo:** Blanco `#FFFFFF` (Para máxima legibilidad en documentos de texto).
- **Texto y fondo 1:** Azul Marino Oscuro `#0A1122` (Sustituto del negro estándar de Google).

## 2. Configuración Tipográfica (Google Fonts)
Añade la fuente **Geist** desde el menú de fuentes de Google (si no te aparece Geist directamente en Docs, busca "Geist" en "Más fuentes", o utiliza *Inter* o *Roboto Mono* como fallbacks corporativos aceptables para código).

### Estilos de Párrafo (Google Docs)
Configura los estilos y dale a "Actualizar [Estilo] para que coincida":

*   **Título del Documento:** Geist, 26pt, Negrita (Bold), Azul Marino Oscuro. Interlineado 1.15.
*   **Encabezado 1 (H1):** Geist, 18pt, Negrita, Azul Marino Oscuro. Borde inferior (línea de 1pt en Gris Técnico).
*   **Encabezado 2 (H2):** Geist, 14pt, Negrita, Azul Marino Oscuro.
*   **Encabezado 3 (H3):** Geist, 12pt, Normal, Oro.
*   **Texto normal:** Geist, 11pt, Normal, color `#0A1122` (no negro puro). Interlineado 1.5 (muy importante para lectura de documentación).

## 3. Estructura Maestra de Google Slides (PPT)
En `Diapositiva > Editar tema`, configura las 4 diapositivas maestras clave:

1. **Diapositiva de Título (Portada):**
   - Fondo: Azul Marino `#0A1122`.
   - Logotipo: `by { cdiezgil }` centrado en el footer (corchetes en Oro, texto en blanco).
   - Título principal: Geist Bold, Blanco. Subtítulo en Gris Técnico.

2. **Diapositiva de Separador de Sección:**
   - Fondo: Oro `#FFD700`.
   - Texto del título de sección: Azul Marino `#0A1122`, alineado a la izquierda.

3. **Diapositiva de Contenido Estándar (Datos/Texto):**
   - Fondo: Blanco o Gris Técnico `#E5E5E5` (Si usas trama de puntos, mejor).
   - Barra superior (Header): Título en Azul Marino, línea separadora dorada de 2px.
   - Footer: Logo `by { cdiezgil }` a la derecha, número de página a la izquierda.

4. **Diapositiva de Cierre:**
   - Fondo: Azul Marino `#0A1122`.
   - Texto: "Gracias" en Blanco, email/contacto en Oro.
