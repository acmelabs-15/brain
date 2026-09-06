---
unit: inv-rjm-273
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-273

## Files assigned
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md (23767 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-273.md (2023 bytes)

## Scripts executed
- `scripts/validation/check_adr_lifecycle.py`: `uv run --project sources/rjm python sources/rjm/scripts/validation/check_adr_lifecycle.py`, exit code 0
- `scripts/validation/check_adr_lifecycle.py`: `uv run --project sources/rjm python sources/rjm/scripts/validation/check_adr_lifecycle.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
`scripts/validation/check_adr_lifecycle.py` is the validation gate for ADR lifecycle frontmatter and prose consistency, enforcing ADR-073 and ADR-035 conventions. It consumes `scripts/validation/adr_lifecycle_baseline.json` as its per-check ratchet ceiling (tracking 8 discrete checks). It is invoked by `scripts/validation/pre_pr.py` and `scripts/validation/pre_pr_sequence.py` (via `validate_adr_lifecycle`), and referenced by `build/scripts/generate_adr_index.py` and `scripts/validation/check_adr_links.py`. It implements safe YAML frontmatter parsing with duplicate key prevention, CommonMark prose scanning with non-prose stripping, bidirectional supersession graph construction, cycle detection, and git merge-base verified baseline updates.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,986 tokens (59,943 bytes).
Approximate tokens of output written: ~6,400 tokens (~25,800 bytes).
