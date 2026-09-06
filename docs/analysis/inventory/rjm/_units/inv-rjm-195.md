---
unit: inv-rjm-195
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-195

## Files assigned
- [x] sources/rjm/README.md
- [x] sources/rjm/scripts/__init__.py
- [x] sources/rjm/scripts/AGENTS.md
- [x] sources/rjm/scripts/ai_review_common/__init__.py
- [x] sources/rjm/scripts/ai_review_common/cache_guard.py
- [x] sources/rjm/scripts/ai_review_common/feature_review.py

## Outputs produced
- docs/analysis/inventory/rjm/readme-md.md (7580 bytes)
- docs/analysis/inventory/rjm/scripts---init---py.md (1650 bytes)
- docs/analysis/inventory/rjm/scripts-agents-md.md (7413 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common---init---py.md (3213 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-cache-guard-py.md (4433 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-feature-review-py.md (4031 bytes)

## Scripts executed
- `scripts/__init__.py`: `python3 scripts/__init__.py`, exit code 0
- `scripts/AGENTS.md`: `python3 -m scripts.sync_mcp_config --sync-all --dry-run`, exit code 0
- `scripts/AGENTS.md`: `python3 scripts/check_skill_exists.py --list-available`, exit code 0
- `scripts/AGENTS.md`: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json`, exit code 1 (session file missing from repository)
- `scripts/ai_review_common/__init__.py`: `PYTHONPATH=. python3 -c "import scripts.ai_review_common; print(len(scripts.ai_review_common.__all__))"`, exit code 0
- `scripts/ai_review_common/cache_guard.py`: `python3 scripts/ai_review_common/cache_guard.py`, exit code 2 (missing required environment variable GITHUB_OUTPUT)
- `scripts/ai_review_common/cache_guard.py`: `python3 scripts/ai_review_common/cache_guard.py` (with valid env vars GITHUB_OUTPUT, AGENT, VERDICT, FINDINGS), exit code 0
- `scripts/ai_review_common/feature_review.py`: `python3 scripts/ai_review_common/feature_review.py`, exit code 0
- `scripts/ai_review_common/feature_review.py`: `python3 -c "from scripts.ai_review_common.feature_review import get_feature_review_recommendation; print(get_feature_review_recommendation('RECOMMENDATION: PROCEED'))"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V verification findings for inv-rjm-195 addressed:
  - `README.md`: all 6 diagram lifecycle phases (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`) and scenario agent roles (`implementer`, `qa`, `security`, `architect`, `analyst`, `devops`, `independent-thinker`, `high-level-advisor`, `roadmap`) were added to Concepts named.
  - `scripts/AGENTS.md`: coding standards, cross-platform patterns, testing standards, and script agent documentation fully inventoried with executions and defects.
- `scripts/ai_review_common/` submodules represent the canonical implementation of shared review helpers in `rjm`, which are synchronized to `.claude/lib/ai_review_common/` and `src/copilot-cli/lib/ai_review_common/`.
- Defects identified across files:
  - `README.md:15`: placeholder gif URL `TODO-record-gif-before-v0.2` not yet created.
  - `README.md:311`: doc-drift documenting `/review` as a slash command when review is implemented as a skill (`.claude/skills/review/`) per ADR-064.
  - `scripts/AGENTS.md:264`: documented session example `.agents/sessions/2025-12-18-session-24.json` missing from disk.
  - `scripts/AGENTS.md:318`: broken relative link to `scripts/README.md`.
  - `scripts/AGENTS.md:144`: doc-drift claiming `scripts/` contains PowerShell scripts when zero remain post ADR-042.
  - `scripts/ai_review_common/__init__.py:1`: orphan package root not directly imported by in-scope lifecycle scripts.
  - `scripts/ai_review_common/cache_guard.py:1`: orphan script invoked by out-of-scope `.github/actions/agent-review/`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,500 tokens (49,900 bytes).
Approximate tokens of output written: ~7,100 tokens (28,320 bytes across cards + report).
