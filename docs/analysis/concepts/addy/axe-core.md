---
package: addy
name: axe-core
slug: axe-core
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# axe-core

## Definition — verbatim
> "npx axe-core          # Programmatic accessibility testing" — references/accessibility-checklist.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/constraint-driven-development.json | 72 | used here | Expectation asserting the agent names axe-core and gives run commands for accessibility constraints. |
| references/accessibility-checklist.md | 127 | used here | Listed under Testing Tools as an automated runner for programmatic accessibility testing. |
| skills/frontend-ui-engineering/SKILL.md | 328 | used here | Verification checklist item requiring zero accessibility warnings in dev tools or axe-core. |

## Consumes
Rendered HTML markup, DOM components, or running web application preview URLs.

## Produces
Accessibility audit results detailing WCAG violations by severity level.

## When applied
During frontend implementation and automated quality gate checks to verify web accessibility.

## Sub-concepts
none

## Part of
references/accessibility-checklist.md

## Implementation status
clean

## Design notes
axe-core is the standard accessibility auditing engine referenced in addy's frontend verification and constraint-setting workflows. By checking rendered markup against automated rules, it provides deterministic proof that UI components meet accessibility standards without relying on manual inspection alone.
