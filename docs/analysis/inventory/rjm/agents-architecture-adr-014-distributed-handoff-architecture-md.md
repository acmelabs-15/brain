---
package: rjm
path: .agents/architecture/ADR-014-distributed-handoff-architecture.md
type: agent
bytes: 11472
unit: inv-rjm-8
deprecated: false
in_scope_via: inv-rjm-8
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-014-distributed-handoff-architecture.md, sha256: 22ade875c11ffad21069010bfb590d73a74b25e7f130dd688f16ee213a6fd763}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-014-distributed-handoff-architecture.md

## Purpose — required, verbatim
> "HANDOFF.md has grown to **122KB / 2,997 lines / ~35K tokens**, causing severe operational problems:" — .agents/architecture/ADR-014-distributed-handoff-architecture.md:31 (no explicit purpose statement)

## Design intent — required
Eliminates the centralized `HANDOFF.md` bottleneck that caused an 80%+ merge conflict rate across concurrent agent pull requests, token limit overflow, and exponential AI review costs on rebases. It replaces single-file coordination with a three-tier distributed handoff architecture: permanent session-scoped JSON logs (Tier 1), ephemeral branch handoffs (Tier 2), and a strictly read-only 5K-token dashboard (Tier 3) enforced via pre-commit hooks, Lefthook jobs, and Git merge strategies. Without this decision, multi-worktree and multi-machine agent development would remain paralyzed by merge conflict storms and re-review loops.

## Phase — required
cross-phase

## Inputs — required
Session metadata, protocol compliance checklists, work logs, cross-references, and continuation notes (.agents/architecture/ADR-014-distributed-handoff-architecture.md:204-210), previous session logs in `.agents/sessions/` (.agents/architecture/ADR-014-distributed-handoff-architecture.md:58), Serena memory entries (.agents/architecture/ADR-014-distributed-handoff-architecture.md:66, 214-222), and Git branch and PR context (.agents/architecture/ADR-014-distributed-handoff-architecture.md:59, 136-137).

## Outputs — required
Tier 1 permanent session log files in `.agents/sessions/YYYY-MM-DD-session-NN.json` (.agents/architecture/ADR-014-distributed-handoff-architecture.md:58), Tier 2 optional branch handoffs in `.agents/handoffs/{branch}/` (.agents/architecture/ADR-014-distributed-handoff-architecture.md:59), Tier 3 read-only dashboard `.agents/HANDOFF.md` under 5,000 tokens (.agents/architecture/ADR-014-distributed-handoff-architecture.md:60), Git merge attributes in `.gitattributes` (.agents/architecture/ADR-014-distributed-handoff-architecture.md:135, 188-196), and structured Serena memory keys (.agents/architecture/ADR-014-distributed-handoff-architecture.md:223-229).

## Invokes — required
- agent ADR-007 — .agents/architecture/ADR-007-memory-first-architecture.md:12
- agent ADR-008 — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:12
- agent ADR-009 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12
- agent ADR-011 — .agents/architecture/ADR-011-session-state-mcp.md:12
- agent ADR-013 — .agents/architecture/ADR-013-agent-orchestration-mcp.md:12

## Invoked by — required
- agent README — .agents/architecture/README.md:102
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:174

## Concepts named — required, verbatim
- `ADR-014` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:12 — defined here
- `Distributed Handoff Architecture` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:12 — defined here
- `HANDOFF.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:31 — used here
- `Session State MCP` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:48 — used here
- `Agent Orchestration MCP` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:48 — used here
- `three-tier distributed handoff architecture` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:52 — defined here
- `Tier 1` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:58 — defined here
- `Tier 2` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:59 — defined here
- `Tier 3` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:60 — defined here
- `Serena memory` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:66 — used here
- `token_budget.py` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:150 — used here
- `handoff-aggregate` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:137 — defined here
- `lefthook.yml` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:141 — used here
- `ADR-007` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:242 — used here
- `ADR-008` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:243 — used here
- `ADR-009` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:244 — used here
- `ADR-011` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:245 — used here
- `ADR-013` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:246 — used here

## Structure
- # ADR-014: Distributed Handoff Architecture — .agents/architecture/ADR-014-distributed-handoff-architecture.md:12
- ## Status — .agents/architecture/ADR-014-distributed-handoff-architecture.md:14
- ### Current-State Amendment (2026-08-16) — .agents/architecture/ADR-014-distributed-handoff-architecture.md:18
- ## Date — .agents/architecture/ADR-014-distributed-handoff-architecture.md:25
- ## Context — .agents/architecture/ADR-014-distributed-handoff-architecture.md:29
- ## Decision — .agents/architecture/ADR-014-distributed-handoff-architecture.md:50
- ### Architecture Overview — .agents/architecture/ADR-014-distributed-handoff-architecture.md:54
- ### Key Changes — .agents/architecture/ADR-014-distributed-handoff-architecture.md:62
- ## Rationale — .agents/architecture/ADR-014-distributed-handoff-architecture.md:71
- ### Alternatives Considered — .agents/architecture/ADR-014-distributed-handoff-architecture.md:73
- ### Trade-offs — .agents/architecture/ADR-014-distributed-handoff-architecture.md:83
- ## Consequences — .agents/architecture/ADR-014-distributed-handoff-architecture.md:94
- ### Positive — .agents/architecture/ADR-014-distributed-handoff-architecture.md:96
- ### Negative — .agents/architecture/ADR-014-distributed-handoff-architecture.md:106
- ### Neutral — .agents/architecture/ADR-014-distributed-handoff-architecture.md:113
- ## Implementation Notes — .agents/architecture/ADR-014-distributed-handoff-architecture.md:119
- ### Phase 1: Immediate (P0) - COMPLETED — .agents/architecture/ADR-014-distributed-handoff-architecture.md:121
- ### Phase 2: MCP Integration (P1) - FUTURE — .agents/architecture/ADR-014-distributed-handoff-architecture.md:158
- ### Token Budget Calculation — .agents/architecture/ADR-014-distributed-handoff-architecture.md:169
- ### Git Merge Strategies — .agents/architecture/ADR-014-distributed-handoff-architecture.md:186
- ### Session Log Requirements — .agents/architecture/ADR-014-distributed-handoff-architecture.md:202
- ### Serena Memory Protocol — .agents/architecture/ADR-014-distributed-handoff-architecture.md:214
- ### Rollback Plan — .agents/architecture/ADR-014-distributed-handoff-architecture.md:230
- ## Related Decisions — .agents/architecture/ADR-014-distributed-handoff-architecture.md:240
- ## References — .agents/architecture/ADR-014-distributed-handoff-architecture.md:248
- ## Success Metrics — .agents/architecture/ADR-014-distributed-handoff-architecture.md:256

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-014-distributed-handoff-architecture.md:138 Referenced PowerShell script "scripts/Validate-TokenBudget.ps1" does not exist; implemented as python script "scripts/validation/token_budget.py".
- missing-path · .agents/architecture/ADR-014-distributed-handoff-architecture.md:212 Referenced protocol file ".agents/SESSION-PROTOCOL.md" does not exist in repository.
- doc-drift · .agents/architecture/ADR-014-distributed-handoff-architecture.md:60 Dashboard file ".agents/HANDOFF.md" was subsequently deleted entirely rather than retained as a read-only 5K token rolling window dashboard.

## Observations
Documents the transition away from centralized `HANDOFF.md` to distributed session logs and Serena memory to eliminate merge conflicts across concurrent agent PRs. A subsequent 2026-08-16 amendment noted in the status section recorded that committed session logs became optional, with per-issue handoffs and Serena memory carrying active continuity.

## Context cost
11,472 bytes, ~2,900 tokens.
