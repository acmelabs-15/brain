---
package: rjm
name: p_value
slug: p-value
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

# p_value

## Definition — verbatim
> "`p_value`: the counts of held-out tasks that moved fail-to-pass and" — scripts/eval/README.md:960

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 960 | defined here | Gate verdict property reporting the one-sided exact McNemar tail probability calculated from discordant task counts. |

## Consumes
`discordant_gain` and `discordant_loss` counts from paired candidate evaluation.

## Produces
Float probability value representing the exact one-sided McNemar tail.

## When applied
Computed by `optimize-artifact.py gate` for every compared candidate evaluation.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
The one-sided exact McNemar tail probability calculated on discordant pairs in held-out gating, evaluating whether candidate improvements exceed expected null drift under binomial distribution.
