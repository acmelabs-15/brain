---
unit: cc-rjm-254
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-254

## Files assigned
- [x] sources/rjm/scripts/ci/combine_pin_coverage.py
- [x] sources/rjm/scripts/ci/commit_and_push.py
- [x] sources/rjm/scripts/ci/count_ratchet.py
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py
- [x] sources/rjm/scripts/maintenance/detect_unlanded_commits.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_git_hook_health.py
- [x] sources/rjm/scripts/validation/citation_head_state.py
- [x] sources/rjm/scripts/validation/session_scope.py
- [x] sources/rjm/scripts/validation/test_docs_only_eligibility.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] docs/analysis/inventory/rjm/scripts-ci-combine-pin-coverage-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-commit-and-push-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-maintenance-detect-unlanded-commits-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-git-hook-health-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-citation-head-state-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-session-scope-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-docs-only-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md

## Outputs produced
- docs/analysis/concepts/rjm/coveragedata-update.md (975 bytes)
- docs/analysis/concepts/rjm/coverage-xml.md (869 bytes)
- docs/analysis/concepts/rjm/exit-invalid-data.md (835 bytes)
- docs/analysis/concepts/rjm/coverageinputerror.md (891 bytes)
- docs/analysis/concepts/rjm/load-data.md (856 bytes)
- docs/analysis/concepts/rjm/require-branch-data.md (927 bytes)
- docs/analysis/concepts/rjm/require-statement-data.md (927 bytes)
- docs/analysis/concepts/rjm/project-to-lines.md (939 bytes)
- docs/analysis/concepts/rjm/coveragedata-lines.md (916 bytes)
- docs/analysis/concepts/rjm/combine.md (877 bytes)
- docs/analysis/concepts/rjm/git-status-porcelain.md (886 bytes)
- docs/analysis/concepts/rjm/gh-auth-setup-git.md (906 bytes)
- docs/analysis/concepts/rjm/exit-git-failed.md (770 bytes)
- docs/analysis/concepts/rjm/git.md (1451 bytes)
- docs/analysis/concepts/rjm/dirty.md (807 bytes)
- docs/analysis/concepts/rjm/count-ratchet.md (1369 bytes)
- docs/analysis/concepts/rjm/baseline-file.md (1059 bytes)
- docs/analysis/concepts/rjm/ruff-count-ratchet-py.md (979 bytes)
- docs/analysis/concepts/rjm/taste-count-ratchet-py.md (870 bytes)
- docs/analysis/concepts/rjm/git-environment.md (870 bytes)
- docs/analysis/concepts/rjm/argv-budget-bytes.md (900 bytes)
- docs/analysis/concepts/rjm/max-named-unmerged.md (869 bytes)
- docs/analysis/concepts/rjm/deduplicate-index-entries.md (949 bytes)
- docs/analysis/concepts/rjm/changed-files.md (1464 bytes)
- docs/analysis/concepts/rjm/chunk.md (867 bytes)
- docs/analysis/concepts/rjm/read-baseline.md (1015 bytes)
- docs/analysis/concepts/rjm/max-baseline-slack.md (896 bytes)
- docs/analysis/concepts/rjm/baseline-health.md (912 bytes)
- docs/analysis/concepts/rjm/baseline-absent-at-ref.md (1070 bytes)
- docs/analysis/concepts/rjm/baseline-at-ref.md (880 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-254.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/coveragedata-update.md docs/analysis/concepts/rjm/coverage-xml.md docs/analysis/concepts/rjm/exit-invalid-data.md docs/analysis/concepts/rjm/coverageinputerror.md docs/analysis/concepts/rjm/load-data.md docs/analysis/concepts/rjm/require-branch-data.md docs/analysis/concepts/rjm/require-statement-data.md docs/analysis/concepts/rjm/project-to-lines.md docs/analysis/concepts/rjm/coveragedata-lines.md docs/analysis/concepts/rjm/combine.md docs/analysis/concepts/rjm/git-status-porcelain.md docs/analysis/concepts/rjm/gh-auth-setup-git.md docs/analysis/concepts/rjm/exit-git-failed.md docs/analysis/concepts/rjm/git.md docs/analysis/concepts/rjm/dirty.md docs/analysis/concepts/rjm/count-ratchet.md docs/analysis/concepts/rjm/baseline-file.md docs/analysis/concepts/rjm/ruff-count-ratchet-py.md docs/analysis/concepts/rjm/taste-count-ratchet-py.md docs/analysis/concepts/rjm/git-environment.md docs/analysis/concepts/rjm/argv-budget-bytes.md docs/analysis/concepts/rjm/max-named-unmerged.md docs/analysis/concepts/rjm/deduplicate-index-entries.md docs/analysis/concepts/rjm/changed-files.md docs/analysis/concepts/rjm/chunk.md docs/analysis/concepts/rjm/read-baseline.md docs/analysis/concepts/rjm/max-baseline-slack.md docs/analysis/concepts/rjm/baseline-health.md docs/analysis/concepts/rjm/baseline-absent-at-ref.md docs/analysis/concepts/rjm/baseline-at-ref.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-254 covers 30 concepts spanning coverage combination (`combine_pin_coverage.py`), git commit automation (`commit_and_push.py`), and the core violation ratchet infrastructure (`count_ratchet.py` and downstream validation scripts):
  1. Coverage data manipulation concepts: `CoverageData.update`, `coverage xml`, `EXIT_INVALID_DATA`, `CoverageInputError`, `_load_data`, `_require_branch_data`, `_require_statement_data`, `_project_to_lines`, `CoverageData.lines()`, and `combine`.
  2. Git CLI automation concepts: `git status --porcelain`, `gh auth setup-git`, `EXIT_GIT_FAILED`, `_git` (shared helper across 5 validation/CI scripts), and `dirty`.
  3. Core ratchet concepts and non-regression gating: `count ratchet` (kind: gate) and `baseline file` (kind: artifact).
  4. Specific ratchet runners and invocation scripts: `ruff_count_ratchet.py` and `taste_count_ratchet.py`.
  5. Ratchet engine internals and constants: `git_environment`, `ARGV_BUDGET_BYTES`, `MAX_NAMED_UNMERGED`, `deduplicate_index_entries`, `changed_files` (across 4 scripts), `chunk`, `read_baseline` (across 2 scripts), `MAX_BASELINE_SLACK`, `baseline_health`, `baseline_absent_at_ref` (across 2 scripts), and `baseline_at_ref`.
- Concepts representing code-level functions, CLI flags, exit code constants, or internal constants were authored with `kind: name-only` per D-023.
- All 41 occurrences across 12 source files recorded in `facts/cc-rjm-254.txt` are faithfully mapped in the respective `Where used` tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (clean or defects: missing-path, other / doc-drift, orphan).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 12 source files and 12 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work-unit report.
