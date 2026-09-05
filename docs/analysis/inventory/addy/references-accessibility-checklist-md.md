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
verified: 2026-09-04 quote-check+coverage
---

# references/accessibility-checklist.md

## Purpose — required, verbatim
> "Quick reference for WCAG 2.1 AA compliance. Use alongside the `frontend-ui-engineering` skill." — references/accessibility-checklist.md:3

## Design intent — required
Provides an actionable reference checklist and markup guidelines to achieve and maintain WCAG 2.1 AA compliance across user interfaces. Covering keyboard navigation, screen reader semantics, visual contrast thresholds, accessible form patterns, ARIA roles and live regions, automated/manual testing tooling, and common anti-patterns, it ensures that frontend features are usable by people with disabilities and verifiable against standard accessibility criteria.

## Phase — required
cross-phase

## Inputs — required
- Frontend UI components, templates, and interactive elements — references/accessibility-checklist.md:3, 55

## Outputs — required
- Accessible HTML markup patterns, ARIA attributes, and compliance verification verdicts — references/accessibility-checklist.md:13-54, 55-121

## Invokes — required
- skill frontend-ui-engineering — references/accessibility-checklist.md:3

## Invoked by — required
- doc README.md — README.md:311
- skill frontend-ui-engineering — skills/frontend-ui-engineering/SKILL.md:297
- skill shipping-and-launch — skills/shipping-and-launch/SKILL.md:271
- doc docs/getting-started.md — docs/getting-started.md:136

## Concepts named — required, verbatim
- `Accessibility Checklist` — references/accessibility-checklist.md:1 — defined here
- `WCAG 2.1 AA` — references/accessibility-checklist.md:3 — used here
- `Essential Checks` — references/accessibility-checklist.md:13 — defined here
- `Keyboard Navigation` — references/accessibility-checklist.md:15 — defined here
- `Screen Readers` — references/accessibility-checklist.md:24 — defined here
- `aria-live` — references/accessibility-checklist.md:30 — used here
- `Visual` — references/accessibility-checklist.md:33 — defined here
- `Forms` — references/accessibility-checklist.md:40 — defined here
- `Content` — references/accessibility-checklist.md:48 — defined here
- `Common HTML Patterns` — references/accessibility-checklist.md:55 — defined here
- `Buttons vs. Links` — references/accessibility-checklist.md:57 — defined here
- `Form Labels` — references/accessibility-checklist.md:70 — defined here
- `ARIA Roles` — references/accessibility-checklist.md:87 — defined here
- `Accessible Lists` — references/accessibility-checklist.md:112 — defined here
- `Testing Tools` — references/accessibility-checklist.md:123 — defined here
- `ARIA Live Regions` — references/accessibility-checklist.md:140 — defined here
- `Common Anti-Patterns` — references/accessibility-checklist.md:149 — defined here

## Structure
- # Accessibility Checklist — references/accessibility-checklist.md:1
- ## Table of Contents — references/accessibility-checklist.md:5
- ## Essential Checks — references/accessibility-checklist.md:13
- ### Keyboard Navigation — references/accessibility-checklist.md:15
- ### Screen Readers — references/accessibility-checklist.md:24
- ### Visual — references/accessibility-checklist.md:33
- ### Forms — references/accessibility-checklist.md:40
- ### Content — references/accessibility-checklist.md:48
- ## Common HTML Patterns — references/accessibility-checklist.md:55
- ### Buttons vs. Links — references/accessibility-checklist.md:57
- ### Form Labels — references/accessibility-checklist.md:70
- ### ARIA Roles — references/accessibility-checklist.md:87
- ### Accessible Lists — references/accessibility-checklist.md:112
- ## Testing Tools — references/accessibility-checklist.md:123
- ## Quick Reference: ARIA Live Regions — references/accessibility-checklist.md:140
- ## Common Anti-Patterns — references/accessibility-checklist.md:149

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes concrete code comparisons illustrating correct vs incorrect markup (e.g., button vs link semantics, explicit vs implicit form label association, modal dialog ARIA markup). Cites specific contrast ratios (4.5:1 for normal text, 3:1 for large text 18px+ and UI components) and mobile touch target minimums (44x44px).

## Context cost
5,206 bytes (approx. 1,300 tokens). Pure reference checklist with zero external script or asset dependencies.
