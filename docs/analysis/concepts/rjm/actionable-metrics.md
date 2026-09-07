---
package: rjm
name: actionable metrics
slug: actionable-metrics
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# actionable metrics

## Definition — verbatim
> "fix your metrics first (see Scored checklist, actionable metrics)." — .claude/skills/business-strategy/references/lean-startup.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 19 | defined here | Prescribed as the rigorous measurement standard for evaluating whether product iterations drive real customer progress. |

## Consumes
User behavioral interaction data grouped by discrete cohorts and time intervals.

## Produces
Clear cause-and-effect performance measurements tying specific product iterations to observable customer behavioral shifts.

## When applied
When tracking experiment results in the Build-Measure-Learn feedback loop to determine whether to pivot or persevere.

## Sub-concepts
cohort-based

## Part of
lean-startup, build-measure-learn

## Implementation status
clean

## Design notes
Actionable metrics tie specific, deliberate product experiments to observable changes in user behavior across cohorts. In rjm's Lean Startup distillation, they prevent teams from being misled by cumulative superficial numbers that mask stagnation or decay.
