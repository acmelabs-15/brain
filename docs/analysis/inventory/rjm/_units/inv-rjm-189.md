---
unit: inv-rjm-189
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-189

## Files assigned
- [x] `sources/rjm/docs/autonomous-pr-monitor.md`

## Outputs produced
- `docs/analysis/inventory/rjm/docs-autonomous-pr-monitor-md.md` (14373 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-189.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/autonomous-pr-monitor.md` is an autonomous operating prompt and operational runbook referenced by `docs/autonomous-issue-development.md:77, 455`.
- It integrates with Serena memory tools (`mcp__serena__*`) and `.serena/memories/`, which are excluded from the rjm lifecycle boundary per METHOD.md §1.2.
- It defines a comprehensive 5-tier PR triage framework (T1–T5) and an end-to-end 5-step conversation thread lifecycle (READ, TRIAGE, SOLVE, REPLY, RESOLVE) designed to coordinate automated review tools (`/pr-review`, Copilot, review bots).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,358 tokens (49,433 bytes)
Approximate tokens of output written: ~3,800 tokens (14,373 bytes card + report)
