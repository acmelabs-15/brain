---
package: matt
name: ERROR_MSG
slug: error-msg
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh, sha256: 35103539fc36873eea36074769ad454f9379d6fc8b2dc0e26ce987fd3bfe5503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ERROR_MSG

## Definition — verbatim
(used, not defined)

> "capture ERROR_MSG" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh | 38 | defined here | Defined as an environment variable captured during the interactive reproduction script to store an error message string. |

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
ERROR_MSG is a template script variable identifier for capturing interactive terminal input rather than an operational lifecycle concept.
