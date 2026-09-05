---
package: rjm
path: .agents/architecture/ADR-046-planning-agent-rename.md
type: agent
bytes: 5867
unit: inv-rjm-17
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-046-planning-agent-rename.md, sha256: 4aa83f97ec94c728eb5b073562a55bf21866880e747688943abecacb6c5cd0fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-046-planning-agent-rename.md

## Purpose — required, verbatim
> "Rename all three planning agents to reflect their distinct roles:" — .agents/architecture/ADR-046-planning-agent-rename.md:36

## Design intent — required
Documents the architectural decision to rename three planning-related agents (`planner` → `milestone-planner`, `task-generator` → `task-decomposer`, `task-planner` → `backlog-generator`) using an action-object naming pattern with distinct prefixes. The change eliminates structural naming ambiguity that risked causing routing errors in orchestrators and confusion for new users, distinguishing proactive project discovery from reactive epic decomposition from implementation milestone planning. It deliberately leaves the separate interactive skill `.claude/skills/planner/` unchanged. Without this decision, overlapping naming prefixes would persist across agent definitions and routing tables, leading to improper agent invocations.

## Phase — required
none

## Inputs — required
- Agent naming ambiguity analysis: `The agent system has three planning-related agents with confusingly similar names` — .agents/architecture/ADR-046-planning-agent-rename.md:24
- Backlog agent addition: `PR #1101 introduced the task-planner agent but it was not integrated into the build system` — .agents/architecture/ADR-046-planning-agent-rename.md:32
- Governance naming standard: `.agents/governance/naming-conventions.md` — .agents/architecture/ADR-046-planning-agent-rename.md:105

## Outputs — required
- Renamed agent definitions: `milestone-planner` — .agents/architecture/ADR-046-planning-agent-rename.md:40, `task-decomposer` — .agents/architecture/ADR-046-planning-agent-rename.md:41, and `backlog-generator` — .agents/architecture/ADR-046-planning-agent-rename.md:42
- Template updates: `templates/agents/` — .agents/architecture/ADR-046-planning-agent-rename.md:99
- Generated files update: `src/` — .agents/architecture/ADR-046-planning-agent-rename.md:100 and `.github/agents/` — .agents/architecture/ADR-046-planning-agent-rename.md:100
- Claude Code subagent definitions: `.claude/agents/` — .agents/architecture/ADR-046-planning-agent-rename.md:101

## Invokes — required
- doc .agents/governance/naming-conventions.md — .agents/architecture/ADR-046-planning-agent-rename.md:105
- skill .claude/skills/planner/ — .agents/architecture/ADR-046-planning-agent-rename.md:44
- script build/generate_agents.py — .agents/architecture/ADR-046-planning-agent-rename.md:126
- script Generate-Agents.ps1 — .agents/architecture/ADR-046-planning-agent-rename.md:100

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:122

## Concepts named — required, verbatim
- `milestone-planner` — .agents/architecture/ADR-046-planning-agent-rename.md:40 — defined here
- `task-decomposer` — .agents/architecture/ADR-046-planning-agent-rename.md:41 — defined here
- `backlog-generator` — .agents/architecture/ADR-046-planning-agent-rename.md:42 — defined here
- `action-object pattern` — .agents/architecture/ADR-046-planning-agent-rename.md:50 — defined here
- `ADR-046` — .agents/architecture/ADR-046-planning-agent-rename.md:2 — defined here
- `ADR-036` — .agents/architecture/ADR-046-planning-agent-rename.md:133 — used here
- `ADR-039` — .agents/architecture/ADR-046-planning-agent-rename.md:134 — used here

## Structure
- # ADR-046: Planning Agent Rename for Role Clarity
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Rationale
- ### Naming Principles Applied
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Implementation Notes
- ### Scope of Changes
- ### Excluded from Rename
- ### Verification
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `Generate-Agents.ps1:100` — referenced PowerShell build script does not exist (migrated to Python).
- `missing-path` · `SKILL-QUICK-REF.md:102` — referenced documentation file does not exist in repository.
- `missing-path` · `CRITICAL-CONTEXT.md:102` — referenced documentation file does not exist in repository.

## Observations
Demonstrates deliberate nomenclature taxonomy (action-object pattern) in agent definitions to reduce routing failure in multi-agent systems. Explicitly preserves interactive slash-command skills while renaming subagent definitions to prevent user-facing interface breakages. Details boundary between mutable system definitions and immutable historical records.

## Context cost
5867 bytes (~1470 tokens). References governance naming documents, agent templates, and build verification scripts.
