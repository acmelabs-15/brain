---
unit: cc-rjm-366
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-366

## Files assigned
- [x] sources/rjm/scripts/validation/session_scope.py
- [x] sources/rjm/scripts/validation/sha_pinning.py
- [x] sources/rjm/scripts/validation/shell_text.py
- [x] sources/rjm/scripts/validation/skill_contract_test_baseline.txt
- [x] sources/rjm/scripts/validation/skill_frontmatter.py
- [x] docs/analysis/inventory/rjm/scripts-validation-session-scope-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-sha-pinning-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-shell-text-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-contract-test-baseline-txt.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-frontmatter-py.md

## Outputs produced
- docs/analysis/concepts/rjm/added-session-paths-in-index.md (895 bytes)
- docs/analysis/concepts/rjm/commit-object-parents.md (877 bytes)
- docs/analysis/concepts/rjm/head-parents.md (827 bytes)
- docs/analysis/concepts/rjm/pull-request-head-sha.md (869 bytes)
- docs/analysis/concepts/rjm/validation-head.md (870 bytes)
- docs/analysis/concepts/rjm/added-session-paths-in-head.md (896 bytes)
- docs/analysis/concepts/rjm/added-paths-from-name-status.md (907 bytes)
- docs/analysis/concepts/rjm/session-change-scope.md (893 bytes)
- docs/analysis/concepts/rjm/committed-session-validation-modes.md (959 bytes)
- docs/analysis/concepts/rjm/session-log-is-new.md (898 bytes)
- docs/analysis/concepts/rjm/version-tag-pattern.md (879 bytes)
- docs/analysis/concepts/rjm/local-action-pattern.md (874 bytes)
- docs/analysis/concepts/rjm/find-workflow-files.md (818 bytes)
- docs/analysis/concepts/rjm/separators.md (784 bytes)
- docs/analysis/concepts/rjm/ai-agents-build-and-env.md (1289 bytes)
- docs/analysis/concepts/rjm/ai-agents-debugging-playbook.md (1287 bytes)
- docs/analysis/concepts/rjm/ai-agents-diagnostics-toolkit.md (1252 bytes)
- docs/analysis/concepts/rjm/ai-agents-validation-and-qa.md (1227 bytes)
- docs/analysis/concepts/rjm/benchmark-models.md (1215 bytes)
- docs/analysis/concepts/rjm/memory-maintenance.md (1148 bytes)
- docs/analysis/concepts/rjm/valid-model-aliases.md (932 bytes)
- docs/analysis/concepts/rjm/dated-snapshot-pattern.md (919 bytes)
- docs/analysis/concepts/rjm/valid-tools.md (906 bytes)
- docs/analysis/concepts/rjm/xml-tag-pattern.md (873 bytes)
- docs/analysis/concepts/rjm/skill-file-pattern.md (915 bytes)
- docs/analysis/concepts/rjm/skill-tree-prefixes.md (886 bytes)
- docs/analysis/concepts/rjm/string-only-fields.md (901 bytes)
- docs/analysis/concepts/rjm/frontmatterresult.md (915 bytes)
- docs/analysis/concepts/rjm/filevalidationresult.md (907 bytes)
- docs/analysis/concepts/rjm/name-pattern.md (883 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-366.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/added-session-paths-in-index.md docs/analysis/concepts/rjm/commit-object-parents.md docs/analysis/concepts/rjm/head-parents.md docs/analysis/concepts/rjm/pull-request-head-sha.md docs/analysis/concepts/rjm/validation-head.md docs/analysis/concepts/rjm/added-session-paths-in-head.md docs/analysis/concepts/rjm/added-paths-from-name-status.md docs/analysis/concepts/rjm/session-change-scope.md docs/analysis/concepts/rjm/committed-session-validation-modes.md docs/analysis/concepts/rjm/session-log-is-new.md docs/analysis/concepts/rjm/version-tag-pattern.md docs/analysis/concepts/rjm/local-action-pattern.md docs/analysis/concepts/rjm/find-workflow-files.md docs/analysis/concepts/rjm/separators.md docs/analysis/concepts/rjm/ai-agents-build-and-env.md docs/analysis/concepts/rjm/ai-agents-debugging-playbook.md docs/analysis/concepts/rjm/ai-agents-diagnostics-toolkit.md docs/analysis/concepts/rjm/ai-agents-validation-and-qa.md docs/analysis/concepts/rjm/benchmark-models.md docs/analysis/concepts/rjm/memory-maintenance.md docs/analysis/concepts/rjm/valid-model-aliases.md docs/analysis/concepts/rjm/dated-snapshot-pattern.md docs/analysis/concepts/rjm/valid-tools.md docs/analysis/concepts/rjm/xml-tag-pattern.md docs/analysis/concepts/rjm/skill-file-pattern.md docs/analysis/concepts/rjm/skill-tree-prefixes.md docs/analysis/concepts/rjm/string-only-fields.md docs/analysis/concepts/rjm/frontmatterresult.md docs/analysis/concepts/rjm/filevalidationresult.md docs/analysis/concepts/rjm/name-pattern.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-366 completes 30 concept cards across Git session-scope validation, CI action SHA-pinning validation, shell parsing utilities, skill contract-test baselines, and skill YAML frontmatter schema verification:
  1. Git session-scope tracking helpers (`added-session-paths-in-index`, `commit-object-parents`, `head-parents`, `pull-request-head-sha`, `validation-head`, `added-session-paths-in-head`, `added-paths-from-name-status`, `session-change-scope`, `committed-session-validation-modes`, `session-log-is-new`) in `session_scope.py`.
  2. GitHub Actions SHA-pinning regexes and discovery utilities (`version-tag-pattern`, `local-action-pattern`, `find-workflow-files`) in `sha_pinning.py`.
  3. Shared shell statement separation constants (`separators`) in `shell_text.py`.
  4. Grandfathered skill contract-test ratchet baseline entries (`ai-agents-build-and-env`, `ai-agents-debugging-playbook`, `ai-agents-diagnostics-toolkit`, `ai-agents-validation-and-qa`, `benchmark-models`, `memory-maintenance`) in `skill_contract_test_baseline.txt`. `memory-maintenance` is explicitly marked `implementation_in_scope: false` per the rjm memory exclusion boundary (§1.2), while the other skills are marked `implementation_in_scope: true`.
  5. Skill frontmatter schema constants, patterns, and result dataclasses (`valid-model-aliases`, `dated-snapshot-pattern`, `valid-tools`, `xml-tag-pattern`, `skill-file-pattern`, `skill-tree-prefixes`, `string-only-fields`, `frontmatterresult`, `filevalidationresult`, `name-pattern`) in `skill_frontmatter.py`.
- Internal code identifiers, regular expressions, constants, and helper dataclasses are categorized as `kind: name-only` per D-023.
- All occurrences in `facts/cc-rjm-366.txt` (30 total) are mapped into the respective `Where used` tables.
- Defect statuses from citing inventory entries were propagated into `Implementation status`: `clean` for `session_scope.py`, `sha_pinning.py`, `shell_text.py`, and `skill_contract_test_baseline.txt`; `out-of-scope` for `memory-maintenance`; and `defects: exit-code-mismatch, doc-drift, cross-file-contradiction` for `skill_frontmatter.py`.
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 5 source files and 5 citing inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
