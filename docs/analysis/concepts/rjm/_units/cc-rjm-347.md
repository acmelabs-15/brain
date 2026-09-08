---
unit: cc-rjm-347
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-347

## Files assigned
- [x] sources/rjm/scripts/validation/check_test_tree_writes.py
- [x] sources/rjm/scripts/validation/check_tmp_worktrees.py
- [x] sources/rjm/scripts/validation/check_unreachable_code.py
- [x] sources/rjm/scripts/validation/check_worktree_recipes.py
- [x] sources/rjm/scripts/validation/validate_python_syntax.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-test-tree-writes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-tmp-worktrees-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-unreachable-code-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-worktree-recipes-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-python-syntax-py.md

## Outputs produced
- docs/analysis/concepts/rjm/is-sanctioned.md (982 bytes)
- docs/analysis/concepts/rjm/is-temp-routed.md (999 bytes)
- docs/analysis/concepts/rjm/is-root-rooted.md (990 bytes)
- docs/analysis/concepts/rjm/visit-call.md (913 bytes)
- docs/analysis/concepts/rjm/check-call.md (976 bytes)
- docs/analysis/concepts/rjm/check-method-write.md (1040 bytes)
- docs/analysis/concepts/rjm/check-open-write.md (993 bytes)
- docs/analysis/concepts/rjm/extract-open-mode.md (983 bytes)
- docs/analysis/concepts/rjm/check-shutil-write.md (1067 bytes)
- docs/analysis/concepts/rjm/check-test-tree-writes.md (1038 bytes)
- docs/analysis/concepts/rjm/validate-test-tree-writes.md (1023 bytes)
- docs/analysis/concepts/rjm/claude-rules-universal-md.md (982 bytes)
- docs/analysis/concepts/rjm/serena-memories-git-git-worktree-tmp-not-durable-md.md (1094 bytes)
- docs/analysis/concepts/rjm/default-min-free-gib.md (934 bytes)
- docs/analysis/concepts/rjm/default-temp-root.md (910 bytes)
- docs/analysis/concepts/rjm/bytes-per-gib.md (875 bytes)
- docs/analysis/concepts/rjm/rule-citation.md (1286 bytes)
- docs/analysis/concepts/rjm/tempworktree.md (891 bytes)
- docs/analysis/concepts/rjm/tempreport.md (897 bytes)
- docs/analysis/concepts/rjm/parse-worktree-list.md (972 bytes)
- docs/analysis/concepts/rjm/is-worktree-dir.md (938 bytes)
- docs/analysis/concepts/rjm/find-registered-temp-worktrees.md (1072 bytes)
- docs/analysis/concepts/rjm/list-registered.md (974 bytes)
- docs/analysis/concepts/rjm/scan-temp-root.md (953 bytes)
- docs/analysis/concepts/rjm/validate-tmp-worktrees.md (974 bytes)
- docs/analysis/concepts/rjm/terminators.md (964 bytes)
- docs/analysis/concepts/rjm/tracked-python-files.md (1151 bytes)
- docs/analysis/concepts/rjm/nested-statement-blocks.md (1028 bytes)
- docs/analysis/concepts/rjm/find-in-block.md (950 bytes)
- docs/analysis/concepts/rjm/find-unreachable-statements.md (1048 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-347.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/is-sanctioned.md docs/analysis/concepts/rjm/is-temp-routed.md docs/analysis/concepts/rjm/is-root-rooted.md docs/analysis/concepts/rjm/visit-call.md docs/analysis/concepts/rjm/check-call.md docs/analysis/concepts/rjm/check-method-write.md docs/analysis/concepts/rjm/check-open-write.md docs/analysis/concepts/rjm/extract-open-mode.md docs/analysis/concepts/rjm/check-shutil-write.md docs/analysis/concepts/rjm/check-test-tree-writes.md docs/analysis/concepts/rjm/validate-test-tree-writes.md docs/analysis/concepts/rjm/claude-rules-universal-md.md docs/analysis/concepts/rjm/serena-memories-git-git-worktree-tmp-not-durable-md.md docs/analysis/concepts/rjm/default-min-free-gib.md docs/analysis/concepts/rjm/default-temp-root.md docs/analysis/concepts/rjm/bytes-per-gib.md docs/analysis/concepts/rjm/rule-citation.md docs/analysis/concepts/rjm/tempworktree.md docs/analysis/concepts/rjm/tempreport.md docs/analysis/concepts/rjm/parse-worktree-list.md docs/analysis/concepts/rjm/is-worktree-dir.md docs/analysis/concepts/rjm/find-registered-temp-worktrees.md docs/analysis/concepts/rjm/list-registered.md docs/analysis/concepts/rjm/scan-temp-root.md docs/analysis/concepts/rjm/validate-tmp-worktrees.md docs/analysis/concepts/rjm/terminators.md docs/analysis/concepts/rjm/tracked-python-files.md docs/analysis/concepts/rjm/nested-statement-blocks.md docs/analysis/concepts/rjm/find-in-block.md docs/analysis/concepts/rjm/find-unreachable-statements.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-347 completes 30 concept cards across repository write hygiene, temporary worktree safety, disk floor monitoring, and unreachable code elimination:
  1. AST test working-tree write detection helpers (`is-sanctioned`, `is-temp-routed`, `is-root-rooted`, `visit-call`, `check-call`, `check-method-write`, `check-open-write`, `extract-open-mode`, `check-shutil-write`, `check-test-tree-writes`, `validate-test-tree-writes`) in `check_test_tree_writes.py`.
  2. Temporary worktree safety guards, disk floor thresholds, and porcelain/filesystem inspection helpers (`claude-rules-universal-md`, `serena-memories-git-git-worktree-tmp-not-durable-md`, `default-min-free-gib`, `default-temp-root`, `bytes-per-gib`, `rule-citation`, `tempworktree`, `tempreport`, `parse-worktree-list`, `is-worktree-dir`, `find-registered-temp-worktrees`, `list-registered`, `scan-temp-root`, `validate-tmp-worktrees`) across `check_tmp_worktrees.py` and `check_worktree_recipes.py`.
  3. Unreachable statement detection, AST terminators, and lexical block traversal (`terminators`, `tracked-python-files`, `nested-statement-blocks`, `find-in-block`, `find-unreachable-statements`) across `check_unreachable_code.py` and `validate_python_syntax.py`.
- Concepts representing function identifiers, method names, dataclasses, constants, or file paths are classified as `kind: name-only` per D-023.
- All 32 occurrences recorded in `facts/cc-rjm-347.txt` are faithfully mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: other` for `check_test_tree_writes.py`, `clean` for `check_tmp_worktrees.py`, `defects: exit-code-mismatch` for `check_worktree_recipes.py`, `out-of-scope` for excluded Serena memory paths, and `clean` for `check_unreachable_code.py` and `validate_python_syntax.py`).
- Byte-exact quotation verification via `quote-check.ts` succeeded with zero failures across all 30 concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
