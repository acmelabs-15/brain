---
unit: inv-rjm-274
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-274

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_links_baseline.txt

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-adr-links-baseline-txt.md (8889 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-274.md (2056 bytes)

## Scripts executed
- `scripts/validation/check_adr_links_baseline.txt`: `bash sources/rjm/scripts/validation/check_adr_links_baseline.txt`, exit code 127
- `scripts/validation/check_adr_links.py`: `python3 scripts/validation/check_adr_links.py --base-ref none`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
`scripts/validation/check_adr_links_baseline.txt` serves as the baseline defect registry consumed by `scripts/validation/check_adr_links.py` (which is part of the pre-pr validation suite alongside `pre_pr.py` and `pre_pr_sequence.py`). The entries in this baseline record 14 pre-existing broken citations across 8 distinct files, notably `.agents/architecture/ADR-021-model-routing-strategy.md` (which cites a non-existent debate log `../critique/ADR-019-debate-log.md`), review archives under `.agents/architecture/reviews/`, `.agents/audit/`, `scripts/eval/README.md`, `.agents/guides/`, `.agents/security/benchmarks/`, and `.agents/specs/PRD-memory-enhancement-layer-for-serena-forgetful.md`. The header count is regression-tested by `tests/validation/test_check_adr_links.py::test_baseline_header_counts_match_the_live_file`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~1,431 tokens (5,725 bytes).
Approximate tokens of output written: ~2,736 tokens (10,945 bytes).
