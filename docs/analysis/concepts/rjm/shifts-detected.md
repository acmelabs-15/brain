---
package: rjm
name: Shifts Detected
slug: shifts-detected
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shifts Detected

## Definition — verbatim
> "### Shifts Detected" — .claude/skills/retrospective/references/frameworks.md:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 295 | defined here | Table in Patterns and Shifts activity recording transitions in system state, trajectory, or behavior over time. |

## Consumes
Comparative historical state data across sessions or execution phases.

## Produces
Documented table of behavioral shifts recording timing, before state, after state, and root causes.

## When applied
Applied in Phase 1 Patterns and Shifts activity when analyzing trends across multiple executions.

## Sub-concepts
none

## Part of
patterns-and-shifts

## Implementation status
clean

## Design notes
Shifts Detected logs macro-level state transitions and developmental trajectories across agent sessions. By capturing what changed, when it changed, and what caused the transition, it illuminates whether the system is improving, regressing, or drifting.
