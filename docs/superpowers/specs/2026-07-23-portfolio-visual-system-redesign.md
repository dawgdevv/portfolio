# Portfolio Visual System Redesign

## Goal

Revamp the full single-page portfolio into a consistent, refined neo-brutalist experience based on the visual system established in `Hero.jsx`. The result must remain easy to scan for startup teams, recruiters, freelance clients, developers, and open-source maintainers.

## Design Direction

The portfolio will use refined editorial neo-brutalism:

- Monochrome white, black, and zinc surfaces
- Square corners, four-pixel structural borders, and hard offset shadows
- Large uppercase headings and tightly tracked micro-labels
- Restrained translation and shadow changes for interaction
- Generous spacing and clear internal dividers instead of many disconnected cards
- No decorative purple, blue, red, gradients, glass effects, or soft shadows

The existing Hero is the visual source of truth.

## Shared Visual System

Reusable CSS component classes will define:

- Primary panel shell and dark-mode inversion
- Panel headers and structural dividers
- Section labels and headings
- Inverted badges
- Technology and filter tags
- Link rows and icon boxes
- Interactive lift, hard shadows, and focus outlines
- Primary and secondary surfaces

All major sections will align to `max-w-5xl` and use one consistent responsive spacing scale.

## App Shell

- Preserve the thin scroll progress indicator.
- Increase vertical space between major sections.
- Remove unused active-section navigation state and obsolete `nav` offset logic.
- Replace the fixed “Made By” badge with a non-overlapping footer treatment.
- Add a skip link and a semantic main-content target.
- Keep the scene background while reducing its contrast and snowfall density.

## Hero

Retain the approved unified Hero structure:

- Greeting and prominent name
- Professional identity badge
- Three concise introduction paragraphs
- Visible Resume, LinkedIn, GitHub, X, and Peerlist link directory

Only shared class adoption and small responsive refinements are in scope.

## Experience

Experience becomes one unified panel rather than a floating heading and separate cards.

- Panel header contains the section label and title.
- Jobs render as bordered editorial rows.
- Each row gives the role and company priority, with date and location as compact metadata.
- Descriptions remain readable at a moderate line length.
- Technology tags use the shared monochrome tag style.
- Decorative timeline elements are removed in favor of clearer hierarchy.

## Projects

Projects remain searchable, filterable, and expandable.

- Search receives a visible label or accessible name.
- Filters use shared tags and expose `aria-pressed`.
- Each project summary is a semantic button with `aria-expanded`.
- Summary rows show image, name, primary technologies, available links, and an expansion indicator.
- Expanded content uses solid structural borders and a responsive editorial grid.
- Live, source, and video actions use descriptive accessible labels.
- Accent-colored and dashed legacy styling is replaced by the monochrome system.
- Mobile retains thumbnails, descriptions, and a clear “Details” affordance.

## Open Source

Open source becomes one structured panel:

- Header uses the shared section treatment.
- Contributions render as high-contrast rows with organization, project, and description.
- Pull-request links receive descriptive labels instead of generic numbering.
- Link rows remain visible and keyboard accessible without relying on hover.

## Background and Motion

- Keep `scene.webp` as the fixed background.
- Add a subtle dark overlay to protect content contrast.
- Reduce snowfall from 600 particles to a responsive count, with fewer particles on small screens.
- Pause animation when the page is hidden.
- Disable snowfall and nonessential transitions when `prefers-reduced-motion: reduce` is active.
- Keep the custom cursor only for fine-pointer desktop devices and disable its spring motion for reduced-motion users.

## Cleanup

- Remove unused `ScrollReveal` and unused generic UI components if they have no callers.
- Remove obsolete color variables and legacy component classes that conflict with the monochrome system.
- Remove unused `GITHUB_CONFIG` and `CONTACT` only if they have no remaining callers.
- Retain project and experience content without rewriting claims.

## Accessibility

- Every interactive control must be reachable by keyboard.
- All focusable elements receive a visible high-contrast focus outline.
- Search controls have labels.
- Toggle filters expose pressed state.
- Project expanders expose expanded state and control relationships.
- Decorative icons and timeline details are hidden from assistive technology.
- External link labels describe their destination.
- Motion preferences are respected.

## Responsive Behavior

- Major panels share one aligned width.
- Internal grids collapse into readable stacked layouts.
- No critical actions or content are hidden on mobile.
- Long titles wrap without overflow.
- Fixed elements do not cover content.
- Touch targets remain at least 40 pixels where practical.

## Verification

- Run the production build.
- Run lint diagnostics on all edited files.
- Confirm search, filtering, project expansion, and external links.
- Test keyboard navigation and visible focus.
- Inspect mobile, tablet, and desktop widths.
- Verify reduced-motion behavior.
- Confirm no removed component retains imports or references.
