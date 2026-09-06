---
unit: inv-rjm-240
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-240

## Files assigned
- [x] sources/rjm/scripts/github_core/api.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-github-core-api-py.md — 12651 bytes
- docs/analysis/inventory/rjm/_units/inv-rjm-240.md — 1787 bytes

## Scripts executed
- scripts/github_core/api.py: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/api.py` — exit code 0
- scripts/github_core/api.py: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.api import get_repo_info, is_auth_failure_text; print('repo_info:', get_repo_info()); print('auth_check:', is_auth_failure_text('bad credentials'))"` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Sibling module references: `api.py` serves as a public facade that re-exports functions and constants from `log_safety.py` (inv-rjm-237), `rate_limit.py` (inv-rjm-241), `review_threads.py` (inv-rjm-243), and `validation.py` (inv-rjm-244).
- Dependent automation scripts import directly from `scripts.github_core.api`, so preserving this stable facade interface is essential for backward compatibility across RJM scripts.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,950 tokens (43,794 bytes).
Approximate tokens of output written: ~3,500 tokens (14,131 bytes total across card and report).
