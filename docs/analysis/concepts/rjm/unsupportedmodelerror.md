---
package: rjm
name: UnsupportedModelError
slug: unsupportedmodelerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UnsupportedModelError

## Definition — verbatim
(used, not defined)

> "class UnsupportedModelError(Exception):" — scripts/eval/_plan_runner.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_plan_runner.py | 41 | defined here | Custom exception class raised when plan estimation is requested for a model missing pricing configuration. |
| scripts/eval/eval-agent-vs-baseline.py | 55 | used here | Handled in eval runner CLI to report configuration errors and exit cleanly when models lack price data. |

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
clean (scripts/eval/_plan_runner.py); defects: exit-code-mismatch, script-bug (scripts/eval/eval-agent-vs-baseline.py)

## Design notes
`UnsupportedModelError` is a Python exception class identifier in `_plan_runner.py` raised when pricing data is absent for an evaluation model rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
