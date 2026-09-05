---
unit: inv-addy-45
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-45

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/planning-and-task-breakdown/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/security-and-hardening/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/shipping-and-launch/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md` (6388 bytes)
- `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md` (7794 bytes)
- `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md` (6359 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-addy-45 covers 3 major skills in Addy's lifecycle: `skills/planning-and-task-breakdown/SKILL.md` (`addy:Plan`), `skills/security-and-hardening/SKILL.md` (`addy:Review`), and `skills/shipping-and-launch/SKILL.md` (`addy:Ship`).
- `planning-and-task-breakdown` defines the canonical task structure, task sizing guidelines (XS/S/M/L/XL), vertical slicing principles, and default `tasks/todo.md` convention used by `commands/build.toml` (inv-addy-1) and `skills/spec-driven-development/SKILL.md` (inv-addy-46).
- `security-and-hardening` establishes the three-tier boundary rules (Always Do, Ask First, Never Do), STRIDE threat modeling, and dependency audit triage referenced across `commands/review.toml` (inv-addy-1), `skills/code-review-and-quality/SKILL.md` (inv-addy-30), and `references/definition-of-done.md`.
- `shipping-and-launch` supplies the release checklists and staged rollout thresholds referenced by `commands/ship.toml` (inv-addy-1) and `skills/git-workflow-and-versioning/SKILL.md` (inv-addy-33).
- None of this unit's files appear in `docs/analysis/manifest/addy-duplicates.md` (no ledger duplicates).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,200 tokens (44,893 bytes across 3 source files); approximate tokens of output written: ~5,200 tokens (20,541 bytes across 3 inventory cards).
