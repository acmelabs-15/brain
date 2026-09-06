---
package: rjm
path: .claude/skills/analyze/references/agent-architecture-patterns.md
type: reference
bytes: 2232
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/agent-architecture-patterns.md

## Purpose — required, verbatim
> "Narrow agents with clear goals outperform general-purpose agents. Most agent failures are architecture failures, not model failures." — .claude/skills/analyze/references/agent-architecture-patterns.md:9

## Design intent — required
Architectural design guide for constructing reliable AI agents by enforcing structural constraints rather than relying on LLM capability. It limits agent skill sets to a strict budget (7-10 skills), defines a six-step structured prompt layout, establishes a three-file attention-manipulation planning protocol (`task_plan.md`, `findings.md`, `progress.md`), specifies criteria for adopting MCP tools versus native CLIs, and provides diagnostic signals for identifying architectural failures like context blur and capability creep. Without this reference, agents are susceptible to over-tooling, prompt ambiguity, goal amnesia in long-running contexts, and uncontrolled scope expansion.

## Phase — required
cross-phase

## Inputs — required
- Agent specification or task description requiring agent persona, prompt design, or skill configuration (.claude/skills/analyze/references/agent-architecture-patterns.md:11-23)
- Plan and findings state files (`task_plan.md`, `findings.md`, `progress.md`) re-read before decisions (.claude/skills/analyze/references/agent-architecture-patterns.md:26-32)
- Diagnostic signals observed during execution (wrong tools, unpredictable branching, lost goals) (.claude/skills/analyze/references/agent-architecture-patterns.md:48-53)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:71

## Concepts named — required, verbatim
- `Skill Budget Rule` — .claude/skills/analyze/references/agent-architecture-patterns.md:11 — defined here | used here
- `6-Step Structured Prompt Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:15 — defined here | used here
- `Core Mission` — .claude/skills/analyze/references/agent-architecture-patterns.md:17 — defined here | used here
- `Role Identity` — .claude/skills/analyze/references/agent-architecture-patterns.md:18 — defined here | used here
- `Decision Logic` — .claude/skills/analyze/references/agent-architecture-patterns.md:19 — defined here | used here
- `Constraints` — .claude/skills/analyze/references/agent-architecture-patterns.md:20 — defined here | used here
- `Output Format` — .claude/skills/analyze/references/agent-architecture-patterns.md:21 — defined here | used here
- `Escalation Paths` — .claude/skills/analyze/references/agent-architecture-patterns.md:22 — defined here | used here
- `3-File Planning Pattern` — .claude/skills/analyze/references/agent-architecture-patterns.md:24 — defined here | used here
- `Context Engineering` — .claude/skills/analyze/references/agent-architecture-patterns.md:24 — defined here | used here
- `task_plan.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:27 — defined here | used here
- `findings.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:28 — defined here | used here
- `progress.md` — .claude/skills/analyze/references/agent-architecture-patterns.md:29 — defined here | used here
- `attention manipulation` — .claude/skills/analyze/references/agent-architecture-patterns.md:32 — defined here | used here
- `MCP Tool Selection Criteria` — .claude/skills/analyze/references/agent-architecture-patterns.md:34 — defined here | used here
- `Meta-Rules for Agent Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:38 — defined here | used here
- `Diagnostic Signals` — .claude/skills/analyze/references/agent-architecture-patterns.md:46 — defined here | used here

## Structure
- `# Agent Architecture Patterns` — .claude/skills/analyze/references/agent-architecture-patterns.md:7
- `## Skill Budget Rule` — .claude/skills/analyze/references/agent-architecture-patterns.md:11
- `## 6-Step Structured Prompt Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:15
- `## 3-File Planning Pattern (Context Engineering)` — .claude/skills/analyze/references/agent-architecture-patterns.md:24
- `## MCP Tool Selection Criteria` — .claude/skills/analyze/references/agent-architecture-patterns.md:34
- `## Meta-Rules for Agent Design` — .claude/skills/analyze/references/agent-architecture-patterns.md:38
- `## Diagnostic Signals` — .claude/skills/analyze/references/agent-architecture-patterns.md:46

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/agent-architecture-patterns.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/AI Productivity/Agent Architecture Patterns.md`.

## Observations
The 3-file planning pattern (`task_plan.md`, `findings.md`, `progress.md`) formalizes attention manipulation by re-reading the plan before decisions to counter attention drift as context grows. It also introduces the Meta-Rule banning vague instructions like "be helpful", nested conditionals beyond two levels, and conversational cross-references.

## Context cost
2232 bytes, loads nothing further (0 bytes). Approximately 550 tokens.
