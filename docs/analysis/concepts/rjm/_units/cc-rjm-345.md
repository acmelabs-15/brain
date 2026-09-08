---
unit: cc-rjm-345
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-345

## Files assigned
- [x] sources/rjm/scripts/validation/check_skill_resolver_anchoring.py
- [x] sources/rjm/scripts/validation/check_skill_skip_clauses.py
- [x] sources/rjm/scripts/validation/check_spec_id_uniqueness.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-resolver-anchoring-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-skip-clauses-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-spec-id-uniqueness-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md

## Outputs produced
- docs/analysis/concepts/rjm/bare-relative-inline.md (892 bytes)
- docs/analysis/concepts/rjm/in-repo-root.md (859 bytes)
- docs/analysis/concepts/rjm/out-of-repo.md (849 bytes)
- docs/analysis/concepts/rjm/function-blocks.md (886 bytes)
- docs/analysis/concepts/rjm/check-file.md (855 bytes)
- docs/analysis/concepts/rjm/skip-clauses.md (1574 bytes)
- docs/analysis/concepts/rjm/multi-member-skill-families.md (1398 bytes)
- docs/analysis/concepts/rjm/frontmatter-pattern.md (858 bytes)
- docs/analysis/concepts/rjm/skip-clause-pattern.md (872 bytes)
- docs/analysis/concepts/rjm/paren-use-pattern.md (861 bytes)
- docs/analysis/concepts/rjm/use-instead-pattern.md (863 bytes)
- docs/analysis/concepts/rjm/semicolon-use-pattern.md (870 bytes)
- docs/analysis/concepts/rjm/leading-token.md (829 bytes)
- docs/analysis/concepts/rjm/load-skills.md (832 bytes)
- docs/analysis/concepts/rjm/group-families.md (875 bytes)
- docs/analysis/concepts/rjm/skill-name-pattern.md (888 bytes)
- docs/analysis/concepts/rjm/targets-in-text.md (875 bytes)
- docs/analysis/concepts/rjm/extract-skip-targets.md (900 bytes)
- docs/analysis/concepts/rjm/connected-members.md (897 bytes)
- docs/analysis/concepts/rjm/validate-skills.md (864 bytes)
- docs/analysis/concepts/rjm/spec-category.md (1416 bytes)
- docs/analysis/concepts/rjm/spec-graph-tooling.md (1330 bytes)
- docs/analysis/concepts/rjm/categories.md (794 bytes)
- docs/analysis/concepts/rjm/id-re.md (805 bytes)
- docs/analysis/concepts/rjm/read-id.md (821 bytes)
- docs/analysis/concepts/rjm/check-category.md (870 bytes)
- docs/analysis/concepts/rjm/errors-replace.md (1512 bytes)
- docs/analysis/concepts/rjm/subprocess-run.md (853 bytes)
- docs/analysis/concepts/rjm/text-capturing-calls.md (879 bytes)
- docs/analysis/concepts/rjm/unconditional-decode-calls.md (889 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-345.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/bare-relative-inline.md docs/analysis/concepts/rjm/in-repo-root.md docs/analysis/concepts/rjm/out-of-repo.md docs/analysis/concepts/rjm/function-blocks.md docs/analysis/concepts/rjm/check-file.md docs/analysis/concepts/rjm/skip-clauses.md docs/analysis/concepts/rjm/multi-member-skill-families.md docs/analysis/concepts/rjm/frontmatter-pattern.md docs/analysis/concepts/rjm/skip-clause-pattern.md docs/analysis/concepts/rjm/paren-use-pattern.md docs/analysis/concepts/rjm/use-instead-pattern.md docs/analysis/concepts/rjm/semicolon-use-pattern.md docs/analysis/concepts/rjm/leading-token.md docs/analysis/concepts/rjm/load-skills.md docs/analysis/concepts/rjm/group-families.md docs/analysis/concepts/rjm/skill-name-pattern.md docs/analysis/concepts/rjm/targets-in-text.md docs/analysis/concepts/rjm/extract-skip-targets.md docs/analysis/concepts/rjm/connected-members.md docs/analysis/concepts/rjm/validate-skills.md docs/analysis/concepts/rjm/spec-category.md docs/analysis/concepts/rjm/spec-graph-tooling.md docs/analysis/concepts/rjm/categories.md docs/analysis/concepts/rjm/id-re.md docs/analysis/concepts/rjm/read-id.md docs/analysis/concepts/rjm/check-category.md docs/analysis/concepts/rjm/errors-replace.md docs/analysis/concepts/rjm/subprocess-run.md docs/analysis/concepts/rjm/text-capturing-calls.md docs/analysis/concepts/rjm/unconditional-decode-calls.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-345 completes 30 concept cards spanning skill resolver anchoring, multi-member skill family routing validation, specification ID uniqueness verification, and subprocess encoding safety:
  1. Resolver anchoring checks (`bare-relative-inline`, `in-repo-root`, `out-of-repo`, `function-blocks`, `check-file`) in `check_skill_resolver_anchoring.py`.
  2. Multi-member skill family routing patterns and extraction machinery (`skip-clauses`, `multi-member-skill-families`, `frontmatter-pattern`, `skip-clause-pattern`, `paren-use-pattern`, `use-instead-pattern`, `semicolon-use-pattern`, `leading-token`, `load-skills`, `group-families`, `skill-name-pattern`, `targets-in-text`, `extract-skip-targets`, `connected-members`, `validate-skills`) in `check_skill_skip_clauses.py`.
  3. Spec artifact partitioning and ID uniqueness validation (`spec-category`, `spec-graph-tooling`, `categories`, `id-re`, `read-id`, `check-category`) in `check_spec_id_uniqueness.py`.
  4. Subprocess execution encoding safety patterns and static call sets (`errors-replace`, `subprocess-run`, `text-capturing-calls`, `unconditional-decode-calls`) in `check_subprocess_encoding.py`.
- Concepts representing functions, regex patterns, constants, or Python library calls are classified as `kind: name-only` per D-023.
- Core lifecycle routing, partitioning, and execution conventions are classified as `kind: pattern` (`skip-clauses`, `multi-member-skill-families`, `spec-category`, `spec-graph-tooling`, `errors-replace`).
- All 30 occurrences recorded in `facts/cc-rjm-345.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: orphan`, `defects: script-bug`, `defects: doc-drift`, or `clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~24,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
