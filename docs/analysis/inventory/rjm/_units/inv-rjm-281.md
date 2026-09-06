---
unit: inv-rjm-281
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-281

## Files assigned
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_push_lock_before_commit.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-plugin-frontmatter-self-containment-py.md (10504 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-push-lock-before-commit-py.md (8854 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-281.md (3478 bytes)

## Scripts executed
- `scripts/validation/check_plugin_frontmatter_self_containment.py`: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py`, exit code 0
- `scripts/validation/check_plugin_frontmatter_self_containment.py`: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py --help`, exit code 0
- `scripts/validation/check_plugin_frontmatter_self_containment.py`: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py --repo-root /nonexistent`, exit code 2
- `scripts/validation/check_push_lock_before_commit.py`: `python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py`, exit code 0
- `scripts/validation/check_push_lock_before_commit.py`: `uv run --directory sources/rjm python scripts/validation/check_push_lock_before_commit.py`, exit code 0
- `scripts/validation/check_push_lock_before_commit.py`: `SKIP_PUSH_LOCK_COMMIT_GUARD=1 python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py`, exit code 0
- `scripts/validation/check_push_lock_before_commit.py`: `python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_plugin_frontmatter_self_containment.py`:
  - Enforces frontmatter self-containment for shipped plugins under `.claude`, `src/claude`, and `src/copilot-cli`, scanning `description` and `name` keys for outward file references.
  - Complements `check_skill_md_portability.py` (which only checks body prose in `.claude/skills`).
  - Invoked in CI via `.github/workflows/validate-generated-agents.yml:182` and cited across instruction/rule files (`.claude/rules/plugin-self-containment.md`).
- `scripts/validation/check_push_lock_before_commit.py`:
  - Protects against issue #5123 by ensuring `git commit` does not land while a push for the same branch is actively running on the machine (probed via `$HOME/src/scratch/locks/push-lock-<slug>.lock`).
  - Wired into `lefthook.yml:68` as `push-lock-commit-guard` and documented in `.claude/skills/ai-agents-config-catalog/SKILL.md:64` and `.claude/rules/push-lock.md:83`.
  - Implements fail-open reliability on git or filesystem lookup errors, and provides `SKIP_PUSH_LOCK_COMMIT_GUARD=1` as an escape hatch.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,333 tokens (41,334 bytes).
Approximate tokens of output written: ~5,300 tokens (~21,500 bytes).
