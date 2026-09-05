---
unit: inv-rjm-70
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-70

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/qa.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/quality-auditor.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-qa-md.md` (10854 bytes)
- `docs/analysis/inventory/rjm/claude-agents-quality-auditor-md.md` (5680 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-quality-auditor-md--templates-agents-quality-auditor-shared-md.md` (1618 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-qa-md--templates-agents-qa-shared-md.md` (5830 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-70.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/agents/quality-auditor.md` forms VARIANT pair V10 with `templates/agents/quality-auditor.shared.md` (assigned to `inv-rjm-320`), sharing 93% of lines across 1 hunk.
- `.claude/agents/qa.md` forms VARIANT pair V19 with `templates/agents/qa.shared.md` (assigned to `inv-rjm-319`), sharing 87% of lines across 8 hunks.
- Both files reference scripts under `.claude/skills/` (`quality-grades/scripts/grade_domains.py` and `github/scripts/pr/validate_pr_description.py`) that are missing in `.claude/` and only exist under `src/copilot-cli/skills/`.
- `.claude/agents/qa.md` references `.agents/governance/TESTING-RIGOR.md` as its single source of truth for test commands, but this file is missing repository-wide.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~8,500 tokens (34,836 bytes across 2 source files plus variant files).
Approximate output written: ~5,900 tokens across 2 inventory cards, 2 divergence cards, and 1 unit report.
