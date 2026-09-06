---
package: addy
name: ErrorState
slug: errorstate
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

# ErrorState

## Definition — verbatim
(used, not defined)
> "  if (error) return <ErrorState message=\"Failed to load tasks\" retry={refetch} />;" — skills/frontend-ui-engineering/SKILL.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 85 | used here | JSX component invocation rendering an error message with retry action when queries fail |

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
UI component identifier representing a dedicated error feedback view in sample code rather than an engineering lifecycle concept.
