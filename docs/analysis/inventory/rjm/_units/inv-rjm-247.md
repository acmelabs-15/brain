---
unit: inv-rjm-247
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-247

## Files assigned
- [x] sources/rjm/scripts/init_project.py
- [x] sources/rjm/scripts/install_semgrep.py
- [x] sources/rjm/scripts/invoke_batch_pr_review.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-init-project-py.md (7550 bytes)
- docs/analysis/inventory/rjm/scripts-install-semgrep-py.md (5213 bytes)
- docs/analysis/inventory/rjm/scripts-invoke-batch-pr-review-py.md (5764 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-247.md (2729 bytes)

## Scripts executed
- `sources/rjm/scripts/init_project.py`: `python3 sources/rjm/scripts/init_project.py init --dry-run` (exit code: 0)
- `sources/rjm/scripts/install_semgrep.py`: `python3 sources/rjm/scripts/install_semgrep.py --check` (exit code: 1); `python3 sources/rjm/scripts/install_semgrep.py --help` (exit code: 0)
- `sources/rjm/scripts/invoke_batch_pr_review.py`: `python3 sources/rjm/scripts/invoke_batch_pr_review.py --pr-numbers 999 --operation status --worktree-root /tmp` (exit code: 0); `python3 sources/rjm/scripts/invoke_batch_pr_review.py --help` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/install_semgrep.py` uses unpinned `pip install semgrep`, which contradicts `scripts/security/run_semgrep.py:136` (unit inv-rjm-264). `run_semgrep.py` explicitly notes that `scripts/install_semgrep.py` can install a version outside project dependency locks.
- `scripts/invoke_batch_pr_review.py` integrates with `scripts/github_core/repo.py` and `scripts/github_core/worktree_identity.py` to reset git identities and prevent test credential contamination (referencing Issues #2466 and #5008). In its execution loop, `main()` ignores boolean failure returns from `create_worktree` and `remove_worktree`, resulting in an exit code 0 even when worktree setup or cleanup operations fail.
- `scripts/init_project.py` scaffolds default agent teams, ADR directory trees, and cross-platform instructions (`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`), embedding the initial templates directly as Python string constants.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 8,600 tokens (34,320 bytes across 3 files).
Approximate tokens of output written: 4,900 tokens (approx. 20,500 bytes across 3 cards and 1 unit report).
