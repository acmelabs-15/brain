---
package: rjm
name: FORM_FACTOR_VARIANTS
slug: form-factor-variants
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

# FORM_FACTOR_VARIANTS

## Definition — verbatim
(used, not defined)

> "FORM_FACTOR_VARIANTS: tuple[str, ...] = (\"agent\", \"baseline\", \"skill\")" — scripts/eval/_plan_runner.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_plan_runner.py | 29 | defined here | Constant tuple defining extended evaluation variants ("agent", "baseline", "skill") for v2 form-factor spikes. |
| scripts/eval/eval-agent-vs-baseline.py | 51 | used here | Imported to enable three-way comparison between agent prompt, baseline prompt, and inline skill prompt. |

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
`FORM_FACTOR_VARIANTS` is a Python configuration tuple constant in `_plan_runner.py` specifying form-factor comparison variants rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
