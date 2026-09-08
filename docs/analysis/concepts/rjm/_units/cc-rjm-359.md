---
unit: cc-rjm-359
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-359

## Files assigned
- [x] sources/rjm/scripts/validation/portability_baseline.py
- [x] sources/rjm/scripts/validation/portability_common.py
- [x] sources/rjm/scripts/validation/portability_floor.py
- [x] sources/rjm/scripts/validation/portability_git.py
- [x] sources/rjm/scripts/validation/pr_commit_count.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] sources/rjm/scripts/validation/skill_md_portability_baseline.json
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-portability-git-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-commit-count-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md

## Outputs produced
- docs/analysis/concepts/rjm/refuse-dropped-entries.md (854 bytes)
- docs/analysis/concepts/rjm/git-pointer-vars.md (812 bytes)
- docs/analysis/concepts/rjm/refuse-diff-suppressed-baseline.md (927 bytes)
- docs/analysis/concepts/rjm/baseline-size-ceiling.md (837 bytes)
- docs/analysis/concepts/rjm/skill-portability-validators.md (915 bytes)
- docs/analysis/concepts/rjm/portability-ratchet.md (1649 bytes)
- docs/analysis/concepts/rjm/git-lines.md (829 bytes)
- docs/analysis/concepts/rjm/tracked-coverage-by-root.md (832 bytes)
- docs/analysis/concepts/rjm/refuse-partial-worktree.md (909 bytes)
- docs/analysis/concepts/rjm/refuse-uncovered-scan.md (916 bytes)
- docs/analysis/concepts/rjm/marker-files.md (1659 bytes)
- docs/analysis/concepts/rjm/drift-files.md (1231 bytes)
- docs/analysis/concepts/rjm/coerce-counts.md (845 bytes)
- docs/analysis/concepts/rjm/unguarded-sections.md (850 bytes)
- docs/analysis/concepts/rjm/sections-from-text.md (848 bytes)
- docs/analysis/concepts/rjm/committed-sections.md (871 bytes)
- docs/analysis/concepts/rjm/strongest.md (854 bytes)
- docs/analysis/concepts/rjm/treeentry.md (772 bytes)
- docs/analysis/concepts/rjm/regular-file-modes.md (830 bytes)
- docs/analysis/concepts/rjm/git-timeout-return-code.md (814 bytes)
- docs/analysis/concepts/rjm/git-timeout-problem.md (805 bytes)
- docs/analysis/concepts/rjm/isolated-git-env.md (800 bytes)
- docs/analysis/concepts/rjm/isolated-git-command.md (865 bytes)
- docs/analysis/concepts/rjm/was-recorded.md (776 bytes)
- docs/analysis/concepts/rjm/tree-entries.md (773 bytes)
- docs/analysis/concepts/rjm/tracked-blob.md (835 bytes)
- docs/analysis/concepts/rjm/committed-blob.md (834 bytes)
- docs/analysis/concepts/rjm/warning-threshold.md (790 bytes)
- docs/analysis/concepts/rjm/alert-threshold.md (791 bytes)
- docs/analysis/concepts/rjm/countresult.md (761 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-359.md (this file, 7315 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/refuse-dropped-entries.md docs/analysis/concepts/rjm/git-pointer-vars.md docs/analysis/concepts/rjm/refuse-diff-suppressed-baseline.md docs/analysis/concepts/rjm/baseline-size-ceiling.md docs/analysis/concepts/rjm/skill-portability-validators.md docs/analysis/concepts/rjm/portability-ratchet.md docs/analysis/concepts/rjm/git-lines.md docs/analysis/concepts/rjm/tracked-coverage-by-root.md docs/analysis/concepts/rjm/refuse-partial-worktree.md docs/analysis/concepts/rjm/refuse-uncovered-scan.md docs/analysis/concepts/rjm/marker-files.md docs/analysis/concepts/rjm/drift-files.md docs/analysis/concepts/rjm/coerce-counts.md docs/analysis/concepts/rjm/unguarded-sections.md docs/analysis/concepts/rjm/sections-from-text.md docs/analysis/concepts/rjm/committed-sections.md docs/analysis/concepts/rjm/strongest.md docs/analysis/concepts/rjm/treeentry.md docs/analysis/concepts/rjm/regular-file-modes.md docs/analysis/concepts/rjm/git-timeout-return-code.md docs/analysis/concepts/rjm/git-timeout-problem.md docs/analysis/concepts/rjm/isolated-git-env.md docs/analysis/concepts/rjm/isolated-git-command.md docs/analysis/concepts/rjm/was-recorded.md docs/analysis/concepts/rjm/tree-entries.md docs/analysis/concepts/rjm/tracked-blob.md docs/analysis/concepts/rjm/committed-blob.md docs/analysis/concepts/rjm/warning-threshold.md docs/analysis/concepts/rjm/alert-threshold.md docs/analysis/concepts/rjm/countresult.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-359 completes 30 concept cards spanning portability baseline management, git plumbing verification for ratchet integrity, predecessor floor recovery, and advisory pull request commit count gates:
  1. Portability baseline write-side safeguards and validation functions (`refuse-dropped-entries`, `git-pointer-vars`, `refuse-diff-suppressed-baseline`, `baseline-size-ceiling`) in `portability_baseline.py`.
  2. Portability ratchet shared infrastructure, worktree verification, and scanner coverage checking (`skill-portability-validators`, `portability-ratchet`, `git-lines`, `tracked-coverage-by-root`, `refuse-partial-worktree`, `refuse-uncovered-scan`) across `portability_common.py` and `portability_floor.py`.
  3. Predecessor floor recovery and counted baseline schema sections (`marker-files`, `drift-files`, `coerce-counts`, `unguarded-sections`, `sections-from-text`, `committed-sections`, `strongest`) across `portability_floor.py`, `skill_md_exec_portability_baseline.json`, and `skill_md_portability_baseline.json`.
  4. Git plumbing isolation and object recovery (`treeentry`, `regular-file-modes`, `git-timeout-return-code`, `git-timeout-problem`, `isolated-git-env`, `isolated-git-command`, `was-recorded`, `tree-entries`, `tracked-blob`, `committed-blob`) in `portability_git.py`.
  5. Advisory PR commit-count gating thresholds and result types (`warning-threshold`, `alert-threshold`, `countresult`) in `pr_commit_count.py`.
- Concepts representing functions, constants, type aliases, JSON keys, docstring headings, or regexes are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`portability-ratchet`).
- All 37 occurrences recorded in `facts/cc-rjm-359.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were clean across all 7 citing inventory entries (`Implementation status: clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
