---
unit: inv-matt-8
phase: 1
package: matt
session: 011
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
- `docs/analysis/inventory/matt/docs-engineering-wizard-md.md` (5908 bytes)
- `docs/analysis/inventory/matt/docs-productivity-grill-me-md.md` (4329 bytes)
- `docs/analysis/inventory/matt/docs-productivity-grilling-md.md` (6274 bytes)
- `docs/analysis/inventory/matt/docs-productivity-handoff-md.md` (5268 bytes)
- `docs/analysis/inventory/matt/docs-productivity-teach-md.md` (8526 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-8 inventories 5 human-facing documentation pages from package `matt`: 1 in `docs/engineering/` and 4 in `docs/productivity/`.
- Remediation of Phase 1V omissions:
  - Addressed all omissions identified in `docs/analysis/inventory/matt/_verification.md` for `docs/productivity/teach.md`:
    - Added invocations to `skill grilling` (lines 20, 97).
    - Added named concepts: `retrieval practice` (line 42), `spacing` (lines 42, 74), `interleaving` (lines 42, 74), `learning-records` (line 34), and `learning records` (line 71).
- Key lifecycle concepts across the unit:
  - `docs/engineering/wizard.md`: Captures the boundary where autonomous agent automation stops and human browser/credential actions begin. Encapsulates interactive manual setup into runnable, idempotent bash scripts using a standardized template library (`skills/engineering/wizard/template.sh`).
  - `docs/productivity/grill-me.md`: Defines the user-invoked, stateless conversational interview primitive for converting loose, vague ideas into committed decisions before planning or coding begins. Distinguishes grillable conceptual decisions from ungrillable tactile/visual questions that require throwaway spikes via `prototype`.
  - `docs/productivity/grilling.md`: Establishes the foundational `grilling` primitive: problem representation as a design tree, question batching across the unblocked frontier in rounds, numbered questions with single-line recommendations, and strict separation between autonomous fact-finding sub-agents and human decision authority.
  - `docs/productivity/handoff.md`: Formulates work portability across harness boundaries, directory changes, team members, and parallel sub-task branching/forking. Produces targeted transit documents in OS temp directories while preserving primary conversational context for in-session work.
  - `docs/productivity/teach.md`: Defines a persistent teaching workspace in a dedicated repository for cumulative skill retention (storage strength over fluency), employing cognitive principles of desirable difficulty, retrieval practice, spacing, and interleaving while grounding lessons in vetted external sources (`RESOURCES.md`).
- None of this unit's assigned files appear in the duplication ledger (`docs/analysis/manifest/matt-duplicates.md`); no divergence cards required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,200 tokens (48,785 bytes across 5 source files); approximate tokens of output written: ~7,200 tokens (30,305 bytes across 5 inventory cards).
