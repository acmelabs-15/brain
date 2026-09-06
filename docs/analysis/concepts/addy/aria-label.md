---
package: addy
name: aria-label
slug: aria-label
kind: name-only
package_phase: none
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

# aria-label

## Definition — verbatim
(used, not defined)
> "<button aria-label=\"Close dialog\"><XIcon /></button>" — skills/frontend-ui-engineering/SKILL.md:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 191 | used here | Demonstrates accessible icon-only button naming via aria-label="Close dialog". |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
W3C ARIA DOM attribute identifier used in component markup to supply accessible labels for elements without visible text, rather than an independent lifecycle concept.
