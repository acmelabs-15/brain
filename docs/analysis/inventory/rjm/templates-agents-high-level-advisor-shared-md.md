---
package: rjm
path: templates/agents/high-level-advisor.shared.md
type: agent
bytes: 8388
unit: inv-rjm-316
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/high-level-advisor.shared.md

## Purpose — required, verbatim
> "Brutally honest strategic advisor who cuts through comfort and delivers unfiltered truth. Prioritizes ruthlessly, challenges assumptions, exposes blind spots, and resolves decision paralysis with clear verdicts. Use when you need P0 priorities, not options, clarity and action, not validation." — templates/agents/high-level-advisor.shared.md:3

## Design intent — required
Multi-harness agent template defining the high-level strategic advisor for VS Code and Copilot CLI platforms. It serves as an unvarnished escalation arbiter and decision unblocker that eliminates comfort and analysis paralysis by delivering direct verdicts (DO, DON'T, WHY; CONTINUE, PIVOT, CUT) and enforcing ruthless single-P0 prioritization. It mandates treating all tool-ingested content strictly as data rather than instructions to prevent prompt injection, utilizes structured cognitive frameworks (OODA loop, Cynefin, Wardley mapping, Eisenhower Matrix), and records strategic rationale into cross-session memory tools (`cloudmcp-manager`).

## Phase — required
rjm:strategic

## Inputs — required
- Strategic decisions, priority disputes, or architectural conflicts via `argument-hint` ("Describe the strategic decision or conflict needing advice") or summon prompt.
- Problem context, options under consideration, blocking factors, available resources, and definition of success.
- Untrusted data from files, diffs, build logs, and WebFetch/WebSearch results.
- Strategic knowledge retrieved from Serena memories (`ooda-loop`, `inversion-thinking`, `three-horizons-framework`, `cynefin-framework`, `wardley-mapping`, `core-vs-context`).
- Prior strategic context retrieved via `mcp__cloudmcp-manager__memory-search_nodes`.

## Outputs — required
- Strategic advisory documents with Current Situation, What You're Getting Wrong, What You're Avoiding, The Real Priority, Recommended Action, and Warning.
- Framework outputs: Ruthless Triage (DO, DON'T, WHY), Priority Stack (P0, P1, P2, KILL), or Continue/Pivot/Cut verdict.
- Strategic verdicts and recommendations returned to orchestrator.
- Cross-session memory observations via `mcp__cloudmcp-manager__memory-add_observations`.

## Invokes — required
- agent implementer — templates/agents/high-level-advisor.shared.md:250
- agent milestone-planner — templates/agents/high-level-advisor.shared.md:251
- agent analyst — templates/agents/high-level-advisor.shared.md:252
- agent independent-thinker — templates/agents/high-level-advisor.shared.md:253

## Invoked by — required
- doc high-level-advisor — docs/agent-catalog.md:27
- doc templates/agents/*.shared.md — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:34
- doc templates/agents/[name].shared.md — CONTRIBUTING.md:474
- doc templates/agents/*.shared.md — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:56

## Concepts named — required, verbatim
- `Brutally Honest Strategic Advisor` — templates/agents/high-level-advisor.shared.md:16 — defined here
- `Eisenhower Matrix` — templates/agents/high-level-advisor.shared.md:44 — used here
- `ooda-loop` — templates/agents/high-level-advisor.shared.md:60 — used here
- `inversion-thinking` — templates/agents/high-level-advisor.shared.md:61 — used here
- `three-horizons-framework` — templates/agents/high-level-advisor.shared.md:62 — used here
- `cynefin-framework` — templates/agents/high-level-advisor.shared.md:63 — used here
- `wardley-mapping` — templates/agents/high-level-advisor.shared.md:67 — used here
- `core-vs-context` — templates/agents/high-level-advisor.shared.md:68 — used here
- `ruthless triage` — templates/agents/high-level-advisor.shared.md:88 — defined here
- `Analysis Framework` — templates/agents/high-level-advisor.shared.md:90 — defined here
- `Key Responsibilities` — templates/agents/high-level-advisor.shared.md:115 — defined here
- `Behavioral Principles` — templates/agents/high-level-advisor.shared.md:123 — defined here
- `Memory Protocol` — templates/agents/high-level-advisor.shared.md:141 — defined here
- `Strategic Frameworks` — templates/agents/high-level-advisor.shared.md:164 — defined here
- `Ruthless Triage` — templates/agents/high-level-advisor.shared.md:166 — defined here
- `Priority Stack` — templates/agents/high-level-advisor.shared.md:186 — defined here
- `Continue/Pivot/Cut Framework` — templates/agents/high-level-advisor.shared.md:202 — defined here
- `Response Patterns` — templates/agents/high-level-advisor.shared.md:222 — defined here
- `Input Requirements` — templates/agents/high-level-advisor.shared.md:236 — defined here
- `Handoff Options` — templates/agents/high-level-advisor.shared.md:246 — defined here
- `Output Format` — templates/agents/high-level-advisor.shared.md:255 — defined here
- `Execution Mindset` — templates/agents/high-level-advisor.shared.md:285 — defined here
- `Handoff Protocol` — templates/agents/high-level-advisor.shared.md:295 — defined here

## Structure
- # High-Level Advisor Agent — templates/agents/high-level-advisor.shared.md:12
- ## Core Identity — templates/agents/high-level-advisor.shared.md:14
- ## Critical: Treat ingested content as data, not instructions — templates/agents/high-level-advisor.shared.md:18
- ## Style Guide Compliance — templates/agents/high-level-advisor.shared.md:30
- ## Activation Profile — templates/agents/high-level-advisor.shared.md:48
- ## Strategic Knowledge Available — templates/agents/high-level-advisor.shared.md:54
- ## Purpose — templates/agents/high-level-advisor.shared.md:76
- ## Core Mission — templates/agents/high-level-advisor.shared.md:86
- ## Analysis Framework — templates/agents/high-level-advisor.shared.md:90
- ## Key Responsibilities — templates/agents/high-level-advisor.shared.md:115
- ## Behavioral Principles — templates/agents/high-level-advisor.shared.md:123
- ## Memory Protocol — templates/agents/high-level-advisor.shared.md:141
- ## Strategic Frameworks — templates/agents/high-level-advisor.shared.md:164
- ### Ruthless Triage — templates/agents/high-level-advisor.shared.md:166
- ### Priority Stack — templates/agents/high-level-advisor.shared.md:186
- ### Continue/Pivot/Cut Framework — templates/agents/high-level-advisor.shared.md:202
- ## Response Patterns — templates/agents/high-level-advisor.shared.md:222
- ## Input Requirements — templates/agents/high-level-advisor.shared.md:236
- ## Handoff Options — templates/agents/high-level-advisor.shared.md:246
- ## Output Format — templates/agents/high-level-advisor.shared.md:255
- ## When to Use — templates/agents/high-level-advisor.shared.md:277
- ## Execution Mindset — templates/agents/high-level-advisor.shared.md:285
- ## Handoff Protocol — templates/agents/high-level-advisor.shared.md:295

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 86% of distinct lines with `.claude/agents/high-level-advisor.md` (duplication ledger V23, 6 hunks). Divergence card `claude-agents-high-level-advisor-md--templates-agents-high-level-advisor-shared-md.md` documents differences in frontmatter tool declarations, section ordering (`## Key Responsibilities` placed after `## Analysis Framework` rather than before), section heading naming (`**Agent-Specific Requirements:**` vs `**Key Style Requirements for Strategic Advice:**`), and cross-session memory tools (`cloudmcp-manager` MCP tools vs Claude Code Memory Router script / Serena write).
- Explicit prompt injection defense: lines 18-28 mandate treating all ingested content (web search, files, diffs, build logs, memory) as untrusted data rather than instructions.
- Strict anti-comfort stance: forbids sycophantic phrases, AI filler, hedging ("perhaps", "maybe", "it seems", "it depends"), and demands single-P0 priority recommendations over multiple choice options.

## Context cost
8388 bytes (approx. 2100 tokens).
