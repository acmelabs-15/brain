---
package: rjm
name: ValidationState
slug: validationstate
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

# ValidationState

## Definition — verbatim
(used, not defined)

> "class ValidationState:" — scripts/validation/pre_pr.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 172 | defined here | Dataclass tracking overall validation state including results list and pass, fail, and skip counters. |

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
`ValidationState` is a Python dataclass identifier in `pre_pr.py` aggregating test execution metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
