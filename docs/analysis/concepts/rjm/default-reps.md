---
package: rjm
name: DEFAULT_REPS
slug: default-reps
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_REPS

## Definition — verbatim
(used, not defined)

> "DEFAULT_REPS = 20" — scripts/eval/variance-control.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 43 | defined here | Constant defining the default repetition count (20) for variance control runs. |

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
`DEFAULT_REPS` is a configuration constant in `variance-control.py` specifying the default iteration count for variance testing rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
