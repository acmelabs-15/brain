---
package: rjm
name: Consolidation Triggers
slug: consolidation-triggers
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consolidation Triggers

## Definition — verbatim
(used, not defined)

> "## Consolidation Triggers" — .agents/governance/agent-consolidation-process.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 9 | defined here | Defines quantitative automatic and manual thresholds initiating agent consolidation reviews. |
| docs/agent-governance.md | 38 | defined here | Outlines the primary trigger criteria (overlap > 20%, usage < 5%, routing confusion > 3/mo) under governance principles. |

## Consumes
Quarterly overlap audit metrics, monthly orchestrator routing logs, and agent invocation statistics.

## Produces
Initiation of Phase 1 Identification review for candidate agent pairs.

## When applied
Monitored on a quarterly audit cadence and continuously during orchestrator routing evaluations.

## Sub-concepts
automatic-review-triggers, manual-review-triggers

## Part of
agent-consolidation-process

## Implementation status
defects: missing-path

## Design notes
The objective condition gates that force governance scrutiny of multi-agent architecture. By establishing explicit numerical thresholds for capability overlap (>20%), low utilization (<5%), and routing confusion, rjm prevents uncontrolled agent sprawl and eliminates subjective debate over when to prune redundant agents.
