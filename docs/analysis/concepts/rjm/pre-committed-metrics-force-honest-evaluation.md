---
package: rjm
name: Pre-Committed Metrics Force Honest Evaluation
slug: pre-committed-metrics-force-honest-evaluation
kind: technique
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

# Pre-Committed Metrics Force Honest Evaluation

## Definition — verbatim
> "# Pre-Committed Metrics Force Honest Evaluation" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 7 | defined here | Reference guide establishing the discipline of binding decision forks to metrics before execution. |

## Consumes
Proposed initiatives, architectural changes, or experiments and their intended success indicators.

## Produces
Pre-committed thresholds, binding evaluation dates, and explicit consequence actions (keep, pivot, rollback).

## When applied
Applied whenever a consequential decision, experiment, or architectural initiative is proposed.

## Sub-concepts
informational-metrics, decision-metrics, forcing-function

## Part of
decision-critic

## Implementation status
defects: doc-drift

## Design notes
Pre-Committed Metrics Force Honest Evaluation is a core decision-making discipline requiring teams to pre-register the numerical threshold and date that will determine success or failure before starting work. It eliminates post-hoc rationalization by establishing the consequence of missing the target ahead of time.
