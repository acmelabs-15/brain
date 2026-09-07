---
unit: cc-rjm-313
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-313

## Files assigned
- [x] sources/rjm/scripts/restructure_memories.py
- [x] sources/rjm/scripts/review_memory_export_security.py
- [x] sources/rjm/scripts/scope_pr_base.py
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/scripts/security/run_semgrep.py
- [x] sources/rjm/scripts/skill_description_budget.py
- [x] sources/rjm/scripts/validation/pr_description.py
- [x] docs/analysis/inventory/rjm/scripts-restructure-memories-py.md
- [x] docs/analysis/inventory/rjm/scripts-review-memory-export-security-py.md
- [x] docs/analysis/inventory/rjm/scripts-scope-pr-base-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-invoke-security-retrospective-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-run-semgrep-py.md
- [x] docs/analysis/inventory/rjm/scripts-skill-description-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md

## Outputs produced
- docs/analysis/concepts/rjm/plan-moves.md (923 bytes)
- docs/analysis/concepts/rjm/update-index-references.md (931 bytes)
- docs/analysis/concepts/rjm/execute-moves.md (885 bytes)
- docs/analysis/concepts/rjm/generic-secret-pattern.md (902 bytes)
- docs/analysis/concepts/rjm/forgetful-id-uuid.md (907 bytes)
- docs/analysis/concepts/rjm/canonical-uuid.md (865 bytes)
- docs/analysis/concepts/rjm/issue.md (1034 bytes)
- docs/analysis/concepts/rjm/sensitive-patterns.md (912 bytes)
- docs/analysis/concepts/rjm/is-forgetful-id-uuid.md (958 bytes)
- docs/analysis/concepts/rjm/line-has-sensitive-match.md (941 bytes)
- docs/analysis/concepts/rjm/scan-pattern.md (870 bytes)
- docs/analysis/concepts/rjm/collect-issues.md (890 bytes)
- docs/analysis/concepts/rjm/plain-branch-name.md (886 bytes)
- docs/analysis/concepts/rjm/reserved-branch-names.md (904 bytes)
- docs/analysis/concepts/rjm/is-plain-branch-name.md (899 bytes)
- docs/analysis/concepts/rjm/externalreviewsource.md (949 bytes)
- docs/analysis/concepts/rjm/falsenegative.md (967 bytes)
- docs/analysis/concepts/rjm/securityretrospective.md (1010 bytes)
- docs/analysis/concepts/rjm/cwe-502.md (915 bytes)
- docs/analysis/concepts/rjm/external-reviewer.md (1296 bytes)
- docs/analysis/concepts/rjm/semgrepscanerror.md (926 bytes)
- docs/analysis/concepts/rjm/semgrepfinding.md (922 bytes)
- docs/analysis/concepts/rjm/semgrepexecutableerror.md (953 bytes)
- docs/analysis/concepts/rjm/semgrepscanner.md (914 bytes)
- docs/analysis/concepts/rjm/toctou.md (981 bytes)
- docs/analysis/concepts/rjm/count-memory-tokens-py.md (946 bytes)
- docs/analysis/concepts/rjm/skilldescription.md (910 bytes)
- docs/analysis/concepts/rjm/measure-skill.md (942 bytes)
- docs/analysis/concepts/rjm/budgetreport.md (895 bytes)
- docs/analysis/concepts/rjm/measure-corpus.md (908 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-313.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/plan-moves.md docs/analysis/concepts/rjm/update-index-references.md docs/analysis/concepts/rjm/execute-moves.md docs/analysis/concepts/rjm/generic-secret-pattern.md docs/analysis/concepts/rjm/forgetful-id-uuid.md docs/analysis/concepts/rjm/canonical-uuid.md docs/analysis/concepts/rjm/issue.md docs/analysis/concepts/rjm/sensitive-patterns.md docs/analysis/concepts/rjm/is-forgetful-id-uuid.md docs/analysis/concepts/rjm/line-has-sensitive-match.md docs/analysis/concepts/rjm/scan-pattern.md docs/analysis/concepts/rjm/collect-issues.md docs/analysis/concepts/rjm/plain-branch-name.md docs/analysis/concepts/rjm/reserved-branch-names.md docs/analysis/concepts/rjm/is-plain-branch-name.md docs/analysis/concepts/rjm/externalreviewsource.md docs/analysis/concepts/rjm/falsenegative.md docs/analysis/concepts/rjm/securityretrospective.md docs/analysis/concepts/rjm/cwe-502.md docs/analysis/concepts/rjm/external-reviewer.md docs/analysis/concepts/rjm/semgrepscanerror.md docs/analysis/concepts/rjm/semgrepfinding.md docs/analysis/concepts/rjm/semgrepexecutableerror.md docs/analysis/concepts/rjm/semgrepscanner.md docs/analysis/concepts/rjm/toctou.md docs/analysis/concepts/rjm/count-memory-tokens-py.md docs/analysis/concepts/rjm/skilldescription.md docs/analysis/concepts/rjm/measure-skill.md docs/analysis/concepts/rjm/budgetreport.md docs/analysis/concepts/rjm/measure-corpus.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-313 completes 30 concept cards across 7 script inventory files:
  1. Memory migration utilities from `scripts/restructure_memories.py`: `plan_moves`, `update_index_references`, `execute_moves`.
  2. Memory export security scanner components from `scripts/review_memory_export_security.py`: `_GENERIC_SECRET_PATTERN`, `_FORGETFUL_ID_UUID`, `_CANONICAL_UUID`, `_Issue`, `SENSITIVE_PATTERNS`, `_is_forgetful_id_uuid`, `_line_has_sensitive_match`, `_scan_pattern`, `_collect_issues`.
  3. Scope explosion gate PR base resolution components from `scripts/scope_pr_base.py`: `_PLAIN_BRANCH_NAME`, `_RESERVED_BRANCH_NAMES`, `_is_plain_branch_name`.
  4. Security retrospective orchestrator components and findings from `scripts/security/invoke_security_retrospective.py`: `ExternalReviewSource`, `FalseNegative`, `SecurityRetrospective`, `CWE-502`, `External Reviewer`.
  5. Semgrep scanner tooling and error handling from `scripts/security/run_semgrep.py`: `SemgrepScanError`, `SemgrepFinding`, `_SemgrepExecutableError`, `SemgrepScanner`, `TOCTOU`.
  6. Skill description budget instrument components from `scripts/skill_description_budget.py`: `count_memory_tokens.py`, `SkillDescription`, `measure_skill`, `BudgetReport`, `measure_corpus`.
  7. Multi-file concept `_Issue` joins `scripts/review_memory_export_security.py:35` and `scripts/validation/pr_description.py:221` into a single card with both occurrences mapped in Where used.
- All 31 occurrences recorded in `facts/cc-rjm-313.txt` are faithfully represented in the corresponding Where used tables.
- Concepts representing code-level identifiers, constants, function definitions, classes, file names, or vulnerability identifiers were authored with `kind: name-only` per D-023; `External Reviewer` was classified as `kind: role`.
- Defects from citing inventory cards were systematically propagated to `Implementation status` (`clean`, `defects: script-bug`, `defects: doc-drift`, `defects: orphan, doc-drift`, `defects: doc-drift, exit-code-mismatch`, `defects: missing-path`).
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 7 source scripts and 7 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 concept cards and 1 unit report.
