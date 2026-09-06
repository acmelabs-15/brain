---
unit: inv-rjm-225
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-225

## Files assigned
- [x] `sources/rjm/scripts/eval/eval_skill_router.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-eval-skill-router-py.md` (11117 bytes)

## Scripts executed
- `scripts/eval/eval_skill_router.py`, `python3 scripts/eval/eval_skill_router.py --help`, exit code 0
- `scripts/eval/eval_skill_router.py`, `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --dry-run`, exit code 0
- `scripts/eval/eval_skill_router.py`, `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --limit 5 --dry-run`, exit code 0
- `scripts/eval/eval_skill_router.py`, `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --limit 1`, exit code 2
- `scripts/eval/eval_skill_router.py`, `uv run python scripts/eval/eval_skill_router.py --fixtures nonexistent.json --dry-run`, exit code 2
- `scripts/eval/eval_skill_router.py`, `python3 scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --dry-run`, exit code 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval_skill_router.py` evaluates disambiguation for skill and agent descriptions modified in PR #2127 to include reciprocal SKIP clauses.
- The script imports internal eval utility modules `_anthropic_api.py` and `_eval_common.py` (both located under `scripts/eval/`).
- The script pins an immutable commit hash `BEFORE_REF = "fd379f0a85e0dc4362c3960a84a7ad5632270239"` to prevent false positive "zero-delta" results when running against branches where PR #2127 has already landed (issue #4304).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,817 tokens (23,269 bytes). Approximate tokens of output written: ~2,779 tokens (11,117 bytes for inventory card).
