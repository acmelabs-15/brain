---
unit: inv-addy-31
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-31

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/spec-driven-development.md (25104 bytes, 20 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-spec-driven-development-md.md (6442 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-31.md (2263 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/spec-driven-development.md` is the public web documentation snapshot for Addy's `spec-driven-development` skill (`skills/spec-driven-development/SKILL.md` in repository).
- The external catalog page places `spec-driven-development` in the `addy:Define` phase alongside related skills `interview-me` and `idea-refine`, and associates it with the `/spec` command.
- Identifies documentation drift (`doc-drift`): the web page summary and metadata use the term "PRD" ("Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries" — `external/spec-driven-development.md:5`), whereas `skills/spec-driven-development/SKILL.md` defines a "spec document" and never mentions "PRD".
- Identifies documentation drift (`doc-drift`): the page asserts that every skill follows a standardized 6-section anatomy ("Process", "Rationalizations"), whereas `skills/spec-driven-development/SKILL.md` uses "The Gated Workflow" and "Common Rationalizations", and includes an extra section "Keeping the Spec Alive".
- Identifies orphan status (`orphan`): this external documentation page snapshot is not referenced or linked by any in-scope repository file in `sources/addy/`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,276 tokens (25,104 bytes)
- Approximate tokens of output written: ~2,156 tokens (card: 6,442 bytes; report: 2,182 bytes)
