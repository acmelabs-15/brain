---
package: rjm
name: ValidationRecord
slug: validationrecord
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ValidationRecord

## Definition — verbatim
(used, not defined)

> "class ValidationRecord:" — scripts/validation/pre_pr.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 162 | defined here | Dataclass representing the name, status, duration, and message of a single validation step. |

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
`ValidationRecord` is a Python dataclass identifier in `pre_pr.py` recording individual test step outcomes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
