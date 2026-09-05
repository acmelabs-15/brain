---
unit: inv-addy-45
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-45

## Files assigned
- [x] sources/addy/skills/planning-and-task-breakdown/SKILL.md (10564 bytes, 258 lines)
- [x] sources/addy/skills/security-and-hardening/SKILL.md (24192 bytes, 500 lines)
- [x] sources/addy/skills/shipping-and-launch/SKILL.md (10137 bytes, 311 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md (9357 bytes)
- docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md (12022 bytes)
- docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md (9846 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-45.md (2254 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/planning-and-task-breakdown/SKILL.md` defines the canonical format for task breakdown (`tasks/plan.md`, `tasks/todo.md`, and external trackers) which is cited and referenced by `skills/spec-driven-development/SKILL.md`, `commands/build.toml`, and `.claude/commands/plan.md`.
- `skills/security-and-hardening/SKILL.md` defines security and privacy boundaries, supply chain hygiene, and AI/LLM defenses cited across review commands, `references/security-checklist.md`, and `skills/code-review-and-quality/SKILL.md`.
- `skills/shipping-and-launch/SKILL.md` synthesizes four separate pre-launch checklists (`definition-of-done.md`, `security-checklist.md`, `performance-checklist.md`, `accessibility-checklist.md`) and defines the staged rollout thresholds cited by `/ship` commands and `skills/git-workflow-and-versioning/SKILL.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,223 tokens (44,893 bytes across 3 source files plus references). Approximate tokens of output written: ~8,300 tokens (~33,225 bytes across 3 inventory cards and 1 unit report).
