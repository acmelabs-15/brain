---
unit: inv-rjm-131
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-131

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/orphan-ref-validator/scripts/walking.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/orphan-ref-validator/SKILL.md

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-walking-py.md` (9239 bytes)
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-skill-md.md` (15218 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-131.md` (unit report)

## Scripts executed
- `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/walking.py` — exit code 0
- `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/.claude/skills/orphan-ref-validator'); from scripts.walking import walk_targets; from pathlib import Path; print(len(list(walk_targets(Path('sources/rjm/.claude/skills/orphan-ref-validator'), Path('sources/rjm')))))"` — output: `9`, exit code 0
- `uv run python .claude/skills/orphan-ref-validator/scripts/scan.py --help` — exit code 0
- `uv run python .claude/skills/orphan-ref-validator/scripts/scan.py --targets missing.md` — output: ADR-056 envelope with `VERDICT: ERROR`, exit code 2
- `uv run python .claude/skills/orphan-ref-validator/scripts/scan.py` — repo-wide default scan, output: `VERDICT: CRITICAL_FAIL` (48 findings, 35 directive-suppressed), exit code 1
- `uv run pytest .claude/skills/orphan-ref-validator/tests/ -q` — output: 228 passed in 3.66s, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-131` covers part 3 of skill `orphan-ref-validator`: `scripts/walking.py` and `SKILL.md`. Parts 1 and 2 cover `scripts/scan.py`, `scripts/envelope.py`, `scripts/filters.py`, `scripts/patterns.py`, `scripts/counts.py`, and `scripts/__init__.py`.
- Critical `doc-drift` / verification finding: `SKILL.md:168` claims `scan.py` run from repo root exits 0 with `VERDICT: PASS` on default tracked text targets. In actual execution on the repository default checkout, it exits 1 with `VERDICT: CRITICAL_FAIL` due to pre-existing orphan references in `.agents/specs/`. The skill author acknowledges this debt in `SKILL.md:256-258` and `SKILL.md:320-322`, recommending scoped scans (`--targets $(git diff --name-only origin/main...HEAD)`) or debt snapshots (`--baseline orphan-ref-baseline.json`).
- `doc-drift` in file suffixes: `walking.py:27` defines `SCAN_FILE_SUFFIXES` including `.py` (`(".md", ".json", ".yaml", ".yml", ".py")`), whereas `SKILL.md:55` and `SKILL.md:129` only document `.md`, `.json`, `.yaml`, and `.yml`.
- Dead code in `walking.py`: `_iter_dir_pruned` (lines 140-163), `_iter_entry` (lines 246-266), and `_maybe_yield_file` (lines 291-303) are uncalled legacy generator functions; `walk_targets` delegates to `collect_walk_targets` which uses `_collect_dir_pruned`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,600 tokens (34.5 KB across 2 assigned files, plus referenced scripts and tests). Approximate tokens of output written: ~6,100 tokens.
