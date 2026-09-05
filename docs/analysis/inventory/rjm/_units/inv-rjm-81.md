---
unit: inv-rjm-81
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-81

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/ai-agents-change-control/references/gate-ladder.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/ai-agents-change-control/references/incident-history.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/ai-agents-change-control/references/provenance.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/ai-agents-change-control/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/ai-agents-config-catalog/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-change-control-references-gate-ladder-md.md` (5078 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-change-control-references-incident-history-md.md` (6105 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-change-control-references-provenance-md.md` (5227 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-change-control-skill-md.md` (8167 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-config-catalog-skill-md.md` (10264 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `ai-agents-change-control` and `ai-agents-config-catalog` are complementary governance pillars: `ai-agents-change-control` defines change classification and gate triggering policy, whereas `ai-agents-config-catalog` catalogs every config flag, skip marker, and escape hatch with its abuse story. Both cross-invoke each other and are invoked by `ai-agents-architecture-contract`, `ai-agents-validation-and-qa`, `ai-agents-failure-archaeology`, `ai-agents-build-and-env`, and `ai-agents-generation-and-release`.
- Both skills tightly reflect historical incidents (e.g. session 1187 `SKIP_PREPUSH` abuse, PR #908 runaway diffs, PR #1942 plugin version caching, PR #2205 hook failures) and ADRs (ADR-006, ADR-034, ADR-066, ADR-071, ADR-092, ADR-099).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,200 tokens (48,716 bytes). Approximate tokens of output written: ~9,200 tokens (36,800 bytes).
