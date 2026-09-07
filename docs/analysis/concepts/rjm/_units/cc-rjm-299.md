---
unit: cc-rjm-299
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-299

## Files assigned
- [x] sources/rjm/scripts/incoherence.py
- [x] sources/rjm/scripts/issue_triage.py
- [x] docs/analysis/inventory/rjm/scripts-incoherence-py.md
- [x] docs/analysis/inventory/rjm/scripts-issue-triage-py.md

## Outputs produced
- docs/analysis/concepts/rjm/gap-fill-exploration.md (920 bytes)
- docs/analysis/concepts/rjm/format-exploration-findings.md (962 bytes)
- docs/analysis/concepts/rjm/synthesis-candidate-selection.md (948 bytes)
- docs/analysis/concepts/rjm/deep-dive-dispatch.md (907 bytes)
- docs/analysis/concepts/rjm/deep-dive-exploration.md (956 bytes)
- docs/analysis/concepts/rjm/true-incoherence.md (954 bytes)
- docs/analysis/concepts/rjm/false-positive.md (937 bytes)
- docs/analysis/concepts/rjm/format-results.md (894 bytes)
- docs/analysis/concepts/rjm/verdict-analysis.md (906 bytes)
- docs/analysis/concepts/rjm/incoherence-report.md (1382 bytes)
- docs/analysis/concepts/rjm/reconcile-parse.md (900 bytes)
- docs/analysis/concepts/rjm/already-resolved.md (930 bytes)
- docs/analysis/concepts/rjm/no-resolution.md (889 bytes)
- docs/analysis/concepts/rjm/to-process.md (900 bytes)
- docs/analysis/concepts/rjm/reconcile-analyze.md (908 bytes)
- docs/analysis/concepts/rjm/developer.md (1191 bytes)
- docs/analysis/concepts/rjm/technical-writer.md (1263 bytes)
- docs/analysis/concepts/rjm/reconcile-plan.md (892 bytes)
- docs/analysis/concepts/rjm/reconcile-dispatch.md (905 bytes)
- docs/analysis/concepts/rjm/reconcile-apply.md (898 bytes)
- docs/analysis/concepts/rjm/reconcile-format.md (939 bytes)
- docs/analysis/concepts/rjm/reconcile-collect.md (954 bytes)
- docs/analysis/concepts/rjm/reconcile-update.md (913 bytes)
- docs/analysis/concepts/rjm/reconcile-complete.md (923 bytes)
- docs/analysis/concepts/rjm/issuerecord.md (855 bytes)
- docs/analysis/concepts/rjm/issuefinding.md (880 bytes)
- docs/analysis/concepts/rjm/duplicatefinding.md (891 bytes)
- docs/analysis/concepts/rjm/triagereport.md (900 bytes)
- docs/analysis/concepts/rjm/parse-iso-timestamp.md (909 bytes)
- docs/analysis/concepts/rjm/parse-issue-record.md (902 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-299.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/gap-fill-exploration.md docs/analysis/concepts/rjm/format-exploration-findings.md docs/analysis/concepts/rjm/synthesis-candidate-selection.md docs/analysis/concepts/rjm/deep-dive-dispatch.md docs/analysis/concepts/rjm/deep-dive-exploration.md docs/analysis/concepts/rjm/true-incoherence.md docs/analysis/concepts/rjm/false-positive.md docs/analysis/concepts/rjm/format-results.md docs/analysis/concepts/rjm/verdict-analysis.md docs/analysis/concepts/rjm/incoherence-report.md docs/analysis/concepts/rjm/reconcile-parse.md docs/analysis/concepts/rjm/already-resolved.md docs/analysis/concepts/rjm/no-resolution.md docs/analysis/concepts/rjm/to-process.md docs/analysis/concepts/rjm/reconcile-analyze.md docs/analysis/concepts/rjm/developer.md docs/analysis/concepts/rjm/technical-writer.md docs/analysis/concepts/rjm/reconcile-plan.md docs/analysis/concepts/rjm/reconcile-dispatch.md docs/analysis/concepts/rjm/reconcile-apply.md docs/analysis/concepts/rjm/reconcile-format.md docs/analysis/concepts/rjm/reconcile-collect.md docs/analysis/concepts/rjm/reconcile-update.md docs/analysis/concepts/rjm/reconcile-complete.md docs/analysis/concepts/rjm/issuerecord.md docs/analysis/concepts/rjm/issuefinding.md docs/analysis/concepts/rjm/duplicatefinding.md docs/analysis/concepts/rjm/triagereport.md docs/analysis/concepts/rjm/parse-iso-timestamp.md docs/analysis/concepts/rjm/parse-issue-record.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-299 completes 30 concept cards derived from `scripts/incoherence.py` and `scripts/issue_triage.py`:
  1. Incoherence detection and deep-dive steps (`gap-fill-exploration`, `format-exploration-findings`, `synthesis-candidate-selection`, `deep-dive-dispatch`, `deep-dive-exploration`, `true-incoherence`, `false-positive`, `format-results`, `verdict-analysis`, `incoherence-report`).
  2. Incoherence human-in-the-loop reconciliation workflow (`reconcile-parse`, `already-resolved`, `no-resolution`, `to-process`, `reconcile-analyze`, `developer`, `technical-writer`, `reconcile-plan`, `reconcile-dispatch`, `reconcile-apply`, `reconcile-format`, `reconcile-collect`, `reconcile-update`, `reconcile-complete`).
  3. GitHub mechanical issue triage automation (`issuerecord`, `issuefinding`, `duplicatefinding`, `triagereport`, `parse-iso-timestamp`, `parse-issue-record`).
- Internal step headings and Python code identifiers (dataclasses, helper functions) were authored as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-299.txt` were mapped into their respective `Where used` tables.
- Defect annotations from inventory cards (`missing-path, doc-drift, internal-contradiction, orphan` for `scripts/incoherence.py` and `orphan` for `scripts/issue_triage.py`) were propagated to `Implementation status`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
