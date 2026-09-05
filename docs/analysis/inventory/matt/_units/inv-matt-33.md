---
unit: inv-matt-33
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-33

## Files assigned
- [x] sources/matt-external/wizard.md (363000 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-wizard-md.md (4710 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-33.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/wizard.md` places `/wizard` under section 4 "Upkeep" on aihero.dev, whereas internal docs in `docs/engineering/wizard.md` place it under "engineering".
- Documents the transition of `/wizard` from `in-progress/` to `engineering/` in v1.2 and from user-invoked to model-invoked execution.
- Details the terminal UI bug (#741) where arrow key navigation emits raw escape sequences due to unbuffered bash `read -r`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~72,000 tokens (363,000 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,200 tokens (4,710 bytes inventory card + unit report).
