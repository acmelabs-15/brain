---
unit: inv-rjm-147
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-147

## Files assigned
- [x] `.claude/skills/research-and-incorporate/references/workflow.md` (15039 bytes) — read in full
- [x] `.claude/skills/research-and-incorporate/SKILL.md` (10050 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-research-and-incorporate-references-workflow-md.md` (13531 bytes)
- `docs/analysis/inventory/rjm/claude-skills-research-and-incorporate-skill-md.md` (9983 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/research-and-incorporate/SKILL.md` and `references/workflow.md` form the execution core invoked by `.claude/commands/research.md` (unit `inv-rjm-74`) and referenced by `.claude/skills/autoplan/SKILL.md` (unit `inv-rjm-69`).
- `references/memory-templates.md` in the same skill directory is inventoried separately in `inv-rjm-146` (partitioned by partition.ts).
- Cross-references to memory systems (`Serena`, `Forgetful`) represent concepts across the rjm exclusion boundary (`implementation_in_scope: false`); only the caller's invocation contract is inventoried.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~6,272 tokens (25,089 bytes across 2 files).
Approximate output written: ~5,878 tokens (23,514 bytes across 2 inventory cards).
