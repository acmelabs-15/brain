---
unit: inv-rjm-8
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-8

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-013-agent-orchestration-mcp.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-014-distributed-handoff-architecture.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-015-artifact-storage-minimization.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-016-workflow-execution-optimization.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-013-agent-orchestration-mcp-md.md (13687 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-014-distributed-handoff-architecture-md.md (10095 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-015-artifact-storage-minimization-md.md (6859 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-016-workflow-execution-optimization-md.md (7576 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-8 covers 4 architectural decision records governing agent orchestration, distributed handoff mechanics, artifact retention policies, and workflow trigger optimization.
- Cross-ADR relationships:
  - ADR-013 defines the Agent Orchestration MCP proposal and interfaces (`invoke_agent`, `track_handoff`, `start_parallel_execution`), linking to ADR-009 (Parallel-Safe Multi-Agent Design), ADR-011 (Session State MCP), and ADR-012 (Skill Catalog MCP).
  - ADR-014 implements the 3-tier distributed handoff architecture to prevent git merge conflicts and AI token compaction on `HANDOFF.md`, which was initially kept as a 5K token read-only dashboard and subsequently deleted per the 2026-08-16 amendment in favor of per-issue handoffs and Serena memory.
  - ADR-015 establishes artifact storage reduction (7-day standard, 1-day operational), which is verified by `scripts/ci/adr015_workflow_retention.py` and `.github/workflows/validate-artifact-retention.yml`.
  - ADR-016 defines CI path filters and concurrency groups (`cancel-in-progress: true` for PR/branch workflows; `cancel-in-progress: false` for issue workflows) to eliminate redundant executions.
- Duplication ledger status: None of the files in unit inv-rjm-8 appears in `docs/analysis/manifest/rjm-duplicates.md` (no alias rows or variant pairs).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~10,500 tokens (42,636 bytes across 4 files); approximate output written: ~9,200 tokens (38,217 bytes across 4 cards).
