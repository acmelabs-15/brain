---
package: addy
path: skills/frontend-ui-engineering/SKILL.md
type: skill
bytes: 10711
unit: inv-addy-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/frontend-ui-engineering/SKILL.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated." — skills/frontend-ui-engineering/SKILL.md:3

## Design intent — required
Prevents generic "AI aesthetic" defaults (such as purple palettes, excessive gradients, `rounded-2xl`, generic heroes, lorem ipsum copy, oversized padding, uniform card grids, and heavy shadows) by enforcing production-grade frontend engineering practices. Mandates strict adherence to project design systems, component colocation, composition over configuration, separation of container data fetching from presentation components, disciplined state management scales, mobile-first responsive design, and WCAG 2.1 AA accessibility (keyboard focus, ARIA labeling, semantic HTML).

## Phase — required
addy:Build

## Inputs — required
UI design specifications, component requirements, user stories, existing project design systems, color tokens, typography scales, spacing scales, and WCAG 2.1 AA accessibility standards (skills/frontend-ui-engineering/SKILL.md:13-18, 116-168).

## Outputs — required
Colocated UI components (`.tsx`, `.test.tsx`, `.stories.tsx`, custom hooks, types) (skills/frontend-ui-engineering/SKILL.md:27-34), accessible keyboard and ARIA markup (skills/frontend-ui-engineering/SKILL.md:169-220), responsive layouts (skills/frontend-ui-engineering/SKILL.md:243-257), skeleton loaders and optimistic UI state transitions (skills/frontend-ui-engineering/SKILL.md:259-293).

## Invokes — required
- reference references/accessibility-checklist.md — skills/frontend-ui-engineering/SKILL.md:297

## Invoked by — required
- reference references/accessibility-checklist.md — references/accessibility-checklist.md:3
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:25
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:178
- doc docs/adoption-guide.md — docs/adoption-guide.md:60
- doc docs/getting-started.md — docs/getting-started.md:71
- doc docs/getting-started.md — docs/getting-started.md:136

## Concepts named — required, verbatim
- `Frontend UI Engineering` — skills/frontend-ui-engineering/SKILL.md:6 — defined here
- `Component Architecture` — skills/frontend-ui-engineering/SKILL.md:20 — defined here
- `State Management` — skills/frontend-ui-engineering/SKILL.md:101 — defined here
- `Design System Adherence` — skills/frontend-ui-engineering/SKILL.md:116 — defined here
- `AI Aesthetic` — skills/frontend-ui-engineering/SKILL.md:118 — defined here
- `Accessibility` — skills/frontend-ui-engineering/SKILL.md:165 — defined here
- `WCAG 2.1 AA` — skills/frontend-ui-engineering/SKILL.md:165 — used here
- `Keyboard Navigation` — skills/frontend-ui-engineering/SKILL.md:169 — defined here
- `ARIA Labels` — skills/frontend-ui-engineering/SKILL.md:187 — defined here
- `Focus Management` — skills/frontend-ui-engineering/SKILL.md:201 — defined here
- `Responsive Design` — skills/frontend-ui-engineering/SKILL.md:242 — defined here
- `Loading and Transitions` — skills/frontend-ui-engineering/SKILL.md:258 — defined here

## Structure
- # Frontend UI Engineering — skills/frontend-ui-engineering/SKILL.md:6
- ## Overview — skills/frontend-ui-engineering/SKILL.md:8
- ## When to Use — skills/frontend-ui-engineering/SKILL.md:12
- ## Component Architecture — skills/frontend-ui-engineering/SKILL.md:20
- ### File Structure — skills/frontend-ui-engineering/SKILL.md:22
- ### Component Patterns — skills/frontend-ui-engineering/SKILL.md:36
- ## State Management — skills/frontend-ui-engineering/SKILL.md:101
- ## Design System Adherence — skills/frontend-ui-engineering/SKILL.md:116
- ### Avoid the AI Aesthetic — skills/frontend-ui-engineering/SKILL.md:118
- ### Spacing and Layout — skills/frontend-ui-engineering/SKILL.md:133
- ### Typography — skills/frontend-ui-engineering/SKILL.md:145
- ### Color — skills/frontend-ui-engineering/SKILL.md:159
- ## Accessibility (WCAG 2.1 AA) — skills/frontend-ui-engineering/SKILL.md:165
- ### Keyboard Navigation — skills/frontend-ui-engineering/SKILL.md:169
- ### ARIA Labels — skills/frontend-ui-engineering/SKILL.md:187
- ### Focus Management — skills/frontend-ui-engineering/SKILL.md:201
- ### Meaningful Empty and Error States — skills/frontend-ui-engineering/SKILL.md:222
- ## Responsive Design — skills/frontend-ui-engineering/SKILL.md:242
- ## Loading and Transitions — skills/frontend-ui-engineering/SKILL.md:258
- ## See Also — skills/frontend-ui-engineering/SKILL.md:295
- ## Common Rationalizations — skills/frontend-ui-engineering/SKILL.md:299
- ## Red Flags — skills/frontend-ui-engineering/SKILL.md:309
- ## Verification — skills/frontend-ui-engineering/SKILL.md:318

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly confronts AI generation pitfalls by cataloging an "AI Aesthetic" table (skills/frontend-ui-engineering/SKILL.md:122-132) that enumerates specific anti-patterns (purple palettes, excessive gradients, `rounded-2xl`, generic heroes, lorem ipsum copy, oversized padding, uniform card grids, and heavy shadows) with production-quality alternatives. Stresses component colocation (skills/frontend-ui-engineering/SKILL.md:24-34) and simple state management tiers (skills/frontend-ui-engineering/SKILL.md:105-112) with a rule against prop drilling deeper than 3 levels.

## Context cost
10711 bytes (~2675 tokens). Loads references/accessibility-checklist.md (5206 bytes, ~1300 tokens) when referenced. Total context: ~15917 bytes (~3975 tokens).
