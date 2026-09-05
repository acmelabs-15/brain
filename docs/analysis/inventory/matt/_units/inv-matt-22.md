---
unit: inv-matt-22
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-22

## Files assigned
- [x] sources/matt-external/research.md (347558 bytes, 62 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-research-md.md (4874 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-22.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/research.md` documents web documentation for `/research` under Series 3: Shaping (3.3).
- Distinguishes short shelf-life research assets from durable architectural decisions recorded in ADRs via `grill-with-docs`.
- Details significant multi-agent delegation failure modes: issue #530 (recursive subagent re-spawning costing ~450k tokens) and issue #576 (automated research subagents opening draft PRs from throwaway `research/<name>` branches).
- Key operational characteristic: primary sources are enforced through human citation verification rather than an automated source allowlist.
- Remediated to conform strictly to canonical 13-heading schema from `docs/plan/templates/inventory-entry.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~70,000 tokens (347,558 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,200 tokens (4,874 bytes inventory card + unit report).
