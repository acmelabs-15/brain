---
unit: inv-rjm-9
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-9

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-017-tiered-memory-index-architecture.md
- [x] sources/rjm/.agents/architecture/ADR-018-cache-invalidation-strategy.md
- [x] sources/rjm/.agents/architecture/ADR-019-script-organization.md
- [x] sources/rjm/.agents/architecture/ADR-020-feature-request-review-step.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-017-tiered-memory-index-architecture-md.md (7551 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-018-cache-invalidation-strategy-md.md (4252 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-019-script-organization-md.md (5767 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-020-feature-request-review-step-md.md (7147 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-9.md (1820 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-017 establishes the 3-tiered memory index architecture (`memory-index` Level 0, `skills-*-index` Level 1, atomic skill files Level 2) with pure lookup table validation rules (`Validate-MemoryIndex.ps1`). It explicitly supersedes the flat registry approach in `PRD-skills-index-registry.md`.
- ADR-018 establishes a cache invalidation strategy for GitHub API data, explicitly rejecting git-tracked cache files to preserve merge velocity across multi-agent sessions.
- ADR-019 formalizes script organization across 5 directory levels (`scripts/`, `.github/scripts/`, `build/scripts/`, `.claude/skills/github/scripts/`, `tests/`), separating developer-facing utilities from internal agent skill scripts and CI automations.
- ADR-020 documents the feature request review step within issue triage, assigning evaluation to the `analyst` agent rather than creating a new agent or misusing the `critic` agent.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (43,922 bytes). Approximate tokens of output written: ~6,200 tokens (26,537 bytes).
