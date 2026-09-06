---
unit: inv-rjm-195
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-195

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/README.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/__init__.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/AGENTS.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ai_review_common/__init__.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ai_review_common/cache_guard.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ai_review_common/feature_review.py

## Outputs produced
- docs/analysis/inventory/rjm/readme-md.md (6953 bytes)
- docs/analysis/inventory/rjm/scripts---init---py.md (1932 bytes)
- docs/analysis/inventory/rjm/scripts-agents-md.md (7867 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common---init---py.md (2952 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-cache-guard-py.md (5271 bytes)
- docs/analysis/inventory/rjm/scripts-ai-review-common-feature-review-py.md (4417 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-195.md (4120 bytes)

## Scripts executed
- `scripts/__init__.py`, `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/__init__.py`, exit code 0
- `scripts/check_skill_exists.py`, `python3 scripts/check_skill_exists.py --list-available`, exit code 0
- `scripts/sync_mcp_config.py`, `python3 -m scripts.sync_mcp_config --sync-all --dry-run`, exit code 0
- `scripts/validate_session_json.py`, `uv run python scripts/validate_session_json.py .agents/sessions/2026-08-21-session-99928-b3f7a91c2-remove-commit-limit-bypass-gate.json`, exit code 1
- `scripts/ai_review_common/__init__.py`, `python3 -c "import scripts.ai_review_common; print('ok')"`, exit code 0
- `scripts/ai_review_common/cache_guard.py`, `python3 scripts/ai_review_common/cache_guard.py`, exit code 2
- `scripts/ai_review_common/cache_guard.py`, `python3` with GITHUB_OUTPUT and skip/populate test cases, exit code 0
- `scripts/ai_review_common/feature_review.py`, `python3` extraction test harness, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-195` inventories root repository documentation (`README.md`), top-level scripting conventions (`scripts/__init__.py`, `scripts/AGENTS.md`), and the first slice of shared review infrastructure (`scripts/ai_review_common/__init__.py`, `cache_guard.py`, `feature_review.py`). Sibling unit `inv-rjm-196` covers the remainder of `scripts/ai_review_common/` (`issue_triage.py`, `quality_gate.py`, `retry.py`, `verdict.py`, `workflow.py`).
- Cross-file documentation drift:
  - `README.md:320` states `/review` performs a "5-axis review (architecture, security, quality, tests, standards)" matching `docs/workflow-commands.md:146`, but `.claude/skills/review/SKILL.md:29` specifies a Stage-1 spec-compliance gate plus 11 Stage-2 canonical review axes (12 canonical axes total) and 3 local skill axes (15 total in deep review).
  - `scripts/AGENTS.md:144` asserts that `scripts/` contains PowerShell scripts, directly contradicting lines 16-18 which report the completion of the ADR-042 migration with zero `.ps1` files remaining in the repository.
- Duplication ledger:
  - None of this unit's 6 files appears in `docs/analysis/manifest/rjm-duplicates.md`. No exact aliases or variant divergence cards were required.
- Quote check:
  - All 6 inventory cards achieve 100% verification with 0 FAIL across 152 citations via `bun scripts/synthesis/quote-check.ts`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,500 tokens (49,900 bytes across 6 files) plus relevant test files.
- Approximate tokens of output written: ~8,200 tokens across 6 inventory cards and 1 work-unit report.
