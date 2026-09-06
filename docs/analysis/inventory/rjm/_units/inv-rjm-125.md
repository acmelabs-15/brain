---
unit: inv-rjm-125
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-125

## Files assigned
- [x] `.claude/skills/merge-resolver/references/strategies.md`
- [x] `.claude/skills/merge-resolver/scripts/CLAUDE.md`
- [x] `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`
- [x] `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-merge-resolver-references-strategies-md.md (8029 bytes)
- docs/analysis/inventory/rjm/claude-skills-merge-resolver-scripts-claude-md.md (2696 bytes)
- docs/analysis/inventory/rjm/claude-skills-merge-resolver-scripts-resolve-pr-conflicts-py.md (10497 bytes)
- docs/analysis/inventory/rjm/claude-skills-merge-resolver-scripts-verify-no-conflict-markers-py.md (6234 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-125.md (2894 bytes)

## Scripts executed
- `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`, `python3 sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py --pr-number 123 --branch-name "fix/test" --dry-run`, exit code 0
- `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`, `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --json`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit covers part 1 of `.claude/skills/merge-resolver`. Part 2 (`SKILL.md`) is covered by unit `inv-rjm-126`.
- `.claude/skills/merge-resolver/scripts/CLAUDE.md` is an exact 170-byte duplicate (hash `dbfec62ab652ff10`) in EXACT group 5 of the rjm duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`).
- `references/strategies.md` references `.prettierrc` (missing in repository root), which is noted as a `missing-path` defect.
- `scripts/resolve_pr_conflicts.py` has an `exit-code-mismatch` defect where exit code 3 is documented for external git errors but git failures cause `main()` to return 1; also notes a `doc-drift` where commit messages hardcode `auto-resolve HANDOFF.md conflicts` when resolving other file types.
- `scripts/verify_no_conflict_markers.py` clean implementation of ADR-035 exit codes (0, 1, 2, 3) and git plumbing checks (`diff-filter=U` and `diff --check`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,000 tokens (47,681 bytes across 4 assigned files + 16,520 bytes of SKILL.md for context).
Approximate tokens of output written: ~7,500 tokens (27,456 bytes across 4 inventory cards + unit report).
