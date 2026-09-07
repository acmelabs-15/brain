---
package: rjm
name: EXIT_NO_RESULTS
slug: exit-no-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_memory_validation_results.py, sha256: 42dad8f4e730c3e95c757972e4a7879303e41a5f4c944e1f1d1304199bf417b5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_NO_RESULTS

## Definition — verbatim
(used, not defined)

> "EXIT_NO_RESULTS = 1" — scripts/ci/parse_memory_validation_results.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_memory_validation_results.py | 33 | defined here | Constant exit code returned when no memory validation results are found. |

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
`EXIT_NO_RESULTS` is a Python exit code constant in `parse_memory_validation_results.py` indicating an empty results set rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
