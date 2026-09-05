---
unit: inv-rjm-27
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-27

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-069-context-corpus-is-the-product.md (13374 bytes)
- [x] sources/rjm/.agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md (17304 bytes)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-069-context-corpus-is-the-product-md.md (9092 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-070-memory-first-gate-spec-pipeline-md.md (10983 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-27.md (1630 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-069 articulates the foundational principle "The curated context corpus IS the product. Orchestration is plumbing", framing LLMs as "ghosts, not animals" that retain no session memory. It connects with Phase 2/3 concepts around context curation vs orchestration plumbing, and feeds the "Verified Governance" research program in `.claude/skills/ai-agents-research-frontier/SKILL.md`.
- ADR-070 formalizes the Memory-First Gate (Step 0.5) in `.claude/commands/spec.md` as a BLOCKING gate. It traces directly to REQ-017 (`.agents/specs/requirements/REQ-017-spec-memory-first-gate.md`), `.claude/skills/memory/SKILL.md`, and ADR-007. It defines the `step0_5-halt` schema with halt triggers H6–H11, logging to `.agents/sessions/STEP-0.5-METRICS.md`, and adopts kill criteria from `REQ-016-13`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,675 tokens (30,678 bytes across 2 files).
Approximate tokens of output written: ~5,150 tokens (20,075 bytes across 2 inventory cards plus report).
