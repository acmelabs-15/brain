---
package: addy
path: references/accessibility-checklist.md
type: doc
bytes: 5206
unit: inv-addy-4
---

# references/accessibility-checklist.md

## Purpose — required, verbatim
> "Quick reference for WCAG 2.1 AA compliance. Use alongside the `frontend-ui-engineering` skill." — references/accessibility-checklist.md:3

## Design intent — required
Delivers a structured, practical developer checklist for WCAG 2.1 AA compliance, organizing requirements across Keyboard Navigation, Screen Readers, Visual contrast/resizing, Form labeling & error messaging, Content semantics, ARIA roles & live region behavior (`polite` vs `assertive`), automated/manual testing tools, and common HTML anti-patterns.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill frontend-ui-engineering — references/accessibility-checklist.md:3

## Invoked by — required
- skills/frontend-ui-engineering/SKILL.md:297
- skills/shipping-and-launch/SKILL.md:271
- docs/getting-started.md:136
- README.md:311

## Concepts named — required, verbatim
- `WCAG 2.1 AA` — references/accessibility-checklist.md:3 — used here
- `Essential Checks` — references/accessibility-checklist.md:7, 13 — defined here
- `Keyboard Navigation` — references/accessibility-checklist.md:15 — defined here
- `Screen Readers` — references/accessibility-checklist.md:24 — defined here
- `Visual` — references/accessibility-checklist.md:33 — defined here
- `Forms` — references/accessibility-checklist.md:40 — defined here
- `Content` — references/accessibility-checklist.md:48 — defined here
- `Common HTML Patterns` — references/accessibility-checklist.md:8, 55 — defined here
- `Buttons vs. Links` — references/accessibility-checklist.md:57 — defined here
- `Form Labels` — references/accessibility-checklist.md:70 — defined here
- `ARIA Roles` — references/accessibility-checklist.md:87 — defined here
- `Accessible Lists` — references/accessibility-checklist.md:112 — defined here
- `Testing Tools` — references/accessibility-checklist.md:9, 123 — defined here
- `ARIA Live Regions` — references/accessibility-checklist.md:10, 140 — defined here
- `Common Anti-Patterns` — references/accessibility-checklist.md:11, 149 — defined here

## Structure
- `# Accessibility Checklist` — references/accessibility-checklist.md:1
- `## Table of Contents` — references/accessibility-checklist.md:5
- `## Essential Checks` — references/accessibility-checklist.md:13
- `### Keyboard Navigation` — references/accessibility-checklist.md:15
- `### Screen Readers` — references/accessibility-checklist.md:24
- `### Visual` — references/accessibility-checklist.md:33
- `### Forms` — references/accessibility-checklist.md:40
- `### Content` — references/accessibility-checklist.md:48
- `## Common HTML Patterns` — references/accessibility-checklist.md:55
- `### Buttons vs. Links` — references/accessibility-checklist.md:57
- `### Form Labels` — references/accessibility-checklist.md:70
- `### ARIA Roles` — references/accessibility-checklist.md:87
- `### Accessible Lists` — references/accessibility-checklist.md:112
- `## Testing Tools` — references/accessibility-checklist.md:123
- `## Quick Reference: ARIA Live Regions` — references/accessibility-checklist.md:140
- `## Common Anti-Patterns` — references/accessibility-checklist.md:149

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clear actionable anti-patterns table (`references/accessibility-checklist.md:149-161`) mapping antipatterns to issues and specific fixes.
- References both programmatic testing CLI tools (`axe-core`, `pa11y`) and in-browser testing workflows (Lighthouse, DevTools accessibility tree, macOS VoiceOver Cmd+F5).

## Context cost
- File size: 5,206 bytes (~1,300 tokens).
- Transitive cost when invoked: standalone reference document.
