---
unit: inv-rjm-63
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-63

## Files assigned
- [x] sources/rjm/.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/steering/security-practices.md
- [x] sources/rjm/.claude/agents/AGENTS.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-specs-tasks-task-004-agent-eval-harness-spike-md.md (10641 bytes)
- docs/analysis/inventory/rjm/agents-steering-security-practices-md.md (6289 bytes)
- docs/analysis/inventory/rjm/claude-agents-agents-md.md (6902 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-63.md (1852 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/agents/AGENTS.md` is an EXACT byte-for-byte duplicate of `src/claude/AGENTS.md` (recorded in duplication ledger `docs/analysis/manifest/rjm-duplicates.md` EXACT row 4). `src/claude/AGENTS.md` is assigned to unit `inv-rjm-311`.
- `TASK-004-agent-eval-harness-spike.md` references requirements (`REQ-004`), design (`DESIGN-004`), and architecture decision records (`ADR-057` and `ADR-058` [which realized placeholder `ADR-NNN`]).
- `.agents/steering/security-practices.md` provides steering patterns referenced across agent roles (e.g. security instructions) and enforces commit-level action SHA pinning via Lefthook and `git_hook_policy.py`.

## Blocked or uncertain
none

## Time and size
Source read: 46072 bytes (~11518 tokens); output written: ~25500 bytes (~6375 tokens).
