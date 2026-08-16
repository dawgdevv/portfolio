# Ink-Black Theme Inversion

## Goal

Invert the portfolio from its current light theme to a modern dark theme without changing its content, layout, component structure, spacing, or behavior.

## Visual Direction

- Use a deep ink-black background with a restrained charcoal gradient that adds depth without becoming a decorative focal point.
- Render primary text and interactive labels in a softly tinted white rather than stark pure white.
- Preserve the existing typography, hierarchy, alignment, and responsive layout.
- Convert black borders, dividers, focus treatments, and the profile-image offset shadow to near-white equivalents so the current graphic structure remains visible.
- Preserve existing opacity-based secondary text hierarchy against the new dark surface.

## Scope

The implementation will update only theme-related color styles in the global stylesheet and existing component class names. It will not rewrite copy, rearrange sections, add components, introduce new interactions, or alter project data.

The affected surfaces are:

- Page background and default foreground color
- Links and skip-link colors
- Section dividers and footer border
- Hero title, profile-image border, and offset shadow
- Project and open-source dividers
- Any remaining explicit black or white utility colors that must be inverted for contrast
- Desktop custom cursor colors

## Accessibility

- Primary text must maintain strong contrast against the darkest point of the background.
- Secondary text using opacity must remain readable.
- Keyboard focus and the skip link must remain clearly visible.
- The gradient must not reduce text legibility or create bright areas behind content.

## Responsive Behavior

No responsive behavior changes. The gradient covers the viewport while the existing mobile, tablet, and desktop layout remains intact.

## Verification

- Run the production build.
- Search for explicit black and white color utilities to confirm every structural color has been intentionally handled.
- Inspect the hero, section dividers, expanded project details, footer, skip link, and custom cursor for sufficient contrast.
- Confirm there are no content, spacing, layout, or behavior regressions.
