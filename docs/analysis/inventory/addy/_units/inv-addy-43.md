---
unit: inv-addy-43
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-43

## Files assigned
- [x] `sources/addy/skills/idea-refine/examples.md` (20284 bytes) — read in full
- [x] `sources/addy/skills/idea-refine/frameworks.md` (5404 bytes) — read in full
- [x] `sources/addy/skills/idea-refine/refinement-criteria.md` (5738 bytes) — read in full
- [x] `sources/addy/skills/idea-refine/scripts/idea-refine.sh` (342 bytes) — read in full
- [x] `sources/addy/skills/idea-refine/SKILL.md` (8111 bytes) — read in full
- [x] `sources/addy/skills/incremental-implementation/SKILL.md` (9507 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/addy/skills-idea-refine-examples-md.md` (5090 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-frameworks-md.md` (3732 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-refinement-criteria-md.md` (4235 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-scripts-idea-refine-sh.md` (2801 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-skill-md.md` (6462 bytes)
- `docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md` (6685 bytes)

## Scripts executed
- `sources/addy/skills/idea-refine/scripts/idea-refine.sh`: `bash skills/idea-refine/scripts/idea-refine.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/idea-refine/SKILL.md` and `skills/incremental-implementation/SKILL.md` represent two key stages of the Addy lifecycle: `idea-refine` in `addy:Define` and `incremental-implementation` in `addy:Build`.
- `incremental-implementation` connects backwards to planning/spec skills (`spec-driven-development`, `planning-and-task-breakdown`) and forwards to testing (`test-driven-development`) and completion (`references/definition-of-done.md`).
- `idea-refine` features a modular structure with dedicated reference files for examples, ideation frameworks, evaluation criteria, and a directory initialization shell script.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12500 tokens (49386 bytes across 6 files).
Approximate tokens of output written: ~7200 tokens (29005 bytes across 6 inventory cards + unit report).
