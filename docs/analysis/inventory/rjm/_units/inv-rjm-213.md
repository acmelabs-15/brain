---
unit: inv-rjm-213
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-213

## Files assigned
- [x] `scripts/consolidate_skills.py`
- [x] `scripts/detect_hook_bypass.py`
- [x] `scripts/detect_scope_explosion.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-consolidate-skills-py.md` (6502 bytes)
- `docs/analysis/inventory/rjm/scripts-detect-hook-bypass-py.md` (5413 bytes)
- `docs/analysis/inventory/rjm/scripts-detect-scope-explosion-py.md` (7040 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-213.md` (1684 bytes)

## Scripts executed
- `scripts/consolidate_skills.py`: `python3 scripts/consolidate_skills.py --help` (exit 0), `python3 scripts/consolidate_skills.py --dry-run` (exit 0), `python3 scripts/consolidate_skills.py --sessions-dir ../foo` (exit 2)
- `scripts/detect_hook_bypass.py`: `python3 scripts/detect_hook_bypass.py --help` (exit 0), `python3 scripts/detect_hook_bypass.py --base-ref HEAD` (exit 0)
- `scripts/detect_scope_explosion.py`: `uv run --frozen python scripts/detect_scope_explosion.py --help` (exit 0), `uv run --frozen python scripts/detect_scope_explosion.py` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/consolidate_skills.py` generates `.serena/memories/*.md` files; while Serena memory files are excluded from core lifecycle analysis per METHOD.md §1.2, the consolidation mechanism itself represents a lifecycle-relevant automated skill synthesis pattern.
- `scripts/detect_hook_bypass.py` is invoked by CI workflow scripts `scripts/ci/run_hook_bypass_audit.py` and `scripts/ci/parse_hook_bypass_results.py`. Its docstring claims a markdown lint heuristic that is not present in code (`doc-drift`).
- `scripts/detect_scope_explosion.py` interacts with `scripts/scope_pr_base.py` to dynamically rescope stacked PRs against their target branches using `gh`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,622 tokens (46,489 bytes).
Approximate tokens of output written: ~4,738 tokens (18,955 bytes cards + report).
