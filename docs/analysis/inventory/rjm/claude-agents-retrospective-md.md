---
package: rjm
path: .claude/agents/retrospective.md
type: agent
bytes: 46695
unit: inv-rjm-71
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/retrospective.md

## Purpose — required, verbatim
> "Reflective analyst who extracts learnings through structured retrospective frameworks, diagnosing agent performance, identifying error patterns, and documenting success strategies. Uses Five Whys, timeline analysis, and learning matrices. Use when you need root-cause analysis, atomicity scoring, or to transform experience into institutional knowledge." — .claude/agents/retrospective.md:3

## Design intent — required
A comprehensive reflective analysis and continuous improvement specialist that transforms raw agent execution history, failures, and near-misses into durable institutional knowledge and reusable skills across multi-session workflows. Operating to eliminate multi-session amnesia and prevent recurring error modes, it guides post-execution analysis through a rigorous seven-phase pipeline (data gathering, insight generation, diagnosis, action classification, atomicity-scored learning extraction, recursive learning extraction, and retrospective closure). It incorporates cognitive bias guardrails based on Paul Graham's "Keep Your Identity Small" to prevent identity-protective rationalization, enforces strict atomicity scoring (deducting penalties for compound statements, vague terms, and lack of metrics) with a >=70% persistence threshold, and integrates directly with ADR-017 / ADR-037 memory architectures to persist prevention patterns into the codebase.

## Phase — required
rjm:support

## Inputs — required
- Task or session description to analyze for learnings via `argument-hint` ("Describe the task or session to analyze for learnings") — .claude/agents/retrospective.md:7
- Execution artifacts, logs, tool calls, outputs, and errors inspected via Read, Grep, Glob — .claude/agents/retrospective.md:47, 145-148, 194
- Git log and GitHub PR view context fetched via Bash (`git log`, `gh pr view`) — .claude/agents/retrospective.md:48
- Existing memory entities and skill patterns retrieved via Memory Router: "uv run python .claude/skills/memory/scripts/search_memory.py --query \"topic\"" — .claude/agents/retrospective.md:50
- Spec-layer artifacts (requirements, designs, tasks) validated via traceability graph script — .claude/agents/retrospective.md:494-500
- Prose self-check skill (`.claude/skills/prose-self-check/SKILL.md`) run before emitting any prose artifact — .claude/agents/retrospective.md:35
- User feedback and session completion triggers — .claude/agents/retrospective.md:65-69

## Outputs — required
- Retrospective markdown document saved to `.agents/retrospective/YYYY-MM-DD-[scope].md` documenting 4-Step Debrief, Execution Trace, Outcome Classification, Five Whys, Fishbone, Force Field, Patterns/Shifts, Learning Matrix, Diagnosis, Decisions, Extracted Learnings, Root Cause Patterns, Recursive Extractions, and Closure — .claude/agents/retrospective.md:721, 1362, 1404
- Root cause entity memories saved to `.serena/memories/` using `mcp__serena__write_memory` (`rootcause-{category}-{nnn}`) — .claude/agents/retrospective.md:840-843
- Skill memories created or updated in `.serena/memories/` using `mcp__serena__write_memory` and `mcp__serena__edit_memory` (`{domain}-{description}`) — .claude/agents/retrospective.md:1329-1340
- GitHub issues created for P0/P1 Delta triage items via `new_issue.py` — .claude/agents/retrospective.md:1215-1219
- Backlog memory files saved to `.serena/memories/` (`backlog/retro-{YYYY-MM-DD}-items.md`) for P2/P3 Delta items — .claude/agents/retrospective.md:1226-1229
- Mandatory structured handoff markdown block (`## Retrospective Handoff`) containing Skill Candidates table, Memory Updates table, Git Operations table, and Handoff Summary — .claude/agents/retrospective.md:1384-1411

## Invokes — required
- skill prose-self-check — .claude/agents/retrospective.md:35
- script .claude/skills/memory/scripts/search_memory.py — .claude/agents/retrospective.md:50
- script scripts/traceability/show_traceability_graph.py — .claude/agents/retrospective.md:499
- agent skillbook — .claude/agents/retrospective.md:917
- script scripts/validation/memory_index.py — .claude/agents/retrospective.md:1013
- skill GitHub — .claude/agents/retrospective.md:1212
- script .claude/skills/github/scripts/issue/new_issue.py — .claude/agents/retrospective.md:1215
- agent orchestrator — .claude/agents/retrospective.md:1358
- agent implementer — .claude/agents/retrospective.md:1371
- agent milestone-planner — .claude/agents/retrospective.md:1372
- agent architect — .claude/agents/retrospective.md:1373
- agent memory — .claude/agents/retrospective.md:1375

## Invoked by — required
- skill retrospective — .claude/skills/work-operating-model/SKILL.md:34
- skill retrospective — .claude/skills/ai-agents-docs-of-record/SKILL.md:112
- doc retrospective — README.md:407
- doc retrospective — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125

## Concepts named — required, verbatim
- `retrospective` — .claude/agents/retrospective.md:2 — defined here
- `support` — .claude/agents/retrospective.md:6 — used here
- `Retrospective Agent` — .claude/agents/retrospective.md:9 — defined here
- `Reflector` — .claude/agents/retrospective.md:9 — defined here
- `Senior Analytical Reviewer` — .claude/agents/retrospective.md:13 — defined here
- `Style Guide Compliance` — .claude/agents/retrospective.md:15 — defined here
- `Quantified Learning Outcomes` — .claude/agents/retrospective.md:28 — defined here
- `Evidence-Based Skill Extraction` — .claude/agents/retrospective.md:29 — defined here
- `Atomicity Scores` — .claude/agents/retrospective.md:30 — defined here
- `Source Attribution` — .claude/agents/retrospective.md:31 — defined here
- `Prose Self-Check` — .claude/agents/retrospective.md:33 — used here
- `Memory Router` — .claude/agents/retrospective.md:49 — used here
- `Data Gathering` — .claude/agents/retrospective.md:74 — defined here
- `4-Step Debrief` — .claude/agents/retrospective.md:75 — defined here
- `Execution Trace Analysis` — .claude/agents/retrospective.md:76 — defined here
- `Outcome Classification` — .claude/agents/retrospective.md:77 — defined here
- `Generate Insights` — .claude/agents/retrospective.md:79 — defined here
- `Five Whys` — .claude/agents/retrospective.md:80 — used here
- `Fishbone Analysis` — .claude/agents/retrospective.md:81 — used here
- `Force Field Analysis` — .claude/agents/retrospective.md:82 — used here
- `Patterns and Shifts` — .claude/agents/retrospective.md:83 — defined here
- `Learning Matrix` — .claude/agents/retrospective.md:84 — used here
- `Diagnosis` — .claude/agents/retrospective.md:86 — defined here
- `Critical Error Patterns` — .claude/agents/retrospective.md:87 — defined here
- `Success Analysis` — .claude/agents/retrospective.md:88 — defined here
- `Near Misses` — .claude/agents/retrospective.md:89 — defined here
- `Efficiency Opportunities` — .claude/agents/retrospective.md:90 — defined here
- `Skill Gaps` — .claude/agents/retrospective.md:91 — defined here
- `Decide What to Do` — .claude/agents/retrospective.md:93 — defined here
- `Action Classification` — .claude/agents/retrospective.md:94 — defined here
- `SMART Validation` — .claude/agents/retrospective.md:95 — used here
- `Dependency Ordering` — .claude/agents/retrospective.md:96 — defined here
- `Learning Extraction` — .claude/agents/retrospective.md:98 — defined here
- `Atomicity Scoring` — .claude/agents/retrospective.md:99 — defined here
- `Skillbook Updates` — .claude/agents/retrospective.md:100 — defined here
- `Deduplication Check` — .claude/agents/retrospective.md:101 — defined here
- `Root Cause Pattern Management` — .claude/agents/retrospective.md:103 — defined here
- `Failure Prevention Matrix` — .claude/agents/retrospective.md:106 — defined here
- `Recursive Learning Extraction` — .claude/agents/retrospective.md:109 — defined here
- `Close the Retrospective` — .claude/agents/retrospective.md:115 — defined here
- `+/Delta` — .claude/agents/retrospective.md:116 — used here
- `Delta Triage` — .claude/agents/retrospective.md:117 — defined here
- `ROTI` — .claude/agents/retrospective.md:118 — used here
- `Helped, Hindered, Hypothesis` — .claude/agents/retrospective.md:119 — defined here
- `Keep Your Identity Small` — .claude/agents/retrospective.md:167 — used here
- `load-bearing identity` — .claude/agents/retrospective.md:178 — defined here
- `execution discipline` — .claude/agents/retrospective.md:180 — defined here
- `meta-identity exception` — .claude/agents/retrospective.md:181 — defined here
- `conformist test` — .claude/agents/retrospective.md:182 — defined here
- `Mad Sad Glad` — .claude/agents/retrospective.md:224 — used here
- `Traceability Health` — .claude/agents/retrospective.md:490 — defined here
- `Keep/Drop/Add` — .claude/agents/retrospective.md:583 — used here
- `Evidence-Based Tagging` — .claude/agents/retrospective.md:711 — defined here
- `Root Cause Categories` — .claude/agents/retrospective.md:820 — defined here
- `Root Cause Pattern Template` — .claude/agents/retrospective.md:862 — defined here
- `Infinite Loop Prevention` — .claude/agents/retrospective.md:1057 — defined here
- `Return on Time Invested` — .claude/agents/retrospective.md:1261 — used here
- `Memory Protocol` — .claude/agents/retrospective.md:1316 — defined here
- `Continuous Improvement Loop` — .claude/agents/retrospective.md:1346 — defined here
- `Handoff Protocol` — .claude/agents/retrospective.md:1356 — defined here
- `Structured Handoff Output` — .claude/agents/retrospective.md:1379 — defined here
- `Execution Mindset` — .claude/agents/retrospective.md:1469 — defined here

## Structure
- # Retrospective Agent (Reflector) — .claude/agents/retrospective.md:9
- ## Core Identity — .claude/agents/retrospective.md:11
- ## Style Guide Compliance — .claude/agents/retrospective.md:15
- ## Prose Self-Check — .claude/agents/retrospective.md:33
- ## Activation Profile — .claude/agents/retrospective.md:37
- ## Claude Code Tools — .claude/agents/retrospective.md:43
- ## Core Mission — .claude/agents/retrospective.md:57
- ## Trigger Conditions — .claude/agents/retrospective.md:61
- ## Retrospective Flow — .claude/agents/retrospective.md:71
- ## Phase 0: Data Gathering — .claude/agents/retrospective.md:124
- ### Activity: 4-Step Debrief — .claude/agents/retrospective.md:128
- ### Bias Guard: Keep Your Identity Small — .claude/agents/retrospective.md:167
- ### Activity: Execution Trace Analysis — .claude/agents/retrospective.md:186
- ### Activity: Outcome Classification — .claude/agents/retrospective.md:222
- ## Phase 1: Generate Insights — .claude/agents/retrospective.md:255
- ### Activity: Five Whys — .claude/agents/retrospective.md:259
- ### Activity: Fishbone Analysis — .claude/agents/retrospective.md:323
- ### Activity: Force Field Analysis — .claude/agents/retrospective.md:377
- ### Activity: Patterns and Shifts — .claude/agents/retrospective.md:412
- ### Activity: Learning Matrix — .claude/agents/retrospective.md:440
- ## Phase 2: Diagnosis — .claude/agents/retrospective.md:479
- ### Diagnostic Priority Order — .claude/agents/retrospective.md:483
- ### Traceability Metrics — .claude/agents/retrospective.md:492
- ### Diagnosis Template — .claude/agents/retrospective.md:551
- ## Phase 3: Decide What to Do — .claude/agents/retrospective.md:577
- ### Activity: Action Classification — .claude/agents/retrospective.md:581
- ### Activity: SMART Validation — .claude/agents/retrospective.md:618
- ### Dependency Ordering — .claude/agents/retrospective.md:653
- ## Phase 4: Learning Extraction — .claude/agents/retrospective.md:671
- ### Atomicity Scoring — .claude/agents/retrospective.md:675
- ### Quality Thresholds — .claude/agents/retrospective.md:687
- ### Evidence-Based Tagging — .claude/agents/retrospective.md:711
- ### Learning Extraction Template — .claude/agents/retrospective.md:719
- ## Root Cause Pattern Management — .claude/agents/retrospective.md:816
- ### Root Cause Categories — .claude/agents/retrospective.md:820
- ### Memory Storage Pattern — .claude/agents/retrospective.md:833
- ### Failure Prevention Matrix — .claude/agents/retrospective.md:845
- ### Root Cause Pattern Template — .claude/agents/retrospective.md:862
- ### Integration with Skillbook — .claude/agents/retrospective.md:895
- ## Phase 5: Recursive Learning Extraction — .claude/agents/retrospective.md:915
- ### Purpose — .claude/agents/retrospective.md:919
- ### Process — .claude/agents/retrospective.md:928
- #### Step 1: Initial Extraction — .claude/agents/retrospective.md:930
- #### Step 2: Skillbook Delegation — .claude/agents/retrospective.md:960
- #### Step 3: Recursive Evaluation — .claude/agents/retrospective.md:1016
- #### Step 4: Termination Criteria — .claude/agents/retrospective.md:1047
- ### Prompt Template for Skillbook Agent — .claude/agents/retrospective.md:1064
- ### Integration with Phase 4 — .claude/agents/retrospective.md:1096
- ### Documentation Requirements — .claude/agents/retrospective.md:1107
- ### Quality Gates — .claude/agents/retrospective.md:1142
- ## Phase 6: Close the Retrospective — .claude/agents/retrospective.md:1153
- ### Activity: +/Delta — .claude/agents/retrospective.md:1157
- ### Activity: Delta Triage — .claude/agents/retrospective.md:1183
- ### Activity: ROTI (Return on Time Invested) — .claude/agents/retrospective.md:1261
- ### Activity: Helped, Hindered, Hypothesis — .claude/agents/retrospective.md:1289
- ## Memory Protocol — .claude/agents/retrospective.md:1316
- ## Continuous Improvement Loop — .claude/agents/retrospective.md:1346
- ## Handoff Protocol — .claude/agents/retrospective.md:1356
- ## Handoff Options (Recommendations for Orchestrator) — .claude/agents/retrospective.md:1366
- ## Structured Handoff Output (MANDATORY) — .claude/agents/retrospective.md:1379
- ### Handoff Output Rules — .claude/agents/retrospective.md:1413
- ### Example Handoff Output — .claude/agents/retrospective.md:1420
- ## Handoff Routing Recommendations — .claude/agents/retrospective.md:1456
- ## Execution Mindset — .claude/agents/retrospective.md:1469

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `wiki/concepts/Critical Thinking/Keep Your Identity Small.md` — .claude/agents/retrospective.md:170 — The cited wiki source file does not exist in the repository; no wiki/ directory exists.
- `missing-path` · `wiki/concepts/Critical Thinking/How to Think for Yourself.md` — .claude/agents/retrospective.md:170 — The cited wiki source file does not exist in the repository; no wiki/ directory exists.
- `internal-contradiction` · subagent delegation · Phase 5 instructs delegating directly to the skillbook agent ("Transform session learnings into persistent Serena memories using skillbook agent" — .claude/agents/retrospective.md:917), contradicting the Handoff Protocol which explicitly mandates: "As a subagent, you CANNOT delegate directly" — .claude/agents/retrospective.md:1358.

## Observations
- Variant relation: shares 86% of distinct lines with `templates/agents/retrospective.shared.md` (ledger V21; divergence card created).
- Model selection: uses Sonnet (`model: sonnet`) balancing deep reflective analysis, multi-layered framework reasoning, and token efficiency for post-session retrospectives.
- Structured 7-phase analysis pipeline: systematically sequences data gathering (4-Step Debrief, Execution Trace, Outcome Classification), insight generation (Five Whys, Fishbone, Force Field, Patterns/Shifts, Learning Matrix), diagnosis, action classification (Keep/Drop/Add/Modify with SMART validation), learning extraction (atomicity scoring with penalties), recursive learning extraction, and retrospective closure (+/Delta, ROTI, Helped/Hindered/Hypothesis).
- Strict atomicity scoring rubric: penalizes compound statements (-15%), vague language (-20%), excess length over 15 words (-5%/word), missing metrics/evidence (-25%), and non-actionable guidance (-30%), enforcing a 70% threshold for skill candidate inclusion and persistence.
- Cognitive bias guardrail: directly operationalizes Paul Graham's "Keep Your Identity Small" and "How to Think for Yourself" principles to prevent identity-protective rationalization and team dogma during failure analysis.
- Multi-tier delta routing: classifies process improvements into P0/P1 issues dispatched immediately via GitHub CLI, P2/P3 backlog memories stored in `.serena/memories/`, and non-actionable skips.

## Context cost
46695 bytes (approx. 11674 tokens). Loads when invoked: prose-self-check skill (~4KB). Total context cost ~51KB (approx. 12750 tokens).
