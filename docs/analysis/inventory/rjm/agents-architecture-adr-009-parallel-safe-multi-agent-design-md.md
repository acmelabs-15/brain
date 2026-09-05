---
package: rjm
path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md
type: agent
bytes: 4097
unit: inv-rjm-6
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md

## Purpose — required, verbatim
> "Multi-agent coordination MUST include consensus mechanisms for conflict resolution." — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:40

## Design intent — required
ADR-009 introduces a parallel-safe multi-agent coordination architecture featuring formal aggregation and consensus protocols. It eliminates the latency bottlenecks and manual friction of strictly sequential agent handoffs (Analyst → Architect → Implementer), which previously required ad-hoc human intervention whenever agent findings diverged. The design establishes three systematic aggregation strategies: merging non-conflicting concurrent outputs, majority/weighted voting for redundant outputs (architect > implementer), and escalating hard conflicts directly to high-level-advisor. Without it, multi-agent workflows either remain constrained to slow serial execution or risk chaotic, unresolved contradictions between concurrent agents.

## Phase — required
cross-phase

## Inputs — required
Independent task specifications dispatched by the orchestrator, concurrent agent execution outputs, conflict detection triggers, and agent hierarchy weights.

## Outputs — required
Merged non-conflicting multi-agent artifacts, voting consensus decisions, conflict escalation packages routed to `high-level-advisor`, and synchronized execution plans.

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:115
- doc ADR-010 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:116

## Invoked by — required
- doc ADR-009 — .agents/architecture/README.md:100
- agent ADR-009 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:130
- doc ADR-009 — docs/orchestrator-routing-algorithm.md:217
- script ADR-009 — scripts/workflow/parallel.py:4

## Concepts named — required, verbatim
- `Parallel-Safe Multi-Agent Design` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:12 — defined here
- `Sequential execution` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:26 — used here
- `conflict resolution` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:27 — used here
- `Queen-worker swarm coordination model` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:36 — used here
- `consensus mechanisms` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:40 — defined here
- `Parallel dispatch` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:44 — defined here
- `Aggregation strategies` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:45 — defined here
- `Consensus protocols` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:46 — defined here
- `Coordination modes` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:47 — defined here
- `merge` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:90 — defined here
- `vote` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:91 — defined here
- `escalate` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92 — defined here
- `high-level-advisor` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92 — used here
- `Hierarchical Mode` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:94 — defined here
- `Parallel Task invocation` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:108 — used here
- `Swarm Coordination Modes` — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:123 — used here

## Structure
- Frontmatter metadata (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented) — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:1-10
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
- missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 · references `HANDOFF.md` which does not exist in repository root (superseded by distributed per-issue handoffs).
- doc-drift · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:101 · states weighted voting rule as `architect > implementer` in prose without defining a numerical weight table or ranking other agents, causing downstream drift documented in `docs/orchestrator-routing-algorithm.md:226-239`.

## Observations
- Directly operationalized in `scripts/workflow/parallel.py` and pinned by unit tests in `tests/test_agent_role_metadata_migration.py` and `tests/test_workflow_parallel.py`.
- Formalizes the exact escalation arbiter for hard conflicts as `high-level-advisor`.

## Context cost
4097 bytes, ~1000 tokens.
