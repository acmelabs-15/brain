---
package: rjm
name: Estimate confidence
slug: estimate-confidence
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Estimate confidence

## Definition — verbatim
> "4. **Estimate confidence** - Complexity-based sizing (S/M/L), not time-based" — .claude/commands/plan.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 32 | defined here | Fourth evaluation axis in plan review, enforcing discrete complexity ratings over arbitrary time estimations. |

## Consumes
Task decomposition lists and risk register assessments.

## Produces
Complexity ratings (S/M/L) reflecting uncertainty, blast radius, and integration points.

## When applied
Evaluated when reviewing task sizing during the planning phase.

## Sub-concepts
none

## Part of
evaluation-axes, plan-command

## Implementation status
clean

## Design notes
An estimation standard that rejects misleading precision (hours or days) in favor of complexity-based sizing (Small, Medium, Large). For autonomous agents, calendar estimates are notoriously noisy and unanchored; complexity sizing directly correlates with context budget requirements and review scrutiny.
