---
package: addy
name: ARIA Labels
slug: aria-labels
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ARIA Labels

## Definition — verbatim
> "### ARIA Labels" — skills/frontend-ui-engineering/SKILL.md:187
> "// Label interactive elements that lack visible text" — skills/frontend-ui-engineering/SKILL.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 187 | defined here | Section requiring accessible naming for icon-only buttons, inputs without visible labels, and interactive elements. |

## Consumes
Interactive UI controls, icon-only buttons, form inputs lacking visible labels.

## Produces
Screen-reader accessible names and labels on UI elements.

## When applied
When building interactive controls or inputs that lack persistent visible text labels.

## Sub-concepts
aria-label

## Part of
frontend-ui-engineering, accessibility-checklist

## Implementation status
clean

## Design notes
ARIA Labels provide programmatic text equivalents for visual-only controls (such as icon buttons or search fields), ensuring assistive technologies can convey the control's purpose to screen-reader users.
