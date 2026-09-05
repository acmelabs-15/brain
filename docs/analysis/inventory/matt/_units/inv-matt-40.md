---
unit: inv-matt-40
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-40

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/research/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/research/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/resolving-merge-conflicts/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/triage-labels.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-research-agents-openai-yaml.md` (1397 bytes)
- `docs/analysis/inventory/matt/skills-engineering-research-skill-md.md` (2805 bytes)
- `docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-agents-openai-yaml.md` (1517 bytes)
- `docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-skill-md.md` (3334 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-agents-openai-yaml.md` (1745 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-domain-md.md` (3490 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-github-md.md` (4091 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-gitlab-md.md` (4309 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-local-md.md` (3833 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-skill-md.md` (6679 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-triage-labels-md.md` (2961 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-40 covers three engineering skills in the `matt` package: `research`, `resolving-merge-conflicts`, and `setup-matt-pocock-skills` (including its 5 seed templates and agent configurations).
- Key cross-unit and architectural observations:
  1. `research`:
     - Designed as an asynchronous background task runner that delegates reading legwork to a subagent to avoid clogging the primary session context.
     - Mandates strict primary-source discipline (official docs, source code, specs, first-party APIs) and persistent cited Markdown note emission.
     - Invoked directly by `wayfinder` during charting to resolve research tickets in parallel on throwaway branches.
     - Defect documented in `docs/engineering/research.md:35`: lack of agent restriction can trigger nested recursive research subagent loops (issue #530).
  2. `resolving-merge-conflicts`:
     - Concise 5-step loop for in-progress merge/rebase conflicts.
     - Imposes strict invariant rules: "Always resolve; never `--abort`" and "Do not invent new behaviour."
     - Mandates tracing intent back to primary sources (PRs, issues, commit messages) before resolving hunks, and validating via project automated checks (typecheck, test, format).
  3. `setup-matt-pocock-skills`:
     - Central configuration scaffold for the engineering suite. Inspects repository signals and prompts the user through three configuration axes: issue tracker (`docs/agents/issue-tracker.md`), triage labels (`docs/agents/triage-labels.md`), and domain docs (`docs/agents/domain.md`), while editing `CLAUDE.md` or `AGENTS.md`.
     - Explicitly marks `disable-model-invocation: true` in `SKILL.md` and `allow_implicit_invocation: false` in `openai.yaml` to ensure autonomous agents never re-trigger repository setup without human direction.
     - Emits seed templates that decouple downstream skills (`to-spec`, `to-tickets`, `wayfinder`, `triage`, `code-review`) from specific issue tracker platforms (GitHub, GitLab, or local markdown files under `.scratch/`).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,300 tokens (21,340 bytes across 11 files); approximate tokens of output written: ~8,500 tokens (36,161 bytes across 11 inventory cards).
