---
unit: inv-rjm-154
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-154

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-review-skill-md.md` (21037 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-154.md`

## Scripts executed
- `.claude/skills/review/scripts/validate_review_marker.py`: `python3 sources/rjm/.claude/skills/review/scripts/validate_review_marker.py --repo-root sources/rjm`, exit code: 1
- `.claude/skills/review/scripts/validate_findings_scope.py`: `python3 sources/rjm/.claude/skills/review/scripts/validate_findings_scope.py --worktree sources/rjm --base-branch HEAD~1 --text "location: non_existent_file.py:10\nFinal Verdict: CRITICAL_FAIL" --emit-adjusted-text`, exit code: 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/review/SKILL.md` is the central skill definition for the sixth lifecycle phase (`rjm:review`), running after `/test` and before `/ship`.
- The skill references 12 canonical axis prompts under `.claude/skills/review/references/` (spec-compliance, analyst, architect, qa, security, devops, roadmap, reliability, observability, agent-safety, decision-rigor, code-quality) which are inventoried across other units in the `inv-rjm-150`..`inv-rjm-155` cluster.
- `SKILL.md` documents an empty marker commit convention using git trailers (`Reviewed-By: /review@<axis-list> on <reviewed-tip-sha>`) which is verified by `.claude/commands/ship.md` using `validate_review_marker.py`.
- No files in this unit appear in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`), so no divergence cards were required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,100 tokens (24,362 bytes); approximate tokens of output written: ~5,700 tokens (21,037 bytes for card, ~1,700 bytes for unit report).
