---
package: rjm
name: LedgerMismatchError
slug: ledgermismatcherror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LedgerMismatchError

## Definition — verbatim
> "class LedgerMismatchError(Exception):" — scripts/eval/optimize-artifact.py:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/optimize-artifact.py | 123 | defined here | Exception raised when split fingerprint or recorded cap disagrees with invocation. |

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
LedgerMismatchError is a Python exception class in optimization tooling rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
