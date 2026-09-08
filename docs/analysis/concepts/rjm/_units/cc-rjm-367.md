---
unit: cc-rjm-367
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-367

## Files assigned
- [x] sources/rjm/scripts/validation/skill_frontmatter.py
- [x] sources/rjm/scripts/validation/skill_size.py
- [x] sources/rjm/scripts/validation/spec_contradiction.py
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] sources/rjm/templates/agents/implementer.shared.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-frontmatter-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-size-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-spec-contradiction-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-implementer-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-description.md (946 bytes)
- docs/analysis/concepts/rjm/validate-model.md (912 bytes)
- docs/analysis/concepts/rjm/normalize-skill-path.md (934 bytes)
- docs/analysis/concepts/rjm/is-skill-file-path.md (941 bytes)
- docs/analysis/concepts/rjm/get-staged-skill-files.md (890 bytes)
- docs/analysis/concepts/rjm/default-corpus-files.md (889 bytes)
- docs/analysis/concepts/rjm/default-corpus-summary.md (923 bytes)
- docs/analysis/concepts/rjm/get-skill-files.md (869 bytes)
- docs/analysis/concepts/rjm/relative-display.md (887 bytes)
- docs/analysis/concepts/rjm/validate-skill-file.md (931 bytes)
- docs/analysis/concepts/rjm/size-limits.md (1388 bytes)
- docs/analysis/concepts/rjm/skill-size-limit.md (794 bytes)
- docs/analysis/concepts/rjm/skill-size-warning.md (798 bytes)
- docs/analysis/concepts/rjm/skill-byte-target.md (817 bytes)
- docs/analysis/concepts/rjm/skill-byte-limit.md (796 bytes)
- docs/analysis/concepts/rjm/skill-byte-warning.md (831 bytes)
- docs/analysis/concepts/rjm/stageddiscoveryerror.md (812 bytes)
- docs/analysis/concepts/rjm/stagedbloberror.md (810 bytes)
- docs/analysis/concepts/rjm/sizecheckresult.md (810 bytes)
- docs/analysis/concepts/rjm/model-tier.md (1580 bytes)
- docs/analysis/concepts/rjm/numeric-keys.md (836 bytes)
- docs/analysis/concepts/rjm/contradiction.md (788 bytes)
- docs/analysis/concepts/rjm/fetch-current-pr-body.md (855 bytes)
- docs/analysis/concepts/rjm/fetch-issue-body.md (843 bytes)
- docs/analysis/concepts/rjm/extract-linked-issues.md (848 bytes)
- docs/analysis/concepts/rjm/extract-model-claims.md (852 bytes)
- docs/analysis/concepts/rjm/extract-numeric-claims.md (858 bytes)
- docs/analysis/concepts/rjm/find-contradictions.md (838 bytes)
- docs/analysis/concepts/rjm/collect-contradictions.md (863 bytes)
- docs/analysis/concepts/rjm/doc-globs.md (870 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-367.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-description.md docs/analysis/concepts/rjm/validate-model.md docs/analysis/concepts/rjm/normalize-skill-path.md docs/analysis/concepts/rjm/is-skill-file-path.md docs/analysis/concepts/rjm/get-staged-skill-files.md docs/analysis/concepts/rjm/default-corpus-files.md docs/analysis/concepts/rjm/default-corpus-summary.md docs/analysis/concepts/rjm/get-skill-files.md docs/analysis/concepts/rjm/relative-display.md docs/analysis/concepts/rjm/validate-skill-file.md docs/analysis/concepts/rjm/size-limits.md docs/analysis/concepts/rjm/skill-size-limit.md docs/analysis/concepts/rjm/skill-size-warning.md docs/analysis/concepts/rjm/skill-byte-target.md docs/analysis/concepts/rjm/skill-byte-limit.md docs/analysis/concepts/rjm/skill-byte-warning.md docs/analysis/concepts/rjm/stageddiscoveryerror.md docs/analysis/concepts/rjm/stagedbloberror.md docs/analysis/concepts/rjm/sizecheckresult.md docs/analysis/concepts/rjm/model-tier.md docs/analysis/concepts/rjm/numeric-keys.md docs/analysis/concepts/rjm/contradiction.md docs/analysis/concepts/rjm/fetch-current-pr-body.md docs/analysis/concepts/rjm/fetch-issue-body.md docs/analysis/concepts/rjm/extract-linked-issues.md docs/analysis/concepts/rjm/extract-model-claims.md docs/analysis/concepts/rjm/extract-numeric-claims.md docs/analysis/concepts/rjm/find-contradictions.md docs/analysis/concepts/rjm/collect-contradictions.md docs/analysis/concepts/rjm/doc-globs.md` (exit code 0, 32 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-367 completes 30 concept cards spanning skill frontmatter validation, skill size limit ratcheting, spec-vs-code contradiction detection, and documentation reference scanning:
  1. Skill frontmatter validation and discovery routines (`validate-description`, `validate-model`, `normalize-skill-path`, `is-skill-file-path`, `get-staged-skill-files`, `default-corpus-files`, `default-corpus-summary`, `get-skill-files`, `relative-display`, `validate-skill-file`) in `scripts/validation/skill_frontmatter.py`.
  2. Skill prompt size limiting architecture and thresholds (`size-limits`, `skill-size-limit`, `skill-size-warning`, `skill-byte-target`, `skill-byte-limit`, `skill-byte-warning`, `stageddiscoveryerror`, `stagedbloberror`, `sizecheckresult`) in `scripts/validation/skill_size.py`.
  3. Spec-vs-code contradiction detection routines and agent model tier configuration (`model-tier`, `numeric-keys`, `contradiction`, `fetch-current-pr-body`, `fetch-issue-body`, `extract-linked-issues`, `extract-model-claims`, `extract-numeric-claims`, `find-contradictions`, `collect-contradictions`) in `scripts/validation/spec_contradiction.py` and `templates/agents/implementer.shared.md`.
  4. Documentation glob definitions (`doc-globs`) in `scripts/validation/stale_script_refs.py`.
- Concepts representing functions, constants, exception classes, and dataclasses are classified as `kind: name-only` per D-023.
- Core lifecycle/quality-gate concepts are classified as `kind: gate` (`size-limits`) and `kind: artifact` (`model-tier`).
- All 31 occurrences recorded in `facts/cc-rjm-367.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean`, `defects: exit-code-mismatch, doc-drift, cross-file-contradiction`, `defects: missing-path, doc-drift`, or per-file statuses for multi-file concepts like `model-tier`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
