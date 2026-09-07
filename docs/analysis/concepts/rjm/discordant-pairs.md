---
package: rjm
name: discordant pairs
slug: discordant-pairs
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# discordant pairs

## Definition — verbatim
> "The decision counts discordant pairs: tasks that went fail-to-pass and tasks that went pass-to-fail." — .agents/architecture/ADR-087-held-out-validated-improvement.md:267-268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 267 | defined here | Defined as the paired evaluation tasks whose pass/fail outcomes changed between baseline and candidate. |

## Consumes
Paired evaluation results per task ID between baseline and candidate.

## Produces
Counts of positive shifts (`fail-to-pass`) and negative regressions (`pass-to-fail`).

## When applied
Calculated during candidate evaluation in `optimize-artifact.py gate` and fed into McNemar exact testing.

## Sub-concepts
fail-to-pass, pass-to-fail

## Part of
mcnemar-s-exact-test

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
In paired evaluation, tasks that remain consistently passing or consistently failing provide no evidence about whether a candidate change improved performance. The gate focuses entirely on discordant pairs—tasks that changed state—to calculate statistical significance and enforce zero-regression rules.
