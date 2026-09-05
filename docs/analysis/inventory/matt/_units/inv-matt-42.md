---
unit: inv-matt-42
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-42

## Files assigned
- [x] sources/matt/skills/engineering/wayfinder/agents/openai.yaml (144 bytes, 6 lines)
- [x] sources/matt/skills/engineering/wayfinder/SKILL.md (11908 bytes, 129 lines)
- [x] sources/matt/skills/engineering/wizard/agents/openai.yaml (96 bytes, 4 lines)
- [x] sources/matt/skills/engineering/wizard/SKILL.md (4123 bytes, 45 lines)
- [x] sources/matt/skills/engineering/wizard/template.sh (8567 bytes, 205 lines)
- [x] sources/matt/skills/in-progress/claude-handoff/agents/openai.yaml (141 bytes, 6 lines)
- [x] sources/matt/skills/in-progress/claude-handoff/SKILL.md (1301 bytes, 19 lines)
- [x] sources/matt/skills/in-progress/implement-spec/agents/openai.yaml (143 bytes, 6 lines)
- [x] sources/matt/skills/in-progress/implement-spec/SKILL.md (2043 bytes, 36 lines)
- [x] sources/matt/skills/in-progress/loop-me/agents/openai.yaml (140 bytes, 6 lines)
- [x] sources/matt/skills/in-progress/loop-me/SKILL.md (2522 bytes, 33 lines)
- [x] sources/matt/skills/in-progress/README.md (2177 bytes, 19 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-wayfinder-agents-openai-yaml.md (1860 bytes)
- docs/analysis/inventory/matt/skills-engineering-wayfinder-skill-md.md (6285 bytes)
- docs/analysis/inventory/matt/skills-engineering-wizard-agents-openai-yaml.md (1589 bytes)
- docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md (4276 bytes)
- docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md (5530 bytes)
- docs/analysis/inventory/matt/skills-in-progress-claude-handoff-agents-openai-yaml.md (1836 bytes)
- docs/analysis/inventory/matt/skills-in-progress-claude-handoff-skill-md.md (2703 bytes)
- docs/analysis/inventory/matt/skills-in-progress-implement-spec-agents-openai-yaml.md (1851 bytes)
- docs/analysis/inventory/matt/skills-in-progress-implement-spec-skill-md.md (3240 bytes)
- docs/analysis/inventory/matt/skills-in-progress-loop-me-agents-openai-yaml.md (1770 bytes)
- docs/analysis/inventory/matt/skills-in-progress-loop-me-skill-md.md (3515 bytes)
- docs/analysis/inventory/matt/skills-in-progress-readme-md.md (2889 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-42.md

## Scripts executed
- `skills/engineering/wizard/template.sh`: `bash -n sources/matt/skills/engineering/wizard/template.sh`, exit code 0; interactive execution in sandbox with mock browser, mock env file, and piped keystrokes (`printf "\npk_test_12345\nsk_test_67890\n" | ... bash sources/matt/skills/engineering/wizard/template.sh`), exit code 0
- `skills/in-progress/README.md` (installation command example): executed: no (package manager command intended for end-user environment setup)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `wayfinder` (`SKILL.md`) implements high-level multi-session architectural exploration using issue trackers, defining the 4 decision-ticket types (`research`, `prototype`, `grilling`, `task`) and native blocking frontier queries. Two defects noted: line 25 documentation drift referencing `/setup-matt-pocock-skills` and tracker docs at non-existent `docs/agents/issue-tracker.md` (actual template is at `skills/engineering/setup-matt-pocock-skills/issue-tracker.md`), and line 13 internal contradiction allowing map Notes to override the "Plan, don't do" rule (documented in `docs/engineering/wayfinder.md:68-70` as leading to live-agent execution breaches).
- `wizard` (`SKILL.md` and `template.sh`) provides a repeatable bash wizard generator for manual steps only humans can perform. `template.sh` functions as both the shared library and an executable example with Stripe onboarding. `agents/openai.yaml` omits `policy.allow_implicit_invocation: false`, enabling autonomous model-invoked generation when hitting human-only hurdles.
- `in-progress/` bucket (`README.md`, `claude-handoff`, `implement-spec`, `loop-me`) represents Matt's incubation tier (excluded from `.claude-plugin/plugin.json`, top-level `README.md`, and docs pages).
- `implement-spec` establishes the multi-agent task graph and worktree concurrency pattern, specifying exploration subagents, background implementer subagents in isolated worktrees, merger subagents, and sparse context pointers.
- `claude-handoff` implements immediate conversation forking into asynchronous background CLI processes (`claude --bg --name`).
- `loop-me` establishes workflow specification concepts ("loop lens", triggers, checkpoints, decision-ready briefs, and "push right" checkpoint deferral).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,350 tokens (33,305 bytes across 12 files).
Approximate tokens of output written: ~9,350 tokens (37,337 bytes across 12 cards and work-unit report).
