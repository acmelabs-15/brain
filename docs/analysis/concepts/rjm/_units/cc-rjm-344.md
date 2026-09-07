---
unit: cc-rjm-344
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-344

## Files assigned
- [x] sources/rjm/scripts/validation/check_skill_memory_references.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] sources/rjm/scripts/validation/check_skill_resolver_anchoring.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/push_lock_resolver.py
- [x] sources/rjm/scripts/validation/shell_text.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-memory-references-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-resolver-anchoring-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-vendor-portability-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-push-lock-resolver-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-shell-text-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md

## Outputs produced
- docs/analysis/concepts/rjm/extract-references.md (926 bytes)
- docs/analysis/concepts/rjm/resolves.md (870 bytes)
- docs/analysis/concepts/rjm/index-by-basename.md (905 bytes)
- docs/analysis/concepts/rjm/collect-findings.md (869 bytes)
- docs/analysis/concepts/rjm/vendor-portability-ratchet.md (1619 bytes)
- docs/analysis/concepts/rjm/vendored-plugin-installs.md (985 bytes)
- docs/analysis/concepts/rjm/skill-portability-baseline-json.md (949 bytes)
- docs/analysis/concepts/rjm/project-root.md (843 bytes)
- docs/analysis/concepts/rjm/validation-package-sentinel.md (906 bytes)
- docs/analysis/concepts/rjm/split-claude-patterns.md (911 bytes)
- docs/analysis/concepts/rjm/script-suffixes.md (834 bytes)
- docs/analysis/concepts/rjm/fstring-token-types.md (873 bytes)
- docs/analysis/concepts/rjm/python-docstring-nodes.md (859 bytes)
- docs/analysis/concepts/rjm/prose-kwargs.md (1005 bytes)
- docs/analysis/concepts/rjm/python-docstring-spans.md (911 bytes)
- docs/analysis/concepts/rjm/python-prose-spans.md (880 bytes)
- docs/analysis/concepts/rjm/span-contains.md (908 bytes)
- docs/analysis/concepts/rjm/strip-hash-comments.md (1195 bytes)
- docs/analysis/concepts/rjm/is-skippable-string-token.md (919 bytes)
- docs/analysis/concepts/rjm/runtime-text.md (868 bytes)
- docs/analysis/concepts/rjm/scan-skill-scripts.md (877 bytes)
- docs/analysis/concepts/rjm/script-regression-message.md (922 bytes)
- docs/analysis/concepts/rjm/print-portability-results.md (871 bytes)
- docs/analysis/concepts/rjm/script-path-resolver.md (1454 bytes)
- docs/analysis/concepts/rjm/candidate-roots.md (1013 bytes)
- docs/analysis/concepts/rjm/git-rev-parse-show-toplevel.md (969 bytes)
- docs/analysis/concepts/rjm/check-skill-md-exec-portability-py.md (1081 bytes)
- docs/analysis/concepts/rjm/resolve-pr-review-config.md (922 bytes)
- docs/analysis/concepts/rjm/resolver-header.md (845 bytes)
- docs/analysis/concepts/rjm/bare-relative-root.md (874 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-344.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/extract-references.md docs/analysis/concepts/rjm/resolves.md docs/analysis/concepts/rjm/index-by-basename.md docs/analysis/concepts/rjm/collect-findings.md docs/analysis/concepts/rjm/vendor-portability-ratchet.md docs/analysis/concepts/rjm/vendored-plugin-installs.md docs/analysis/concepts/rjm/skill-portability-baseline-json.md docs/analysis/concepts/rjm/project-root.md docs/analysis/concepts/rjm/validation-package-sentinel.md docs/analysis/concepts/rjm/split-claude-patterns.md docs/analysis/concepts/rjm/script-suffixes.md docs/analysis/concepts/rjm/fstring-token-types.md docs/analysis/concepts/rjm/python-docstring-nodes.md docs/analysis/concepts/rjm/prose-kwargs.md docs/analysis/concepts/rjm/python-docstring-spans.md docs/analysis/concepts/rjm/python-prose-spans.md docs/analysis/concepts/rjm/span-contains.md docs/analysis/concepts/rjm/strip-hash-comments.md docs/analysis/concepts/rjm/is-skippable-string-token.md docs/analysis/concepts/rjm/runtime-text.md docs/analysis/concepts/rjm/scan-skill-scripts.md docs/analysis/concepts/rjm/script-regression-message.md docs/analysis/concepts/rjm/print-portability-results.md docs/analysis/concepts/rjm/script-path-resolver.md docs/analysis/concepts/rjm/candidate-roots.md docs/analysis/concepts/rjm/git-rev-parse-show-toplevel.md docs/analysis/concepts/rjm/check-skill-md-exec-portability-py.md docs/analysis/concepts/rjm/resolve-pr-review-config.md docs/analysis/concepts/rjm/resolver-header.md docs/analysis/concepts/rjm/bare-relative-root.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-344 completes 30 concept cards spanning memory reference resolution validation, vendor portability ratcheting for skill scripts, and resolver anchoring verification:
  1. Serena memory reference extraction and validation helpers (`extract-references`, `resolves`, `index-by-basename`, `collect-findings`) in `check_skill_memory_references.py`.
  2. Vendor-portability ratchet architecture (`vendor-portability-ratchet`, `vendored-plugin-installs`, `skill-portability-baseline-json`, and associated AST/token scanning constants and functions `project-root`, `validation-package-sentinel`, `split-claude-patterns`, `script-suffixes`, `fstring-token-types`, `python-docstring-nodes`, `prose-kwargs`, `python-docstring-spans`, `python-prose-spans`, `span-contains`, `strip-hash-comments`, `is-skippable-string-token`, `runtime-text`, `scan-skill-scripts`, `script-regression-message`, `print-portability-results`) across `check_skill_portability.py`, `check_vendor_portability.py`, `push_lock_resolver.py`, and `shell_text.py`.
  3. Script-path resolver patterns and anchoring guards (`script-path-resolver`, `candidate-roots`, `git-rev-parse-show-toplevel`, `check-skill-md-exec-portability-py`, `resolve-pr-review-config`, `resolver-header`, `bare-relative-root`) in `check_skill_resolver_anchoring.py` and `skill_md_exec_portability_baseline.json`.
- Concepts representing functions, regex patterns, constants, file names, or commands are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`vendor-portability-ratchet`) and `kind: pattern` (`script-path-resolver`).
- All 34 occurrences recorded in `facts/cc-rjm-344.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: doc-drift`, `defects: doc-drift, orphan`, `defects: orphan`, or `clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~22,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
