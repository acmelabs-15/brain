---
unit: cc-rjm-248
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-248

## Files assigned
- [x] sources/rjm/scripts/analyze_pr_failure.py
- [x] sources/rjm/scripts/audit_orphaned_branches.py
- [x] sources/rjm/scripts/bootstrap-vm.sh
- [x] sources/rjm/scripts/bulk_cancel_guard.py
- [x] sources/rjm/scripts/ci/merge_tree_materialization.py
- [x] sources/rjm/scripts/ci/verify_code_env.py
- [x] sources/rjm/scripts/detect_hook_bypass.py
- [x] sources/rjm/scripts/maintenance/gc_worktrees.py
- [x] sources/rjm/scripts/normalize_line_endings.py
- [x] sources/rjm/scripts/testing/mutation_workspace_git.py
- [x] sources/rjm/scripts/validation/portability_git.py
- [x] sources/rjm/scripts/validation/test_docs_only_eligibility.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] docs/analysis/inventory/rjm/scripts-analyze-pr-failure-py.md
- [x] docs/analysis/inventory/rjm/scripts-audit-orphaned-branches-py.md
- [x] docs/analysis/inventory/rjm/scripts-detect-hook-bypass-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-merge-tree-materialization-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-gc-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-normalize-line-endings-py.md
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-docs-only-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-bootstrap-vm-sh.md
- [x] docs/analysis/inventory/rjm/scripts-ci-verify-code-env-py.md
- [x] docs/analysis/inventory/rjm/scripts-bulk-cancel-guard-py.md

## Outputs produced
- docs/analysis/concepts/rjm/analyze-pr.md (912 bytes)
- docs/analysis/concepts/rjm/branchartifacts.md (876 bytes)
- docs/analysis/concepts/rjm/auditreport.md (1000 bytes)
- docs/analysis/concepts/rjm/run-git.md (1926 bytes)
- docs/analysis/concepts/rjm/list-remote-branches.md (922 bytes)
- docs/analysis/concepts/rjm/diff-files-vs-main.md (937 bytes)
- docs/analysis/concepts/rjm/find-orphaned-artifacts.md (902 bytes)
- docs/analysis/concepts/rjm/audit-branches.md (876 bytes)
- docs/analysis/concepts/rjm/droid.md (838 bytes)
- docs/analysis/concepts/rjm/factory-ai.md (865 bytes)
- docs/analysis/concepts/rjm/install-uv.md (827 bytes)
- docs/analysis/concepts/rjm/cleanup-tmp.md (829 bytes)
- docs/analysis/concepts/rjm/quiet-run.md (827 bytes)
- docs/analysis/concepts/rjm/quiet-apt-get.md (834 bytes)
- docs/analysis/concepts/rjm/node-major.md (809 bytes)
- docs/analysis/concepts/rjm/configure-github-cli.md (864 bytes)
- docs/analysis/concepts/rjm/restore-origin-remote.md (863 bytes)
- docs/analysis/concepts/rjm/python-pin.md (822 bytes)
- docs/analysis/concepts/rjm/pep-668.md (862 bytes)
- docs/analysis/concepts/rjm/pester-version.md (841 bytes)
- docs/analysis/concepts/rjm/actionlint-version.md (851 bytes)
- docs/analysis/concepts/rjm/skip-autofix.md (1003 bytes)
- docs/analysis/concepts/rjm/exit-blocked.md (851 bytes)
- docs/analysis/concepts/rjm/default-workflows-dir.md (896 bytes)
- docs/analysis/concepts/rjm/default-manifest-path.md (879 bytes)
- docs/analysis/concepts/rjm/gather-runs.md (905 bytes)
- docs/analysis/concepts/rjm/resolve-manifest-path.md (897 bytes)
- docs/analysis/concepts/rjm/write-manifest.md (848 bytes)
- docs/analysis/concepts/rjm/execute.md (807 bytes)
- docs/analysis/concepts/rjm/pinned-contract-error.md (911 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-248.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/analyze-pr.md docs/analysis/concepts/rjm/branchartifacts.md docs/analysis/concepts/rjm/auditreport.md docs/analysis/concepts/rjm/run-git.md docs/analysis/concepts/rjm/list-remote-branches.md docs/analysis/concepts/rjm/diff-files-vs-main.md docs/analysis/concepts/rjm/find-orphaned-artifacts.md docs/analysis/concepts/rjm/audit-branches.md docs/analysis/concepts/rjm/droid.md docs/analysis/concepts/rjm/factory-ai.md docs/analysis/concepts/rjm/install-uv.md docs/analysis/concepts/rjm/cleanup-tmp.md docs/analysis/concepts/rjm/quiet-run.md docs/analysis/concepts/rjm/quiet-apt-get.md docs/analysis/concepts/rjm/node-major.md docs/analysis/concepts/rjm/configure-github-cli.md docs/analysis/concepts/rjm/restore-origin-remote.md docs/analysis/concepts/rjm/python-pin.md docs/analysis/concepts/rjm/pep-668.md docs/analysis/concepts/rjm/pester-version.md docs/analysis/concepts/rjm/actionlint-version.md docs/analysis/concepts/rjm/skip-autofix.md docs/analysis/concepts/rjm/exit-blocked.md docs/analysis/concepts/rjm/default-workflows-dir.md docs/analysis/concepts/rjm/default-manifest-path.md docs/analysis/concepts/rjm/gather-runs.md docs/analysis/concepts/rjm/resolve-manifest-path.md docs/analysis/concepts/rjm/write-manifest.md docs/analysis/concepts/rjm/execute.md docs/analysis/concepts/rjm/pinned-contract-error.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-248 authors 30 concept cards across 13 source files covering PR analysis tooling, branch and hook bypass auditing dataclasses, git invocation wrappers, remote branch discovery and diff utilities, VM bootstrapping helpers/variables, and bulk workflow run cancellation guards:
  1. PR failure analysis function (`analyze_pr`).
  2. Branch artifact auditing and report structures (`BranchArtifacts`, `AuditReport`, `list_remote_branches`, `diff_files_vs_main`, `find_orphaned_artifacts`, `audit_branches`).
  3. Git subprocess helper `_run_git` spanning 8 separate scripts across maintenance, CI, validation, and testing suites.
  4. VM bootstrap script entities and environment pins (`DROID`, `Factory.ai`, `install_uv`, `cleanup_tmp`, `quiet_run`, `quiet_apt_get`, `NODE_MAJOR`, `configure_github_cli`, `restore_origin_remote`, `PYTHON_PIN`, `PEP 668`, `PESTER_VERSION`, `ACTIONLINT_VERSION`, `SKIP_AUTOFIX`).
  5. Bulk cancellation guard constants, manifest resolvers, and execution functions (`EXIT_BLOCKED`, `_DEFAULT_WORKFLOWS_DIR`, `_DEFAULT_MANIFEST_PATH`, `gather_runs`, `resolve_manifest_path`, `write_manifest`, `_execute`, `pinned_contract_error`).
- All 30 concepts represent code identifiers, functions, variables, constants, or external platform/standard labels rather than operational lifecycle concepts; all were correctly classified with `kind: name-only`, `(used, not defined)` definitions, and one-sentence Design notes per D-023.
- All 39 occurrence rows from `facts/cc-rjm-248.txt` are mapped in the Where used tables.
- Defect classes from citing inventory entries were propagated to `Implementation status`.
- Verification passed with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 13 source scripts and 13 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 authored concept cards and 1 unit report.
