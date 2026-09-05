---
unit: inv-rjm-6
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-6

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-007-memory-first-architecture.md (15338 bytes, 383 lines)
- [x] sources/rjm/.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md (10790 bytes, 213 lines)
- [x] sources/rjm/.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md (4097 bytes, 132 lines)
- [x] sources/rjm/.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md (4457 bytes, 145 lines)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-007-memory-first-architecture-md.md (11985 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-008-protocol-automation-lifecycle-hooks-md.md (9253 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-009-parallel-safe-multi-agent-design-md.md (7325 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-010-quality-gates-evaluator-optimizer-md.md (7417 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-6.md (3327 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.agents/architecture/ADR-007-memory-first-architecture.md` establishes the foundational "memory-first" doctrine ("Memory retrieval MUST precede reasoning in all agent workflows"), separating canonical git-synchronized markdown memory (`.serena/memories/*.md`) from supplementary local SQLite semantic search (`Forgetful MCP`). It connects with ADR-017 (tiered memory indexing) and ADR-063 (memory skill decomposition).
- `.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md` automates session protocol enforcement via Claude Code lifecycle hooks. Documents failure-mode reconciliation to fail-closed-and-loud (per ADR-066 and ADR-071), retirement of 3 hooks (#3184, #3349) leaving only Context Loader and Compact Checkpoint active in `tests/hooks/test_dispatch_groups_parity.py`, and elimination of stale `.agents/HANDOFF.md` context injection (#5170).
- `.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md` provides the canonical consensus and aggregation strategies (`merge`, `vote`, `escalate`) for parallel multi-agent coordination. Cited extensively in ADR-098 and `docs/orchestrator-routing-algorithm.md`, where downstream attempts to invent tier hierarchies or non-ADR-009 weights were rejected.
- `.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md` specifies the Evaluator-Optimizer pattern with a 4-dimension scoring rubric (Completeness, Correctness, Clarity, Actionability; 25% each), an acceptance threshold of 70%, and a bounded iteration cap of 3 before escalating to the user. Cited across downstream decisions (ADR-023, ADR-051, ADR-057, ADR-058, ADR-087).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~8,670 tokens (34,682 bytes across 4 files).
Approximate output tokens: ~9,800 tokens (39,307 bytes across 4 cards and 1 unit report).
