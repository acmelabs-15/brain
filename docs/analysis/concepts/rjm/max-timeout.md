---
package: rjm
name: MAX_TIMEOUT
slug: max-timeout
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MAX_TIMEOUT

## Definition — verbatim
(used, not defined)

> "MAX_TIMEOUT = 300" — scripts/validation/hook_contracts.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/hook_contracts.py | 50 | defines | Integer constant defining the maximum allowed hook execution timeout in seconds. |

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
defects: doc-drift

## Design notes
A configuration constant in hook_contracts.py defining the upper boundary of hook execution timeouts rather than a development lifecycle concept.
