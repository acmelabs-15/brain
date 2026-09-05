---
unit: inv-matt-40
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-40

## Files assigned
- [x] sources/matt/skills/engineering/research/agents/openai.yaml (94 bytes, 4 lines)
- [x] sources/matt/skills/engineering/research/SKILL.md (794 bytes, 13 lines)
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/agents/openai.yaml (113 bytes, 4 lines)
- [x] sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md (918 bytes, 15 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/agents/openai.yaml (152 bytes, 6 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md (2033 bytes, 52 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md (3731 bytes, 46 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md (3809 bytes, 47 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md (1810 bytes, 31 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md (6841 bytes, 117 lines)
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/triage-labels.md (1045 bytes, 16 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-research-agents-openai-yaml.md (1727 bytes)
- docs/analysis/inventory/matt/skills-engineering-research-skill-md.md (2973 bytes)
- docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-agents-openai-yaml.md (1766 bytes)
- docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-skill-md.md (4152 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-agents-openai-yaml.md (2063 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-domain-md.md (3570 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-github-md.md (4615 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-gitlab-md.md (4559 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-local-md.md (4292 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-skill-md.md (5425 bytes)
- docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-triage-labels-md.md (2736 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-40.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `research` (`SKILL.md`, `agents/openai.yaml`): Designed as a model-invoked delegable reading tool that spins up a background agent to investigate questions against primary sources (official docs, source code, specs, first-party APIs) and saves findings to repository notes. It keeps primary session context unpolluted.
- `resolving-merge-conflicts` (`SKILL.md`, `agents/openai.yaml`): A 5-step model-invoked standalone resolution loop for in-progress git merge/rebase conflicts. Traces conflicting changes to their primary sources (commit messages, PRs, issues) to discern original developer intent, resolves hunk by hunk without inventing behavior, strictly forbids `--abort`, runs automated checks, and completes the commit.
- `setup-matt-pocock-skills` (`SKILL.md`, `agents/openai.yaml`, `domain.md`, `issue-tracker-github.md`, `issue-tracker-gitlab.md`, `issue-tracker-local.md`, `triage-labels.md`): Foundational repository scaffolding skill. It is strictly user-invoked (`disable-model-invocation: true` and `policy.allow_implicit_invocation: false`), executing a 5-step interactive wizard that writes repository configuration to `docs/agents/` and updates `CLAUDE.md` or `AGENTS.md`. Seeds concrete tracking and wayfinding operations across GitHub (`gh` CLI + native issue dependencies using database IDs), GitLab (`glab` CLI + `/blocked_by` quick action), and local markdown files (`.scratch/<feature>/`). Downstream skills (`to-spec`, `to-tickets`, `triage`, `code-review`, `wayfinder`) declare hard preconditions requiring this setup.
- Multi-harness metadata: Model-invoked skills (`research`, `resolving-merge-conflicts`) permit implicit invocation; user-invoked `setup-matt-pocock-skills` enforces `allow_implicit_invocation: false`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~5,335 tokens (21,340 bytes across 11 files).
Approximate output tokens written: ~10,600 tokens (42,500 bytes across 11 cards and unit report).
