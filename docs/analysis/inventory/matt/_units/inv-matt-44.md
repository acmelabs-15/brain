---
unit: inv-matt-44
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-44

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/git-guardrails-claude-code/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/git-guardrails-claude-code/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/migrate-to-shoehorn/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/migrate-to-shoehorn/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/README.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/scaffold-exercises/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/scaffold-exercises/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/setup-pre-commit/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/misc/setup-pre-commit/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/grill-me/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/grill-me/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-agents-openai-yaml.md` (1634 bytes)
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md` (4672 bytes)
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-skill-md.md` (5199 bytes)
- `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-agents-openai-yaml.md` (1442 bytes)
- `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-skill-md.md` (3756 bytes)
- `docs/analysis/inventory/matt/skills-misc-readme-md.md` (2627 bytes)
- `docs/analysis/inventory/matt/skills-misc-scaffold-exercises-agents-openai-yaml.md` (1419 bytes)
- `docs/analysis/inventory/matt/skills-misc-scaffold-exercises-skill-md.md` (4049 bytes)
- `docs/analysis/inventory/matt/skills-misc-setup-pre-commit-agents-openai-yaml.md` (1386 bytes)
- `docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md` (4388 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grill-me-agents-openai-yaml.md` (1943 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grill-me-skill-md.md` (2341 bytes)

## Scripts executed
- `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, `echo '{"tool_input":{"command":"git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, exit code: 2
- `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, `echo '{"tool_input":{"command":"git status"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/misc/` contains standalone developer utilities that are grouped together and not promoted in the main plugin.
- `skills/productivity/grill-me` delegates entirely to the `grilling` skill via `Call the Skill tool with "grilling"`. It is the user-invoked stateless front door corresponding to `grill-with-docs` (which is stateful and writes `CONTEXT.md` / ADRs).
- All Phase 1V findings from `docs/analysis/inventory/matt/_verification.md` and DISPATCH.md were addressed:
  - Added `interface`, `display_name`, `short_description` (and `policy`, `allow_implicit_invocation` where present) to all `openai.yaml` cards.
  - Added `as Type`, `as unknown as Type`, `partial test data` to `skills/misc/migrate-to-shoehorn/SKILL.md`.
  - Added package managers `npm`, `pnpm`, `yarn`, `bun`, `npx husky init`, and `smoke test` to `skills/misc/setup-pre-commit/SKILL.md`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~3,200 tokens (12,869 bytes across 12 files).
Approximate output written: ~8,700 tokens (34,856 bytes across 12 cards + 1 unit report).
