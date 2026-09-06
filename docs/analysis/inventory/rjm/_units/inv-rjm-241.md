---
unit: inv-rjm-241
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-241

## Files assigned
- [x] `sources/rjm/scripts/github_core/bot_config.py`
- [x] `sources/rjm/scripts/github_core/checks_rollup.py`
- [x] `sources/rjm/scripts/github_core/CLAUDE.md`
- [x] `sources/rjm/scripts/github_core/comment_classification.py`
- [x] `sources/rjm/scripts/github_core/discourse_traversal.py`
- [x] `sources/rjm/scripts/github_core/formatting.py`
- [x] `sources/rjm/scripts/github_core/gh_client.py`
- [x] `sources/rjm/scripts/github_core/log_safety.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-github-core-bot-config-py.md` (3606 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-checks-rollup-py.md` (3655 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-claude-md.md` (2189 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-comment-classification-py.md` (2697 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-discourse-traversal-py.md` (4524 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-formatting-py.md` (2239 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-gh-client-py.md` (3659 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-log-safety-py.md` (2054 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-241.md` (unit report)

## Scripts executed
- `scripts/github_core/bot_config.py`: `python3 sources/rjm/scripts/github_core/bot_config.py`, exit code 0
- `scripts/github_core/checks_rollup.py`: `python3 sources/rjm/scripts/github_core/checks_rollup.py`, exit code 0
- `scripts/github_core/comment_classification.py`: `python3 sources/rjm/scripts/github_core/comment_classification.py`, exit code 0
- `scripts/github_core/discourse_traversal.py`: `python3 sources/rjm/scripts/github_core/discourse_traversal.py`, exit code 0
- `scripts/github_core/formatting.py`: `python3 sources/rjm/scripts/github_core/formatting.py`, exit code 0
- `scripts/github_core/gh_client.py`: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/gh_client.py`, exit code 0
- `scripts/github_core/log_safety.py`: `python3 sources/rjm/scripts/github_core/log_safety.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/github_core/CLAUDE.md` is an exact byte copy of `scripts/CLAUDE.md` (canonical for EXACT group 5 in duplication ledger).
- `scripts/github_core/discourse_traversal.py` is an orphan within in-scope scripts; only imported by test suites.
- `scripts/github_core/comment_classification.py` is imported by PR comment triage tools under `src/copilot-cli/skills/github/scripts/pr/`, but has no direct importers in `scripts/`.
- `scripts/github_core/gh_client.py` requires `sources/rjm` in `PYTHONPATH` for standalone module invocation because it imports `from scripts.github_core.api import is_gh_authenticated`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,500 tokens (40,711 bytes).
Approximate tokens of output written: ~6,200 tokens (24,569 bytes).
