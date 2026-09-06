---
unit: inv-rjm-275
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-275

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_links.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-adr-links-py.md (14701 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-275.md (2043 bytes)

## Scripts executed
- `scripts/validation/check_adr_links.py`: `python3 scripts/validation/check_adr_links.py`, exit code 0
- `scripts/validation/check_adr_links.py`: `python3 scripts/validation/check_adr_links.py --base-ref none`, exit code 0
- `scripts/validation/check_adr_links.py`: `python3 scripts/validation/check_adr_links.py --help`, exit code 0
- `scripts/validation/check_adr_links.py`: `python3 scripts/validation/check_adr_links.py --repo-root /tmp`, exit code 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
`scripts/validation/check_adr_links.py` is the primary ADR link and reference integrity validator for `rjm`, invoked during `pre_pr.py` and `pre_pr_sequence.py`. It consumes `scripts/validation/check_adr_links_baseline.txt` (inventoried in `inv-rjm-274`) as its baseline defect ratchet. It imports `HISTORICAL_ROOTS` and `load_allowlist` from `scripts/validation/stale_script_refs.py`. The script is heavily hardened against false passes via strict CommonMark parsing (fence run-length matching, reference-link label normalization), RFC 3986 scheme filtering, and corpus existence sentinels (`_scannable_files`, `_has_adr_corpus`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~13,253 tokens (53,014 bytes).
Approximate tokens of output written: ~4,200 tokens (~16,800 bytes).
