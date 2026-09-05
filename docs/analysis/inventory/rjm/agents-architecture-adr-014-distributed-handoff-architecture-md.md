---
package: rjm
path: .agents/architecture/ADR-014-distributed-handoff-architecture.md
type: agent
bytes: 11472
unit: inv-rjm-8
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-014-distributed-handoff-architecture.md, sha256: 22ade875c11ffad21069010bfb590d73a74b25e7f130dd688f16ee213a6fd763}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-014-distributed-handoff-architecture.md

## Purpose — required, verbatim
> "Implement a **three-tier distributed handoff architecture** that eliminates centralized HANDOFF.md as a write target:" — .agents/architecture/ADR-014-distributed-handoff-architecture.md:52

## Design intent — required
Resolves severe operational bottlenecks and merge conflicts caused by a centralized, monolithic `HANDOFF.md` file (122KB, 35K tokens) that triggered an 80%+ PR conflict rate and exponential AI review costs during rebases across multiple machines and worktrees. It replaces the single shared file with a three-tier distributed architecture: Tier 1 permanent session logs (`.agents/sessions/*.json`), Tier 2 temporary per-branch handoffs (`.agents/handoffs/{branch}/`), and Tier 3 read-only dashboard (`.agents/HANDOFF.md` capped at 5K tokens), enforced via pre-commit hooks and CI gates.

## Phase — required
cross-phase

## Inputs — required
- Centralized HANDOFF.md file — .agents/architecture/ADR-014-distributed-handoff-architecture.md:31
- Session logs in `.agents/sessions/` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:58
- Optional branch handoffs in `.agents/handoffs/{branch}/` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:59
- Serena memory queries for cross-session context — .agents/architecture/ADR-014-distributed-handoff-architecture.md:66
- Git commit events on feature branches — .agents/architecture/ADR-014-distributed-handoff-architecture.md:68

## Outputs — required
- Tier 1 session logs in `.agents/sessions/` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:58
- Tier 2 branch handoffs in `.agents/handoffs/{branch}/` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:59
- Tier 3 read-only dashboard `.agents/HANDOFF.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:60
- Archived handoff `.agents/archive/HANDOFF-2025-12-22.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:130
- Git configuration in `.gitattributes` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:135
- Pre-commit configuration in `lefthook.yml` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:141
- Serena memory code patterns with prefix pattern- — .agents/architecture/ADR-014-distributed-handoff-architecture.md:225
- Serena memory architecture decisions with prefix decision- — .agents/architecture/ADR-014-distributed-handoff-architecture.md:226
- Serena memory skill documentation with prefix skill- — .agents/architecture/ADR-014-distributed-handoff-architecture.md:227
- Serena memory project state with prefix project- — .agents/architecture/ADR-014-distributed-handoff-architecture.md:228

## Invokes — required
- agent ADR-007 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:242
- agent ADR-008 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:243
- agent ADR-009 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:244
- agent ADR-011 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:245
- agent ADR-013 — .agents/architecture/ADR-014-distributed-handoff-architecture.md:246
- config lefthook.yml — .agents/architecture/ADR-014-distributed-handoff-architecture.md:141
- config .gitattributes — .agents/architecture/ADR-014-distributed-handoff-architecture.md:188
- script scripts/validation/token_budget.py — .agents/architecture/ADR-014-distributed-handoff-architecture.md:150

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:102
- skill ADR-014 — src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md:159
- skill ADR-014 — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:53
- doc ADR-014 — docs/autonomous-pr-monitor.md:502
- script .agents/architecture/ADR-014-distributed-handoff-architecture.md — scripts/validation/token_budget.py:135

## Concepts named — required, verbatim
`three-tier distributed handoff architecture` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:52 — defined here
`Tier 1` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:58 — defined here
`Tier 2` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:59 — defined here
`Tier 3` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:60 — defined here
`HANDOFF.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:22, 31, 52, 60, 64, 69 — used here
`Serena memory` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:20, 66, 88, 108 — used here
`Token budget validator` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:69 — defined here
`Session logs` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:20, 65, 108 — used here
`Branch handoffs` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:67, 129 — defined here
`ours` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:136, 192, 198 — used here
`handoff-aggregate` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:137, 195, 200 — defined here
`pre-commit hook` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:68, 104, 117 — used here
`CI backstop` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:276 — defined here
`validate-handoff-readonly` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:277 — defined here
`Session State MCP` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:48, 102, 164 — used here
`Agent Orchestration MCP` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:48, 166, 246 — used here

## Structure
- `# ADR-014: Distributed Handoff Architecture` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:12
- `## Status` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:14
- `### Current-State Amendment (2026-08-16)` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:18
- `## Date` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:25
- `## Context` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:29
- `## Decision` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:50
- `### Architecture Overview` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:54
- `### Key Changes` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:62
- `## Rationale` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:71
- `### Alternatives Considered` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:73
- `### Trade-offs` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:83
- `## Consequences` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:94
- `### Positive` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:96
- `### Negative` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:106
- `### Neutral` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:113
- `## Implementation Notes` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:119
- `### Phase 1: Immediate (P0) - COMPLETED` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:121
- `### Phase 2: MCP Integration (P1) - FUTURE` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:158
- `### Token Budget Calculation` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:169
- `### Git Merge Strategies` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:186
- `### Session Log Requirements` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:202
- `### Serena Memory Protocol` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:214
- `### Rollback Plan` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:230
- `## Related Decisions` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:240
- `## References` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:248
- `## Success Metrics` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:256

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `scripts/Validate-TokenBudget.ps1` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:138 — PowerShell validation script does not exist; only Python implementation `scripts/validation/token_budget.py` exists.
- missing-path: `.agents/SESSION-PROTOCOL.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:212 — Protocol file does not exist at cited path in `.agents/`.
- missing-path: `.agents/HANDOFF.md` — .agents/architecture/ADR-014-distributed-handoff-architecture.md:60 — HANDOFF.md was initially kept read-only under 5K limit, but was later deleted entirely per Current-State Amendment (lines 20-23).
- doc-drift: ADR-014 cited as ARM Runner Migration in COST-GOVERNANCE — .agents/architecture/ADR-014-distributed-handoff-architecture.md:12 — `docs/COST-GOVERNANCE.md:12, 206` mistakenly refers to ADR-014 as "GitHub Actions ARM Runner Migration", which is actually ADR-025.

## Observations
Documents the operational evolution from a single shared handoff file to a three-tier model, and subsequently (per the 2026-08-16 amendment) to optional session logs with active continuity preserved in per-issue handoffs and Serena memory. Establishes a 5,000 token limit on coordination documents to prevent context window exhaustion.

## Context cost
11,472 bytes, approximately 2,800 tokens.
