---
unit: inv-matt-15
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-15

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/grill-me.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-grill-me-md.md` (6760 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-15 covers `external/grill-me.md` (348,368 bytes, 71 lines), the external HTML documentation snapshot for Matt Pocock's `/grill-me` productivity skill published at `https://aihero.dev/skills-grill-me` and saved under `sources/matt-external/grill-me.md`.
- Architectural relationships with other skills in Matt's package:
  - `grilling` primitive: `grill-me` is the user-invoked, zero-dependency front door on top of the underlying `grilling` interview primitive.
  - Comparison across the three grilling skills:
    - `grill-me`: portable, stateless, writes no files and needs no repository.
    - `grill-with-docs`: stateful counterpart pointing at an existing codebase, persisting terms to `CONTEXT.md` and decisions to `docs/adr/`.
    - `wayfinder`: roadmapping skill that decomposes projects too large for a single session and embeds grilling sessions within the map.
  - Downstream transition to the build flow: settled ideas from a `grill-me` session feed directly into `to-spec` by preserving conversation context rather than restarting.
  - Interface with prototyping: identifies "ungrillable" questions (UI layout, interaction feel) that require tangible artifacts, instructing users to branch to `prototype` for throwaway code and return with one-line answers.
  - Routing: when users are unsure which entry point fits, `ask-matt` acts as the overarching router.
- Operational heuristics and failure modes:
  - User passivity is the primary failure mode: answering "agreed" across dozens of questions yields unearned certainty; the engineer must actively steer the inquiry.
  - Context saturation ("dumb zone"): sessions reaching hundreds of questions saturate the context window, causing degraded questions; remedy is decomposing work into smaller pieces.
  - Global `CLAUDE.md` override snippet provided for readers who prefer one-question-at-a-time over round-based frontier batches.
- Cross-file alignment:
  - Mirrors internal repository doc `sources/matt/docs/productivity/grill-me.md` and skill declaration `sources/matt/skills/productivity/grill-me/SKILL.md`.
  - Features the dynamic install block and site layout per `.agents/writing-docs.md` and `.agents/install-block.md`.
- Duplication ledger:
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~87,000 tokens (348,368 bytes raw HTML snapshot; ~3,000 tokens core article text); approximate tokens of output written: ~2,500 tokens across inventory card (6,760 bytes) and unit report (2,700 bytes).
