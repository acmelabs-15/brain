---
package: addy
path: references/accessibility-checklist.md
type: doc
bytes: 5206
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# references/accessibility-checklist.md

## Purpose — required, verbatim
> "Quick reference for WCAG 2.1 AA compliance. Use alongside the `frontend-ui-engineering` skill." — references/accessibility-checklist.md:3

## Design intent — required
Actionable WCAG 2.1 AA compliance reference checklist for frontend UI development, providing concrete verification gates for keyboard navigation, screen reader support, visual presentation, forms, and dynamic content. It equips AI coding agents with direct HTML implementation patterns (buttons vs links, label associations, ARIA live regions), CLI/browser audit tool commands, and an anti-pattern correction table to prevent common accessibility regressions.

## Phase — required
cross-phase

## Inputs — required
UI component implementation, markup structure, interactive element design, form definitions, and color styling.

## Outputs — required
none

## Invokes — required
- skill frontend-ui-engineering — references/accessibility-checklist.md:3

## Invoked by — required
- doc README.md — README.md:311
- doc docs/getting-started.md — docs/getting-started.md:136
- skill skills/frontend-ui-engineering — skills/frontend-ui-engineering/SKILL.md:297
- skill skills/shipping-and-launch — skills/shipping-and-launch/SKILL.md:271

## Concepts named — required, verbatim
- `Accessibility Checklist` — references/accessibility-checklist.md:1 — defined here
- `WCAG 2.1 AA` — references/accessibility-checklist.md:3 — used here
- `frontend-ui-engineering` — references/accessibility-checklist.md:3 — used here
- `Keyboard Navigation` — references/accessibility-checklist.md:15 — defined here
- `Screen Readers` — references/accessibility-checklist.md:24 — defined here
- `Visual` — references/accessibility-checklist.md:33 — defined here
- `Forms` — references/accessibility-checklist.md:40 — defined here
- `Content` — references/accessibility-checklist.md:48 — defined here
- `ARIA Live Regions` — references/accessibility-checklist.md:10, 140 — defined here
- `axe-core` — references/accessibility-checklist.md:127 — used here
- `pa11y` — references/accessibility-checklist.md:128 — used here
- `VoiceOver` — references/accessibility-checklist.md:135 — used here
- `NVDA` — references/accessibility-checklist.md:136 — used here
- `JAWS` — references/accessibility-checklist.md:136 — used here
- `Orca` — references/accessibility-checklist.md:137 — used here
- `role="status"` — references/accessibility-checklist.md:95, 146 — used here
- `role="alert"` — references/accessibility-checklist.md:98, 147 — used here
- `aria-live="polite"` — references/accessibility-checklist.md:95, 144 — used here
- `aria-live="assertive"` — references/accessibility-checklist.md:145 — used here

## Structure
- # Accessibility Checklist
- ## Table of Contents
- ## Essential Checks
- ### Keyboard Navigation
- ### Screen Readers
- ### Visual
- ### Forms
- ### Content
- ## Common HTML Patterns
- ### Buttons vs. Links
- ### Form Labels
- ### ARIA Roles
- ### Accessible Lists
- ## Testing Tools
- ## Quick Reference: ARIA Live Regions
- ## Common Anti-Patterns

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · references/accessibility-checklist.md:127-128 · Documents running `npx axe-core` and `npx pa11y` as CLI commands, but `axe-core` is an API engine library whose CLI package is `@axe-core/cli`, causing direct execution of `npx axe-core` to fail.

## Observations
- Actionable anti-pattern remediation table mapping common agent mistakes (e.g. `div` as button, `tabindex > 0`, removing focus outlines, color-only state indication) directly to fixes.
- Specific measurable thresholds: contrast ≥ 4.5:1 (normal text) and ≥ 3:1 (large text 18px+), text resizing to 200% without breakage, touch targets ≥ 44x44px, flashing <= 3 times per second.

## Context cost
5206 bytes, ~1300 tokens. Supplementary reference loaded on demand during UI engineering or launch audits.
