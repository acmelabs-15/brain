---
unit: inv-rjm-249
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-249

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/issue_triage.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/__init__.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/cache.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/classifier.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/llm_classification/config.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/maintenance/__init__.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/maintenance/_gc_anchors.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-issue-triage-py.md (8773 bytes)
- docs/analysis/inventory/rjm/scripts-llm-classification---init---py.md (3815 bytes)
- docs/analysis/inventory/rjm/scripts-llm-classification-cache-py.md (4201 bytes)
- docs/analysis/inventory/rjm/scripts-llm-classification-classifier-py.md (5592 bytes)
- docs/analysis/inventory/rjm/scripts-llm-classification-config-py.md (4484 bytes)
- docs/analysis/inventory/rjm/scripts-maintenance---init---py.md (2431 bytes)
- docs/analysis/inventory/rjm/scripts-maintenance--gc-anchors-py.md (5028 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-249.md (4704 bytes)

## Scripts executed
- `scripts/issue_triage.py`: `python3 sources/rjm/scripts/issue_triage.py --help`, exit code 0
- `scripts/llm_classification/__init__.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); import scripts.llm_classification as lc; print(lc.__all__)"`, exit code 0
- `scripts/llm_classification/cache.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.cache import ClassificationCache; c = ClassificationCache(max_entries=2); print('initialized cache len:', len(c))"`, exit code 0
- `scripts/llm_classification/classifier.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.classifier import LLMClassifier; clf = LLMClassifier(); print('Classifier config model:', clf.config.model)"`, exit code 0
- `scripts/llm_classification/config.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.llm_classification.config import LLMFallbackConfig; cfg = LLMFallbackConfig(); print('Default model:', cfg.model, 'low range:', cfg.low_confidence_min, '-', cfg.low_confidence_max)"`, exit code 0
- `scripts/maintenance/__init__.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); import scripts.maintenance; print('ok')"`, exit code 0
- `scripts/maintenance/_gc_anchors.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from pathlib import Path; from scripts.maintenance import _gc_anchors; print('walk_files on temp dir:', _gc_anchors.walk_files(Path('.')))"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-249` covers three distinct operational script subsystems:
  1. Mechanical issue backlog triage (`scripts/issue_triage.py` implementing the ClawSweeper pattern).
  2. The LLM classification fallback subsystem (`scripts/llm_classification/` package: `__init__.py`, `cache.py`, `classifier.py`, `config.py`), which provides fallback classification when heuristic review comment actionability scoring yields low confidence. It is imported by `scripts/update_reviewer_signal_stats.py:42`.
  3. Worktree maintenance anchor introspection (`scripts/maintenance/__init__.py` and `scripts/maintenance/_gc_anchors.py`), providing three-valued safety inspections for worktree administrative directories (`.git/worktrees/<id>/logs` and `refs`) before garbage collection pruning. It is imported by sibling maintenance script `scripts/maintenance/_gc_stale.py:17`.
- Duplication ledger:
  - `scripts/maintenance/__init__.py` is recorded in `docs/analysis/manifest/rjm-duplicates.md` group 6 as an exact duplicate (0 bytes) of canonical path `scripts/progress/py.typed` (owned by unit `inv-rjm-255`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,015 tokens (48,062 bytes across 7 assigned files).
- Approximate tokens of output written: ~8,580 tokens across 7 inventory cards and 1 work-unit report.
