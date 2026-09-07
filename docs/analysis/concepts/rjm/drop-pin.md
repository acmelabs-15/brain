---
package: rjm
name: DROP_PIN
slug: drop-pin
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DROP_PIN

## Definition — verbatim
> "DROP_PIN -> the default ranks first, or the lead is within the noise" — scripts/eval/_model_sweep_core.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 23 | defined here | Defined in docstring as the sweep verdict to drop a model pin and inherit harness default (`auto`) when candidate lead is not statistically significant. |
| scripts/eval/README.md | 414 | defined here | Documented in evaluation framework as the model sweep outcome when no candidate qualifies over the default. |

## Consumes
Model sweep evaluation runs, paired bootstrap confidence intervals, candidate vs default recall deltas, and shared fixture sets.

## Produces
Model sweep verdict instructing evaluation harness and skill configurations to drop explicit model pinning and inherit auto.

## When applied
Applied at the conclusion of an evaluation model sweep when the default model ranks first, or when every candidate's recall delta either fails to achieve the minimum effect size threshold or has a 95% bootstrap confidence interval that includes 0.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
In rjm's model sweep framework, DROP_PIN is the default-favoring evaluation gate verdict that prevents premature or unproven model pinning by requiring clear empirical statistical superiority before allowing a skill or agent to deviate from the default (auto) model.
