---
unit: cc-rjm-317
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-317

## Files assigned
- [x] scripts/testing/mutation_harness.py
- [x] scripts/testing/mutation_workspace.py
- [x] scripts/testing/mutation_workspace_git.py
- [x] scripts/todo_db.py
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-harness-py.md
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-py.md
- [x] docs/analysis/inventory/rjm/scripts-todo-db-py.md

## Outputs produced
- docs/analysis/concepts/rjm/batteryconfigerror.md (873 bytes)
- docs/analysis/concepts/rjm/mutationtimeouterror.md (889 bytes)
- docs/analysis/concepts/rjm/mutationentry.md (825 bytes)
- docs/analysis/concepts/rjm/mutationresult.md (820 bytes)
- docs/analysis/concepts/rjm/validationproblem.md (857 bytes)
- docs/analysis/concepts/rjm/load-battery.md (868 bytes)
- docs/analysis/concepts/rjm/validate-battery.md (933 bytes)
- docs/analysis/concepts/rjm/mutationrunner.md (847 bytes)
- docs/analysis/concepts/rjm/format-validation-problems.md (933 bytes)
- docs/analysis/concepts/rjm/git-command-timeout-seconds.md (875 bytes)
- docs/analysis/concepts/rjm/marker-directory-name.md (869 bytes)
- docs/analysis/concepts/rjm/scratch-directory.md (920 bytes)
- docs/analysis/concepts/rjm/mutationworkspaceerror.md (894 bytes)
- docs/analysis/concepts/rjm/require-git-stdout.md (900 bytes)
- docs/analysis/concepts/rjm/git-root.md (846 bytes)
- docs/analysis/concepts/rjm/marker-directory.md (886 bytes)
- docs/analysis/concepts/rjm/tracked-repository-path.md (928 bytes)
- docs/analysis/concepts/rjm/relative-target.md (902 bytes)
- docs/analysis/concepts/rjm/add-worktree.md (866 bytes)
- docs/analysis/concepts/rjm/registered-worktrees.md (888 bytes)
- docs/analysis/concepts/rjm/mutationinterrupted.md (884 bytes)
- docs/analysis/concepts/rjm/targetsnapshot.md (818 bytes)
- docs/analysis/concepts/rjm/mutationworkspace.md (857 bytes)
- docs/analysis/concepts/rjm/check-markers.md (911 bytes)
- docs/analysis/concepts/rjm/recover-marker.md (842 bytes)
- docs/analysis/concepts/rjm/recover-markers.md (901 bytes)
- docs/analysis/concepts/rjm/todos.md (754 bytes)
- docs/analysis/concepts/rjm/missingtodoerror.md (819 bytes)
- docs/analysis/concepts/rjm/ensure-todo.md (767 bytes)
- docs/analysis/concepts/rjm/complete-todo.md (772 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-317.md (3851 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in this unit originate from testing and database helper scripts (`scripts/testing/mutation_harness.py`, `scripts/testing/mutation_workspace.py`, `scripts/testing/mutation_workspace_git.py`, `scripts/todo_db.py`).
- All 30 represent code identifiers (Python classes, dataclasses, functions, constants, and a SQL table name) rather than operational SDLC lifecycle concepts, and are classified as `kind: name-only` per METHOD.md R6 and D-023.
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` with zero failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens across 4 source files and 4 citing inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this unit report.
