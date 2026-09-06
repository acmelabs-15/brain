---
unit: inv-rjm-130
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-130

## Files assigned
- [x] `.claude/skills/orphan-ref-validator/scripts/scan.py` (39760 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-scan-py.md` (19441 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-130.md` (unit report)

## Scripts executed
- Documented execution commands:
  - `.claude/skills/orphan-ref-validator/scripts/scan.py`, `python3 .claude/skills/orphan-ref-validator/scripts/scan.py --output human` in `sources/rjm`, exit 1 (`VERDICT: CRITICAL_FAIL`, 44 pre-existing findings across `.agents/specs/`)
  - `.claude/skills/orphan-ref-validator/scripts/scan.py`, `python3 .claude/skills/orphan-ref-validator/scripts/scan.py --targets missing.md` in `sources/rjm`, exit 2 (`VERDICT: ERROR`, ADR-056 error envelope)
  - `.claude/skills/orphan-ref-validator/scripts/scan.py`, `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/scan.py --help`, exit 0
- Unit test suite execution:
  - `uv run pytest .claude/skills/orphan-ref-validator/tests/ -q` in `sources/rjm`, exit 0 (228 passed in 4.95s)
- Verification scripts executed in repo root:
  - `bun scripts/synthesis/quote-check.ts docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-scan-py.md` — exit 0 (64 PASS, 0 FAIL)
  - `bun scripts/synthesis/coverage.ts` — exit 0 (clean, zero failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-130 covers `.claude/skills/orphan-ref-validator/scripts/scan.py` (part 2 of the `orphan-ref-validator` skill). Part 1 covered `SKILL.md` and auxiliary scripts.
- `scan.py` is invoked as Gate 4 in `.claude/commands/build.md` and `.claude/commands/test.md`.
- A significant `doc-drift` defect exists between SKILL.md:168 (which asserts default scan exits 0 with `VERDICT: PASS`) and actual runtime behavior (exiting 1 with `VERDICT: CRITICAL_FAIL` due to 44 un-baselined pre-existing orphan refs), as also noted in SKILL.md:320.
- `scan.py` uses sibling resolution against `.claude/agents/`, `.claude/commands/`, review axes, and `.serena/memories/` to avoid false positives when prose refers to non-skill entities, eliminating the need for an unbounded denylist.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,000 tokens (39,760 bytes source + 21,618 bytes SKILL.md context)
- Approximate tokens of output written: ~5,500 tokens (~22,000 bytes)
