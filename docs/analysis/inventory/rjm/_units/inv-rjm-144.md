---
unit: inv-rjm-144
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-144

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/prose-self-check/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-prose-self-check-skill-md.md (17916 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-144.md

## Scripts executed
- `.claude/skills/prose-self-check/scripts/prose_lint.py`: `python3 .claude/skills/prose-self-check/scripts/prose_lint.py .claude/skills/prose-self-check/SKILL.md` (exit code: 0)
- `.claude/skills/prose-self-check/scripts/prose_lint.py`: `echo "This is — an em dash test." | python3 .claude/skills/prose-self-check/scripts/prose_lint.py -` (exit code: 1)
- `.claude/skills/prose-self-check/scripts/burstiness.py`: `python3 .claude/skills/prose-self-check/scripts/burstiness.py .claude/skills/prose-self-check/SKILL.md` (exit code: 0)
- `.claude/skills/prose-self-check/tests/`: `uv run pytest .claude/skills/prose-self-check/tests/ -q` (58 passed, exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned file `.claude/skills/prose-self-check/SKILL.md` is Part 3 of the `prose-self-check` skill family (`inv-rjm-144`). Part 1 is `scripts/burstiness.py` (`inv-rjm-142`) and Part 2 is `scripts/prose_lint.py` (`inv-rjm-143`).
- In `claude-agents-explainer-md.md` (unit `inv-rjm-66`), line 82 records a defect claiming that `.claude/skills/prose-self-check/SKILL.md` does not exist in the repository. This is an erroneous defect in `inv-rjm-66`: `.claude/skills/prose-self-check/SKILL.md` exists in `sources/rjm` (12884 bytes, sha256 555fd5815cdbf74e) and is identical to `src/copilot-cli/skills/prose-self-check/SKILL.md`.
- `sources/rjm/src/copilot-cli/skills/prose-self-check/SKILL.md` is an exact byte duplicate of `.claude/skills/prose-self-check/SKILL.md` (0 diff lines), but does not appear in `docs/analysis/manifest/rjm-duplicates.md` because `src/copilot-cli/skills/prose-self-check/` is outside the manifest reachability tree.
- Comprehensive test suite at `sources/rjm/.claude/skills/prose-self-check/tests/` (58 tests across `test_burstiness.py`, `test_skill_structure.py`, `test_wiring.py`) verifies the skill structure, script wiring, and burstiness calculation, all passing (exit code 0).

## Blocked or uncertain
none

## Time and size
Source read: 12884 bytes (~3221 tokens) for `SKILL.md`, plus 70522 bytes (~17630 tokens) for bundled scripts and 17262 bytes (~4315 tokens) for test suite.
Output written: 1 inventory card (17916 bytes, ~4479 tokens) and 1 unit report (~2.5 KB).
