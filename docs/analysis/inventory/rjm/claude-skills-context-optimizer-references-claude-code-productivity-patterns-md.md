---
package: rjm
path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md
type: reference
bytes: 3000
unit: inv-rjm-105
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md

## Purpose — required, verbatim
> "Battle-tested workflows for cost control, context management, and quality gates in Claude Code development." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:9

## Design intent — required
Addresses operational inefficiencies and token cost inflation in Claude Code development, specifically the quadratic cost scaling caused by re-transmitting entire conversation histories on every message. It specifies architectural patterns to constrain context growth: multi-instance domain orchestration logging to a central memory bank, proactive handover at ~80% context window utilization via a dedicated state file, Code Mode sandboxed extraction scripts (and the `mcpkit` skill alternative) that compress MCP tool outputs by 65-99%, sub-2-second static analysis drift detectors in CI, Spec-Driven Development (SDD), auto-triggered specialist agents, and 10-minute swarm task breakdowns. Without this reference, agents and developers would lack structured patterns for context budgeting, resulting in runaway token costs, bloated MCP JSON responses, and uncoordinated monolithic sessions.

## Phase — required
cross-phase

## Inputs — required
- Context usage threshold (~80% context) — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:17
- MCP tool call responses / CRUD JSON APIs — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:21
- Central memory bank logs across CC instances — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:15
- GitHub Issues format (`# CONTEXT # TODO # SUCCESS CRITERIA`) — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:74

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:128

## Concepts named — required, verbatim
- `Multi-instance orchestration` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:15 — defined here
- `Proactive handover at ~80% context` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:17 — defined here
- `Code Mode pattern` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:23 — defined here
- `quickjs-emscripten` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:27 — used here
- `RestrictedPython` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:28 — used here
- `goja` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:29 — used here
- `boa_engine` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:30 — used here
- `mcpkit alternative` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:32 — defined here
- `Selective MCP Exposure` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:34 — defined here
- `Context7` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:36 — used here
- `Chrome DevTools` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:36 — used here
- `Drift Detection via Static Analysis` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:42 — defined here
- `api-contract-drift` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:48 — used here
- `schema-drift-detector` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:49 — used here
- `code-audit` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:50 — used here
- `query-complexity-analyzer` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:51 — used here
- `implementation-test-coverage` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:52 — used here
- `SDD (Spec-Driven Development)` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:58 — defined here
- `GitHub Spec-kit` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:60 — used here
- `OpenSpec` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:60 — used here
- `APM` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:60 — used here
- `CC SDD` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:60 — used here
- `Auto-triggered agents` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:62 — defined here
- `test-writer-fixer` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:66 — used here
- `experiment-tracker` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:67 — used here
- `project-shipper` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:68 — used here
- `Task Management` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:70 — defined here
- `GitHub Issues format` — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:74 — defined here

## Structure
- # Claude Code Productivity Patterns
- ## Context Growth = Quadratic Cost
- ## MCP Context Optimization
- ## Selective MCP Exposure
- ## Drift Detection via Static Analysis
- ## Planning Patterns
- ## Task Management

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:2 — frontmatter source path `wiki/concepts/AI Productivity/Claude Code Productivity Patterns.md` does not exist in the repository.

## Observations
- Explains the economic mechanism behind context inflation: message context grows linearly, but API cost grows quadratically because every request resends complete conversation history.
- Contrasts two MCP context-reduction patterns: "Code Mode" runs sandboxed filter scripts on raw JSON tool outputs to return only stdout (saving 65-99% context), whereas "mcpkit" converts MCP tools into CLI skills that occupy only 2 lines in system prompt.
- Advocates selective MCP exposure: reserving global always-on slots for Context7 and Chrome DevTools only, scoping others locally per instance or loading on demand via mcpkit.

## Context cost
3000 bytes (75 lines), approximately 750 tokens. Loads no additional files.
