---
unit: cc-rjm-346
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-346

## Files assigned
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] sources/rjm/scripts/validation/check_test_tree_writes.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-test-tree-writes-py.md

## Outputs produced
- docs/analysis/concepts/rjm/all-subprocess-calls.md (944 bytes)
- docs/analysis/concepts/rjm/binding.md (864 bytes)
- docs/analysis/concepts/rjm/bindingstate.md (883 bytes)
- docs/analysis/concepts/rjm/contextlib-module.md (883 bytes)
- docs/analysis/concepts/rjm/contextlib-nullcontext.md (907 bytes)
- docs/analysis/concepts/rjm/keyword-value.md (908 bytes)
- docs/analysis/concepts/rjm/is-true-literal.md (877 bytes)
- docs/analysis/concepts/rjm/is-utf8-literal.md (913 bytes)
- docs/analysis/concepts/rjm/is-subprocess-pipe.md (900 bytes)
- docs/analysis/concepts/rjm/subprocess-call-names.md (931 bytes)
- docs/analysis/concepts/rjm/target-names.md (897 bytes)
- docs/analysis/concepts/rjm/target-value-pairs.md (923 bytes)
- docs/analysis/concepts/rjm/assignment-pairs.md (937 bytes)
- docs/analysis/concepts/rjm/resolve-value-binding.md (910 bytes)
- docs/analysis/concepts/rjm/is-flagged.md (888 bytes)
- docs/analysis/concepts/rjm/subprocesscallvisitor.md (948 bytes)
- docs/analysis/concepts/rjm/suppression-comment.md (930 bytes)
- docs/analysis/concepts/rjm/find-violations.md (976 bytes)
- docs/analysis/concepts/rjm/collect-sources.md (930 bytes)
- docs/analysis/concepts/rjm/find-all-violations.md (926 bytes)
- docs/analysis/concepts/rjm/validate-subprocess-encoding.md (979 bytes)
- docs/analysis/concepts/rjm/tmp-path.md (929 bytes)
- docs/analysis/concepts/rjm/pytest-tmp.md (896 bytes)
- docs/analysis/concepts/rjm/root-bindings.md (954 bytes)
- docs/analysis/concepts/rjm/sanctioned-suffixes.md (893 bytes)
- docs/analysis/concepts/rjm/write-methods.md (868 bytes)
- docs/analysis/concepts/rjm/shutil-write-funcs.md (899 bytes)
- docs/analysis/concepts/rjm/temp-names.md (882 bytes)
- docs/analysis/concepts/rjm/writedetector.md (887 bytes)
- docs/analysis/concepts/rjm/names-in.md (869 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-346.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/all-subprocess-calls.md docs/analysis/concepts/rjm/binding.md docs/analysis/concepts/rjm/bindingstate.md docs/analysis/concepts/rjm/contextlib-module.md docs/analysis/concepts/rjm/contextlib-nullcontext.md docs/analysis/concepts/rjm/keyword-value.md docs/analysis/concepts/rjm/is-true-literal.md docs/analysis/concepts/rjm/is-utf8-literal.md docs/analysis/concepts/rjm/is-subprocess-pipe.md docs/analysis/concepts/rjm/subprocess-call-names.md docs/analysis/concepts/rjm/target-names.md docs/analysis/concepts/rjm/target-value-pairs.md docs/analysis/concepts/rjm/assignment-pairs.md docs/analysis/concepts/rjm/resolve-value-binding.md docs/analysis/concepts/rjm/is-flagged.md docs/analysis/concepts/rjm/subprocesscallvisitor.md docs/analysis/concepts/rjm/suppression-comment.md docs/analysis/concepts/rjm/find-violations.md docs/analysis/concepts/rjm/collect-sources.md docs/analysis/concepts/rjm/find-all-violations.md docs/analysis/concepts/rjm/validate-subprocess-encoding.md docs/analysis/concepts/rjm/tmp-path.md docs/analysis/concepts/rjm/pytest-tmp.md docs/analysis/concepts/rjm/root-bindings.md docs/analysis/concepts/rjm/sanctioned-suffixes.md docs/analysis/concepts/rjm/write-methods.md docs/analysis/concepts/rjm/shutil-write-funcs.md docs/analysis/concepts/rjm/temp-names.md docs/analysis/concepts/rjm/writedetector.md docs/analysis/concepts/rjm/names-in.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-346 completes 30 concept cards across two validation scripts in rjm:
  1. Subprocess UTF-8 encoding validation gate AST scanning and alias-tracking machinery (`check_subprocess_encoding.py`):
     - Function set unions and type aliases: `_ALL_SUBPROCESS_CALLS`, `_Binding`, `_BindingState`.
     - Contextlib tracking sentinels: `_CONTEXTLIB_MODULE`, `_CONTEXTLIB_NULLCONTEXT`.
     - AST expression and literal inspection helpers: `_keyword_value`, `_is_true_literal`, `_is_utf8_literal`, `_is_subprocess_pipe`, `_subprocess_call_names`, `_target_names`, `_target_value_pairs`, `_assignment_pairs`, `_resolve_value_binding`, `_is_flagged`.
     - Static visitor and comment suppression: `_SubprocessCallVisitor`, `_SUPPRESSION_COMMENT`.
     - Scanner and validation entry points: `find_violations`, `_collect_sources`, `find_all_violations`, `validate_subprocess_encoding`.
  2. Test working-tree write detection gate AST scanning machinery (`check_test_tree_writes.py`):
     - Whitelisted fixture and directory path conventions: `tmp_path`, `.pytest_tmp`.
     - Target matching and AST operation constants: `_ROOT_BINDINGS`, `_SANCTIONED_SUFFIXES`, `_WRITE_METHODS`, `_SHUTIL_WRITE_FUNCS`, `_TEMP_NAMES`.
     - AST write detection visitor and expression helpers: `_WriteDetector`, `_names_in`.
- All 30 concepts represent internal constants, functions, classes, type aliases, or path conventions and are classified as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-346.txt` are mapped in the `Where used` tables.
- Defect status for `check_subprocess_encoding.py` is clean (`Implementation status: clean`); defect status for `check_test_tree_writes.py` reflects its inventory card findings (`Implementation status: defects: other`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~21,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
