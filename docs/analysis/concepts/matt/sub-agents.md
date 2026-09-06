---
package: matt
name: sub-agents
slug: sub-agents
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sub-agents

## Definition — verbatim
(used, not defined)

> "[DESIGN-IT-TWICE.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/DESIGN-IT-TWICE.md) spins up parallel [sub-agents](https://www.aihero.dev/ai-coding-dictionary/subagent) to produce three or more radically different interfaces for the same module, then compares them on depth, locality and seam placement." — docs/engineering/codebase-design.md:46

## Also called — verbatim
subagents

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 46 | used here | Explains how parallel sub-agents are spun up to explore radically different interface designs. |
| external/codebase-design.md | 43 | used here | Links to dictionary entry explaining multi-agent design exploration in external web docs. |

## Consumes
Independent technical briefs and design constraints.

## Produces
Alternative interface proposals, review findings, or exploratory analyses.

## When applied
Dispatched when executing parallel tasks (e.g. Design It Twice interface generation or two-axis code reviews).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug (sub-agents can recursively spawn further sub-agents in runaway loops), other (relies on harness Agent tool)

## Design notes
Isolated subsidiary agent instances executed in parallel to explore diverse design options or conduct independent reviews without cognitive interference or blended reasoning.
