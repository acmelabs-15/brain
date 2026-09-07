---
package: rjm
name: EXIT_MISMATCH
slug: exit-mismatch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/require_job_results.py, sha256: 0a1300b1f9f30c1536e51325107d4d6deb5db72183cfebbdf364afdbeaff61d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_MISMATCH

## Definition — verbatim
(used, not defined)

> "EXIT_MISMATCH = 1" — scripts/ci/require_job_results.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/require_job_results.py | 35 | defined here | Exit code constant indicating job result mismatch or unmet expectations in CI workflows. |

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
defects: orphan

## Design notes
`EXIT_MISMATCH` is a Python exit code constant in `require_job_results.py` indicating expected job result status discrepancies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
