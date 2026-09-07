---
package: rjm
name: Toyota / Lean Operations
slug: toyota-lean-operations
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

# Toyota / Lean Operations

## Definition — verbatim
(used, not defined)

> "| Toyota / Lean Operations | Actionable metrics tied to visible operational levers | Which signal triggers an andon-cord stop and which is informational only |" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 23 | used here | Cited as the operational model tying actionable metrics to visible levers and andon-cord stops. |

## Consumes
Operational pipeline signals, defect indicators, and production flow metrics.

## Produces
Binary stop-the-line operational triggers distinguished from passive informational dashboards.

## When applied
Applied when designing automated quality gates and evaluation halt mechanisms.

## Sub-concepts
andon-cord

## Part of
pre-committed-metrics-force-honest-evaluation

## Implementation status
defects: doc-drift

## Design notes
Toyota / Lean Operations serves as a foundational reference model for operational discipline in rjm, emphasizing that metrics must directly connect to operational levers capable of halting flawed processes immediately.
