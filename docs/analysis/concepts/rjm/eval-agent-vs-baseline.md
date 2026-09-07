---
package: rjm
name: eval-agent-vs-baseline
slug: eval-agent-vs-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-agent-vs-baseline

## Definition — verbatim
(used, not defined)

> "Eval Agent vs. Baseline runner." — scripts/eval/eval-agent-vs-baseline.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 1 | used here | Named in module docstring as the target evaluation harness supported by the scoring engine. |
| scripts/eval/eval-agent-vs-baseline.py | 2 | defined here | Named in script docstring as the Eval Agent vs. Baseline runner module. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A script file name and CLI harness identifier used in rjm's evaluation framework to benchmark agents against unaugmented baselines, classified as name-only per D-023.
