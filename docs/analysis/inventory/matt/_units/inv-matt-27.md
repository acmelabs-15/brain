---
unit: inv-matt-27
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-27

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/to-questionnaire.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-to-questionnaire-md.md` (8291 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-27 covers `sources/matt-external/to-questionnaire.md` (manifest path `external/to-questionnaire.md`, 351,319 bytes, 75 lines).
- `external/to-questionnaire.md` is an HTML snapshot of `https://aihero.dev/skills-to-questionnaire` fetched 2026-09-05T01:31:47.502Z. It pairs with the in-repo documentation file `sources/matt/docs/productivity/to-questionnaire.md` and the skill definition at `sources/matt/skills/productivity/to-questionnaire/SKILL.md`.
- Key lifecycle architecture insights:
  - Establishes a clear division of labor between `grill-me` and `to-questionnaire`: `grill-me` is used when answers reside in the developer's head (or need sharpening), while `to-questionnaire` is used when a decision is blocked because the required facts/rules reside in someone else's head (client, executive, domain expert, or colleague).
  - Enforces the "send, not the subject" interview discipline: the agent must not interview the developer on the missing topic (which they cannot answer), but only about the send (who the recipient is and what decisions/facts must be unblocked).
  - Enforces flat, non-branching questionnaire structure: explains the model failure mode where LLMs planning multi-level branching question trees ahead of real human answers plan poorly.
  - Formats discovery questionnaires specifically for async single-pass completion: most-important-first ordering, themed headings, single-topic questions, answer stubs, explicit permission to answer "I don't know", and a closing catch-all question.
  - Documents why multi-recipient routing was rejected in favor of running the skill once per recipient.
  - Demonstrates that `to-questionnaire` output (`to-questionnaire-<slug>.md`) feeds directly into downstream lifecycle skills such as another round of `grilling`, `grill-with-docs`, or `to-spec`.
- Defects recorded:
  - `doc-drift`: Header navigation displays 25 total skills ("18 / 25" on line 24) matching `plugin.json`, while promotional copy on line 74 says "Installs the whole set" for general skills installation without clarifying the catalog size.
  - `orphan`: External documentation snapshot is not invoked or required by any build/runtime execution path in `sources/matt/` (though `sources/matt/docs/engineering/grill-with-docs.md:19` includes a web link to its URL).
- Duplication ledger status: None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence card required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~88,000 tokens (351,319 bytes); approximate tokens of output written: ~2,000 tokens (8,291 bytes in inventory card).
