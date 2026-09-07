---
package: rjm
name: Execution Trace
slug: execution-trace
kind: artifact
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Execution Trace

## Definition — verbatim
> "## Execution Trace" — .claude/skills/retrospective/references/frameworks.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 70 | defined here | Structured markdown template capturing chronological agent execution, actions, outcomes, and energy levels. |
| .claude/skills/retrospective/SKILL.md | 86 | used here | Orchestration workflow step instructing agent to construct chronological trace during Phase 0 data gathering. |

## Consumes
Session logs, tool call records, and execution timestamps.

## Produces
Chronological event table with columns for Time, Agent, Action, Outcome, and Energy.

## When applied
Applied during Phase 0 Data Gathering to establish the objective timeline before causal diagnosis.

## Sub-concepts
timeline-patterns, energy-shifts

## Part of
retrospective

## Implementation status
defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/frameworks.md

## Design notes
Execution Trace adapts the agile timeline exercise to autonomous agent monitoring. It constructs a tabular chronological sequence of every agent action, outcome, and perceived execution energy, enabling retrospective investigators to pinpoint exact locations of execution stalls, rapid progress, or cascade failures.
