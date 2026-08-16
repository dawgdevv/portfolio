# Body Typography

## Goal

Replace the portfolio’s generic Inter body typeface with a warmer, more human sans serif while preserving the existing layout and editorial hero signature.

## Type System

- Use Figtree for body copy, navigation, metadata, links, section headings, buttons, and other interface text.
- Retain Instrument Serif Italic exclusively for the “hey 👋 i'm nishant raj” hero heading.
- Preserve JetBrains Mono wherever the existing project explicitly requests monospace text.
- Remove unused Inter and Roboto font imports and the obsolete Roboto display token.

## Loading

- Load Figtree through the existing Google Fonts CSS-import approach.
- Request the variable weight range needed by the current utilities so existing medium, semibold, bold, and black hierarchy remains intact.
- Keep `display=swap` to ensure text remains visible while the web font loads.
- Retain a system sans-serif fallback.

## Layout and Readability

- Keep all current font sizes, spacing, line heights, and responsive breakpoints unchanged.
- Preserve the existing dark-theme color and opacity hierarchy.
- Confirm the new face does not cause navigation overflow or project metadata clipping at mobile widths.

## Scope

The implementation is limited to font imports and typography tokens in `src/index.css`. No component copy, structure, behavior, or layout will change.

## Verification

- Run the production build.
- Confirm the compiled stylesheet contains Figtree and Instrument Serif.
- Confirm Inter and Roboto are no longer loaded.
- Check the sticky navigation and long body paragraphs for wrapping regressions.
