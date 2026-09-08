---
unit: cc-rjm-365
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-365

## Files assigned
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] sources/rjm/scripts/validation/session_scope.py
- [x] docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-session-scope-py.md

## Outputs produced
- docs/analysis/concepts/rjm/actionlint.md (921 bytes)
- docs/analysis/concepts/rjm/docker.md (902 bytes)
- docs/analysis/concepts/rjm/skip-workflow-local-test.md (980 bytes)
- docs/analysis/concepts/rjm/managed-remote-container.md (1006 bytes)
- docs/analysis/concepts/rjm/claude-web-container.md (987 bytes)
- docs/analysis/concepts/rjm/github-codespace.md (951 bytes)
- docs/analysis/concepts/rjm/claudecode.md (907 bytes)
- docs/analysis/concepts/rjm/codespaces.md (913 bytes)
- docs/analysis/concepts/rjm/ci.md (853 bytes)
- docs/analysis/concepts/rjm/shellcheck-opts.md (932 bytes)
- docs/analysis/concepts/rjm/stageresult.md (876 bytes)
- docs/analysis/concepts/rjm/killpg-safe.md (886 bytes)
- docs/analysis/concepts/rjm/read-worktree-gitdir.md (934 bytes)
- docs/analysis/concepts/rjm/select-workflow-files.md (902 bytes)
- docs/analysis/concepts/rjm/secrets.md (863 bytes)
- docs/analysis/concepts/rjm/actionlint-stage.md (930 bytes)
- docs/analysis/concepts/rjm/local-pytest-stage.md (963 bytes)
- docs/analysis/concepts/rjm/vanilla-guard.md (1155 bytes)
- docs/analysis/concepts/rjm/act-dryrun-stage.md (943 bytes)
- docs/analysis/concepts/rjm/act-full-stage.md (947 bytes)
- docs/analysis/concepts/rjm/tool-gap-report.md (964 bytes)
- docs/analysis/concepts/rjm/run-local-test.md (894 bytes)
- docs/analysis/concepts/rjm/not-a-commit-sha.md (883 bytes)
- docs/analysis/concepts/rjm/no-such-commit.md (885 bytes)
- docs/analysis/concepts/rjm/not-an-ancestor.md (886 bytes)
- docs/analysis/concepts/rjm/git-env.md (912 bytes)
- docs/analysis/concepts/rjm/commit-reachability-problem.md (959 bytes)
- docs/analysis/concepts/rjm/session-merge-base.md (927 bytes)
- docs/analysis/concepts/rjm/tracked.md (864 bytes)
- docs/analysis/concepts/rjm/added-session-paths.md (871 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-365.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/actionlint.md docs/analysis/concepts/rjm/docker.md docs/analysis/concepts/rjm/skip-workflow-local-test.md docs/analysis/concepts/rjm/managed-remote-container.md docs/analysis/concepts/rjm/claude-web-container.md docs/analysis/concepts/rjm/github-codespace.md docs/analysis/concepts/rjm/claudecode.md docs/analysis/concepts/rjm/codespaces.md docs/analysis/concepts/rjm/ci.md docs/analysis/concepts/rjm/shellcheck-opts.md docs/analysis/concepts/rjm/stageresult.md docs/analysis/concepts/rjm/killpg-safe.md docs/analysis/concepts/rjm/read-worktree-gitdir.md docs/analysis/concepts/rjm/select-workflow-files.md docs/analysis/concepts/rjm/secrets.md docs/analysis/concepts/rjm/actionlint-stage.md docs/analysis/concepts/rjm/local-pytest-stage.md docs/analysis/concepts/rjm/vanilla-guard.md docs/analysis/concepts/rjm/act-dryrun-stage.md docs/analysis/concepts/rjm/act-full-stage.md docs/analysis/concepts/rjm/tool-gap-report.md docs/analysis/concepts/rjm/run-local-test.md docs/analysis/concepts/rjm/not-a-commit-sha.md docs/analysis/concepts/rjm/no-such-commit.md docs/analysis/concepts/rjm/not-an-ancestor.md docs/analysis/concepts/rjm/git-env.md docs/analysis/concepts/rjm/commit-reachability-problem.md docs/analysis/concepts/rjm/session-merge-base.md docs/analysis/concepts/rjm/tracked.md docs/analysis/concepts/rjm/added-session-paths.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-365 covers 30 concepts spanning local workflow pre-flight test execution and git session scope resolution:
  1. Local workflow test gate execution and environment degradation concepts (`actionlint`, `Docker`, `SKIP_WORKFLOW_LOCAL_TEST`, `managed remote container`, `Claude web container`, `GitHub Codespace`, `CLAUDECODE`, `CODESPACES`, `CI`, `SHELLCHECK_OPTS`, `StageResult`, `_killpg_safe`, `_read_worktree_gitdir`, `_select_workflow_files`, `.secrets`, `_actionlint_stage`, `_local_pytest_stage`, `vanilla guard`, `_act_dryrun_stage`, `_act_full_stage`, `_tool_gap_report`, `run_local_test`) in `run_workflow_local_test.py`.
  2. Git session scope and commit reachability validation concepts (`NOT_A_COMMIT_SHA`, `NO_SUCH_COMMIT`, `NOT_AN_ANCESTOR`, `_git_env`, `commit_reachability_problem`, `session_merge_base`, `_tracked`, `_added_session_paths`) in `session_scope.py`.
- Concepts representing functions, variables, constants, file names, or tools are classified as `kind: name-only` per D-023.
- `vanilla guard` is classified as `kind: gate` representing a verification check asserting that matrix testing rows execute without ambient Python interpreters.
- Defect statuses from citing inventory cards were propagated into `Implementation status`: `defects: doc-drift` for concepts cited by `scripts-validation-run-workflow-local-test-py.md`, and `clean` for concepts cited by `scripts-validation-session-scope-py.md`.
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~19,500 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~7,500 tokens across 30 concept cards and 1 unit report.
