---
unit: cc-rjm-325
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-325

## Files assigned
- [x] sources/rjm/scripts/validate_workflows.py
- [x] sources/rjm/scripts/validate_workspace_budget.py
- [x] sources/rjm/scripts/validation/active_plan_closeout.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/scripts-validate-workflows-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-workspace-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-active-plan-closeout-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-workflow-size.md (1013 bytes)
- docs/analysis/concepts/rjm/validate-concurrency.md (972 bytes)
- docs/analysis/concepts/rjm/validate-permissions.md (1024 bytes)
- docs/analysis/concepts/rjm/safe-expression-heads.md (1006 bytes)
- docs/analysis/concepts/rjm/derived-expression-prefixes.md (1026 bytes)
- docs/analysis/concepts/rjm/context-reference.md (979 bytes)
- docs/analysis/concepts/rjm/classify-expression.md (1030 bytes)
- docs/analysis/concepts/rjm/validate-expression-injection.md (1063 bytes)
- docs/analysis/concepts/rjm/check-job-expressions.md (1038 bytes)
- docs/analysis/concepts/rjm/unquoted-hash-scalar.md (996 bytes)
- docs/analysis/concepts/rjm/validate-name-truncation.md (987 bytes)
- docs/analysis/concepts/rjm/get-changed-workflows.md (978 bytes)
- docs/analysis/concepts/rjm/run-act.md (892 bytes)
- docs/analysis/concepts/rjm/print-results.md (1216 bytes)
- docs/analysis/concepts/rjm/total-budget-bytes.md (949 bytes)
- docs/analysis/concepts/rjm/per-file-budget-bytes.md (949 bytes)
- docs/analysis/concepts/rjm/workspace-files.md (943 bytes)
- docs/analysis/concepts/rjm/file-ceiling-bytes.md (964 bytes)
- docs/analysis/concepts/rjm/filemetric.md (891 bytes)
- docs/analysis/concepts/rjm/budgetresult.md (916 bytes)
- docs/analysis/concepts/rjm/measure-workspace-files.md (970 bytes)
- docs/analysis/concepts/rjm/validate-budget.md (944 bytes)
- docs/analysis/concepts/rjm/default-repo.md (933 bytes)
- docs/analysis/concepts/rjm/terminal-states.md (965 bytes)
- docs/analysis/concepts/rjm/nonterminal-states.md (979 bytes)
- docs/analysis/concepts/rjm/known-states.md (958 bytes)
- docs/analysis/concepts/rjm/issue-ref-re.md (918 bytes)
- docs/analysis/concepts/rjm/activeplanwarning.md (967 bytes)
- docs/analysis/concepts/rjm/issuestatelookup.md (967 bytes)
- docs/analysis/concepts/rjm/active-plan-warnings.md (981 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-325.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-workflow-size.md docs/analysis/concepts/rjm/validate-concurrency.md docs/analysis/concepts/rjm/validate-permissions.md docs/analysis/concepts/rjm/safe-expression-heads.md docs/analysis/concepts/rjm/derived-expression-prefixes.md docs/analysis/concepts/rjm/context-reference.md docs/analysis/concepts/rjm/classify-expression.md docs/analysis/concepts/rjm/validate-expression-injection.md docs/analysis/concepts/rjm/check-job-expressions.md docs/analysis/concepts/rjm/unquoted-hash-scalar.md docs/analysis/concepts/rjm/validate-name-truncation.md docs/analysis/concepts/rjm/get-changed-workflows.md docs/analysis/concepts/rjm/run-act.md docs/analysis/concepts/rjm/print-results.md docs/analysis/concepts/rjm/total-budget-bytes.md docs/analysis/concepts/rjm/per-file-budget-bytes.md docs/analysis/concepts/rjm/workspace-files.md docs/analysis/concepts/rjm/file-ceiling-bytes.md docs/analysis/concepts/rjm/filemetric.md docs/analysis/concepts/rjm/budgetresult.md docs/analysis/concepts/rjm/measure-workspace-files.md docs/analysis/concepts/rjm/validate-budget.md docs/analysis/concepts/rjm/default-repo.md docs/analysis/concepts/rjm/terminal-states.md docs/analysis/concepts/rjm/nonterminal-states.md docs/analysis/concepts/rjm/known-states.md docs/analysis/concepts/rjm/issue-ref-re.md docs/analysis/concepts/rjm/activeplanwarning.md docs/analysis/concepts/rjm/issuestatelookup.md docs/analysis/concepts/rjm/active-plan-warnings.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-325 completes 30 concept cards (31 total occurrences) spanning four validation scripts:
  1. GitHub Actions workflow security, structure, and AST validation (`scripts/validate_workflows.py`): `validate_workflow_size`, `validate_concurrency`, `validate_permissions`, `_SAFE_EXPRESSION_HEADS`, `_DERIVED_EXPRESSION_PREFIXES`, `_CONTEXT_REFERENCE`, `_classify_expression`, `validate_expression_injection`, `_check_job_expressions`, `_UNQUOTED_HASH_SCALAR`, `validate_name_truncation`, `get_changed_workflows`, `run_act`, and `print_results`.
  2. Workspace context file budget enforcement (`scripts/validate_workspace_budget.py`): `TOTAL_BUDGET_BYTES`, `PER_FILE_BUDGET_BYTES`, `WORKSPACE_FILES`, `FILE_CEILING_BYTES`, `FileMetric`, `BudgetResult`, `measure_workspace_files`, and `validate_budget`.
  3. Execution plan closeout and tracking issue state auditing (`scripts/validation/active_plan_closeout.py`): `DEFAULT_REPO`, `TERMINAL_STATES`, `NONTERMINAL_STATES`, `KNOWN_STATES`, `ISSUE_REF_RE`, `ActivePlanWarning`, `IssueStateLookup`, and `active_plan_warnings`.
  4. Pull request description and change-claim validation (`scripts/validation/pr_description.py`), contributing the second occurrence of `print_results`.
- All 30 concepts in this unit are function identifiers, methods, dataclasses, regex patterns, or constants implemented within validation tooling rather than autonomous lifecycle concepts, and are correctly classified as `kind: name-only` per D-023 with `(used, not defined)` definitions citing byte-exact source lines.
- Defect statuses from citing inventory entries were propagated to each card's `Implementation status`: `defects: orphan` for `validate_workspace_budget.py` entries; `clean in scripts/validate_workflows.py; defects: doc-drift in scripts/validation/pr_description.py` for `print_results`; and `clean` for all other cards.
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
