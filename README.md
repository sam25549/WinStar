
# WinStar – Evaluación Final

Este documento contiene la retroalimentación detallada sobre el proyecto **WinStar**, evaluado en diferentes criterios técnicos y creativos.

---

## [+15] Metadata, Markup y Accesibilidad

- Excelente estructura semántica en el HTML, uso correcto de metadata, favicon y etiquetas accesibles.
- Buen entendimiento del documento y sus componentes.
- Observación: en el apartado de contacto faltó un link funcional para el correo electrónico. Se sugiere usar:

```html
mailto:info@winstar.com
```

---

## [+13] Funcionalidad / Interactividad

- Algunas imágenes están extremadamente sobredimensionadas:
  - `Profile.png` (3932x3120px) usada como ícono de 75x60.
  - `profileNormsl.png` supera los 6MB.
- Recomendación: redimensionar y comprimir imágenes para mejorar carga y rendimiento.
- En mobile, el sitio genera scroll horizontal excesivo (`overflow-x`); se deben revisar los contenedores.
- El menú presenta errores en desktop: íconos de “hamburguesa” y “cerrar” aparecen al mismo tiempo.
  - Sugerencia: mantener navegación siempre visible en desktop; usar menú hamburguesa solo en mobile.
- El scroll en pantallas grandes no funciona correctamente si no se genera contenido suficiente: esto detiene la navegación. Se sugiere forzar `min-height` o incluir un indicador visual para scroll.

---

## [+12] Diseño y Estilo

- El hover sobre servicios es muy invasivo, cubre otros elementos y no aporta valor visual.
  - Se sugiere usar un diseño más discreto o integrar las imágenes como acompañamiento del texto.
- Inconsistencias visuales:
  - Algunos elementos tienen bordes redondeados, otros no.
  - El footer muestra dos veces el nombre *WinStar* con estilos distintos (Serif + Script vs Sans-Serif).
- Buena animación de la “W” animada, pero pudo aprovecharse mejor como recurso gráfico único.
  - Evitar redundancias: la “W” animada podría haber reemplazado logotipos secundarios.
- Recomendación visual: ver el documental _Rams – Principles of Good Design_ (Braun)  
  https://archive.org/details/rams.-principles.of.-good.-design

---

## [+12] Creatividad

- Hay una propuesta clara, con intención estética y buen uso de recursos como la animación tipográfica.
- Algunas decisiones creativas (como la W animada) son acertadas, pero no se integran del todo con el resto del diseño.
- Faltó consistencia visual entre secciones y un mejor aprovechamiento del potencial creativo de las piezas gráficas.
  - Las galerías y proyectos tienen obras muy buenas, pero la interfaz no potencia su impacto visual.
  - Sugerencia: uso de lightbox, zoom al clic, o navegación horizontal.

---

## [+13] Responsive

- La experiencia responsive se ve afectada por el exceso de scroll vertical y horizontal.
- Las secciones en viewport completo dificultan la navegación, sobre todo en mobile.
  - Sugerencia: incluir indicadores visuales (flechas, hints) o reducir el tamaño de los contenedores para facilitar el flujo.
- En mobile, elementos se desbordan y dificultan la lectura y la navegación.

---

## [+13] Contenido

- El contenido tiene una base sólida y coherente.
- La sección de proyectos pudo aprovechar más su valor visual con una presentación dinámica.
  - Galerías podrían adaptarse a proporción del contenido (portrait vs. landscape).
- Faltan títulos descriptivos y alts informativos:
  - Mejorar nombres como “Animación 2” por:
    - **Título**: *Lights*  
    - **Descripción**: *Ejercicios de luces y físicas con After Effects*
- Arquitectura de información correcta pero demasiado condensada en una sola página.
- Optimización de imágenes para mobile sigue pendiente.

---

## [+10] Calidad del Código

- Código bien estructurado, con nombres claros y buena indentación.
- Buen manejo de commits y organización general.
- Se nota curiosidad técnica y un enfoque ingenieril sólido.
- Muy buenas bases para construir proyectos funcionales a futuro.

---

## Evaluación Global

**Total: 88/100 puntos**

- Gran potencial creativo y técnico.
- Buenas ideas que con un poco más de refinamiento podrían lograr una experiencia muy sólida.
- Áreas clave de mejora: performance visual, cohesión estética, accesibilidad mobile y experiencia de usuario.
