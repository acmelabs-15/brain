---
unit: inv-rjm-14
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-14

## Files assigned
- [x] .agents/architecture/ADR-036-two-source-agent-template-architecture.md
- [x] .agents/architecture/ADR-037-memory-router-architecture.md
- [x] .agents/architecture/ADR-038-reflexion-memory-schema.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-036-two-source-agent-template-architecture-md.md (11620 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-037-memory-router-architecture-md.md (11991 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-038-reflexion-memory-schema-md.md (9843 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-036 documents the two-source agent template architecture (hand-maintained `src/claude/*.md` and shared `templates/agents/*.shared.md` generating Copilot CLI and VS Code Copilot agent files). Although superseded in governance by ADR-052, its manual synchronization procedure and generation mechanics remain operative procedure pending completion of the ADR-052 migration plan. It also supplies the template system of record for `build/generate_agent_catalog.py` and `docs/agent-catalog.md`.
- ADR-037 (Memory Router) and ADR-038 (Reflexion Memory Schema) document the evolution of rjm's memory subsystem. In both records, initial design iterations planned PowerShell modules (`scripts/MemoryRouter.psm1`, `tests/MemoryRouter.Tests.ps1`, `scripts/ReflexionMemory.psm1`, `Extract-SessionEpisode.ps1`), which were subsequently superseded by Python implementations (`scripts/memory_sync/`, `.claude/skills/memory/memory_core/memory_router.py`, `reflexion_memory.py`, and `extract_session_episode.py`).
- ADR-038's proposed Tier 3 Causal Memory (`.agents/memory/causality/causal-graph.json`) was later formally removed in ADR-089 ("Causal Tier Removal"), leaving Tier 2 Episodic Memory as the primary reflexion store.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,835 tokens (47,340 bytes). Approximate tokens of output written: ~8,360 tokens (33,454 bytes).
