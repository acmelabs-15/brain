---
unit: inv-rjm-77
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-77

## Files assigned
- [x] `.claude/skills/adr-review/CLAUDE.md`
- [x] `.claude/skills/adr-review/references/agent-prompts.md`
- [x] `.claude/skills/adr-review/references/artifacts.md`
- [x] `.claude/skills/adr-review/references/debate-protocol.md`
- [x] `.claude/skills/adr-review/references/deletion-workflow.md`
- [x] `.claude/skills/adr-review/references/issue-resolution.md`
- [x] `.claude/skills/adr-review/references/zimmermann-review-guidance.md`
- [x] `.claude/skills/adr-review/scripts/CLAUDE.md`

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-adr-review-claude-md.md (2148 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-agent-prompts-md.md (6944 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-artifacts-md.md (4923 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-debate-protocol-md.md (6922 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-deletion-workflow-md.md (4427 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-issue-resolution-md.md (4906 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-references-zimmermann-review-guidance-md.md (6005 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-scripts-claude-md.md (2659 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-77.md (3177 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit covers part 1 of `.claude/skills/adr-review`. Part 2 (`detect_adr_changes.py` and `SKILL.md`) is assigned to unit `inv-rjm-78`.
- `.claude/skills/adr-review/CLAUDE.md` and `.claude/skills/adr-review/scripts/CLAUDE.md` are exact 170-byte duplicates (hash `dbfec62ab652ff10`) in EXACT group 5 of the rjm duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`).
- In `zimmermann-review-guidance.md:69`, there is a missing relative reference `../../adr-generator/references/ad-quality-frameworks.md` because `adr-generator` is not present in `.claude/skills/`.
- In `artifacts.md:82`, there is an unqualified reference `architect.md` which resolves to `src/claude/architect.md` or `.claude/agents/architect.md`.
- Reference files declare vendor portability handling: `agent-prompts.md`, `artifacts.md`, and `deletion-workflow.md` include HTML comment declarations explaining behavior when `.agents/architecture/` or `.agents/critique/` do not exist in consumer repositories.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens (37,803 bytes across 8 assigned files + 12,171 bytes of SKILL.md for context).
Approximate tokens of output written: ~11,000 tokens (38,934 bytes across 8 inventory cards + unit report).
