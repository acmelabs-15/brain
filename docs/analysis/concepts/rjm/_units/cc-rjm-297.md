---
unit: cc-rjm-297
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-297

## Files assigned
- [x] sources/rjm/scripts/github_core/worktree_identity.py
- [x] sources/rjm/scripts/guard_diff.py
- [x] sources/rjm/scripts/hook_utilities/__init__.py
- [x] sources/rjm/scripts/hook_utilities/bootstrap.py
- [x] sources/rjm/scripts/hook_utilities/guards.py
- [x] sources/rjm/scripts/hook_utilities/utilities.py
- [x] sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] docs/analysis/inventory/rjm/scripts-github-core-worktree-identity-py.md
- [x] docs/analysis/inventory/rjm/scripts-guard-diff-py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-bootstrap-py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-guards-py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-utilities-py.md
- [x] docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md

## Outputs produced
- docs/analysis/concepts/rjm/run-git-config.md (824 bytes)
- docs/analysis/concepts/rjm/reset-worktree-identity.md (885 bytes)
- docs/analysis/concepts/rjm/guardfn.md (821 bytes)
- docs/analysis/concepts/rjm/load-guard.md (791 bytes)
- docs/analysis/concepts/rjm/scan-corpus.md (793 bytes)
- docs/analysis/concepts/rjm/content-findings.md (836 bytes)
- docs/analysis/concepts/rjm/diff-findings.md (791 bytes)
- docs/analysis/concepts/rjm/load-baseline-findings.md (834 bytes)
- docs/analysis/concepts/rjm/is-project-repo.md (1000 bytes)
- docs/analysis/concepts/rjm/coerce-to-list.md (937 bytes)
- docs/analysis/concepts/rjm/format-work-item.md (958 bytes)
- docs/analysis/concepts/rjm/get-project-directory.md (978 bytes)
- docs/analysis/concepts/rjm/get-recent-session-log.md (965 bytes)
- docs/analysis/concepts/rjm/get-today-session-log.md (979 bytes)
- docs/analysis/concepts/rjm/get-today-session-logs.md (967 bytes)
- docs/analysis/concepts/rjm/is-git-commit-command.md (953 bytes)
- docs/analysis/concepts/rjm/is-git-push-command.md (931 bytes)
- docs/analysis/concepts/rjm/is-pr-create-command.md (955 bytes)
- docs/analysis/concepts/rjm/lock-file.md (913 bytes)
- docs/analysis/concepts/rjm/unlock-file.md (912 bytes)
- docs/analysis/concepts/rjm/setup-hook-lib-path.md (1068 bytes)
- docs/analysis/concepts/rjm/resolve-plugin-lib-dir.md (908 bytes)
- docs/analysis/concepts/rjm/project-repo-name.md (845 bytes)
- docs/analysis/concepts/rjm/project-repo-env.md (841 bytes)
- docs/analysis/concepts/rjm/repoidentity.md (791 bytes)
- docs/analysis/concepts/rjm/remote-repo-name.md (831 bytes)
- docs/analysis/concepts/rjm/project-repo-identity.md (829 bytes)
- docs/analysis/concepts/rjm/project-repo-corroborated.md (880 bytes)
- docs/analysis/concepts/rjm/emit-skip-event.md (847 bytes)
- docs/analysis/concepts/rjm/git-commit-pattern.md (814 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-297.md

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/run-git-config.md (exit 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/reset-worktree-identity.md docs/analysis/concepts/rjm/guardfn.md docs/analysis/concepts/rjm/load-guard.md docs/analysis/concepts/rjm/scan-corpus.md docs/analysis/concepts/rjm/content-findings.md docs/analysis/concepts/rjm/diff-findings.md docs/analysis/concepts/rjm/load-baseline-findings.md (exit 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/is-project-repo.md docs/analysis/concepts/rjm/coerce-to-list.md docs/analysis/concepts/rjm/format-work-item.md docs/analysis/concepts/rjm/get-project-directory.md docs/analysis/concepts/rjm/get-recent-session-log.md docs/analysis/concepts/rjm/get-today-session-log.md docs/analysis/concepts/rjm/get-today-session-logs.md (exit 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/is-git-commit-command.md docs/analysis/concepts/rjm/is-git-push-command.md docs/analysis/concepts/rjm/is-pr-create-command.md docs/analysis/concepts/rjm/lock-file.md docs/analysis/concepts/rjm/unlock-file.md docs/analysis/concepts/rjm/setup-hook-lib-path.md docs/analysis/concepts/rjm/resolve-plugin-lib-dir.md (exit 0)
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/project-repo-name.md docs/analysis/concepts/rjm/project-repo-env.md docs/analysis/concepts/rjm/repoidentity.md docs/analysis/concepts/rjm/remote-repo-name.md docs/analysis/concepts/rjm/project-repo-identity.md docs/analysis/concepts/rjm/project-repo-corroborated.md docs/analysis/concepts/rjm/emit-skip-event.md docs/analysis/concepts/rjm/git-commit-pattern.md (exit 0)
- bun scripts/synthesis/quote-check.ts <all 30 cards> (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit represent internal Python symbols (functions, type aliases, compiled regexes, and constants) from hook utility, migration, and guard scanner modules. Per D-023, each is classified with `kind: name-only`.
- `scripts/guard_diff.py` has an orphan defect in inventory as it is only exercised by unit tests and not by production lifecycle commands.
- `scripts/migrations/req003_inline_plugin_root_bootstrap.py` carries orphan and other defects (marked DELETE-AFTER-MERGE post-PR-1819).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~19,000 tokens (40,280 bytes of source scripts + 37,092 bytes of inventory cards).
- Approximate tokens of output written: ~6,700 tokens (26,677 bytes across 30 concept cards + unit report).
