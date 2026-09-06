---
unit: inv-rjm-270
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-270

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validate_skill_format.py (5925 bytes, 181 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validate_skill_installation.py (6165 bytes, 201 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validate_skill_output.py (14130 bytes, 361 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validate-skill-format-py.md (7030 bytes)
- docs/analysis/inventory/rjm/scripts-validate-skill-installation-py.md (8479 bytes)
- docs/analysis/inventory/rjm/scripts-validate-skill-output-py.md (8699 bytes)

## Scripts executed
- scripts/validate_skill_format.py: `python3 scripts/validate_skill_format.py` (exit code: 0)
- scripts/validate_skill_format.py: `python3 scripts/validate_skill_format.py --ci` (exit code: 0)
- scripts/validate_skill_format.py: `python3 scripts/validate_skill_format.py --path nonexistent` (exit code: 0)
- scripts/validate_skill_format.py: `python3 scripts/validate_skill_format.py --changed-files .claude/skills/review/SKILL.md` (exit code: 0)
- scripts/validate_skill_installation.py: `uv run python scripts/validate_skill_installation.py` (exit code: 0)
- scripts/validate_skill_installation.py: `uv run python scripts/validate_skill_installation.py --check-global` (exit code: 0)
- scripts/validate_skill_installation.py: `uv run python scripts/validate_skill_installation.py --source /tmp` (exit code: 2)
- scripts/validate_skill_output.py: `echo '{"Success": true, "Data": {"result": "ok"}, "Metadata": {"Script": "test.py", "Timestamp": "2026-09-06T00:00:00Z"}, "Error": null}' | python3 scripts/validate_skill_output.py` (exit code: 0)
- scripts/validate_skill_output.py: `python3 scripts/validate_skill_output.py < /dev/null` (exit code: 1)
- scripts/validate_skill_output.py: `python3 scripts/validate_skill_output.py --input-file tests/evals/spec-scenarios.json` (exit code: 1)
- scripts/validate_skill_output.py: `python3 scripts/validate_skill_output.py --input-file /etc/passwd` (exit code: 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validate_skill_format.py` enforces ADR-017 (atomic one-skill-per-file format), but hardcodes filtering against `.serena/memories/` in its `--staged-only` and `--changed-files` paths, silently skipping skills in `.claude/skills/`.
- `scripts/validate_skill_installation.py` validates `SKILL.md` YAML frontmatter and name matching against skill directory names across `.claude/skills/` (95 skills validated clean on repo default branch).
- `scripts/validate_skill_output.py` implements the ADR-056 / ADR-103 standard envelope validator (`Success`, `Data`, `Metadata`, `Error`), with explicit CWE-22 traversal protection and defensive boolean rejection on integer `Error.Code`. It is cited by `scripts/github_core/output.py`, `ADR-056`, and `ADR-103`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~7,500 tokens (26,220 bytes across 3 Python scripts)
- Approximate tokens of output written: ~6,500 tokens across 3 cards and unit report
