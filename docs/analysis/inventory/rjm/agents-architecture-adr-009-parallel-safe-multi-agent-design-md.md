---
package: rjm
path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md
type: agent
bytes: 4097
unit: inv-rjm-6
deprecated: false
in_scope_via: inv-rjm-6
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md

## Purpose — required, verbatim
> "The ai-agents system currently executes agents sequentially. When multiple agents work on related concerns, they must coordinate manually via HANDOFF.md and explicit delegation. This creates bottlenecks:" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (no explicit purpose statement)

## Design intent — required
Establishes the architectural foundation for parallel multi-agent dispatch and consensus-based conflict resolution. Resolves the latency bottlenecks of serial agent execution (Analyst → Architect → Implementer) and the lack of automated disagreement resolution. Defines three structured output aggregation strategies: `merge` (combining non-conflicting outputs), `vote` (weighted majority selection for redundant execution, specifically prioritizing `architect > implementer`), and `escalate` (routing irreconcilable conflicts to `high-level-advisor`). Defines the hierarchical coordination mode (orchestrator-led) as the initial operational topology, paving the path toward swarm and mesh models.

## Phase — required
cross-phase

## Inputs — required
Sequential execution bottlenecks and manual handoff coordination limitations (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24-30), ruvnet/claude-flow multi-agent coordination modes and consensus algorithms (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:31-37), Anthropic parallel agent execution patterns (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:126), and tracker items Epic #183, Issue #168, Issue #171, Issue #175, and Issue #177 (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:120-124).

## Outputs — required
The multi-agent consensus coordination mandate (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:40-48), output aggregation strategies specification matrix defining `merge`, `vote`, and `escalate` (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:86-93), and the step-by-step hierarchical consensus protocol algorithm (.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:94-104).

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:115
- doc ADR-010 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:116

## Invoked by — required
- agent README — .agents/architecture/README.md:100
- doc orchestrator-routing-algorithm.md — docs/orchestrator-routing-algorithm.md:217
- agent ADR-098 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:502
- agent ADR-011 — .agents/architecture/ADR-011-session-state-mcp.md:465
- agent ADR-013 — .agents/architecture/ADR-013-agent-orchestration-mcp.md:595
- agent ADR-026 — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:320

## Concepts named — required, verbatim
- `ADR-009` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:2 — defined here
- `Parallel-Safe Multi-Agent Design` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12 — defined here
- `Consensus mechanisms` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:40 — defined here
- `Parallel dispatch` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:44 — defined here
- `Aggregation strategies` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:45 — defined here
- `Consensus protocols` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:46 — defined here
- `Coordination modes` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:47 — defined here
- `Hierarchical` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:47 — defined here
- `Mesh` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:47 — used here
- `Queen-worker swarm` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:36 — used here
- `merge` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:90 — defined here
- `vote` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:91 — defined here
- `escalate` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92 — defined here
- `high-level-advisor` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92 — used here

## Structure
- # ADR-009: Parallel-Safe Multi-Agent Design — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12
- ## Status — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:14
- ## Date — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:18
- ## Context — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:22
- ## Decision — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:38
- ## Rationale — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:49
- ### Alternatives Considered — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:51
- ### Trade-offs — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:59
- ## Consequences — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:65
- ### Positive — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:67
- ### Negative — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:74
- ### Neutral — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:80
- ## Implementation Notes — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:84
- ### Aggregation Strategies — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:86
- ### Consensus Protocol (Hierarchical Mode) — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:94
- ### Phase 3 Implementation Order — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:106
- ## Related Decisions — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:113
- ## References — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 References `HANDOFF.md` without path, and `.agents/HANDOFF.md` does not exist in repository.

## Observations
ADR-009 serves as the canonical architectural authority for parallel dispatch, aggregation strategies (`merge`, `vote`, `escalate`), and conflict escalation to `high-level-advisor`. Later architecture reviews and routing documentation (notably ADR-098 and `docs/orchestrator-routing-algorithm.md`) emphasize that ADR-009 contains zero occurrences of "tier" and grants exactly one voting hierarchy (`architect > implementer`), strictly rejecting downstream claims that attempted to attribute rigid tier hierarchies or security-agent voting weights to ADR-009.

## Context cost
4,097 bytes, ~1,050 tokens.
