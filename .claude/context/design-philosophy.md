# Filosofía de Diseño — Estudio 4A

> Este documento gobierna CADA decisión visual y técnica. Leer antes de escribir una sola línea de código UI.

## Definición Operativa de "Sofisticación"

**Sofisticado NO es**: ornamental, lujoso, cargado, espectacular, ruidoso.

**Sofisticado ES**: pensado (no decorado), depurado (no cargado), preciso (no excesivo). Es una condición de refinamiento intelectual, control formal y precisión cultural. Se construye por **sustracción, coherencia y ritmo**, más que por impacto inmediato.

---

## Los 5 Principios

### 1. Claridad Silenciosa
La comunicación no necesita explicar demasiado. Confía en que su público reconoce la calidad cuando la jerarquía tipográfica es clara y contenida, los textos son breves y conceptuales, y los blancos funcionan como espacio arquitectónico. La página *respira*, como una planta bien diseñada. El silencio visual es tan importante como la imagen.

### 2. Sofisticación Cromática
El gris cálido (#EBEBEB) no es neutro: remite a materiales arquitectónicos reales (hormigón, piedra, madera envejecida, metal patinado). El negro carbón (#1D1D1B) evita el contraste duro del negro absoluto. El rojo (#B81716) no grita, sino que marca con precisión quirúrgica. El color nunca busca protagonismo, sino soporte conceptual.

### 3. Diseño a Medida
"Sofisticado" significa "no genérico". Layouts que parecen diseñados ad hoc, no plantillas evidentes. Transiciones suaves, casi imperceptibles. Interacción contenida, funcional, sin artificio tecnológico innecesario. La web, como la arquitectura del estudio, no se impone: se adapta.

### 4. Narrativa Arquitectónica
No vender "servicios", sino procesos de pensamiento. No prometer resultados espectaculares, sino calidad sostenida. Hablar de proyectos como respuestas específicas, no como objetos aislados.

### 5. Síntesis
Cada decisión tipográfica, cromática y espacial debe comunicar calidad, innovación contenida y una arquitectura pensada a medida.

---

## Regla de Oro

> Ante cualquier decisión de diseño, pregúntate: "¿Esto fue pensado o fue agregado?" Si fue agregado, elimínalo.

---

## Jerarquía Tipográfica

- **Títulos**: `font-display`, peso light (300) o regular (400). NUNCA bold. La grandeza viene del tamaño y el espacio.
- **Labels de sección**: `font-body`, UPPERCASE, `text-xs`, `tracking-wide`, color `text-tertiary`. Precedidos por una línea roja de 48px.
- **Body text**: `font-body`, `text-base` o `text-lg`, peso regular, line-height 1.6-1.8. Columna estrecha (680px máx).
- **Máximo 2 pesos** visibles por sección.

---

## Espaciado

- El espacio negativo no es "vacío" — es espacio arquitectónico. Es material de diseño.
- Secciones: `spacing-section` (96-180px adaptativo)
- El scroll debe sentirse *lento*. Cada sección es una pausa.
- Cuando dudes: **siempre más espacio**.

---

## Color

- Blanco domina. Gris piedra separa. Negro ancla. Rojo *puntúa*.
- El rojo es una firma a mano en un documento impecable: pequeño, preciso, decisivo.
- Secciones oscuras: máximo 2 por página.
- Transiciones claro/oscuro: naturales, nunca abruptas.

---

## Imágenes

- Las fotos arquitectónicas SON el portafolio. Impecables.
- Mostrar: luz natural, textura, materialidad, escala humana.
- Aspect ratios: 16:9, 3:4, 1:1.
- Hover: scale 1.02 + ligero oscurecimiento.
- NUNCA overlays pesados. NUNCA filtros de color.

---

## Lo que NUNCA Debe Pasar

```
- Colores fuera de la paleta (#1D1D1B, #B81716, #EBEBEB, #FFFFFF)
- Gradientes de cualquier tipo (excepto overlays sobre video/imagen)
- Bold/extra-bold en títulos
- Grids 3x3 simétricos con cards idénticas
- Iconos decorativos genéricos
- Sombras exageradas
- Border-radius > 8px
- Inter, Roboto, Open Sans, Poppins, Montserrat
- AOS, Animate.css
- Sliders con flechas genéricas
- Cards con ícono+título+descripción
- Formularios con estilos default
- Stock photos
- Anything que parezca "template"
- Marketing agresivo ("¡Los mejores!", "¡Contáctenos ya!")
- Elementos decorativos que no comunican
```

---

## Checklist de Verificación

Antes de dar un componente por terminado:

- [ ] ¿Solo usé los 4 colores oficiales?
- [ ] ¿El rojo tiene máximo 1-2 apariciones por viewport?
- [ ] ¿Títulos en font-display, peso light/regular, NUNCA bold?
- [ ] ¿Máximo 2 pesos tipográficos por sección?
- [ ] ¿Espaciado generoso? (si dudas → más)
- [ ] ¿Animaciones imperceptibles, funcionales, contenidas?
- [ ] ¿Lazy loading + formato optimizado en imágenes?
- [ ] ¿Mobile conserva la sofisticación?
- [ ] ¿Hover states sutiles pero perceptibles?
- [ ] ¿Composición asimétrica, no grids uniformes?
- [ ] ¿Cada decisión fue *pensada*, no *agregada*?
- [ ] ¿La sección *respira*? ¿Tiene silencio visual?
- [ ] ¿Se siente estudio de autor, no template?
