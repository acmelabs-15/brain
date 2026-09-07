---
package: rjm
name: pivot
slug: pivot
kind: technique
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

# pivot

## Definition — verbatim
> "then consider a pivot. Do not keep tuning a dead engine." — .claude/skills/business-strategy/references/lean-startup.md:22

## Also called — verbatim
`pivoting` — .claude/skills/business-strategy/references/four-steps.md:26

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/lean-startup.md | 22 | defined here | Prescribed strategic pivot when multiple experiment iterations show flat or negative movement on core metrics. |

## Consumes
Empirical feedback from three or more failed or flat experiments on core actionable metrics.

## Produces
A structured shift in a fundamental business component (customer persona, problem, channel, or revenue model) while preserving learnings.

## When applied
"If three or more experiments show flat or negative results on your core metric, then consider a pivot. Do not keep tuning a dead engine." — .claude/skills/business-strategy/references/lean-startup.md:21-22

## Sub-concepts
none

## Part of
lean-startup, build-measure-learn

## Implementation status
clean

## Design notes
A pivot is a structured course correction designed to test a new fundamental hypothesis about the product, strategy, or engine of growth while preserving accumulated organizational knowledge. In rjm, it mandates stopping futile micro-optimizations when core metrics stall.
