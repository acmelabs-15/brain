---
unit: inv-rjm-290
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-290

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_vendor_portability.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_worktree_recipes.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md (14279 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-worktree-recipes-py.md (10798 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-290.md (3198 bytes)

## Scripts executed
- `scripts/validation/check_vendor_portability.py`, `python3 sources/rjm/scripts/validation/check_vendor_portability.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/check_worktree_recipes.py`, `python3 sources/rjm/scripts/validation/check_worktree_recipes.py --repo-root sources/rjm`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-290` covers two standalone validation gates under `scripts/validation/`:
  - `check_vendor_portability.py`: Prevents vendored skill scripts from hard-coding upstream-only checkout paths (`.agents/`, `.claude/lib/`, `scripts/`) by enforcing routing through `.claude/lib/paths.py`. Wrapped by `scripts/validation/checks_spec.py` for pre-PR and CI validation suites.
  - `check_worktree_recipes.py`: Scans git-tracked text files across prescriptive roots via `git ls-files -z` to verify that all `git worktree add` commands prescribe external destinations (such as `../wt-<slug>` or `~/worktrees/`), preventing unpushed commit loss in `/tmp` and directory-walking performance degradation from in-checkout worktrees. Wired directly into `scripts/validation/pre_pr_sequence.py`.
- Duplication ledger: Neither file in `inv-rjm-290` appears in `docs/analysis/manifest/rjm-duplicates.md` (no exact aliases or variant divergence cards required).
- Defects identified:
  - `scripts/validation/check_vendor_portability.py:49`: `doc-drift` — Module docstring states "131 files across 30+ skills already hard-code these paths (Issue #2050)", but `vendor_portability_baseline.txt` now contains 18 entries as historical migration debt was resolved.
  - `scripts/validation/check_worktree_recipes.py:70`: `exit-code-mismatch` — Module docstring documents exit code 2 as "configuration or runtime error", but runtime exceptions (`OSError`, `RuntimeError`) in `check_repository()` are caught in `validate_worktree_recipes()` (lines 289-291) which returns `False`, causing `main()` to return exit code 1 instead of 2.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,250 tokens (37,007 bytes across 2 assigned files).
- Approximate tokens of output written: ~6,300 tokens across 2 inventory cards and 1 work-unit report.
