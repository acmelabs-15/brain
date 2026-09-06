---
package: rjm
path: templates/agents/orchestrator.shared.md
type: agent
bytes: 28751
unit: inv-rjm-319
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/orchestrator.shared.md

## Purpose — required, verbatim
> "Enterprise task orchestrator who autonomously coordinates specialized agents end-to-end, routing work, managing handoffs, and synthesizing results. Classifies complexity, triages delegation, and sequences workflows. Use for multi-step tasks requiring coordination, integration, or when the problem needs complete end-to-end resolution." — templates/agents/orchestrator.shared.md:3

## Design intent — required
The orchestrator agent serves as the master coordinator and triage engine for complex multi-agent engineering workflows across supported developer platforms. Without it, autonomous execution would suffer from unstructured delegation, uncontrolled context consumption, premature implementation without stack reconnaissance and complexity classification, and fragmented concatenation of subagent responses. By establishing four-dimensional triage (Cynefin complexity, scope, urgency, reversibility), strict structured handoff contracts, target repository reconnaissance (detecting stack, build manifests, and contribution gates before delegating), wave-based delegation budgets (bounding concurrent subagents and total delegations), anti-drift recovery, output length limits, and a strict synthesis protocol requiring inspection of physical artifacts rather than unverified agent claims, the orchestrator guarantees that specialized agents are dispatched economically, safely, and cohesively.

## Phase — required
cross-phase

## Inputs — required
- Task or problem description via user argument: "Describe the task or problem to solve end-to-end" — templates/agents/orchestrator.shared.md:4
- Session-start blocking requirements: "Activate Serena: `mcp__serena__activate_project`" — templates/agents/orchestrator.shared.md:33
- Session-start blocking requirements: "Read `.agents/AGENT-INSTRUCTIONS.md`" — templates/agents/orchestrator.shared.md:34
- Target repository reconnaissance signals: "Contribution docs: `CONTRIBUTING*.md`, `AGENTS.md`, `CLAUDE.md`, `README*`, `docs/`." — templates/agents/orchestrator.shared.md:46
- Build manifests for stack detection: "Build manifests: `*.csproj` or `*.sln`, `pyproject.toml` or `setup.cfg`, `package.json`, `go.mod`, `Cargo.toml`, `pom.xml` or `build.gradle`." — templates/agents/orchestrator.shared.md:47
- Layout inspection for stack detection: "Layout: the `src/`, `lib/`, and `test/` or `tests/` trees, plus a few representative files in each." — templates/agents/orchestrator.shared.md:48
- Context and prior decisions: "Before each user message, re-read the active plan, relevant artifacts, and exact prior decisions." — templates/agents/orchestrator.shared.md:204
- Plan and per-issue handoff for continuity: "Re-read the plan and current per-issue handoff. Read a historical session log only when one exists." — templates/agents/orchestrator.shared.md:209
- Staged or supplied session log validation (if present): "Validate any staged or supplied session log, if one is present (e.g. cherry-picked from an older branch)." — templates/agents/orchestrator.shared.md:236
- Structured specialist outputs and verified artifacts: "inspect the actual artifact (the diff, the created file, the command output) before folding the claim into synthesis." — templates/agents/orchestrator.shared.md:192
- Cross-session memory: "Memory via `mcp__serena__read_memory` and `mcp__serena__write_memory` for cross-session context and handoff persistence." — templates/agents/orchestrator.shared.md:356

## Outputs — required
- Triage classification: "Triage classification" — templates/agents/orchestrator.shared.md:217
- Specialist delegation block: "1 DELEGATE block per agent; each field 1 sentence" — templates/agents/orchestrator.shared.md:218
- User status update: "3 sentences: what delegated, to whom, when to expect" — templates/agents/orchestrator.shared.md:219
- Synthesized output combining agent findings: "400 words or 4 paragraphs, whichever comes first" — templates/agents/orchestrator.shared.md:220
- Continuity / workLog entry: "2 sentences per work item: action then result or rationale" — templates/agents/orchestrator.shared.md:221
- Per-issue handoff document: "**Write per-issue handoff** to `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE_NUMBER}-handoff.md` from the template at `.agents/templates/HANDOFF.md`" — templates/agents/orchestrator.shared.md:234
- Durable findings in Serena memory: "Store durable findings in Serena memory." — templates/agents/orchestrator.shared.md:235
- Failed pattern documentation: "Log the failed pattern to `memory/feedback-log.md` (or Serena memory) so it does not recur." — templates/agents/orchestrator.shared.md:257
- Direct response for trivial tasks: "Produce directly. Don't delegate." — templates/agents/orchestrator.shared.md:81

## Invokes — required
- agent analyst — templates/agents/orchestrator.shared.md:93
- agent architect — templates/agents/orchestrator.shared.md:94
- agent backlog-generator — templates/agents/orchestrator.shared.md:95
- agent critic — templates/agents/orchestrator.shared.md:96
- agent debug — templates/agents/orchestrator.shared.md:97
- agent dependency-auditor — templates/agents/orchestrator.shared.md:98
- agent devops — templates/agents/orchestrator.shared.md:99
- agent explainer — templates/agents/orchestrator.shared.md:100
- agent high-level-advisor — templates/agents/orchestrator.shared.md:101
- agent implementer — templates/agents/orchestrator.shared.md:102
- agent independent-thinker — templates/agents/orchestrator.shared.md:103
- agent issue-feature-review — templates/agents/orchestrator.shared.md:104
- agent milestone-planner — templates/agents/orchestrator.shared.md:105
- agent qa — templates/agents/orchestrator.shared.md:106
- agent pr-test-analyzer — templates/agents/orchestrator.shared.md:107
- agent quality-auditor — templates/agents/orchestrator.shared.md:108
- agent retrospective — templates/agents/orchestrator.shared.md:109
- agent roadmap — templates/agents/orchestrator.shared.md:110
- agent security — templates/agents/orchestrator.shared.md:111
- agent silent-failure-hunter — templates/agents/orchestrator.shared.md:112
- agent skillbook — templates/agents/orchestrator.shared.md:113
- agent task-decomposer — templates/agents/orchestrator.shared.md:114
- skill spec-generator — templates/agents/orchestrator.shared.md:141
- skill memory — templates/agents/orchestrator.shared.md:116
- skill exploring-knowledge-graph — templates/agents/orchestrator.shared.md:322
- doc AGENTS.md — templates/agents/orchestrator.shared.md:25
- doc .agents/AGENT-INSTRUCTIONS.md — templates/agents/orchestrator.shared.md:34
- template .agents/templates/HANDOFF.md — templates/agents/orchestrator.shared.md:234

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:35
- doc CONTRIBUTING.md — CONTRIBUTING.md:137
- template templates/README.md — templates/README.md:15

## Concepts named — required, verbatim
- `coordinator` — templates/agents/orchestrator.shared.md:2 — defined here
- `orchestrator` — templates/agents/orchestrator.shared.md:3 — defined here
- `Autonomy Guardrail` — templates/agents/orchestrator.shared.md:25 — used here
- `Session Start` — templates/agents/orchestrator.shared.md:29 — defined here
- `Target Recon` — templates/agents/orchestrator.shared.md:40 — defined here
- `Reasoning Protocol` — templates/agents/orchestrator.shared.md:54 — defined here
- `Thinking trigger` — templates/agents/orchestrator.shared.md:58 — defined here
- `Triage first` — templates/agents/orchestrator.shared.md:64 — defined here
- `Cynefin` — templates/agents/orchestrator.shared.md:66 — used here
- `Never delegate blind` — templates/agents/orchestrator.shared.md:73 — defined here
- `Never skip synthesis` — templates/agents/orchestrator.shared.md:75 — defined here
- `Agent Capability Matrix` — templates/agents/orchestrator.shared.md:87 — defined here
- `Model, Effort, and Cost Routing` — templates/agents/orchestrator.shared.md:89 — defined here
- `Routing Algorithm` — templates/agents/orchestrator.shared.md:129 — defined here
- `Handoff Contract` — templates/agents/orchestrator.shared.md:150 — defined here
- `Skill inheritance` — templates/agents/orchestrator.shared.md:166 — defined here
- `Analyst evidence handoff` — templates/agents/orchestrator.shared.md:168 — defined here
- `Synthesis Protocol` — templates/agents/orchestrator.shared.md:188 — defined here
- `Context Maintenance` — templates/agents/orchestrator.shared.md:202 — defined here
- `Output Bounds` — templates/agents/orchestrator.shared.md:213 — defined here
- `Completion Gate` — templates/agents/orchestrator.shared.md:225 — defined here
- `Pre-Close Sequence` — templates/agents/orchestrator.shared.md:230 — defined here
- `per-issue handoff` — templates/agents/orchestrator.shared.md:234 — defined here
- `Failure Path` — templates/agents/orchestrator.shared.md:238 — defined here
- `Anti-Drift Protocol` — templates/agents/orchestrator.shared.md:247 — defined here
- `7-Step Recovery` — templates/agents/orchestrator.shared.md:251 — defined here
- `Event-Driven TODO Review` — templates/agents/orchestrator.shared.md:261 — defined here
- `Session Capture Protocol` — templates/agents/orchestrator.shared.md:265 — defined here
- `Context Budget Management` — templates/agents/orchestrator.shared.md:290 — defined here
- `Checkpoint protocol` — templates/agents/orchestrator.shared.md:302 — defined here
- `Reliability Principles` — templates/agents/orchestrator.shared.md:318 — defined here
- `Idempotent delegations` — templates/agents/orchestrator.shared.md:320 — defined here
- `Explicit handoffs` — templates/agents/orchestrator.shared.md:321 — defined here
- `Graceful degradation` — templates/agents/orchestrator.shared.md:322 — defined here
- `Observability` — templates/agents/orchestrator.shared.md:323 — defined here
- `Orchestration Budget` — templates/agents/orchestrator.shared.md:325 — defined here
- `Hook Feedback` — templates/agents/orchestrator.shared.md:336 — defined here
- `Anti-Patterns` — templates/agents/orchestrator.shared.md:364 — defined here

## Structure
- `# Orchestrator Agent` — templates/agents/orchestrator.shared.md:23
- `## Session Start (Blocking)` — templates/agents/orchestrator.shared.md:29
- `## Target Recon (Before Triage)` — templates/agents/orchestrator.shared.md:40
- `## Reasoning Protocol` — templates/agents/orchestrator.shared.md:54
- `## Core Behavior` — templates/agents/orchestrator.shared.md:62
- `## When to Produce vs When to Route` — templates/agents/orchestrator.shared.md:77
- `## Agent Capability Matrix` — templates/agents/orchestrator.shared.md:87
- `## Model, Effort, and Cost Routing` — templates/agents/orchestrator.shared.md:118
- `## Routing Algorithm` — templates/agents/orchestrator.shared.md:129
- `## Handoff Contract` — templates/agents/orchestrator.shared.md:150
- `### Analyst evidence handoff` — templates/agents/orchestrator.shared.md:168
- `## Synthesis Protocol` — templates/agents/orchestrator.shared.md:188
- `## Context Maintenance` — templates/agents/orchestrator.shared.md:202
- `## Output Bounds` — templates/agents/orchestrator.shared.md:213
- `## Completion Gate (Blocking)` — templates/agents/orchestrator.shared.md:225
- `### Pre-Close Sequence` — templates/agents/orchestrator.shared.md:230
- `### Failure Path` — templates/agents/orchestrator.shared.md:238
- `## Anti-Drift Protocol` — templates/agents/orchestrator.shared.md:247
- `### 7-Step Recovery` — templates/agents/orchestrator.shared.md:251
- `### Event-Driven TODO Review` — templates/agents/orchestrator.shared.md:261
- `### Session Capture Protocol` — templates/agents/orchestrator.shared.md:265
- `## Context Budget Management` — templates/agents/orchestrator.shared.md:290
- `## Reliability Principles` — templates/agents/orchestrator.shared.md:318
- `## Orchestration Budget` — templates/agents/orchestrator.shared.md:325
- `## Hook Feedback` — templates/agents/orchestrator.shared.md:336
- `## Constraints` — templates/agents/orchestrator.shared.md:346
- `## Tools` — templates/agents/orchestrator.shared.md:354
- `## Anti-Patterns` — templates/agents/orchestrator.shared.md:364

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `memory/feedback-log.md` cited at `templates/agents/orchestrator.shared.md:257` does not exist in repository (`sources/rjm/memory/feedback-log.md` is missing).
- `doc-drift` · `templates/agents/orchestrator.shared.md:141` resolves `/spec` to `(spec-generator skill)` whereas `.claude/agents/orchestrator.md:130` cites `/spec` without resolving the skill name.
- `cross-file-contradiction` · `templates/agents/orchestrator.shared.md:230-237` omits step 3 of the pre-close sequence checklist present in `.claude/agents/orchestrator.md:223` ("Verify delegation count is within budget (fewer than 15); if budget limit was reached, produce a budget-exhaustion summary"), even though `templates/agents/orchestrator.shared.md:329` still documents "Max agent delegations per task: 15".
- `cross-file-contradiction` · Frontmatter structure and placement of `Reasoning Protocol` vs `Target Recon` diverge between `.claude/agents/orchestrator.md:27-44` and `templates/agents/orchestrator.shared.md:40-60` without declared build provenance.

## Observations
- Cross-platform shared template: specifies VS Code Copilot Chat and GitHub Copilot CLI toolset mappings (`tools_vscode`, `tools_copilot` frontmatter lines 5-20), whereas `.claude/agents/orchestrator.md` configures Claude Code agent frontmatter (`name: orchestrator`, `model: opus`).
- Anti-hallucination context constraint: line 296 explicitly establishes "You cannot observe your own context usage. The window size is not exposed to you, so any statement about how much of it remains is fabricated."
- Artifact-first verification over status reports: line 192 mandates "Verify artifacts, not reports - a worker's summary describes what it intended to do, not what it did. When a worker reports code, tests, or files as done, inspect the actual artifact (the diff, the created file, the command output) before folding the claim into synthesis."
- Empirical model and effort routing guidelines: lines 120-128 document empirical guidance for flagship vs cheaper models, token cost vs latency trade-offs, and note the token context duplication tax of parallel subagent teams (citing UpGPT benchmarks and effortmining studies).

## Context cost
28,751 bytes (386 lines, ~7,200 tokens).
Loads referenced documents when executing: `.agents/AGENT-INSTRUCTIONS.md` (19,038 bytes), `AGENTS.md` (2,947 bytes), `.agents/templates/HANDOFF.md` (2,166 bytes), and `.agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md` (19,830 bytes).
Total context cost: ~72,732 bytes (~18,200 tokens).
