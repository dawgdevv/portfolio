# Unified Intro Card Design

## Goal

Replace the separate greeting, name panel, biography card, and social dock with one cohesive introduction card that quickly explains who Nishant is and gives visitors clear paths to his professional profiles.

## Layout

The card keeps the portfolio's neo-brutalist visual language: square corners, heavy borders, high contrast, and offset shadows.

- Header: “Hi there 👋, I’m” followed by a prominent “Nishant Raj” name block.
- Main content: a responsive two-column layout.
  - Left column: the existing three-paragraph professional introduction.
  - Right column: a compact directory of five external links.
- On small screens, the link directory stacks below the introduction.

## Link Directory

Each row contains its existing icon, a label, a short description, and a directional arrow. The complete row is keyboard-focusable and opens in a new tab.

- Resume — Experience, skills, and selected work
- GitHub — Code, open source, and experiments
- LinkedIn — Professional experience and updates
- X — Thoughts on engineering and current work
- Peerlist — Developer profile and featured projects

## Component Changes

- `Hero` will own and render the unified card.
- `App` will continue supplying the link data and URLs.
- The separate `Dock` rendering will be removed from `Hero`.
- `Dock` may be deleted if it has no remaining callers.

## Interaction and Accessibility

- Link information remains visible without hover.
- Hover and focus states use translation and shadow changes without hiding content.
- External links use `target="_blank"` and `rel="noopener noreferrer"`.
- Icons are decorative; visible labels provide accessible names.
- The layout preserves all links and descriptions on mobile.

## Verification

- Confirm all five links point to their current destinations.
- Check keyboard navigation and visible focus states.
- Check narrow mobile and wide desktop layouts.
- Run the production build and lint diagnostics for edited files.
