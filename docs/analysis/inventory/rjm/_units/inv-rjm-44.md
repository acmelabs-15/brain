---
unit: inv-rjm-44
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-44

## Files assigned
- [x] `.agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-099-remove-commit-limit-bypass-gate-md.md` (11784 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-44.md` (1850 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-099 removes the commit-count block (>20 commits, or >40 with main merge relief) and `commit-limit-bypass` label, keeping the `needs-split` label and `OK`/`WARNING`/`ALERT` thresholds advisory.
- Directly impacts units inventorying `scripts/validation/pr_commit_count.py`, `scripts/ci/enforce_pr_validation.py`, `scripts/validation/git_hook_policy.py`, `.github/workflows/pr-validation.yml`, `CONTRIBUTING.md`, and `.claude/skills/ai-agents-change-control/references/gate-ladder.md`.
- ADR-099 notes conceptual overlap with ADR-100 ("Retire the Pull Request Size Ceilings") and ADR-101 ("Enforcement Planes"); neither ADR supersedes the other as written.
- Documents enforcement of the `adr-review` skill (`.claude/skills/adr-review/`) via a mandatory six-role panel after PR #5234 automated review rejected an exemption attempt.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4,500 tokens (18,974 bytes)
Approximate tokens of output written: ~3,500 tokens (~13,634 bytes)
