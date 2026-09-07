---
package: rjm
name: Energy Shifts
slug: energy-shifts
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

# Energy Shifts

## Definition — verbatim
> "### Energy Shifts" — .claude/skills/retrospective/references/frameworks.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 84 | defined here | Section of Execution Trace template identifying transitions in agent activity and execution stall points. |

## Consumes
Energy level annotations (High, Medium, Low) and timestamp intervals from the Execution Trace table.

## Produces
Documented transitions between active execution and stalled states, with root reasons identified.

## When applied
Applied during Phase 0 timeline analysis after constructing the Execution Trace table.

## Sub-concepts
none

## Part of
execution-trace

## Implementation status
clean

## Design notes
Energy Shifts provides a proxy for momentum and velocity in agent execution. By marking points where an agent dropped from high activity to low activity or encountered stalls, it helps retrospectives isolate the exact moments where friction, confusion, or missing information slowed down progress.
