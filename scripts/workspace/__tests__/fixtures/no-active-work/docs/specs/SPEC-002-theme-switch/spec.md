---
spec: SPEC-002
sources: [IDEA-001, DEC-002]
---
# SPEC-002: A theme switch in the app

## Objective
A switch in the settings with three choices, system, light and dark, as DEC-002 decides. The choice stays on the device.

## Tech Stack
The app's React settings page. No new dependency.

## Commands
- `bun run check`: typecheck, lint and every test.

## Project Structure
- `src/settings/ThemeSwitch.tsx`: the switch.

## Code Style
One component per file.

## Testing Strategy
`bun:test`, tests in `__tests__/` beside the file. Seam: `ThemeSwitch`.

## Boundaries
- Always: "system" is the default.
- Ask first: a fourth choice.
- Never: send the choice to the server.

## User Stories
1. As a user, I want a dark app on a light system, so that I can read at night on a work laptop.

## Out of scope
Custom colour themes.

## Prior-art tests
`src/settings/__tests__/LanguageSwitch.test.tsx`.

## Success Criteria
The choice survives a reload, and "system" follows the system theme.

## Open Questions
None.
