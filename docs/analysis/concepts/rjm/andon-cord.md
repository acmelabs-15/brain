---
package: rjm
name: andon-cord
slug: andon-cord
kind: gate
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

# andon-cord

## Definition — verbatim
(used, not defined)

> "| Toyota / Lean Operations | Actionable metrics tied to visible operational levers | Which signal triggers an andon-cord stop and which is informational only |" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 23 | used here | Referenced as the operational mechanism that immediately halts production on defect detection. |

## Consumes
Threshold violation signals on critical operational or evaluation metrics.

## Produces
An immediate halt in workflow execution, requiring root cause resolution before proceeding.

## When applied
Triggered automatically when an actionable decision metric crosses a pre-committed failure threshold.

## Sub-concepts
none

## Part of
toyota-lean-operations

## Implementation status
defects: doc-drift

## Design notes
The andon-cord is an operational halt concept imported from lean manufacturing. In rjm, it represents an automated or mandatory stoppage triggered when an essential metric fails, preventing the continuation of flawed work.
