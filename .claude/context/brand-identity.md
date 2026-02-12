# Identidad de Marca — Estudio 4A

## El Cliente

**Estudio 4A** (anteriormente Palza Asociados). Estudio boutique de arquitectura en Bolivia. 40+ años de trayectoria internacional bajo Michael Palza. La nueva identidad fusiona la experiencia consagrada con la energía de un equipo joven y diverso.

- **Concepto central**: "Simbiosis y Matiz" — la tensión creativa entre legado y rebeldía
- **Filosofía**: "Human to Human" — arquitectura que prioriza la conexión emocional, la libertad creativa y la experiencia sensorial del usuario
- **Diferenciador**: El Matiz — el color, la textura y la materialidad como protagonistas. No como ornamento, sino como atmósfera y vínculo emocional.

---

## El Logo

El monograma **"4a"** es una pieza tipográfica con carácter arquitectónico:

- El **"4"** incorpora una forma triangular geométrica — un plano inclinado que evoca cubierta, estructura, dibujo técnico. La diagonal es un trazo recto y preciso.
- La **"a"** es una serif clásica en minúscula — evoca tradición, oficio, elegancia caligráfica. Su curva orgánica contrasta con la rigidez geométrica del 4.
- La tensión entre la geometría dura del "4" y la curva orgánica de la "a" **ES** la marca: **rigor + sensibilidad**, el mismo concepto de "simbiosis".

### Versiones del Logo

| Versión | Archivo | Uso |
|---------|---------|-----|
| Negro sobre claro | `4a-dark.svg` | Navbar (estado inicial), materiales claros |
| Blanco sobre oscuro | `4a-light.svg` | Navbar scroll en secciones dark, footer |
| Rojo + Negro | `4a-accent.svg` | Uso editorial, destacados, favicon |
| "Estudio 4a" completo | `estudio-4a.svg` | Footer, preloader, materiales formales |

### Reglas de Uso en la Web

- Tamaño mínimo navbar: 32px de altura (desktop), 28px (mobile)
- Zona de exclusión: espacio limpio alrededor = la altura del carácter "4"
- En navbar: SOLO monograma "4a", sin descriptor
- En footer: versión completa "Estudio 4a" con descriptor
- NUNCA sombras, gradientes, efectos, ni deformaciones
- Implementar SIEMPRE como SVG inline o componente Vue (nunca PNG/JPG)

---

## Paleta Oficial

| Color | Hex | Significado Conceptual |
|-------|-----|----------------------|
| **Negro Carbón** | `#1D1D1B` | No es negro puro → calidez sutil. Textos, fondos oscuros, logo. |
| **Rojo Estudio** | `#B81716` | Profundo, serio, no agresivo. Uso quirúrgico, 3% del espacio. |
| **Gris Piedra** | `#EBEBEB` | Remite a hormigón, piedra → conexión arquitectónica. |
| **Blanco** | `#FFFFFF` | Silencio visual. 70% del espacio. |

---

## Distribución Cromática

```
70% — Blanco (#FFFFFF) → fondo predominante, aire, espacio
15% — Gris Piedra (#EBEBEB) → secciones alternativas, separadores
12% — Negro Carbón (#1D1D1B) → textos, secciones oscuras, navbar, footer
 3% — Rojo Estudio (#B81716) → CTAs, líneas decorativas, hover states
```

---

## Reglas del Rojo (#B81716)

### Permitido
- Líneas decorativas finas (1px o 2px de alto)
- Hover en enlaces (color shift a rojo)
- UN SOLO botón primary por viewport visible
- Detalles del logo en versión acento
- Indicador activo en navegación
- Números/métricas destacados (con moderación)
- Línea de subrayado animada del nav

### Prohibido
- Fondos completos de sección en rojo
- Bordes gruesos en rojo
- Textos largos o párrafos en rojo
- Múltiples elementos rojos compitiendo en la misma vista
- Gradientes con rojo
- Iconografía completa en rojo
- Usar rojo "porque necesita color" — si no aporta, no va
