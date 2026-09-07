---
package: rjm
name: Innovation Accounting
slug: innovation-accounting
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Innovation Accounting

## Definition — verbatim
(used, not defined)

> "| Lean Startup (Innovation Accounting, Ries 2011) | Per-cohort baseline plus per-loop improvement targets | Which metric, if not improved by N percent, would justify a pivot |" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 21 | used here | Cited as Eric Ries's Lean Startup framework for establishing per-cohort baselines and pivot triggers. |

## Consumes
Baseline cohort data, learning milestone definitions, and iterative improvement targets.

## Produces
Quantitative pivot-or-persevere decision triggers based on empirical loop performance.

## When applied
Applied during experimental initiatives or product iterations to test whether fundamental assumptions hold.

## Sub-concepts
none

## Part of
pre-committed-metrics-force-honest-evaluation

## Implementation status
defects: doc-drift

## Design notes
Innovation Accounting is cited in rjm as an intellectual antecedent and reference framework for empirical decision-making. It demonstrates how to substitute vanity metrics with rigorous milestone tracking that triggers automated pivot conversations.
