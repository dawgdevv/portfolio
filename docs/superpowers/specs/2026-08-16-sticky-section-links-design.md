# Sticky Section Links

## Goal

Add minimal in-page navigation that stays at the top of the portfolio and lets visitors move directly between its main sections.

## Design

- Add a semantic navigation row at the top of the main content area.
- Use five plain text links: `intro`, `skills`, `experience`, `projects`, and `contact`.
- Match the existing lowercase, underlined profile-link treatment rather than introducing a pill, card, button, or visible navigation container.
- Keep the row sticky while scrolling against an opaque ink-black surface so page content does not reduce legibility.
- Align the navigation to the existing `portfolio-section` width.
- Allow the links to wrap cleanly if the available mobile width becomes constrained.

## Interaction

- Each item uses a native fragment link to an existing section ID.
- `intro`, `skills`, `experience`, and `projects` target their existing sections.
- Add a `contact` target to the existing “Building something?” block in the hero.
- Preserve the existing global smooth scrolling behavior.
- When reduced motion is enabled, the existing stylesheet continues to disable smooth scrolling.
- No active-section tracking or JavaScript scroll listener will be added.

## Accessibility

- Use a `<nav>` element with an accessible label.
- Keep every link keyboard reachable with a visible focus state.
- Ensure sticky navigation does not obscure anchored headings by preserving the existing scroll offset and adding an equivalent offset to the contact target.
- Maintain readable soft-white text against the ink-black surface.

## Scope

Only `App.jsx` and the existing contact block in `Hero.jsx` need structural changes. No section content, project data, layout hierarchy, or external profile links will change.

## Verification

- Run the production build.
- Confirm all five links target the intended content.
- Confirm the navigation remains at the top while scrolling.
- Check wrapping and overlap at mobile width.
- Verify keyboard focus and reduced-motion scrolling behavior.
