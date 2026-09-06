---
unit: inv-rjm-115
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-115

## Files assigned
- [x] `.claude/skills/decision-critic/scripts/decision-critic.py`
- [x] `.claude/skills/decision-critic/SKILL.md`

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-decision-critic-scripts-decision-critic-py.md (12813 bytes)
- docs/analysis/inventory/rjm/claude-skills-decision-critic-skill-md.md (15226 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-115.md (2427 bytes)

## Scripts executed
- `.claude/skills/decision-critic/scripts/decision-critic.py`, `python3 sources/rjm/.claude/skills/decision-critic/scripts/decision-critic.py --step-number 1 --total-steps 7 --decision "Migrate from REST to GraphQL for user dashboard" --context "High latency, mobile clients need specific fields" --thoughts "Initial decision evaluation"`, exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/decision-critic` is partitioned across `inv-rjm-114` (part 1: 11 reference documents under `references/`) and `inv-rjm-115` (part 2: `SKILL.md` and `scripts/decision-critic.py`).
- Identified unreferenced reference file: `.claude/skills/decision-critic/references/decision-pre-committed-metrics.md` (4403 bytes) exists on disk and was inventoried in `inv-rjm-114`, but is never referenced or linked from `SKILL.md` or `decision-critic.py`.
- Detected doc-drift and exit-code mismatch between `SKILL.md` and `decision-critic.py`: `SKILL.md` documents exit code 2 for "Analysis failed or incomplete" and mandates a "STAND (clean or flagged)" verdict under the rewrite-regression check, but `decision-critic.py` does not inspect analysis completeness, only supports unflagged `STAND | REVISE | ESCALATE`, and has no code path or knowledge of the rewrite-regression check.
- Parameter discard: `decision-critic.py` requires `--thoughts` on the CLI, but discards it without printing or validating.

## Blocked or uncertain
none

## Time and size
Source read: 28383 bytes (~7095 tokens); Output written: ~30500 bytes (~7625 tokens).
