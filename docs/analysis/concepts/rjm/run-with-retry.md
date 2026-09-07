---
package: rjm
name: run_with_retry
slug: run-with-retry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_with_retry

## Definition — verbatim
(used, not defined)

> "def run_with_retry(" — .github/scripts/run_with_retry.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/run_with_retry.py | 79 | defined here | Core execution function implementing the ADR-035 exit code retry loop. |

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
A Python execution function and script identifier (`run_with_retry`) executing subprocess commands under retry policies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
