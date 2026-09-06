---
package: rjm
path: .claude/skills/planner/references/agent-architecture-patterns.md
type: reference
bytes: 2295
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/references/agent-architecture-patterns.md

## Purpose — required, verbatim
> "Patterns for decomposing agent systems into reliable, maintainable units during planning." — .claude/skills/planner/references/agent-architecture-patterns.md:9

## Design intent — required
Establishes architectural guidelines, checklists, and heuristics for decomposing agent systems into reliable, maintainable units during implementation planning. By enforcing a 7-10 skill budget per agent, a 3-file planning pattern (`task_plan.md`, `findings.md`, `progress.md`) that maintains active attention, bounded scopes for autonomous agent work, and revenue-closed-loop principles, it ensures multi-agent workflows maintain focus and minimize failure modes.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/agent-architecture-patterns.md — .claude/skills/planner/SKILL.md:293

## Concepts named — required, verbatim
- `Agent Architecture Patterns (Planning Context)` — .claude/skills/planner/references/agent-architecture-patterns.md:7 — defined here
- `Skill Budget Rule` — .claude/skills/planner/references/agent-architecture-patterns.md:11 — defined here
- `3-File Planning Pattern` — .claude/skills/planner/references/agent-architecture-patterns.md:15 — defined here
- `task_plan.md` — .claude/skills/planner/references/agent-architecture-patterns.md:18 — defined here
- `findings.md` — .claude/skills/planner/references/agent-architecture-patterns.md:19 — defined here
- `progress.md` — .claude/skills/planner/references/agent-architecture-patterns.md:20 — defined here
- `attention manipulation` — .claude/skills/planner/references/agent-architecture-patterns.md:23 — defined here
- `needle-in-haystack mitigation` — .claude/skills/planner/references/agent-architecture-patterns.md:23 — defined here
- `Milestone Decomposition Checklist` — .claude/skills/planner/references/agent-architecture-patterns.md:36 — defined here
- `Scheduled Autonomous Work` — .claude/skills/planner/references/agent-architecture-patterns.md:46 — defined here
- `Revenue-Closed-Loop Pattern` — .claude/skills/planner/references/agent-architecture-patterns.md:57 — defined here

## Structure
# Agent Architecture Patterns (Planning Context) — .claude/skills/planner/references/agent-architecture-patterns.md:7
## Skill Budget Rule — .claude/skills/planner/references/agent-architecture-patterns.md:11
## 3-File Planning Pattern — .claude/skills/planner/references/agent-architecture-patterns.md:15
### For Large Knowledge Bases — .claude/skills/planner/references/agent-architecture-patterns.md:25
## Milestone Decomposition Checklist — .claude/skills/planner/references/agent-architecture-patterns.md:36
## Scheduled Autonomous Work — .claude/skills/planner/references/agent-architecture-patterns.md:46
## Revenue-Closed-Loop Pattern — .claude/skills/planner/references/agent-architecture-patterns.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/planner/references/agent-architecture-patterns.md:2 · Frontmatter source `wiki/concepts/AI Productivity/Agent Architecture Patterns.md` does not exist in the repository.

## Observations
Points out that re-reading `task_plan.md` before decisions functions as intentional attention manipulation rather than context reduction, keeping goals in the attention window as context grows. Restricts scheduled autonomous work to low-risk, easily reviewable tasks (running tests, updating documentation, removing dead code) and explicitly flags major features from scratch or complex architectural changes as bad candidates.

## Context cost
2295 bytes, approximately 570 tokens.
