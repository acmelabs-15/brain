---
unit: cc-rjm-357
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-357

## Files assigned
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] sources/rjm/scripts/validation/instruction_budget_constants.py
- [x] sources/rjm/scripts/validation/instruction_budget_globs.py
- [x] sources/rjm/scripts/validation/instruction_budget_types.py
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-constants-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-globs-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-types-py.md

## Outputs produced
- docs/analysis/concepts/rjm/load-dispatch-groups.md (1314 bytes)
- docs/analysis/concepts/rjm/expand-dispatch-group.md (1285 bytes)
- docs/analysis/concepts/rjm/parse-settings.md (1238 bytes)
- docs/analysis/concepts/rjm/parse-copilot-hooks.md (1305 bytes)
- docs/analysis/concepts/rjm/expand-copilot-manifest.md (1278 bytes)
- docs/analysis/concepts/rjm/validate-script-exists.md (1246 bytes)
- docs/analysis/concepts/rjm/validate-hook-type-known.md (1300 bytes)
- docs/analysis/concepts/rjm/exit-doc-pattern.md (1268 bytes)
- docs/analysis/concepts/rjm/validate-exit-code-docs.md (1280 bytes)
- docs/analysis/concepts/rjm/validate-duplicate-entries.md (1336 bytes)
- docs/analysis/concepts/rjm/read-copilot-surface.md (1310 bytes)
- docs/analysis/concepts/rjm/validate-all.md (1265 bytes)
- docs/analysis/concepts/rjm/instructions-subdir.md (1286 bytes)
- docs/analysis/concepts/rjm/instruction-glob.md (1262 bytes)
- docs/analysis/concepts/rjm/default-reserve-bytes.md (1284 bytes)
- docs/analysis/concepts/rjm/default-ceilings-bytes.md (1332 bytes)
- docs/analysis/concepts/rjm/unsupportedapplytoerror.md (1321 bytes)
- docs/analysis/concepts/rjm/uniquekeysafeloader.md (1307 bytes)
- docs/analysis/concepts/rjm/construct-unique-mapping.md (1297 bytes)
- docs/analysis/concepts/rjm/all-files-forms.md (1280 bytes)
- docs/analysis/concepts/rjm/probe-paths.md (1307 bytes)
- docs/analysis/concepts/rjm/split-glob-aware.md (1349 bytes)
- docs/analysis/concepts/rjm/vscode-effective-glob.md (1331 bytes)
- docs/analysis/concepts/rjm/stars-to-regexp.md (1341 bytes)
- docs/analysis/concepts/rjm/segment-to-regex.md (1300 bytes)
- docs/analysis/concepts/rjm/parse-regexp.md (1264 bytes)
- docs/analysis/concepts/rjm/iter-applyto-globs.md (1322 bytes)
- docs/analysis/concepts/rjm/parse-applyto.md (1301 bytes)
- docs/analysis/concepts/rjm/is-language-universal.md (1376 bytes)
- docs/analysis/concepts/rjm/instructionfile.md (1277 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-357.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/load-dispatch-groups.md docs/analysis/concepts/rjm/expand-dispatch-group.md docs/analysis/concepts/rjm/parse-settings.md docs/analysis/concepts/rjm/parse-copilot-hooks.md docs/analysis/concepts/rjm/expand-copilot-manifest.md docs/analysis/concepts/rjm/validate-script-exists.md docs/analysis/concepts/rjm/validate-hook-type-known.md docs/analysis/concepts/rjm/exit-doc-pattern.md docs/analysis/concepts/rjm/validate-exit-code-docs.md docs/analysis/concepts/rjm/validate-duplicate-entries.md docs/analysis/concepts/rjm/read-copilot-surface.md docs/analysis/concepts/rjm/validate-all.md docs/analysis/concepts/rjm/instructions-subdir.md docs/analysis/concepts/rjm/instruction-glob.md docs/analysis/concepts/rjm/default-reserve-bytes.md docs/analysis/concepts/rjm/default-ceilings-bytes.md docs/analysis/concepts/rjm/unsupportedapplytoerror.md docs/analysis/concepts/rjm/uniquekeysafeloader.md docs/analysis/concepts/rjm/construct-unique-mapping.md docs/analysis/concepts/rjm/all-files-forms.md docs/analysis/concepts/rjm/probe-paths.md docs/analysis/concepts/rjm/split-glob-aware.md docs/analysis/concepts/rjm/vscode-effective-glob.md docs/analysis/concepts/rjm/stars-to-regexp.md docs/analysis/concepts/rjm/segment-to-regex.md docs/analysis/concepts/rjm/parse-regexp.md docs/analysis/concepts/rjm/iter-applyto-globs.md docs/analysis/concepts/rjm/parse-applyto.md docs/analysis/concepts/rjm/is-language-universal.md docs/analysis/concepts/rjm/instructionfile.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-357 completes 30 concept cards spanning hook contract validation, instruction budget constants, instruction budget glob parsing and universality determination, and instruction budget value objects:
  1. Claude Code and GitHub Copilot hook contract validation routines and helpers (`load-dispatch-groups`, `expand-dispatch-group`, `parse-settings`, `parse-copilot-hooks`, `expand-copilot-manifest`, `validate-script-exists`, `validate-hook-type-known`, `exit-doc-pattern`, `validate-exit-code-docs`, `validate-duplicate-entries`, `read-copilot-surface`, `validate-all`) in `hook_contracts.py`.
  2. Instruction budget directory, pattern, reserve, and extension byte ceiling constants (`instructions-subdir`, `instruction-glob`, `default-reserve-bytes`, `default-ceilings-bytes`) in `instruction_budget_constants.py`.
  3. Fail-closed YAML frontmatter extraction, probe path generation, glob splitting, effective glob normalization, VS Code glob-to-regex transpilation, and multi-axis language universality verification (`unsupportedapplytoerror`, `uniquekeysafeloader`, `construct-unique-mapping`, `all-files-forms`, `probe-paths`, `split-glob-aware`, `vscode-effective-glob`, `stars-to-regexp`, `segment-to-regex`, `parse-regexp`, `iter-applyto-globs`, `parse-applyto`, `is-language-universal`) in `instruction_budget_globs.py`.
  4. Strongly-typed frozen value object dataclass for measured instruction files (`instructionfile`) in `instruction_budget_types.py`.
- Concepts representing functions, regex patterns, constants, exception types, or dataclass types are classified as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-357.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: doc-drift` for `hook_contracts.py` concepts; `clean` for `instruction_budget_constants.py`, `instruction_budget_globs.py`, and `instruction_budget_types.py` concepts).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~10,000 tokens across 30 concept cards and 1 unit report.
