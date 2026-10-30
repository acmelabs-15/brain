---
spec: SPEC-001
sources: [IDEA-001, DEC-002, RES-001]
---
# SPEC-001: Colour tokens for a light and a dark theme

## Objective
Every colour in the app comes from one set of tokens, with a light and a dark value each, chosen by the `prefers-color-scheme` media feature (RES-001).

## Tech Stack
CSS custom properties. No new dependency.

## Commands
- `bun run check`: typecheck, lint, the contrast check and every test.

## Project Structure
- `src/theme/tokens.css`: the tokens.

## Code Style
One custom property per token, named by its role, not its colour.

## Testing Strategy
The contrast check runs on every screen in both themes.

## Boundaries
- Always: name a token by its role.
- Ask first: a new token.
- Never: a colour literal outside `tokens.css`.

## User Stories
1. As a night-time user, I want the app dark when my system is dark, so that it does not dazzle me.

## Out of scope
The switch in the app: SPEC-002.

## Prior-art tests
`src/theme/__tests__/contrast.test.ts`.

## Success Criteria
Every screen passes the contrast check in both themes.

## Open Questions
None.
