---
unit: inv-matt-17
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-17

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/grilling.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-grilling-md.md` (7990 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/grilling.md` is the public web documentation snapshot for the `grilling` skill (fetched from `https://aihero.dev/skills-grilling`), which pairs with `sources/matt/skills/productivity/grilling/SKILL.md` and `sources/matt/docs/productivity/grilling.md`.
- It explicitly frames `grilling` as a model-invoked interview primitive that underpins wrapper skills across the package (`grill-me`, `grill-with-docs`, `wayfinder`, `triage`, `improve-codebase-architecture`).
- Documents prominent runtime rough edges: wrapper skills failing to trigger dependency loading across harnesses (`grill-with-docs` failing to load `grilling` and `domain-modeling`), weaker models bypassing the confirmation gate and coding prematurely, and models in automated ticket loops answering their own questions.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90268 tokens (361073 bytes on disk); approximate tokens of output written: ~2000 tokens (7990 bytes).
