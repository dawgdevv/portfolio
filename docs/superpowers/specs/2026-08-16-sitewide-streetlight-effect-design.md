# Sitewide Streetlight Effect

## Goal

Create the impression that the portfolio is standing beneath a streetlight on a dark night: a soft overhead beam illuminates the central content while the surrounding page remains black.

## Visual Design

- Keep the existing solid-black page as the base.
- Add a fixed, decorative light layer beginning at the horizontal center of the top viewport edge.
- Shape the light as a narrow source that gradually widens toward the bottom of the viewport.
- Use a restrained warm-white tint rather than a neon, blue, or strongly yellow glow.
- Add a soft radial pool within the beam to keep the central portfolio content readable without washing out the black theme.
- Fade every light edge smoothly so no hard triangle or obvious gradient boundary is visible.

## Implementation

- Build the effect with CSS pseudo-elements on the page shell; no component library or runtime dependency is needed.
- Keep the light fixed to the viewport so content appears to move through it while scrolling.
- Place the decorative layer behind all content and make it ignore pointer events.
- Use gradients, blur, and clipping only; do not add canvas, SVG filters, JavaScript pointer tracking, or scroll listeners.
- Keep the existing content stacking context above the effect.

## Responsive Behavior

- Use viewport-relative sizing so the beam remains centered and covers the primary content column on desktop.
- Widen the beam on narrow screens so body text does not move into an excessively dark edge.
- Preserve the same visual intent in portrait and landscape layouts.

## Accessibility and Performance

- The effect must never reduce text contrast below the current dark-theme level.
- It must not block selection, clicking, focus outlines, or sticky navigation.
- The initial version is static and therefore requires no continuous animation or GPU-heavy event handling.
- Reduced-motion behavior remains unchanged because the effect does not move.

## Scope

The implementation is limited to the global stylesheet and, only if required for layering, one non-semantic decorative hook in the existing app shell. Content, navigation, typography, section layout, and interactions remain unchanged.

## Verification

- Run the production build.
- Confirm the light layer is emitted in the compiled stylesheet.
- Confirm links, project toggles, text selection, and sticky navigation remain interactive.
- Inspect the beam at mobile, tablet, and desktop widths.
- Confirm there are no hard gradient edges or horizontal overflow.
