---
unit: cc-rjm-354
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-354

## Files assigned
- [x] sources/rjm/scripts/validation/citation_anchors.py
- [x] sources/rjm/scripts/validation/citation_head_state.py
- [x] sources/rjm/scripts/validation/command_size.py
- [x] sources/rjm/scripts/validation/doc_interpreter_baseline.json
- [x] sources/rjm/scripts/validation/doc_interpreter_subprocess.py
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] sources/rjm/scripts/validation/portability_floor.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_size.py
- [x] docs/analysis/inventory/rjm/scripts-validation-citation-anchors-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-citation-head-state-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-command-size-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-doc-interpreter-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-doc-interpreter-subprocess-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-size-py.md

## Outputs produced
- docs/analysis/concepts/rjm/same-line-segment.md (923 bytes)
- docs/analysis/concepts/rjm/hunk-header.md (886 bytes)
- docs/analysis/concepts/rjm/head-tracked-paths.md (845 bytes)
- docs/analysis/concepts/rjm/added-lines-since-base.md (847 bytes)
- docs/analysis/concepts/rjm/headreaderror.md (790 bytes)
- docs/analysis/concepts/rjm/headfilecache.md (770 bytes)
- docs/analysis/concepts/rjm/command-size-limit.md (810 bytes)
- docs/analysis/concepts/rjm/command-size-warning.md (809 bytes)
- docs/analysis/concepts/rjm/rationale-search-lines.md (1016 bytes)
- docs/analysis/concepts/rjm/rationale-min-chars.md (1000 bytes)
- docs/analysis/concepts/rjm/has-exception-rationale.md (865 bytes)
- docs/analysis/concepts/rjm/commandsizeresult.md (794 bytes)
- docs/analysis/concepts/rjm/check-command-size.md (858 bytes)
- docs/analysis/concepts/rjm/get-command-files.md (809 bytes)
- docs/analysis/concepts/rjm/files.md (1917 bytes)
- docs/analysis/concepts/rjm/subprocess-calls.md (892 bytes)
- docs/analysis/concepts/rjm/function-nodes.md (858 bytes)
- docs/analysis/concepts/rjm/is-sys-executable.md (858 bytes)
- docs/analysis/concepts/rjm/tracked-suffix.md (905 bytes)
- docs/analysis/concepts/rjm/path-expression.md (918 bytes)
- docs/analysis/concepts/rjm/executable-nodes.md (914 bytes)
- docs/analysis/concepts/rjm/called-local-functions.md (866 bytes)
- docs/analysis/concepts/rjm/reachable-scopes.md (915 bytes)
- docs/analysis/concepts/rjm/python-subprocess-command.md (957 bytes)
- docs/analysis/concepts/rjm/path-assignment.md (926 bytes)
- docs/analysis/concepts/rjm/scope-targets.md (912 bytes)
- docs/analysis/concepts/rjm/python-subprocess-targets.md (977 bytes)
- docs/analysis/concepts/rjm/sys-executable.md (892 bytes)
- docs/analysis/concepts/rjm/root-hygiene.md (850 bytes)
- docs/analysis/concepts/rjm/staged-dashes.md (851 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-354.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/same-line-segment.md docs/analysis/concepts/rjm/hunk-header.md docs/analysis/concepts/rjm/head-tracked-paths.md docs/analysis/concepts/rjm/added-lines-since-base.md docs/analysis/concepts/rjm/headreaderror.md docs/analysis/concepts/rjm/headfilecache.md docs/analysis/concepts/rjm/command-size-limit.md docs/analysis/concepts/rjm/command-size-warning.md docs/analysis/concepts/rjm/rationale-search-lines.md docs/analysis/concepts/rjm/rationale-min-chars.md docs/analysis/concepts/rjm/has-exception-rationale.md docs/analysis/concepts/rjm/commandsizeresult.md docs/analysis/concepts/rjm/check-command-size.md docs/analysis/concepts/rjm/get-command-files.md docs/analysis/concepts/rjm/files.md docs/analysis/concepts/rjm/subprocess-calls.md docs/analysis/concepts/rjm/function-nodes.md docs/analysis/concepts/rjm/is-sys-executable.md docs/analysis/concepts/rjm/tracked-suffix.md docs/analysis/concepts/rjm/path-expression.md docs/analysis/concepts/rjm/executable-nodes.md docs/analysis/concepts/rjm/called-local-functions.md docs/analysis/concepts/rjm/reachable-scopes.md docs/analysis/concepts/rjm/python-subprocess-command.md docs/analysis/concepts/rjm/path-assignment.md docs/analysis/concepts/rjm/scope-targets.md docs/analysis/concepts/rjm/python-subprocess-targets.md docs/analysis/concepts/rjm/sys-executable.md docs/analysis/concepts/rjm/root-hygiene.md docs/analysis/concepts/rjm/staged-dashes.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-354 completes 30 concept cards spanning citation analysis helpers, git head state readers, command/skill size validation rules and exception comments, portability baseline mappings, doc-interpreter AST subprocess tracking, and git hook policy subcommands:
  1. Citation anchor segmentation and git HEAD state inspection (`same-line-segment`, `hunk-header`, `head-tracked-paths`, `added-lines-since-base`, `headreaderror`, `headfilecache`) in `citation_anchors.py` and `citation_head_state.py`.
  2. Command size ceiling and exception rationale enforcement (`command-size-limit`, `command-size-warning`, `rationale-search-lines`, `rationale-min-chars`, `has-exception-rationale`, `commandsizeresult`, `check-command-size`, `get-command-files`) in `command_size.py` and `skill_size.py`.
  3. Portability ratchet and baseline count schema key (`files`) across `doc_interpreter_baseline.json`, `portability_floor.py`, `skill_md_exec_portability_baseline.json`, `skill_md_portability_baseline.json`, and `skill_portability_baseline.json`.
  4. AST subprocess inspection for tracked Python scripts (`subprocess-calls`, `function-nodes`, `is-sys-executable`, `tracked-suffix`, `path-expression`, `executable-nodes`, `called-local-functions`, `reachable-scopes`, `python-subprocess-command`, `path-assignment`, `scope-targets`, `python-subprocess-targets`, `sys-executable`) in `doc_interpreter_subprocess.py`.
  5. Git hook policy subcommands for pre-commit checks (`root-hygiene`, `staged-dashes`) in `git_hook_policy.py`.
- Concepts representing functions, AST predicates, regular expressions, constants, exception classes, JSON keys, or CLI subcommands are classified as `kind: name-only` per D-023.
- All 38 occurrences recorded in `facts/cc-rjm-354.txt` are mapped in the Where used tables.
- Defect status across all 11 citing inventory cards is `none`, yielding `Implementation status: clean` across all 30 cards.
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~24,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
