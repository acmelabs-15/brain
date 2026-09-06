---
unit: inv-rjm-308
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-308

## Files assigned
- [x] sources/rjm/scripts/validation/tracked_paths.py
- [x] sources/rjm/scripts/validation/validate_agent_catalog.py
- [x] sources/rjm/scripts/validation/validate_argument_hint.py
- [x] sources/rjm/scripts/validation/validate_copilot_agent_frontmatter.py
- [x] sources/rjm/scripts/validation/validate_design_review.py
- [x] sources/rjm/scripts/validation/validate_hook_anchoring.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-tracked-paths-py.md (4534 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-agent-catalog-py.md (5315 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-argument-hint-py.md (5383 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-copilot-agent-frontmatter-py.md (5408 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-design-review-py.md (4807 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-hook-anchoring-py.md (6680 bytes)

## Scripts executed
- scripts/validation/tracked_paths.py: `python3 scripts/validation/tracked_paths.py`, exit code 0
- scripts/validation/tracked_paths.py (library test): `python3 -c "import sys; from pathlib import Path; sys.path.insert(0, 'scripts/validation'); from tracked_paths import tracked_paths, path_exists_in_repo; p = tracked_paths(Path('.')); print('tracked count:', len(p) if p else None); print('exists:', path_exists_in_repo(Path('.'), 'scripts/validation/tracked_paths.py'))"`, exit code 0
- scripts/validation/validate_agent_catalog.py: `uv run python3 scripts/validation/validate_agent_catalog.py`, exit code 0
- scripts/validation/validate_agent_catalog.py (no deps): `python3 scripts/validation/validate_agent_catalog.py`, exit code 2
- scripts/validation/validate_argument_hint.py: `uv run python3 scripts/validation/validate_argument_hint.py`, exit code 0
- scripts/validation/validate_argument_hint.py (no deps): `python3 scripts/validation/validate_argument_hint.py`, exit code 1
- scripts/validation/validate_copilot_agent_frontmatter.py: `uv run python3 scripts/validation/validate_copilot_agent_frontmatter.py`, exit code 0
- scripts/validation/validate_copilot_agent_frontmatter.py (no deps): `python3 scripts/validation/validate_copilot_agent_frontmatter.py`, exit code 1
- scripts/validation/validate_design_review.py: `uv run python3 scripts/validation/validate_design_review.py`, exit code 0
- scripts/validation/validate_design_review.py (function test): `uv run python3 -c "import sys; from pathlib import Path; sys.path.insert(0, 'scripts/validation'); from validate_design_review import validate_design_review_frontmatter; print('Result:', validate_design_review_frontmatter(Path('.')))"`, exit code 0
- scripts/validation/validate_hook_anchoring.py: `uv run python3 scripts/validation/validate_hook_anchoring.py`, exit code 0
- scripts/validation/validate_hook_anchoring.py (bare python3): `python3 scripts/validation/validate_hook_anchoring.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `validate_agent_catalog.py` delegates to `build/generate_agent_catalog.py --check` rather than maintaining a separate markdown parser, adhering to canonical source mirroring.
- `validate_argument_hint.py` prevents adjacent unquoted bracket flow sequence node errors in GitHub Copilot CLI's strict command loader.
- `validate_copilot_agent_frontmatter.py` enforces closed role enum values (`strategic`, `coordinator`, `executor`, `support`) synchronized with `scripts/openclaw_bridge.py`.
- `validate_design_review.py` was extracted from `pre_pr.py` (issue #2223) and validates `.agents/architecture/DESIGN-REVIEW-*.md` frontmatter, emitting warnings for blocking reviews that feed into `synthesis-panel-gate.yml`.
- `validate_hook_anchoring.py` addresses customer-facing incident #2205 where plugin hooks assumed cwd was the plugin root rather than the user's cwd; it dynamically discovers platform hook configurations from `templates/platforms/*.yaml` to enforce anchoring across Claude and Copilot artifacts.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens (47,292 source bytes across 6 files).
Approximate tokens of output written: ~8,000 tokens (32,127 deliverable card bytes across 6 files).
