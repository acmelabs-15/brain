---
unit: inv-matt-19
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-19

## Files assigned
- [x] sources/matt-external/implement.md (362825 bytes, 76 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-implement-md.md (4605 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-19.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/implement.md` is the implementation step of the main chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`), categorized under "The Main Flow".
- Enforces a five-beat rhythm: seam identification, test-driven development via `/tdd`, regular typechecking, full test suite pass, and `/code-review` before git commit.
- Restricts scope strictly to a single ticket per session to maintain context fidelity and prevent batch regressions.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~73,000 tokens (362,825 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,150 tokens (inventory card + unit report).
