---
unit: inv-matt-8
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-8

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/wizard.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/grill-me.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/grilling.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/handoff.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/productivity/teach.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-engineering-wizard-md.md` (4453 bytes)
- `docs/analysis/inventory/matt/docs-productivity-grill-me-md.md` (3947 bytes)
- `docs/analysis/inventory/matt/docs-productivity-grilling-md.md` (3987 bytes)
- `docs/analysis/inventory/matt/docs-productivity-handoff-md.md` (3539 bytes)
- `docs/analysis/inventory/matt/docs-productivity-teach-md.md` (4938 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-8 covers 5 human-facing documentation pages in the matt package: 1 engineering doc (`wizard.md`) and 4 productivity docs (`grill-me.md`, `grilling.md`, `handoff.md`, `teach.md`).
- Key architectural findings across this unit:
  - `wizard.md` documents an execution boundary principle: the agent writes the script, but never runs it. This eliminates security leakage of runtime secrets into model context, uses single-screen clearing stages with `TOTAL_STAGES`, idempotent `.env` updates, blind secret inputs, and static verification (`bash -n`, `shellcheck`). It transitioned from user-invoked to model-invoked in v1.2 so agents hit with manual credential hurdles construct a wizard rather than dumping numbered chat instructions.
  - `grilling.md` and `grill-me.md` detail the questioning framework: modeling topics as dependency graphs (`design trees`), batching questions into independent `rounds` along the `frontier`, separating autonomous fact-finding (via background subagents) from human decision-making, and enforcing a `confirmation gate` before any implementation commences. `grilling` is the underlying model-invoked primitive; `grill-me` is the stateless, user-invoked portable front door. Identifies the "dumb zone" risk in long sessions and defines "ungrillable" questions that must be resolved with `prototype` rather than debate.
  - `handoff.md` formalizes portability over compression across session, directory, or harness boundaries, articulating the five phase boundary choices: continue, clear, hand off, delegate, compact. Transit files are placed in OS temp directories and reference existing artifacts by path rather than copying text.
  - `teach.md` implements a stateful workspace for long-term learning retention (`storage strength` vs. `fluency`) via retrieval practice, interleaving, and spacing in the `zone of proximal development`. Disregards parametric LLM knowledge as untrusted, requiring all claims to be grounded in `RESOURCES.md` and HTML lessons.
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).
  - All 107 citations across the 5 cards verified clean (0 FAIL) with `quote-check.ts`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,700 tokens (48,785 bytes across 5 files); approximate tokens of output written: ~5,100 tokens (20,864 bytes across 5 inventory cards).
