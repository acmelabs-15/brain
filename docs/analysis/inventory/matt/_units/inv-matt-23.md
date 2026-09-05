---
unit: inv-matt-23
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-23

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/resolving-merge-conflicts.md

## Outputs produced
- docs/analysis/inventory/matt/external-resolving-merge-conflicts-md.md (9490 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-23 covers `external/resolving-merge-conflicts.md` (339,023 bytes, 52 lines), the external HTML documentation snapshot for `/resolving-merge-conflicts` hosted at `https://aihero.dev/skills-resolving-merge-conflicts`.
- In-repo companion files:
  - `skills/engineering/resolving-merge-conflicts/SKILL.md` (918 bytes, 15 lines): The in-repo skill definition.
  - `docs/engineering/resolving-merge-conflicts.md` (5,326 bytes, 52 lines): The in-repo markdown documentation from which the external page was rendered (inventoried in unit `inv-matt-6` as `docs-engineering-resolving-merge-conflicts-md.md`).
- Architectural relationships with other skills in Matt's package:
  - `diagnosing-bugs`: Sits adjacent to `resolving-merge-conflicts` within series 4 (`Upkeep`). The external documentation provides an explicit routing table directing users to `diagnosing-bugs` when a merge has completed cleanly but the resulting code misbehaves (a diagnostic problem rather than a conflict one).
  - `ask-matt`: Functions as the global navigation map for standalone reach-for-it-anytime skills that operate off the main idea-to-ship flow.
- Key lifecycle rules & findings:
  - Hard gate against syntactic/mechanical resolution: Forbids `--ours`, `--theirs`, and naive line deletion that satisfies compiler checks while dropping intentional features.
  - Traceability to primary sources: Mandates inspecting commit messages, PR descriptions, and issue tickets before touching diff hunks to understand the intent of both branches.
  - Prohibition of `--abort`: Refuses to allow aborting in-progress merges, enforcing that the merge is carried to a clean, committed finish.
  - Pre-commit automated checks: Requires discovering and executing automated verification suites (typecheck, tests, format) green before committing.
  - Parallel agent worktree guidance: Discourages rigid file zoning between parallel tasks as overly restrictive, but cautions that the specific session that authored a change should perform the merge back to preserve local intent context.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no duplication ledger entries; no divergence card needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~84,800 tokens (339,023 bytes raw HTML snapshot; core article text is ~1,300 tokens / ~5 KB); approximate tokens of output written: ~3,200 tokens across inventory card (9,490 bytes) and unit report (~2,500 bytes).
