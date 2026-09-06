---
package: rjm
path: .claude/skills/execution-plans/SKILL.md
type: skill
bytes: 3964
unit: inv-rjm-118
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/execution-plans/SKILL.md

## Purpose — required, verbatim
> "Treat execution plans as first-class artifacts, versioned in the repository." — .claude/skills/execution-plans/SKILL.md:10

## Design intent — required
Standardizes the lifecycle and persistence of execution plans as versioned repository artifacts in `.agents/plans/` (`active/`, `completed/`, `abandoned/`) rather than leaving plan status, objectives, and architectural decisions transiently inside conversational context. Without it, long-running agent work would lose progress tracking across sessions, abandonments would lack recorded rationale, and key technical decisions made during implementation would vanish from the repository's institutional memory.

## Phase — required
rjm:plan

## Inputs — required
- Trigger phrases: "create execution plan" — .claude/skills/execution-plans/SKILL.md:30, "update plan progress" — .claude/skills/execution-plans/SKILL.md:31, "log decision" — .claude/skills/execution-plans/SKILL.md:32, "complete plan" — .claude/skills/execution-plans/SKILL.md:33, "abandon plan" — .claude/skills/execution-plans/SKILL.md:34
- Template: `.agents/plans/TEMPLATE.md` — .claude/skills/execution-plans/SKILL.md:38
- Existing active plan files: `.agents/plans/active/{slug}.md` — .claude/skills/execution-plans/SKILL.md:55
- Metadata attributes: status, dates, owner, complexity (.claude/skills/execution-plans/SKILL.md:44,56)
- Progress updates, decision logs, and blocker details (.claude/skills/execution-plans/SKILL.md:46-48,62-64,70-72)
- External references: links to issues, PRs, and ADRs (.claude/skills/execution-plans/SKILL.md:49,58)

## Outputs — required
- Versioned plan artifacts created in `.agents/plans/active/{slug}.md` — .claude/skills/execution-plans/SKILL.md:55
- Completed plan artifacts moved to `.agents/plans/completed/` (.claude/skills/execution-plans/SKILL.md:78)
- Abandoned plan artifacts with documented rationale moved to `.agents/plans/abandoned/` (.claude/skills/execution-plans/SKILL.md:91)
- Timestamped progress updates in Progress Log table (.claude/skills/execution-plans/SKILL.md:47,63)
- Decision records in Decision Log table (.claude/skills/execution-plans/SKILL.md:46,70-72)
- Technical debt tracking via `.agents/debt/tech-debt-registry.md` — .claude/skills/execution-plans/SKILL.md:12

## Invokes — required
none

## Invoked by — required
- command plan — .claude/commands/plan.md:23
- doc docs/workflow-commands.md — docs/workflow-commands.md:81

## Concepts named — required, verbatim
- `execution-plans` — .claude/skills/execution-plans/SKILL.md:2 — defined here
- `execution plans` — .claude/skills/execution-plans/SKILL.md:4 — defined here
- `progress tracking` — .claude/skills/execution-plans/SKILL.md:4 — defined here
- `decision logs` — .claude/skills/execution-plans/SKILL.md:4 — defined here
- `first-class artifacts` — .claude/skills/execution-plans/SKILL.md:10 — defined here
- `vendor-portability` — .claude/skills/execution-plans/SKILL.md:12 — defined here
- `tech-debt-registry.md` — .claude/skills/execution-plans/SKILL.md:23 — defined here
- `TEMPLATE.md` — .claude/skills/execution-plans/SKILL.md:38 — used here
- `Metadata` — .claude/skills/execution-plans/SKILL.md:44 — defined here
- `Objectives` — .claude/skills/execution-plans/SKILL.md:45 — defined here
- `Decision Log` — .claude/skills/execution-plans/SKILL.md:46 — defined here
- `Progress Log` — .claude/skills/execution-plans/SKILL.md:47 — defined here
- `Blockers` — .claude/skills/execution-plans/SKILL.md:48 — defined here
- `Related` — .claude/skills/execution-plans/SKILL.md:49 — defined here
- `Planner skill` — .claude/skills/execution-plans/SKILL.md:96 — used here
- `Retrospectives` — .claude/skills/execution-plans/SKILL.md:97 — used here

## Structure
- `# Execution Plans Skill` — .claude/skills/execution-plans/SKILL.md:8
- `## Directory Structure` — .claude/skills/execution-plans/SKILL.md:14
- `## Triggers` — .claude/skills/execution-plans/SKILL.md:26
- `## Plan Template` — .claude/skills/execution-plans/SKILL.md:36
- `### Required Sections` — .claude/skills/execution-plans/SKILL.md:40
- `## Process` — .claude/skills/execution-plans/SKILL.md:51
- `### Creating a Plan` — .claude/skills/execution-plans/SKILL.md:53
- `### Updating Progress` — .claude/skills/execution-plans/SKILL.md:60
- `### Logging Decisions` — .claude/skills/execution-plans/SKILL.md:66
- `### Completing a Plan` — .claude/skills/execution-plans/SKILL.md:74
- `### Blocking a Plan` — .claude/skills/execution-plans/SKILL.md:81
- `### Abandoning a Plan` — .claude/skills/execution-plans/SKILL.md:87
- `## Integration` — .claude/skills/execution-plans/SKILL.md:93
- `## Anti-Patterns` — .claude/skills/execution-plans/SKILL.md:99
- `## Verification` — .claude/skills/execution-plans/SKILL.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Consumer-side initialization / vendor portability: Includes a declared vendor-portability directive (.claude/skills/execution-plans/SKILL.md:12) specifying that target directories under `.agents/plans/` and `.agents/debt/` must be created on demand if absent, ensuring graceful degradation and portability across consumer setups (issue #2050).
- Explicit lifecycle transitions: Enforces state transitions where active plans move to `completed/` or `abandoned/` rather than being deleted, ensuring a permanent audit trail of work and reasons for cancellation (.claude/skills/execution-plans/SKILL.md:74-92).
- Boundary enforcement: Explicitly disallows using this skill for milestone decomposition or task delegation, deferring those responsibilities to planning agents (.claude/skills/execution-plans/SKILL.md:4).

## Context cost
- File size: 3964 bytes (~991 tokens)
- Invokes: none (0 bytes)
- Total context cost: 3964 bytes (~991 tokens)
