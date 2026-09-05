---
unit: inv-matt-10
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-10

## Files assigned
- [x] sources/matt-external/ask-matt.md (355633 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-ask-matt-md.md (4384 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-10.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/ask-matt.md` serves as the high-level router across the skill repository, categorizing skills into "The main flow", "On-ramps", "Standalones", and "A vocabulary layer underneath".
- Documents the phase boundary context management protocol: Continue > `/clear` > `handoff` > Subagent > `/compact`.
- Notes repository-wide issues including harness exclusion of `disable-model-invocation: true` skills from context and router lag behind new skill releases.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~72,000 tokens (355,633 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,100 tokens (4,384 bytes inventory card + unit report).
