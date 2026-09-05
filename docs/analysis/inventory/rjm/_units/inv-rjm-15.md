---
unit: inv-rjm-15
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-15

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-039-agent-model-cost-optimization.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-040-skill-frontmatter-standardization.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-039-agent-model-cost-optimization-md.md` (14167 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-040-skill-frontmatter-standardization-md.md` (15781 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-15 covers two foundational architectural decision records in rjm:
  - `ADR-039-agent-model-cost-optimization.md` documents an attempted 3-tier model cost optimization (Opus/Sonnet/Haiku) for 20 agents that was implemented prior to empirical testing, placed in a 2-week provisional window whose acceptance criteria were never evaluated, and eventually deprecated after an unrelated prompt migration (commit 568af6775) incidentally reverted the model assignments back to Opus (ADR-002).
  - `ADR-040-skill-frontmatter-standardization.md` formalizes the YAML frontmatter schema and authoring standards for Claude Code skills (name, version, description, license, optional model), mandates block-style YAML arrays for Windows parser compatibility, and traces multiple rounds of amendments, multi-agent debates, and supersessions by ADR-080.
- Neither file appears in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,600 tokens (38,334 bytes across 2 files); approximate tokens of output written: ~7,500 tokens (29,948 bytes across 2 inventory cards).
