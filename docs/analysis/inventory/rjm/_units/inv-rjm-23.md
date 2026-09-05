---
unit: inv-rjm-23
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-23

## Files assigned
- [x] `.agents/architecture/ADR-062-conditional-lsp-first-enforcement.md`
- [x] `.agents/architecture/ADR-063-memory-skill-decomposition.md`

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-062-conditional-lsp-first-enforcement-md.md (12023 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-063-memory-skill-decomposition-md.md (9329 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-23.md (2227 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-062 details the complete trajectory of runtime LSP-first enforcement: initially added via 7 hooks and helper modules, an ROI review (#3197) revealed low true-positive yield, high false-positive rate, and significant Windows spawn latency, resulting in an amendment (#3214) that retired runtime enforcement hooks (deleted in issue #3216) while keeping static steering (`.claude/rules/lsp-first.md` and session start `Serena Init`).
- ADR-063 authorizes the decomposition of the 143.6 KB monolithic `memory` skill into 3 to 5 operation-focused sub-skills while preserving `memory` as a thin delegating router. The actual decomposition implementation in issue #1948 / M3 led to reference files under `.claude/skills/memory/references/` being redistributed to sub-skills.
- Both ADRs document numbering collisions in the rjm repository: ADR-061 and ADR-058 had duplicates; an earlier ADR-062 was renumbered to ADR-070 (`ADR-070-memory-first-gate-spec-pipeline.md`), and ADR-071 was renumbered from ADR-063 per issue #2228.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,600 tokens (43,057 bytes across 2 files). Approximate tokens of output written: ~5,300 tokens (23,200 bytes across 3 files).
