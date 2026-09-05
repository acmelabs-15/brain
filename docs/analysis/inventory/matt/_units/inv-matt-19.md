---
unit: inv-matt-19
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-19

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/implement.md

## Outputs produced
- docs/analysis/inventory/matt/external-implement-md.md (10479 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-19 inventories the single external documentation page `sources/matt-external/implement.md` (362,825 bytes, 76 lines) corresponding to manifest row `external/implement.md`.
- Key findings and cross-unit relationships:
  - `external/implement.md` is an HTML snapshot of `https://aihero.dev/skills-implement`, which serves as the public documentation and deep-dive guide for the `implement` skill (`sources/matt/skills/engineering/implement/SKILL.md`).
  - Architecture and lifecycle positioning:
    - Step 2.4 of "The Main Flow" (`grill-with-docs → to-spec → to-tickets → implement → code-review`), acting as the build step of the main chain, second from the end.
    - Sits downstream of planning skills (`grill-with-docs`, `to-spec`, `to-tickets`) and assumes settled intent; it never reopens the plan, conducts interviews, or redesigns architecture.
    - Consumes tracer-bullet vertical slices sized by `to-tickets` for a single fresh context window, requiring context clearing between tickets.
    - Drives `tdd` internally at pre-agreed seams (public boundaries), typechecks frequently, runs the full test suite once near the end, and invokes `code-review` before committing to the current branch.
  - Defect and drift notes:
    - Pre-agreed seams gap: `implement` lacks a mechanism to negotiate seams; if seams are not settled upstream in the spec or during the opening exchange, `tdd` refuses to write tests or the workflow silently degenerates into un-tested code generation.
    - Code-review diff visibility contradiction: `implement` invokes `code-review` before committing, but `code-review` evaluates `git diff <fixed-point>...HEAD`, leaving working-tree changes invisible to the reviewer unless an interim commit exists.
    - Completion gap: `implement` terminates at the commit and does not update tracker issues, resolve acceptance criteria checkboxes (`- [ ]`), or close tickets, which blocks progress along dependency chains defined by `to-tickets`.
    - Git concurrency hazards: running multiple `/implement` sessions concurrently in the same working tree causes severe index, stash, and commit collisions; git worktrees provide partial isolation but still share `refs/stash`.
    - Identifier resolution ambiguity: issue references such as `#2` resolve aggressively and non-fail-closed against arbitrary numbered lists in session context instead of the configured issue tracker.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90,706 tokens (362,825 bytes across 1 file); approximate tokens of output written: ~2,620 tokens (10,479 bytes in inventory card).
