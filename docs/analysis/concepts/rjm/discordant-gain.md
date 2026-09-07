---
package: rjm
name: discordant_gain
slug: discordant-gain
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# discordant_gain

## Definition — verbatim
> "Every compared verdict reports `discordant_gain`, `discordant_loss`, and" — scripts/eval/README.md:959

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 959 | defined here | Statistical metric reporting the count of held-out benchmark tasks that transitioned from fail to pass under a candidate edit. |

## Consumes
Paired evaluation results between candidate and incumbent on held-out tasks.

## Produces
Non-negative integer count of held-out tasks that moved fail-to-pass.

## When applied
Calculated by `optimize-artifact.py gate` during paired McNemar test comparison.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
A statistical metric in rjm's held-out gate recording the number of held-out tasks that improved under a candidate patch, isolating genuine task flips from unchanged outcomes.
