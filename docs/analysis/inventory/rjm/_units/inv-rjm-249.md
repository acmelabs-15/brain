---
unit: inv-rjm-249
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-249

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/issue_triage.py` (28826 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/__init__.py` (430 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/cache.py` (2664 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/classifier.py` (5455 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/config.py` (2770 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/maintenance/__init__.py` (0 bytes) — read in full (exact 0-byte duplicate alias of `scripts/progress/py.typed` per deduplication ledger row 6; satisfied by `docs/analysis/inventory/rjm/scripts-progress-py-typed.md` per METHOD §2.4(a) and Phase 1V finding #1)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/maintenance/_gc_anchors.py` (7917 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-issue-triage-py.md` (6522 bytes)
- `docs/analysis/inventory/rjm/scripts-llm-classification---init---py.md` (2303 bytes)
- `docs/analysis/inventory/rjm/scripts-llm-classification-cache-py.md` (3141 bytes)
- `docs/analysis/inventory/rjm/scripts-llm-classification-classifier-py.md` (4232 bytes)
- `docs/analysis/inventory/rjm/scripts-llm-classification-config-py.md` (2949 bytes)
- `docs/analysis/inventory/rjm/scripts-maintenance--gc-anchors-py.md` (4235 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-249.md` (unit report)

## Scripts executed
- `sources/rjm/scripts/issue_triage.py`: `python3 sources/rjm/scripts/issue_triage.py --help`, exit code 0
- `sources/rjm/scripts/llm_classification/__init__.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/__init__.py`, exit code 0
- `sources/rjm/scripts/llm_classification/cache.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/cache.py`, exit code 0
- `sources/rjm/scripts/llm_classification/classifier.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/classifier.py`, exit code 0
- `sources/rjm/scripts/llm_classification/config.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/llm_classification/config.py`, exit code 0
- `sources/rjm/scripts/maintenance/__init__.py`: `python3 sources/rjm/scripts/maintenance/__init__.py`, exit code 0
- `sources/rjm/scripts/maintenance/_gc_anchors.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_anchors.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact (canonical cards for 6 files; `scripts/maintenance/__init__.py` satisfied via canonical alias in `scripts-progress-py-typed.md` per METHOD §2.4(a))
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file (verified via `quote-check.ts`: 88 PASS, 0 FAIL)
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Deduplication ledger row 6 identifies `scripts/maintenance/__init__.py` as an exact duplicate alias of `scripts/progress/py.typed` (inv-rjm-255). Phase 1V finding #1 explicitly required deleting the separate card for `scripts/maintenance/__init__.py` to avoid violating METHOD §2.4(a). This unit accordingly delivers 6 cards satisfying the 7 manifest rows.
- `scripts/issue_triage.py` is an orphan script not invoked by any in-scope lifecycle command or agent; flagged with an `orphan` defect in its inventory card.
- `scripts/llm_classification` is invoked by `scripts/update_reviewer_signal_stats.py` (inv-rjm-266) to provide fallback LLM classification for review comment actionability when heuristic confidence is between 0.4 and 0.6.
- `scripts/maintenance/_gc_anchors.py` provides anchor inspection for `scripts/maintenance/_gc_stale.py` (inv-rjm-251), implementing three-valued safe inspection of worktree reflogs and refs to prevent data loss during worktree cleanup.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,500 tokens (48,062 bytes across 7 files)
- Approximate tokens of output written: ~6,200 tokens (23,382 bytes of inventory cards plus unit report)
