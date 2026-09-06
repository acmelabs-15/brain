---
package: rjm
path: templates/agents/retrospective.shared.md
type: agent
bytes: 43573
unit: inv-rjm-321
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/retrospective.shared.md

## Purpose — required, verbatim
> "Reflective analyst who extracts learnings through structured retrospective frameworks, diagnosing agent performance, identifying error patterns, and documenting success strategies. Uses Five Whys, timeline analysis, and learning matrices. Use when you need root-cause analysis, atomicity scoring, or to transform experience into institutional knowledge." — templates/agents/retrospective.shared.md:3

## Design intent — required
Cross-platform shared agent template defining a structured reflective analysis framework to extract durable learnings from agent execution sessions, diagnose failures and successes, and prevent recurring errors. It solves the systemic problem of multi-session agent amnesia and unexamined repetitive failures by establishing a rigorous seven-phase retrospective pipeline: Phase 0 (Data Gathering via 4-step debrief, execution trace timeline, and emotional outcome classification), Phase 1 (Insight Generation via Five Whys, Fishbone across agent failure categories, Force Field analysis, and Learning Matrix), Phase 2 (Diagnosis prioritizing critical error patterns, near misses, and spec traceability health), Phase 3 (Action Classification via Keep/Drop/Add/Modify and SMART validation), Phase 4 (Atomicity-scored learning extraction penalizing compound/vague statements and demanding execution evidence), Phase 5 (Recursive learning extraction persisting novel insights as Serena memories or CloudMCP entity/relation graphs until diminishing returns), and Phase 6 (Retrospective Closure via +/Delta triage, ROTI assessment, and continuous improvement loops). Without it, autonomous agents would lack a standardized mechanism to analyze execution traces objectively, overcome cognitive/identity biases (guarding against defending tools or architectures over evidence), and turn operational experience into institutional knowledge and prevention skills.

## Phase — required
rjm:support

## Inputs — required
- Task or session description to analyze for learnings via `argument-hint`: "argument-hint: Describe the task or session to analyze for learnings" — templates/agents/retrospective.shared.md:4
- VS Code and GitHub Copilot toolset bindings: "tools_vscode:" — templates/agents/retrospective.shared.md:5, "tools_copilot:" — templates/agents/retrospective.shared.md:9
- AI-vernacular audit run before emitting prose: "run the prose-self-check skill" — templates/agents/retrospective.shared.md:41
- Analysis activation conditions: "Perform analysis when:" — templates/agents/retrospective.shared.md:55
- Execution sequence logs, tool calls, and outputs: "Extract execution sequence from logs, tool calls, and outputs" — templates/agents/retrospective.shared.md:190
- Specification-layer coherence metrics validated via: "uv run --frozen python scripts/validation/traceability.py --strict" — templates/agents/retrospective.shared.md:495
- Memory graph deduplication search queries: "mcp__cloudmcp-manager__memory-search_nodes" — templates/agents/retrospective.shared.md:929
- Memory index validation during recursive extraction: "uv run --frozen python scripts/validation/memory_index.py --ci" — templates/agents/retrospective.shared.md:1035

## Outputs — required
- Retrospective session markdown document: "Save to: `.agents/retrospective/YYYY-MM-DD-[scope].md`" — templates/agents/retrospective.shared.md:717
- CloudMCP memory entities for root cause failure patterns and new skills: "mcp__cloudmcp-manager__memory-create_entities" — templates/agents/retrospective.shared.md:836
- CloudMCP memory relations connecting root causes to prevention skills: "mcp__cloudmcp-manager__memory-create_relations" — templates/agents/retrospective.shared.md:856
- High-priority P0/P1 GitHub issue creation commands: "uv run python .claude/skills/github/scripts/issue/new_issue.py" — templates/agents/retrospective.shared.md:1237
- Low-priority P2/P3 backlog memory items written via: "mcp__serena__write_memory" — templates/agents/retrospective.shared.md:1248
- CloudMCP memory entity observation updates: "mcp__cloudmcp-manager__memory-add_observations" — templates/agents/retrospective.shared.md:1358
- Orchestrator handoff output with learning and routing recommendations: "Return learnings and recommended skill updates to orchestrator" — templates/agents/retrospective.shared.md:1409

## Invokes — required
- skill prose-self-check — templates/agents/retrospective.shared.md:41
- script scripts/validation/traceability.py — templates/agents/retrospective.shared.md:495
- agent skillbook — templates/agents/retrospective.shared.md:939
- script scripts/validation/memory_index.py — templates/agents/retrospective.shared.md:1035
- script .claude/skills/github/scripts/issue/new_issue.py — templates/agents/retrospective.shared.md:1237

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:40

## Concepts named — required, verbatim
- `support` — templates/agents/retrospective.shared.md:2 — defined here
- `Reflective analyst` — templates/agents/retrospective.shared.md:3 — defined here
- `Five Whys` — templates/agents/retrospective.shared.md:3 — used here
- `timeline analysis` — templates/agents/retrospective.shared.md:3 — used here
- `learning matrices` — templates/agents/retrospective.shared.md:3 — used here
- `atomicity scoring` — templates/agents/retrospective.shared.md:3 — used here
- `Senior Analytical Reviewer` — templates/agents/retrospective.shared.md:19 — defined here
- `4-Step Debrief` — templates/agents/retrospective.shared.md:124 — defined here
- `Keep Your Identity Small` — templates/agents/retrospective.shared.md:163 — defined here
- `How to Think for Yourself` — templates/agents/retrospective.shared.md:165 — used here
- `Execution Trace Analysis` — templates/agents/retrospective.shared.md:182 — defined here
- `Outcome Classification` — templates/agents/retrospective.shared.md:218 — defined here
- `Mad Sad Glad` — templates/agents/retrospective.shared.md:220 — used here
- `Five Whys` — templates/agents/retrospective.shared.md:255 — defined here
- `Fishbone Analysis` — templates/agents/retrospective.shared.md:319 — defined here
- `Force Field Analysis` — templates/agents/retrospective.shared.md:373 — defined here
- `Patterns and Shifts` — templates/agents/retrospective.shared.md:408 — defined here
- `Learning Matrix` — templates/agents/retrospective.shared.md:436 — defined here
- `Traceability Metrics` — templates/agents/retrospective.shared.md:488 — defined here
- `Action Classification` — templates/agents/retrospective.shared.md:577 — defined here
- `Keep/Drop/Add` — templates/agents/retrospective.shared.md:579 — used here
- `SMART Validation` — templates/agents/retrospective.shared.md:614 — defined here
- `Dependency Ordering` — templates/agents/retrospective.shared.md:649 — defined here
- `Atomicity Scoring` — templates/agents/retrospective.shared.md:671 — defined here
- `Evidence-Based Tagging` — templates/agents/retrospective.shared.md:707 — defined here
- `Root Cause Pattern Management` — templates/agents/retrospective.shared.md:812 — defined here
- `Failure Prevention Matrix` — templates/agents/retrospective.shared.md:866 — defined here
- `Root Cause Pattern` — templates/agents/retrospective.shared.md:888 — defined here
- `Recursive Learning Extraction` — templates/agents/retrospective.shared.md:937 — defined here
- `+/Delta` — templates/agents/retrospective.shared.md:1179 — defined here
- `Delta Triage` — templates/agents/retrospective.shared.md:1205 — defined here
- `ROTI` — templates/agents/retrospective.shared.md:1283 — defined here
- `Helped, Hindered, Hypothesis` — templates/agents/retrospective.shared.md:1311 — defined here
- `Memory Protocol` — templates/agents/retrospective.shared.md:1338 — defined here
- `Continuous Improvement Loop` — templates/agents/retrospective.shared.md:1382 — defined here
- `Handoff Protocol` — templates/agents/retrospective.shared.md:1402 — defined here

## Structure
- # Retrospective Agent (Reflector) — templates/agents/retrospective.shared.md:15
- ## Core Identity — templates/agents/retrospective.shared.md:17
- ## Style Guide Compliance — templates/agents/retrospective.shared.md:21
- ## Prose Self-Check — templates/agents/retrospective.shared.md:39
- ## Activation Profile — templates/agents/retrospective.shared.md:43
- ## Core Mission — templates/agents/retrospective.shared.md:49
- ## Trigger Conditions — templates/agents/retrospective.shared.md:53
- ## Retrospective Flow — templates/agents/retrospective.shared.md:63
- ## Phase 0: Data Gathering — templates/agents/retrospective.shared.md:120
- ### Activity: 4-Step Debrief — templates/agents/retrospective.shared.md:124
- ### Bias Guard: Keep Your Identity Small — templates/agents/retrospective.shared.md:163
- ### Activity: Execution Trace Analysis — templates/agents/retrospective.shared.md:182
- ### Activity: Outcome Classification — templates/agents/retrospective.shared.md:218
- ## Phase 1: Generate Insights — templates/agents/retrospective.shared.md:251
- ### Activity: Five Whys — templates/agents/retrospective.shared.md:255
- ### Activity: Fishbone Analysis — templates/agents/retrospective.shared.md:319
- ### Activity: Force Field Analysis — templates/agents/retrospective.shared.md:373
- ### Activity: Patterns and Shifts — templates/agents/retrospective.shared.md:408
- ### Activity: Learning Matrix — templates/agents/retrospective.shared.md:436
- ## Phase 2: Diagnosis — templates/agents/retrospective.shared.md:475
- ### Diagnostic Priority Order — templates/agents/retrospective.shared.md:479
- ### Traceability Metrics — templates/agents/retrospective.shared.md:488
- ### Diagnosis Template — templates/agents/retrospective.shared.md:547
- ## Phase 3: Decide What to Do — templates/agents/retrospective.shared.md:573
- ### Activity: Action Classification — templates/agents/retrospective.shared.md:577
- ### Activity: SMART Validation — templates/agents/retrospective.shared.md:614
- ### Dependency Ordering — templates/agents/retrospective.shared.md:649
- ## Phase 4: Learning Extraction — templates/agents/retrospective.shared.md:667
- ### Atomicity Scoring — templates/agents/retrospective.shared.md:671
- ### Quality Thresholds — templates/agents/retrospective.shared.md:683
- ### Examples — templates/agents/retrospective.shared.md:692
- ### Evidence-Based Tagging — templates/agents/retrospective.shared.md:707
- ### Learning Extraction Template — templates/agents/retrospective.shared.md:715
- ## Root Cause Pattern Management — templates/agents/retrospective.shared.md:812
- ### Root Cause Categories — templates/agents/retrospective.shared.md:816
- ### Memory Storage Pattern — templates/agents/retrospective.shared.md:829
- ### Failure Prevention Matrix — templates/agents/retrospective.shared.md:866
- ### Root Cause Pattern Template — templates/agents/retrospective.shared.md:883
- ### Integration with Skillbook — templates/agents/retrospective.shared.md:916
- ## Phase 5: Recursive Learning Extraction — templates/agents/retrospective.shared.md:937
- ### Purpose — templates/agents/retrospective.shared.md:941
- ### Process — templates/agents/retrospective.shared.md:950
- #### Step 1: Initial Extraction — templates/agents/retrospective.shared.md:952
- #### Step 2: Skillbook Delegation — templates/agents/retrospective.shared.md:982
- #### Step 3: Recursive Evaluation — templates/agents/retrospective.shared.md:1038
- #### Step 4: Termination Criteria — templates/agents/retrospective.shared.md:1069
- ### Prompt Template for Skillbook Agent — templates/agents/retrospective.shared.md:1086
- ### Integration with Phase 4 — templates/agents/retrospective.shared.md:1118
- ### Documentation Requirements — templates/agents/retrospective.shared.md:1129
- ### Quality Gates — templates/agents/retrospective.shared.md:1164
- ## Phase 6: Close the Retrospective — templates/agents/retrospective.shared.md:1175
- ### Activity: +/Delta — templates/agents/retrospective.shared.md:1179
- ### Activity: Delta Triage — templates/agents/retrospective.shared.md:1205
- ### Activity: ROTI (Return on Time Invested) — templates/agents/retrospective.shared.md:1283
- ### Activity: Helped, Hindered, Hypothesis — templates/agents/retrospective.shared.md:1311
- ## Memory Protocol — templates/agents/retrospective.shared.md:1338
- ## Continuous Improvement Loop — templates/agents/retrospective.shared.md:1382
- ## Execution Mindset — templates/agents/retrospective.shared.md:1392
- ## Handoff Protocol — templates/agents/retrospective.shared.md:1402
- ## Handoff Options (Recommendations for Orchestrator) — templates/agents/retrospective.shared.md:1412

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `wiki/concepts/Critical Thinking/Keep Your Identity Small.md` — templates/agents/retrospective.shared.md:166 — The cited wiki source file does not exist in the repository; no wiki/ directory exists.
- `missing-path` · `wiki/concepts/Critical Thinking/How to Think for Yourself.md` — templates/agents/retrospective.shared.md:166 — The cited wiki source file does not exist in the repository; no wiki/ directory exists.
- `internal-contradiction` · subagent delegation · Phase 5 instructs delegating directly to the skillbook agent ("Transform session learnings into persistent Serena memories using skillbook agent" — templates/agents/retrospective.shared.md:939), contradicting the Handoff Protocol which explicitly mandates: "As a subagent, you CANNOT delegate directly" — templates/agents/retrospective.shared.md:1404.
- `internal-contradiction` · toolset persistence inconsistency · Delta Triage prescribes `mcp__serena__write_memory` ("mcp__serena__write_memory" — templates/agents/retrospective.shared.md:1248) for backlog items, whereas the Memory Protocol and Handoff Options mandate using CloudMCP manager tools directly: "Use cloudmcp-manager memory tools directly to persist skills, relations, and observations - no delegation to memory agent required." — templates/agents/retrospective.shared.md:1421.

## Observations
- Multi-target template adaptation: Shared cross-platform agent template declaring VS Code Copilot Chat and GitHub Copilot CLI toolsets (`tools_vscode`, `tools_copilot`), contrasting with the Claude Code-specific bindings in `.claude/agents/retrospective.md`.
- Variant relation: Shares 86% of distinct lines with `.claude/agents/retrospective.md` (ledger V21; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-retrospective-md--templates-agents-retrospective-shared-md.md`).
- Cognitive bias guardrail: Formally operationalizes Paul Graham's "Keep Your Identity Small" and "How to Think for Yourself" frameworks to prevent identity-protective rationalization and methodology defense during retrospective root-cause diagnosis.
- Recursive learning extraction loop: Establishes a bounded 5-iteration / 20-learning maximum recursion loop to bootstrap amnesiac agents with persistent memory entities and relations before session termination.
- Spec-layer traceability integration: Directly hooks `scripts/validation/traceability.py --strict` to diagnose requirement-to-task breaks as actionable skill gaps.

## Context cost
43573 bytes (approx. 10893 tokens). Loads when invoked: prose-self-check skill (~5KB), traceability validation script (~9KB), memory index validation script (~14KB), GitHub issue helper script (~6KB). Total context cost ~78KB (approx. 19500 tokens).
