---
package: addy
name: DESCRIPTION_TRIGGER
slug: description-trigger
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DESCRIPTION_TRIGGER

## Definition — verbatim
(used, not defined)
> "const DESCRIPTION_TRIGGER        = /\buse (this )?when\b|\buse (before|after|during)\b/i;" — scripts/lib/skill-lint.js:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint.js | 39 | defined here | Regular expression constant matching accepted trigger phrases in skill descriptions. |

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
defects: other

## Design notes
Regular expression constant in `scripts/lib/skill-lint.js` matching trigger condition syntax, rather than an engineering lifecycle concept.
