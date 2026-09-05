---
package: rjm
path: .claude/agents/orchestrator.md
type: agent
bytes: 28813
unit: inv-rjm-69
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/orchestrator.md

## Purpose — required, verbatim
> "Enterprise task orchestrator who autonomously coordinates specialized agents end-to-end, routing work, managing handoffs, and synthesizing results. Classifies complexity, triages delegation, and sequences workflows. Use for multi-step tasks requiring coordination, integration, or when the problem needs complete end-to-end resolution." — .claude/agents/orchestrator.md:3

## Design intent — required
The orchestrator agent acts as the central coordinator and triage authority for complex multi-agent engineering workflows. Without it, development tasks would suffer from unstructured delegation, uncontrolled context consumption, premature coding without requirements analysis, and chaotic multi-agent execution. By establishing rigorous triage protocols (Cynefin complexity, scope, urgency, reversibility), strict handoff contracts, target stack reconnaissance, anti-drift recovery, output length constraints, and systematic synthesis rules that demand artifact verification over mere self-reported status, the orchestrator ensures that specialized agents are deployed economically, safely, and coherently.

## Phase — required
cross-phase

## Inputs — required
- Task or problem description via user argument: "Describe the task or problem to solve end-to-end" — .claude/agents/orchestrator.md:7
- Session-start instructions from `.agents/AGENT-INSTRUCTIONS.md` (.claude/agents/orchestrator.md:21)
- Target repository reconnaissance signals: contribution documents (`CONTRIBUTING*.md`, `AGENTS.md`, `CLAUDE.md`, `README*`, `docs/`), build manifests (`*.csproj`, `*.sln`, `pyproject.toml`, `setup.cfg`, `package.json`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`), and filesystem trees (`src/`, `lib/`, `test/`, `tests/`) (.claude/agents/orchestrator.md:39-44)
- Specialized agent investigation outputs, findings, test results, ADRs, and verification artifacts returned from delegated subagents (.claude/agents/orchestrator.md:141-154, 178-190)
- Durable memory and project state via Serena MCP (`mcp__serena__read_memory`, `mcp__serena__activate_project`) (.claude/agents/orchestrator.md:20, 105, 346)
- PreToolUse hook feedback and stderr denial reasons (.claude/agents/orchestrator.md:326-335)
- Historical session logs and per-issue handoffs from `.agents/sessions/handoffs/` (.claude/agents/orchestrator.md:198, 224)

## Outputs — required
- Direct answers and solutions for clear, reversible, trivial single-step tasks (.claude/agents/orchestrator.md:68-70, 124)
- Structured delegation blocks specifying `DELEGATE TO`, `TASK`, `CONTEXT`, `EXPECTED OUTPUT`, `SUCCESS CRITERIA`, `CONSTRAINTS`, and optional `TIMEBOX` (.claude/agents/orchestrator.md:143-151, 207)
- Synthesized, deduplicated, and conflict-resolved status updates and final actionable reports for the user (.claude/agents/orchestrator.md:178-190, 208-212)
- Per-issue handoff documents written to `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE_NUMBER}-handoff.md` from `.agents/templates/HANDOFF.md` (.claude/agents/orchestrator.md:224)
- Stored durable findings and decisions in Serena memory via `mcp__serena__write_memory` (.claude/agents/orchestrator.md:225, 346)
- Failed patterns logged to `memory/feedback-log.md` during anti-drift recovery (.claude/agents/orchestrator.md:247)
- Task tracker updates and warning notes when delegation limits (10 warning, 15 budget max) or wave limits (4 concurrent) are approached (.claude/agents/orchestrator.md:318-322)

## Invokes — required
- agent analyst — .claude/agents/orchestrator.md:82
- agent architect — .claude/agents/orchestrator.md:83
- agent backlog-generator — .claude/agents/orchestrator.md:84
- agent critic — .claude/agents/orchestrator.md:85
- agent debug — .claude/agents/orchestrator.md:86
- agent dependency-auditor — .claude/agents/orchestrator.md:87
- agent devops — .claude/agents/orchestrator.md:88
- agent explainer — .claude/agents/orchestrator.md:89
- agent high-level-advisor — .claude/agents/orchestrator.md:90
- agent implementer — .claude/agents/orchestrator.md:91
- agent independent-thinker — .claude/agents/orchestrator.md:92
- agent issue-feature-review — .claude/agents/orchestrator.md:93
- agent milestone-planner — .claude/agents/orchestrator.md:94
- agent qa — .claude/agents/orchestrator.md:95
- agent pr-test-analyzer — .claude/agents/orchestrator.md:96
- agent quality-auditor — .claude/agents/orchestrator.md:97
- agent retrospective — .claude/agents/orchestrator.md:98
- agent roadmap — .claude/agents/orchestrator.md:99
- agent security — .claude/agents/orchestrator.md:100
- agent silent-failure-hunter — .claude/agents/orchestrator.md:101
- agent skillbook — .claude/agents/orchestrator.md:102
- agent task-decomposer — .claude/agents/orchestrator.md:103
- command spec — .claude/agents/orchestrator.md:130
- reference AGENTS.md — .claude/agents/orchestrator.md:12
- doc AGENT-INSTRUCTIONS.md — .claude/agents/orchestrator.md:21
- template HANDOFF.md — .claude/agents/orchestrator.md:224

## Invoked by — required
- doc orchestrator — .agents/AGENT-SYSTEM.md:30
- doc orchestrator — .claude/agents/AGENTS.md:141
- doc orchestrator — .agents/architecture/README.md:173
- doc orchestrator — .agents/architecture/ADR-065-orchestrator-as-router.md:24
- doc orchestrator — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:46
- doc orchestrator — README.md:122

## Concepts named — required, verbatim
- `Autonomy Guardrail` — .claude/agents/orchestrator.md:12 — used here
- `Session Start` — .claude/agents/orchestrator.md:16 — defined here
- `Reasoning Protocol` — .claude/agents/orchestrator.md:27 — defined here
- `Thinking trigger` — .claude/agents/orchestrator.md:31 — defined here
- `Target Recon` — .claude/agents/orchestrator.md:35 — defined here
- `Triage first` — .claude/agents/orchestrator.md:51 — defined here
- `Cynefin` — .claude/agents/orchestrator.md:53 — used here
- `Never delegate blind` — .claude/agents/orchestrator.md:60 — defined here
- `Never skip synthesis` — .claude/agents/orchestrator.md:62 — defined here
- `SESSION END GATE` — .claude/agents/orchestrator.md:64 — used here
- `Agent Capability Matrix` — .claude/agents/orchestrator.md:76 — defined here
- `Model, Effort, and Cost Routing` — .claude/agents/orchestrator.md:107 — defined here
- `Routing Algorithm` — .claude/agents/orchestrator.md:118 — defined here
- `Handoff Contract` — .claude/agents/orchestrator.md:139 — defined here
- `Analyst evidence handoff` — .claude/agents/orchestrator.md:157 — defined here
- `Synthesis Protocol` — .claude/agents/orchestrator.md:177 — defined here
- `Context Maintenance` — .claude/agents/orchestrator.md:191 — defined here
- `Output Bounds` — .claude/agents/orchestrator.md:202 — defined here
- `Completion Gate` — .claude/agents/orchestrator.md:214 — defined here
- `Pre-Close Sequence` — .claude/agents/orchestrator.md:219 — defined here
- `Failure Path` — .claude/agents/orchestrator.md:228 — defined here
- `Anti-Drift Protocol` — .claude/agents/orchestrator.md:237 — defined here
- `7-Step Recovery` — .claude/agents/orchestrator.md:241 — defined here
- `Event-Driven TODO Review` — .claude/agents/orchestrator.md:251 — defined here
- `Session Capture Protocol` — .claude/agents/orchestrator.md:255 — defined here
- `Context Budget Management` — .claude/agents/orchestrator.md:280 — defined here
- `Checkpoint protocol` — .claude/agents/orchestrator.md:292 — defined here
- `Reliability Principles` — .claude/agents/orchestrator.md:308 — defined here
- `Orchestration Budget` — .claude/agents/orchestrator.md:315 — defined here
- `Hook Feedback` — .claude/agents/orchestrator.md:326 — defined here

## Structure
- # Orchestrator Agent — .claude/agents/orchestrator.md:10
- ## Session Start (Blocking) — .claude/agents/orchestrator.md:16
- ## Reasoning Protocol — .claude/agents/orchestrator.md:27
- ## Target Recon (Before Triage) — .claude/agents/orchestrator.md:35
- ## Core Behavior — .claude/agents/orchestrator.md:49
- ## When to Produce vs When to Route — .claude/agents/orchestrator.md:66
- ## Agent Capability Matrix — .claude/agents/orchestrator.md:76
- ## Model, Effort, and Cost Routing — .claude/agents/orchestrator.md:107
- ## Routing Algorithm — .claude/agents/orchestrator.md:118
- ## Handoff Contract — .claude/agents/orchestrator.md:139
- ### Analyst evidence handoff — .claude/agents/orchestrator.md:157
- ## Synthesis Protocol — .claude/agents/orchestrator.md:177
- ## Context Maintenance — .claude/agents/orchestrator.md:191
- ## Output Bounds — .claude/agents/orchestrator.md:202
- ## Completion Gate (Blocking) — .claude/agents/orchestrator.md:214
- ### Pre-Close Sequence — .claude/agents/orchestrator.md:219
- ### Failure Path — .claude/agents/orchestrator.md:228
- ## Anti-Drift Protocol — .claude/agents/orchestrator.md:237
- ### 7-Step Recovery — .claude/agents/orchestrator.md:240
- ### Event-Driven TODO Review — .claude/agents/orchestrator.md:251
- ### Session Capture Protocol — .claude/agents/orchestrator.md:255
- ## Context Budget Management — .claude/agents/orchestrator.md:280
- ## Reliability Principles — .claude/agents/orchestrator.md:308
- ## Orchestration Budget — .claude/agents/orchestrator.md:315
- ## Hook Feedback — .claude/agents/orchestrator.md:326
- ## Constraints — .claude/agents/orchestrator.md:336
- ## Tools — .claude/agents/orchestrator.md:344
- ## Anti-Patterns — .claude/agents/orchestrator.md:354

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/orchestrator.md:247 · The file `memory/feedback-log.md` does not exist in `sources/rjm/`.
- `doc-drift` · .claude/agents/orchestrator.md:276 · Refers to formatting `workLog` entries despite lines 216 and 258 stating that session log creation is discontinued.

## Observations
- **Autonomy and coordination boundary**: The orchestrator is strictly forbidden from writing code, sketching architectures, or conducting reviews itself; it coordinates through explicit handoff contracts and synthesizes returns.
- **Epistemic rigor and artifact verification**: Mandates verifying actual artifacts (diffs, files, command outputs) rather than trusting self-reported worker summaries ("done" claims).
- **Target recon requirement**: Mandates detecting target repository stack (manifests, build tools, conventions) before triage to avoid sending downstream specialists in the wrong direction.
- **Budget and wave controls**: Caps delegations at 15 per task (warning at 10) and limits concurrent delegations to 4 per wave to prevent un-folded return loss and context thrashing.
- **Model and effort economics**: Strongly advocates flagship models (Opus) for interactive work citing human wait time dominance (20-40x token cost), while advising against max effort dials.
- **Duplication ledger relations**: Has exact byte duplicate `src/claude/orchestrator.md` (28,813 bytes, hash `e2a2f90033a2d7b3`, EXACT group 1). Forms VARIANT pair V4 with `templates/agents/orchestrator.shared.md` (94% shared lines, 6 hunks), documented in `docs/analysis/inventory/rjm/_divergence/claude-agents-orchestrator-md--templates-agents-orchestrator-shared-md.md`.

## Context cost
28813 bytes. Approximately 7,200 tokens for the agent prompt itself, expanding to 12,000–25,000 tokens when loaded with initial repository reconnaissance files and session handoff state.
