---
package: rjm
name: VARIANTS
slug: variants
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

# VARIANTS

## Definition — verbatim
(used, not defined)

> "VARIANTS: tuple[str, ...] = (\"agent\", \"baseline\")" — scripts/eval/_plan_runner.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_plan_runner.py | 25 | defined here | Constant tuple defining default evaluation variants ("agent", "baseline") for v1 evaluation spikes. |
| scripts/eval/eval-agent-vs-baseline.py | 52 | used here | Imported to set default comparison variants when evaluating agent prompts against baselines. |

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
`VARIANTS` is a Python configuration tuple constant in `_plan_runner.py` defining the baseline and agent comparison modes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
