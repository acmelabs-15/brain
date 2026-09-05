---
unit: inv-matt-17
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-17

## Files assigned
- [x] sources/matt-external/grilling.md (361073 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-grilling-md.md (4593 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-17.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/grilling.md` is the central interview primitive categorized under "Reference Skills". It serves as the model-invoked execution engine for the user-facing wrappers `grill-me`, `grill-with-docs`, and `wayfinder`.
- Organizes questioning around a design tree and iterative frontier rounds, enforcing numbered questions with `❓ Qn` headings and separate `➡️` recommendation lines.
- Defines the critical operational boundary between autonomous fact discovery (delegated to sub-agents and filesystem tools) and human decision gating.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~72,000 tokens (361,073 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,100 tokens (inventory card + unit report).
