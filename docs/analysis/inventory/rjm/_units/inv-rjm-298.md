---
unit: inv-rjm-298
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-298

## Files assigned
- [x] `sources/rjm/scripts/validation/portability_baseline.py`
- [x] `sources/rjm/scripts/validation/portability_common.py`
- [x] `sources/rjm/scripts/validation/portability_floor.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-portability-baseline-py.md` (9664 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-portability-common-py.md` (9475 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-portability-floor-py.md` (7103 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-298.md`

## Scripts executed
- `scripts/validation/portability_baseline.py`: `python3 -m scripts.validation.portability_baseline`, exit code 0
- `scripts/validation/portability_common.py`: `python3 -m scripts.validation.portability_common`, exit code 0
- `scripts/validation/portability_floor.py`: `python3 -m scripts.validation.portability_floor`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These three modules form the core ratchet validation and verification layer for portability baselines (`skill_portability_baseline.json`, `skill_md_portability_baseline.json`, and `skill_md_exec_portability.json`), shared across checkers `check_skill_portability.py`, `check_skill_md_exec_portability.py`, and `check_skill_md_portability.py`.
- `portability_floor.py` specifically addresses threat models where an attacker or automated process attempts to lower ratchet baselines by editing local working tree files prior to verification: it reads committed blobs directly from git HEAD using `git cat-file blob <sha>` and establishes a non-decreasing floor across `files`, `marker_files`, and `drift_files` sections.
- `portability_baseline.py` guards the write path, enforcing git diff visibility (`refuse_diff_suppressed_baseline` and `refuse_undiffable_baseline`), symlink safety, size bounds (< 200 KB ceiling), and atomic replacement under advisory locking.
- `portability_common.py` provides shared CLI parsing and root resolution, ensuring paths are not prematurely canonicalized so symlink detection remains effective.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (48,429 bytes across 3 source files).
Approximate tokens of output written: ~6,500 tokens (26,242 bytes across 3 cards plus unit report).
