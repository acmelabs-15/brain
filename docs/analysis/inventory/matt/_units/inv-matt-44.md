---
unit: inv-matt-44
phase: 1
package: matt
session: 003
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
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-agents-openai-yaml.md` (1884 bytes)
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md` (4763 bytes)
- `docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-skill-md.md` (4884 bytes)
- `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-agents-openai-yaml.md` (1617 bytes)
- `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-skill-md.md` (3046 bytes)
- `docs/analysis/inventory/matt/skills-misc-readme-md.md` (1822 bytes)
- `docs/analysis/inventory/matt/skills-misc-scaffold-exercises-agents-openai-yaml.md` (1633 bytes)
- `docs/analysis/inventory/matt/skills-misc-scaffold-exercises-skill-md.md` (3005 bytes)
- `docs/analysis/inventory/matt/skills-misc-setup-pre-commit-agents-openai-yaml.md` (1538 bytes)
- `docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md` (3396 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grill-me-agents-openai-yaml.md` (1976 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grill-me-skill-md.md` (1748 bytes)

## Scripts executed
- `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, `echo '{"tool_input":{"command":"git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, exit code: 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-44 covers the complete `skills/misc/` bucket (`git-guardrails-claude-code`, `migrate-to-shoehorn`, `scaffold-exercises`, `setup-pre-commit`, and `README.md`) as well as the user-invoked entry point for the `grill-me` productivity skill (`skills/productivity/grill-me/SKILL.md` and `agents/openai.yaml`).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards required).
- Core architectural insights:
  - `skills/misc/` represents non-promoted utility and developer-support skills. Per `CLAUDE.md:9` and `CLAUDE.md:15`, misc skills are excluded from top-level `README.md`, do not have `docs/` pages, and are not shipped in `.claude-plugin/plugin.json`.
  - `git-guardrails-claude-code` provides a concrete pattern for lifecycle safety hooks, using Claude Code's PreToolUse exit code 2 convention to prevent destructive git operations (force pushes, hard resets, uncommitted deletions).
  - `grill-me` exemplifies Matt's decoupled architectural model: a lightweight user-invoked shell (`disable-model-invocation: true` in `SKILL.md`, `allow_implicit_invocation: false` in `agents/openai.yaml`) that directly hands off execution to the reusable model-invoked interview primitive `grilling`.
  - `migrate-to-shoehorn` and `setup-pre-commit` provide practical developer hygiene automation for test suites and git commit workflows.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,200 tokens (12,869 bytes across 12 files); approximate tokens of output written: ~7,800 tokens (31,312 bytes across 12 cards).
