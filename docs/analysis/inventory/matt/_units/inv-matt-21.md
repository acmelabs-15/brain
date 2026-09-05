---
unit: inv-matt-21
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-21

## Files assigned
- [x] sources/matt-external/prototype.md (341956 bytes, 68 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-prototype-md.md (5700 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-21.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/prototype.md` documents the web documentation for `/prototype` in Series 3: Shaping (3.2).
- Key evolution from internal skill: the logic branch replaced terminal applications with a single shareable HTML file carrying labelled state machines and guided walkthrough scenarios.
- Retention model changed from earlier advice ("bin the code") to committing runnable code to `prototype/<name>` branches as primary source evidence while main holds the durable verdict.
- Common agent confusion documented: flow-unaware agents recommend `/prototype` after tickets exist instead of `/implement`.
- Remediated to conform strictly to canonical 13-heading schema from `docs/plan/templates/inventory-entry.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~70,000 tokens (341,956 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,400 tokens (5,700 bytes inventory card + unit report).
