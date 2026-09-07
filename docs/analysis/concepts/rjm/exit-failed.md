---
package: rjm
name: EXIT_FAILED
slug: exit-failed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_FAILED

## Definition — verbatim
(used, not defined)

> "EXIT_FAILED = 1" — scripts/ci/codeql_integration_summary.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/codeql_integration_summary.py | 21 | defined here | Defined as integer exit code constant returned when one or more integration tests fail. |

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
`EXIT_FAILED` is a Python exit code constant identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
