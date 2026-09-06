---
unit: inv-rjm-153
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-153

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/scripts/validate_findings_scope.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/scripts/validate_review_marker.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-review-scripts-validate-findings-scope-py.md` (8471 bytes)
- `docs/analysis/inventory/rjm/claude-skills-review-scripts-validate-review-marker-py.md` (9532 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-153.md` (this report)

## Scripts executed
- `.claude/skills/review/scripts/validate_findings_scope.py`: `python3 .claude/skills/review/scripts/validate_findings_scope.py --text "location: foo.py:10\nVerdict: PASS"` — exit code 0
- `.claude/skills/review/scripts/validate_findings_scope.py`: `python3 .claude/skills/review/scripts/validate_findings_scope.py --base-branch vendor-provenance-base --text "location: nonexistent_file.py:42\nVerdict: CRITICAL_FAIL" --emit-adjusted-text` — exit code 1
- `.claude/skills/review/scripts/validate_review_marker.py`: `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --ref HEAD --repo-root sources/rjm` — exit code 1
- `.claude/skills/review/scripts/validate_review_marker.py`: `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --repo-root /nonexistent_path_xyz` — exit code 2
- `.claude/skills/review/scripts/validate_review_marker.py`: `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --ref HEAD --repo-root <tmp_repo>` (with empty commit naming parent tip) — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/review/scripts/validate_review_marker.py` is byte-identical (`544dafe1234d93af`, 16215 bytes) to `scripts/validation/validate_review_marker.py` (group 2 in `docs/analysis/manifest/rjm-duplicates.md`). In `units.md`, `scripts/validation/validate_review_marker.py` is assigned to unit `inv-rjm-309`.
- Both scripts in this unit form the mechanical gating spine of `rjm:review`: `validate_findings_scope.py` scopes axis findings against git three-dot diffs to avoid blocking PRs on pre-existing code, and `validate_review_marker.py` verifies the SHA-bound `Reviewed-By:` empty marker commit required by `/ship`.

## Blocked or uncertain
none

## Time and size
Source read: 28,228 bytes (~7,100 tokens across 2 scripts + SKILL.md context). Output written: ~18,000 bytes (~4,500 tokens across 2 cards and unit report).
