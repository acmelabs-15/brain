---
unit: inv-rjm-258
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-258

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/restructure_memories.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/review_memory_export_security.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/scope_pr_base.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-restructure-memories-py.md (5092 bytes)
- docs/analysis/inventory/rjm/scripts-review-memory-export-security-py.md (5258 bytes)
- docs/analysis/inventory/rjm/scripts-scope-pr-base-py.md (4474 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-258.md (3222 bytes)

## Scripts executed
- `scripts/restructure_memories.py`, `python3 scripts/restructure_memories.py --dry-run` (run in `sources/rjm`), exit code 0
- `scripts/restructure_memories.py`, `python3 sources/rjm/scripts/restructure_memories.py --dry-run` (run in repository root), exit code 1
- `scripts/review_memory_export_security.py`, `python3 scripts/review_memory_export_security.py --help` (run in `sources/rjm`), exit code 0
- `scripts/review_memory_export_security.py`, `python3 scripts/review_memory_export_security.py renovate.json` (run in `sources/rjm`), exit code 0
- `scripts/review_memory_export_security.py`, `python3 scripts/review_memory_export_security.py nonexistent.json` (run in `sources/rjm`), exit code 1
- `scripts/scope_pr_base.py`, `python3 scripts/scope_pr_base.py` (run in `sources/rjm`), exit code 0
- `scripts/scope_pr_base.py`, `PYTHONPATH=sources/rjm python3 -c "from scripts.scope_pr_base import strip_remote_prefix, _is_plain_branch_name; print('strip:', strip_remote_prefix('origin/main')); print('plain:', _is_plain_branch_name('feature/foo'))"` (run in repository root), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/scope_pr_base.py` is closely coupled with `scripts/detect_scope_explosion.py` (invoked via import at line 38). It extracts PR base resolution and git ancestry credibility testing from scope detection orchestration.
- `scripts/review_memory_export_security.py` references `ADR-035 Exit Code Standardization` and is invoked by out-of-scope `scripts/forgetful/export_forgetful_memories.py:130` and documented in `scripts/forgetful/README.md:188`.
- `scripts/restructure_memories.py` is an orphan maintenance migration script for `.serena/memories/` that defines a detailed taxonomy mapping over 100 topic prefixes to domain subdirectories.
- Duplication ledger: None of the three files appear in `docs/analysis/manifest/rjm-duplicates.md`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~7,650 tokens (30,637 bytes across 3 assigned files).
- Approximate tokens of output written: ~3,700 tokens across 3 inventory cards and 1 work-unit report.
