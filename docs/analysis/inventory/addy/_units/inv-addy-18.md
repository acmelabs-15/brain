---
unit: inv-addy-18
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-18

## Files assigned
- [x] sources/addy-external/debugging-and-error-recovery.md (23705 bytes, 20 lines)
- [x] sources/addy-external/deprecation-and-migration.md (26252 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md (4994 bytes)
- docs/analysis/inventory/addy/external-deprecation-and-migration-md.md (6078 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-18.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both files are external HTML documentation snapshots corresponding to public skill catalog pages published at `https://skills.addy.ie/skills/<name>/` (`debugging-and-error-recovery` and `deprecation-and-migration`).
- Web catalog anatomy drift: The external pages present a rigid 6-stage anatomy across all skills (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` at line 10). Neither `skills/debugging-and-error-recovery/SKILL.md` nor `skills/deprecation-and-migration/SKILL.md` contains a section named `Process`; each organizes workflow under domain-specific headings (`The Stop-the-Line Rule` / `The Triage Checklist` for debugging, and `The Migration Process` / `Migration Patterns` for deprecation).
- Lifecycle phase placement drift: `external/deprecation-and-migration.md:12` assigns `deprecation-and-migration` to the `Ship` phase (associating it with `/ship`), whereas `docs/adoption-guide.md:104` places it under "Phase 4 | Pay down, deprecate, observe" for post-shipping debt retirement and cleanup.
- Discovery and standalone consumption: Both pages provide standalone install commands (`npx skills add addyosmani/agent-skills --skill <name>`) and full-catalog commands (`npx skills add addyosmani/agent-skills`), along with links to the canonical GitHub source repository.

## Blocked or uncertain
none

## Time and size
- Approximate source tokens: ~12,489 tokens (49,957 bytes across 2 files)
- Approximate output tokens: ~3,400 tokens (11,072 bytes across 2 inventory cards plus unit report)
