---
package: addy
name: accessibility checklist
slug: accessibility-checklist
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# accessibility checklist

## Definition — verbatim
> "Quick reference for WCAG 2.1 AA compliance." — references/accessibility-checklist.md:3

## Also called — verbatim
`Accessibility Checklist` — references/accessibility-checklist.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 34 | references | Invoked directly during Phase B pre-launch synthesis for accessibility verification. |
| commands/ship.toml | 34 | references | Invoked during Phase B release synthesis to verify keyboard nav, screen reader support, and contrast. |
| references/accessibility-checklist.md | 1 | defines | Reference document establishing WCAG 2.1 AA requirements and checks. |

## Consumes
UI components, frontend markup, interactive widgets, and style definitions

## Produces
Accessibility audit verification findings across keyboard navigation, screen readers, forms, and contrast

## When applied
Applied when building or reviewing user-facing interfaces or conducting pre-launch audits prior to release.

## Sub-concepts
none

## Part of
frontend-ui-engineering, shipping-and-launch

## Implementation status
defects: missing-path (references/accessibility-checklist.md:127-128 documents running npx axe-core and npx pa11y directly as CLI commands, but axe-core is an API engine whose CLI package is @axe-core/cli)

## Design notes
The accessibility checklist provides an actionable set of WCAG 2.1 AA verification criteria for web interfaces, ensuring that automated release audits address essential accessibility concerns (keyboard focus, screen reader announcements, color contrast) that standard unit tests overlook.
