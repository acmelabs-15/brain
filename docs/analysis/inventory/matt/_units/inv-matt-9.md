---
unit: inv-matt-9
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-9

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/to-questionnaire.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/wait-what.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/writing-for-agents.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-productivity-to-questionnaire-md.md` (5160 bytes)
- `docs/analysis/inventory/matt/docs-productivity-wait-what-md.md` (4138 bytes)
- `docs/analysis/inventory/matt/docs-productivity-writing-for-agents-md.md` (6213 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-9 inventories 3 human-facing documentation pages in `sources/matt/docs/productivity/` corresponding to reach-for-it-anytime standalone skills and foundational authoring references.
- Key concepts and lifecycle implications:
  - `to-questionnaire.md`: Describes a user-invoked skill converting blocked decisions into async discovery questionnaires. Identifies a critical boundary in knowledge extraction: mining the user's head (`grill-me`), mining the codebase (`grill-with-docs`), vs. mining an external human's head (`to-questionnaire`). Rejects dynamic question branching and multi-recipient routing due to LLM planning limitations ahead of live answers.
  - `wait-what.md`: Describes a 3-line corrective skill for model verbosity and jargon. Formulates the distinction between instructing output attributes (e.g. "be brief", leading to truncated, unhelpful telegrams) and naming the listener's comprehension failure ("wait, you lost me", which prompts the agent to back up and add missing premises). Grounds language repair in ASD-STE100 Simplified Technical English and project `CONTEXT.md` / `CONTEXT-MAP.md`.
  - `writing-for-agents.md`: Serves as the universal authoring standard for any text consumed by agents (`AGENTS.md`, `CLAUDE.md`, skills, specs, tickets, prompts). Formulates the trade-off between "context load" (always-in-window token overhead) and "cognitive load" (human index/routing cost). Introduces core authoring levers: context pointers, progressive disclosure, behavioral completion criteria (combating premature completion), pre-trained leading words, and the behavioral "no-op test" for pruning sediment, duplication, and sprawl.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no duplication ledger entries; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4,500 tokens (19,140 bytes across 3 files); approximate tokens of output written: ~3,700 tokens (15,511 bytes across 3 inventory cards).
