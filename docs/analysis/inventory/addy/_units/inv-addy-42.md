---
unit: inv-addy-42
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-42

## Files assigned
- [x] sources/addy/skills/git-workflow-and-versioning/SKILL.md (14063 bytes, 356 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md (14821 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/git-workflow-and-versioning/SKILL.md` is the canonical implementation of the `git-workflow-and-versioning` skill.
- Related units in Phase 1:
  - `inv-addy-7`: `evals/cases/git-workflow-and-versioning.json` (evaluation cases and trigger prompts).
  - `inv-addy-9`: `evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch`.
  - `inv-addy-10`: `evals/fixtures/git-workflow-and-versioning/app.js` and `evals/fixtures/git-workflow-and-versioning/app.test.js`.
  - `inv-addy-22`: `external/git-workflow-and-versioning.md` (external catalog doc snapshot from `skills.addy.ie`).
- Cross-skill references invoked:
  - `code-review-and-quality` (`skills/code-review-and-quality/SKILL.md`): invoked for PR splitting strategies for changes over ~1000 lines.
  - `api-and-interface-design` (`skills/api-and-interface-design/SKILL.md`): invoked for interface breaking change considerations (Hyrum's Law) regarding semantic versioning.
  - `deprecation-and-migration` (`skills/deprecation-and-migration/SKILL.md`): invoked for migration notes and deprecation windows accompanying breaking changes.
  - `shipping-and-launch` (`skills/shipping-and-launch/SKILL.md`): invoked as the execution skill responsible for shipping the release prepared by the versioning contract.
- Invocations from other in-scope files:
  - `skills/using-agent-skills/SKILL.md` routes committing and branching queries to this skill and lists it under the Ship phase.
  - `skills/incremental-implementation/SKILL.md` cites this skill for atomic commit guidance during the Commit step.
  - `docs/adoption-guide.md` and `docs/cursor-setup.md` recommend this skill as standard practice across brownfield and greenfield workflows.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,516 tokens (14,063 bytes across 1 file)
Approximate tokens of output written: ~3,705 tokens (14,821 bytes in inventory card)
