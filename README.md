# KET-ADVENTURE

Web interactiva de preparación para el examen **KET / A2 Key** (READY, SET, KET!),
usada con alumnas de 6º de Primaria.

🔗 Web publicada: https://u0212823781-jpg.github.io/KET-ADVENTURE/

## Qué hay dentro

La portada (`index.html`) da acceso a tres bloques:

| Bloque | Qué es | Página de entrada |
|---|---|---|
| **Trainer Pre-Test 1** | Vocabulario de preparación (Parts 1–5) + trainer de Writing Part 6, con ejercicios autocorregibles | `PAGINAS/pretest1.html` |
| **Test 1** | Examen completo de práctica (Reading & Writing + Listening) | `PAGINAS/test1.html` |
| **Test 2** | Examen completo de práctica (Reading & Writing + Listening) | `PAGINAS/test2.html` |

Dentro del Trainer Pre-Test 1, cada Vocabulary Challenge tiene además un botón
**"▶ Play the presentation"** que abre una versión deslizable (tipo PowerPoint)
de las diapositivas de vocabulario:

- `PAGINAS/play-vocab1.html` → diapositivas de Vocabulary Challenge Parts 1 & 2
- `PAGINAS/play-vocab2.html` → diapositivas de Vocabulary Challenge Parts 3, 4 & 5

## Estructura de carpetas

```
KET-ADVENTURE/
├── index.html              ← portada (SIEMPRE suelta en la raíz, no la muevas)
├── PAGINAS/                ← todas las páginas .html (menos la portada)
├── ESTILOS/                ← hojas de estilo .css
│   ├── style.css            → usada por test1.html y test2.html
│   ├── style-pretest.css    → usada por pretest1.html
│   └── style-slideshow.css  → usada por play-vocab1.html y play-vocab2.html
├── SCRIPTS/                 ← lógica y contenido en .js
│   ├── app.js + data-test1.js + data-test2.js   → Test 1 y Test 2
│   ├── app-pretest.js + data-pretest1.js        → Trainer Pre-Test 1
│   └── slideshow.js                              → reproductor de diapositivas
└── IMAGENES/                ← todas las imágenes (pósters, historias, diapositivas)
    ├── ppt-vocab1/  y  ppt-vocab2/  → diapositivas de cada presentación
    └── el resto de imágenes sueltas de tests y trainer
```

## Regla de oro al subir archivos nuevos

- **La portada (`index.html`) va siempre suelta en la raíz**, al mismo nivel
  que las 4 carpetas — nunca dentro de PAGINAS.
- Cualquier página nueva (`.html`) va dentro de **PAGINAS**.
- Cualquier estilo nuevo (`.css`) va dentro de **ESTILOS**.
- Cualquier script o archivo de contenido (`.js`) va dentro de **SCRIPTS**.
- Cualquier imagen va dentro de **IMAGENES** (en su propia subcarpeta si son
  varias relacionadas, como las diapositivas).
- Después de subir cambios, espera 1–2 minutos y fuerza recarga en el
  navegador (Ctrl+Shift+R) para ver la versión nueva — GitHub Pages tarda
  un poco en publicar.

## Historial de cambios

- **Test 1 y Test 2**: examen completo con partes de Reading & Writing y
  Listening, autocorregibles.
- **Trainer Pre-Test 1**: añadido para preparar vocabulario antes de Test 1
  (Vocabulary Challenge Parts 1&2 y Parts 3,4&5) y un trainer específico de
  Writing Part 6. Los ejercicios se bloquean tras el primer "Check" y se
  puede reiniciar cada ejercicio con el botón "🔄 Try again".
- **Presentaciones**: las diapositivas de cada Vocabulary Challenge se
  pueden reproducir directamente desde la web con el botón "▶ Play the
  presentation".
