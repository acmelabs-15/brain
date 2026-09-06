---
unit: inv-rjm-299
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-299

## Files assigned
- [x] `sources/rjm/scripts/validation/portability_git.py`
- [x] `sources/rjm/scripts/validation/pr_commit_count.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-portability-git-py.md` (7413 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-pr-commit-count-py.md` (9421 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-299.md`

## Scripts executed
- `sources/rjm/scripts/validation/portability_git.py`: `python3 sources/rjm/scripts/validation/portability_git.py`, exit 0
- `sources/rjm/scripts/validation/pr_commit_count.py`: `python3 sources/rjm/scripts/validation/pr_commit_count.py --help`, exit 0
- `sources/rjm/scripts/validation/pr_commit_count.py`: `python3 sources/rjm/scripts/validation/pr_commit_count.py --pr-number 1 --owner cli --repo cli`, exit 0
- `sources/rjm/scripts/validation/pr_commit_count.py`: `python3 sources/rjm/scripts/validation/pr_commit_count.py`, exit 2
- `sources/rjm/scripts/validation/pr_commit_count.py`: `python3 sources/rjm/scripts/validation/pr_commit_count.py --pr-number 1 --owner dummy --repo dummy`, exit 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/portability_git.py` provides the underlying Git inspection logic for `portability_floor.py`, `portability_common.py`, `portability_baseline.py`, and `agent_skill_discriminator_baseline.py`. Its strict `--no-replace-objects`, case-folding awareness, and distinction between absence vs. timeout are central to the integrity of the portability baseline ratchets across the repository.
- `scripts/validation/pr_commit_count.py` implements the threshold classification (warning at 10, alert at 15) referenced in `.claude/skills/ai-agents-change-control/references/gate-ladder.md` and `.claude/skills/ai-agents-change-control/references/provenance.md`. Per ADR-099 and issue #5233, this check is advisory and never blocks CI merges or local pushes.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7100 tokens (28636 bytes); approximate tokens of output written: ~4500 tokens.
