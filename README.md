# WinStar

## Feedback General

### [+15] Metadata, Markup y Accesibilidad
Tu markup, metadata, favicon... tú muy bien en la semántica y estructura de documentos, lo tienes súper bien entendido.  
Aunque se te fue un link en tu contacto, un mailto a tu mail personal hubiera estado perfect:  
`mailto:info@winstar.com`

---

### [+13] Funcionalidad / Interactividad

**IMAGEN:**  
Tienes imágenes rebasadas en peso y tamaño por mucho, ej:  
- `./src/assets/Profile.png` es de casi 4000px (3932x3120px), una imagen enorme para usarla como un ícono de 75x60 en desktop.  
- Otro caso: `assets/profileNormsl.png`, de dimensiones similares pero pesa más de 6.0MB.  

**OPTIMIZACIÓN:**  
Pudiste haber usado un tamaño máximo de 1920x1080 (ya sobrado) y optimizado la imagen, reduciendo la carga a menos de 1MB. Este tipo de archivos grandes genera conflictos visuales en conexiones lentas o móviles.

**SCROLL:**  
En mobile se genera un scroll gigante en el eje `x`, revisa los tamaños de los contenedores y prevén esto con `overflow-x`.

**MENÚ:**  
En desktop el menú muestra empalmado el ícono de hamburguesa y el de cerrar. Incluso en mobile este menú pudo haber vivido siempre en el header, ya que son sólo 3 secciones.  
Recomendación: links visibles en desktop, menú hamburguesa en mobile.

---

### [+12] Diseño y Estilo

**HOME:**  
Los servicios creativos tienen un hover muy invasivo y no aportan mucho. Es preferible usar tamaños más pequeños que acompañen al texto.  
Al hacer hover, se pierde la imagen por cubrir los ítems.

**HOME MOBILE:**  
Se desbordan elementos por el scroll.

**COHESIÓN:**  
El diseño pierde cohesión entre elementos con bordes redondeados y otros sin redondear, que comparten espacio.  
En el 'about', repites dos veces el nombre 'Winstar', uno con animación y otro en tipografía sans-serif.  
Recomendación: usar sólo la "W" de Winstar como ícono en header o footer, como lo hiciste en la animación del 'about', que quedó muy bien.

**Referencia:**  
Documental recomendado: *Rams. Principles of Good Design* (Diseñador de Braun)  
https://archive.org/details/rams.-principles.of.-good.-design

**PROYECTOS:**  
Si los indicadores de categoría (ej: 2d, animation, motion) no hacen nada al clic, evita el hover. Usa estilo de 'label', no de botón.  
Hubiera sido genial poder hacer zoom a las piezas. Por ejemplo, amé el op-art de "Son y Tierra".  
Como último recurso, podrías hacer que las imágenes se abran en otra pestaña.

---

### [+13] Responsive

La experiencia responsive se ve afectada por los scrolls verticales grandes.  
Las secciones principales ocupan todo el alto del viewport y se vuelve confuso cómo navegar.  
Recomendación: usar un indicador de scroll (flecha o instrucción).  
En mobile, podrías reducir el tamaño del contenedor inicial para mostrar contenido adicional desde el inicio.

---

### [+13] Contenido

Tienes buen contenido.  
En la parte de proyectos pudo haber habido una presentación más dinámica, especialmente considerando la calidad del material.

**Galerías:**  
Distribuir contenidos según su relación de aspecto (portrait para videos, landscape para imágenes).

**Títulos y Descripciones:**  
Agregar títulos y descripciones contextuales a las piezas.  
Ejemplo:  
- Antes: "Animación 2"  
- Mejor:  
  Título: Lights  
  Descripción: Ejercicio de luces y físicas con After Effects

**Arquitectura de información:**  
Está bien, pero muy condensada para una sola página. No tan ágil en mobile.  
Muchas imágenes no están preparadas para mobile: faltó redimensionar, seleccionar formato y optimizar.

---

### [+12] Creatividad

Tu propuesta tiene identidad clara, coherencia de marca y elementos memorables como la W animada.  
Sin embargo, faltó una exploración más profunda en el diseño de interacción, narrativa del sitio y dinamismo de presentación en las piezas.

---

### [+10] Calidad del Código

Tu código está muy bien: buena estructura, nombres, indentación, commits.  
Tienes mucho talento. Tu curiosidad por entender cómo se construyen y funcionan las cosas te hace tener una base sólida.  
Tienes una mente ingenieril, te auguro un gran futuro construyendo cosas interesantes.
