---
unit: inv-matt-37
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-37

## Files assigned
- [x] sources/matt/README.md (15587 bytes, 232 lines)
- [x] sources/matt/scripts/link-skills.sh (1815 bytes, 57 lines)
- [x] sources/matt/scripts/list-skills.sh (168 bytes, 8 lines)
- [x] sources/matt/scripts/sync-plugin-version.mjs (1429 bytes, 42 lines)
- [x] sources/matt/skills/deprecated/README.md (160 bytes, 4 lines)
- [x] sources/matt/skills/engineering/ask-matt/agents/openai.yaml (137 bytes, 6 lines)
- [x] sources/matt/skills/engineering/ask-matt/PHASE-BOUNDARIES.md (4249 bytes, 56 lines)
- [x] sources/matt/skills/engineering/ask-matt/SKILL.md (11417 bytes, 91 lines)
- [x] sources/matt/skills/engineering/code-review/agents/openai.yaml (100 bytes, 4 lines)
- [x] sources/matt/skills/engineering/code-review/SKILL.md (6589 bytes, 88 lines)

## Outputs produced
- docs/analysis/inventory/matt/readme-md.md (6952 bytes)
- docs/analysis/inventory/matt/scripts-link-skills-sh.md (3523 bytes)
- docs/analysis/inventory/matt/scripts-list-skills-sh.md (2800 bytes)
- docs/analysis/inventory/matt/scripts-sync-plugin-version-mjs.md (4173 bytes)
- docs/analysis/inventory/matt/skills-deprecated-readme-md.md (1951 bytes)
- docs/analysis/inventory/matt/skills-engineering-ask-matt-agents-openai-yaml.md (2191 bytes)
- docs/analysis/inventory/matt/skills-engineering-ask-matt-phase-boundaries-md.md (4387 bytes)
- docs/analysis/inventory/matt/skills-engineering-ask-matt-skill-md.md (7198 bytes)
- docs/analysis/inventory/matt/skills-engineering-code-review-agents-openai-yaml.md (2048 bytes)
- docs/analysis/inventory/matt/skills-engineering-code-review-skill-md.md (5691 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-37.md

## Scripts executed
- `scripts/link-skills.sh`: executed: no (targets host home directory `$HOME/.claude/skills` and `$HOME/.agents/skills`, modifying host environment)
- `scripts/list-skills.sh`: `bash sources/matt/scripts/list-skills.sh`, exit code 0
- `scripts/sync-plugin-version.mjs`: `node sources/matt/scripts/sync-plugin-version.mjs --check`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `README.md` serves as the root orientation and catalog for the repository, defining two distribution philosophies (read-only plugin vs. editable user files via `skills.sh`) and four core engineering problems (misalignment, verbosity, broken code, and ball of mud architecture).
- `scripts/link-skills.sh` links active skills into local agent directories, explicitly excluding `skills/deprecated/`.
- `scripts/list-skills.sh` outputs all 37 `SKILL.md` paths in the repository across all buckets.
- `scripts/sync-plugin-version.mjs` synchronizes release versions between `package.json` and `.claude-plugin/plugin.json`, supporting `--check` for CI.
- `skills/deprecated/README.md` documents an empty bucket policy where retired skills are deleted directly rather than retained as stubs.
- `ask-matt` router (`SKILL.md` and companion `PHASE-BOUNDARIES.md`) defines the main flow from idea to ship, on-ramps (`triage`, `diagnosing-bugs`, `wayfinder`), vocabulary layers (`domain-modeling`, `codebase-design`), and the 5-option decision tree for context management at phase boundaries (Continue > `/clear` > `/handoff` > Subagent > `/compact`).
- `code-review` (`SKILL.md`) implements a two-axis review (Standards and Spec) executed via parallel subagents without score merging or cross-axis reranking. Defect noted: line 13 references `docs/agents/issue-tracker.md`, which does not exist in the repository (the actual configuration template is at `skills/engineering/setup-matt-pocock-skills/issue-tracker.md`).
- Dual-harness metadata files (`agents/openai.yaml`) configure Codex/ChatGPT interface properties and mirror user-invoked constraints (`allow_implicit_invocation: false` for `ask-matt`, default implicit invocation enabled for `code-review`).

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~10,400 tokens (41,651 bytes across 10 files).
Approximate output tokens written: ~10,200 tokens (40,914 bytes across 10 cards and unit report).
