---
unit: inv-rjm-288
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-288

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_subprocess_encoding.py (71105 bytes) — read in full

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-subprocess-encoding-py.md (13493 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-288.md (2039 bytes)

## Scripts executed
- scripts/validation/check_subprocess_encoding.py, `python3 sources/rjm/scripts/validation/check_subprocess_encoding.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_subprocess_encoding.py` is tightly coupled with `scripts/ci/subprocess_encoding_count_ratchet.py` and `scripts/ci/subprocess_encoding_count_baseline.txt` (unit `inv-rjm-208`), which import `find_all_violations` to maintain a non-regressing ceiling on subprocess text-capture convention debt.
- It is wired directly into the pre-PR shift-left verification sequence via `scripts/validation/pre_pr.py:79` and `scripts/validation/pre_pr_sequence.py:54`.
- It is also invoked by git hook automation declared in `lefthook.yml:257`.
- Source references `tests/validation/test_check_subprocess_encoding.py`, `tests/validation/test_check_subprocess_encoding_bindings.py`, and `tests/validation/test_check_subprocess_encoding_mutation.py`, all of which reside outside lifecycle synthesis scope per METHOD §1.2.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~17,700 tokens (71,105 bytes)
- Approximate tokens of output written: ~3,900 tokens (15,500 bytes across card and unit report)
