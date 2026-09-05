---
unit: inv-rjm-8
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-8

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-013-agent-orchestration-mcp.md (18270 bytes, 609 lines)
- [x] sources/rjm/.agents/architecture/ADR-014-distributed-handoff-architecture.md (11472 bytes, 295 lines)
- [x] sources/rjm/.agents/architecture/ADR-015-artifact-storage-minimization.md (5330 bytes, 150 lines)
- [x] sources/rjm/.agents/architecture/ADR-016-workflow-execution-optimization.md (7564 bytes, 220 lines)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-013-agent-orchestration-mcp-md.md (11690 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-014-distributed-handoff-architecture-md.md (8671 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-015-artifact-storage-minimization-md.md (6367 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-016-workflow-execution-optimization-md.md (7049 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-8.md (3351 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.agents/architecture/ADR-013-agent-orchestration-mcp.md`: Proposes Agent Orchestration MCP with 7 tools (`invoke_agent`, `get_agent_catalog`, `track_handoff`, `get_routing_recommendation`, `start_parallel_execution`, `aggregate_parallel_results`, `resolve_conflict`) and 4 resource URIs. Integrates with Session State MCP (ADR-011, inv-rjm-7) and Skill Catalog MCP (ADR-012, inv-rjm-7).
- `.agents/architecture/ADR-014-distributed-handoff-architecture.md`: Establishes the 3-tier distributed handoff architecture replacing centralized `HANDOFF.md` with session logs (Tier 1), branch handoffs (Tier 2), and a 5K-token read-only dashboard (Tier 3). Later amended on 2026-08-16 to make committed session logs optional, transferring active continuity to per-issue handoffs and Serena memory. Referenced by `.claude/skills/ai-agents-docs-of-record/SKILL.md` (inv-rjm-11), ADR-008 (inv-rjm-4), and ADR-060 (inv-rjm-22).
- `.agents/architecture/ADR-015-artifact-storage-minimization.md`: Reduces CI artifact retention to 7 days for test results and metrics reports (76-92% cost reduction) and 1 day for operational reviews. Enforced by automated compliance scanner `scripts/ci/adr015_workflow_retention.py` (unit inv-rjm-30). Referenced by ADR-016 and ADR-025 (inv-rjm-9).
- `.agents/architecture/ADR-016-workflow-execution-optimization.md`: Optimizes GitHub Actions workflow costs by 30% through push/PR path filters (20% reduction) and concurrency cancellation groups (10% reduction), with differentiated cancellation for branch runs (`cancel-in-progress: true`) versus issue-triggered runs (`cancel-in-progress: false`). Referenced by ADR-015, ADR-025, and ADR-086.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~10,700 tokens (42,636 bytes across 4 files).
Approximate output tokens: ~8,500 tokens (33,777 bytes across 4 cards and 1 unit report).
