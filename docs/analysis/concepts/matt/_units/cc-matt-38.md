---
unit: cc-matt-38
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-38

## Files assigned
- [x] sources/matt/skills/misc/setup-pre-commit/SKILL.md
- [x] sources/matt/skills/productivity/README.md
- [x] sources/matt/skills/productivity/grill-me/SKILL.md
- [x] sources/matt/skills/productivity/grilling/SKILL.md
- [x] sources/matt/skills/productivity/grilling/agents/openai.yaml
- [x] sources/matt/skills/productivity/handoff/SKILL.md
- [x] sources/matt/skills/productivity/handoff/agents/openai.yaml
- [x] sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md
- [x] sources/matt/skills/productivity/teach/SKILL.md
- [x] sources/matt/skills/productivity/teach/agents/openai.yaml
- [x] docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-grill-me-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-grilling-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-productivity-grilling-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-handoff-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-productivity-handoff-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-readme-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/husky.md — 1058 bytes
- docs/analysis/concepts/matt/pre-commit-hook.md — 1070 bytes
- docs/analysis/concepts/matt/test.md — 901 bytes
- docs/analysis/concepts/matt/package-lock-json.md — 988 bytes
- docs/analysis/concepts/matt/npm.md — 942 bytes
- docs/analysis/concepts/matt/pnpm-lock-yaml.md — 933 bytes
- docs/analysis/concepts/matt/pnpm.md — 914 bytes
- docs/analysis/concepts/matt/yarn-lock.md — 918 bytes
- docs/analysis/concepts/matt/yarn.md — 887 bytes
- docs/analysis/concepts/matt/bun-lockb.md — 935 bytes
- docs/analysis/concepts/matt/bun.md — 909 bytes
- docs/analysis/concepts/matt/npx-husky-init.md — 855 bytes
- docs/analysis/concepts/matt/husky-pre-commit.md — 891 bytes
- docs/analysis/concepts/matt/lintstagedrc.md — 886 bytes
- docs/analysis/concepts/matt/prettierrc.md — 869 bytes
- docs/analysis/concepts/matt/smoke-test.md — 1172 bytes
- docs/analysis/concepts/matt/relentless-interview.md — 1182 bytes
- docs/analysis/concepts/matt/stress-test-thinking-a-round-of-questions-at-a-time.md — 1072 bytes
- docs/analysis/concepts/matt/recommended-answer.md — 1328 bytes
- docs/analysis/concepts/matt/compact-a-conversation-into-a-handoff.md — 1010 bytes
- docs/analysis/concepts/matt/fresh-agent.md — 1183 bytes
- docs/analysis/concepts/matt/temporary-directory.md — 1000 bytes
- docs/analysis/concepts/matt/workspace.md — 946 bytes
- docs/analysis/concepts/matt/general-workflow-tools.md — 978 bytes
- docs/analysis/concepts/matt/stateful-teaching-workspace.md — 1277 bytes
- docs/analysis/concepts/matt/markdown-questionnaire.md — 1319 bytes
- docs/analysis/concepts/matt/trigger-phrasing.md — 1188 bytes
- docs/analysis/concepts/matt/guided-workspace.md — 1182 bytes
- docs/analysis/concepts/matt/learn-a-concept-in-a-guided-workspace.md — 1002 bytes
- docs/analysis/concepts/matt/teaching-workspace.md — 1931 bytes
- docs/analysis/concepts/matt/_units/cc-matt-38.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/husky.md docs/analysis/concepts/matt/pre-commit-hook.md docs/analysis/concepts/matt/test.md docs/analysis/concepts/matt/package-lock-json.md docs/analysis/concepts/matt/npm.md docs/analysis/concepts/matt/pnpm-lock-yaml.md docs/analysis/concepts/matt/pnpm.md docs/analysis/concepts/matt/yarn-lock.md docs/analysis/concepts/matt/yarn.md docs/analysis/concepts/matt/bun-lockb.md docs/analysis/concepts/matt/bun.md docs/analysis/concepts/matt/npx-husky-init.md docs/analysis/concepts/matt/husky-pre-commit.md docs/analysis/concepts/matt/lintstagedrc.md docs/analysis/concepts/matt/prettierrc.md docs/analysis/concepts/matt/smoke-test.md docs/analysis/concepts/matt/relentless-interview.md docs/analysis/concepts/matt/stress-test-thinking-a-round-of-questions-at-a-time.md docs/analysis/concepts/matt/recommended-answer.md docs/analysis/concepts/matt/compact-a-conversation-into-a-handoff.md docs/analysis/concepts/matt/fresh-agent.md docs/analysis/concepts/matt/temporary-directory.md docs/analysis/concepts/matt/workspace.md docs/analysis/concepts/matt/general-workflow-tools.md docs/analysis/concepts/matt/stateful-teaching-workspace.md docs/analysis/concepts/matt/markdown-questionnaire.md docs/analysis/concepts/matt/trigger-phrasing.md docs/analysis/concepts/matt/guided-workspace.md docs/analysis/concepts/matt/learn-a-concept-in-a-guided-workspace.md docs/analysis/concepts/matt/teaching-workspace.md — exit 0 (30 PASS, 0 FAIL)
- bun scripts/synthesis/coverage.ts — verified 0 uncovered concepts for unit cc-matt-38

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The concepts in this unit span two major areas: development quality tooling (`setup-pre-commit`) and productivity skills (`grill-me`, `grilling`, `handoff`, `teach`, and `to-questionnaire`).
- `setup-pre-commit` establishes client-side Git quality gates (`pre-commit-hook`, `smoke-test`) orchestrating Linters and Prettier formatters, referencing specific tool identifiers and configuration files classified as `name-only` under D-023 (`Husky`, `package-lock.json`, `npm`, `pnpm-lock.yaml`, `pnpm`, `yarn.lock`, `yarn`, `bun.lockb`, `bun`, `npx husky init`, `.husky/pre-commit`, `.lintstagedrc`, `.prettierrc`, and `test`).
- `grilling` and `grill-me` implement recursive, relentless decision-tree questioning (`relentless interview`). They utilize the `recommended answer` pattern where the agent batches frontier questions and pairs each with a concrete recommendation (`➡️ <recommendation>`) to lower cognitive friction for the user.
- `handoff` formalizes context reset boundaries, defining the target `fresh agent` role while prescribing storage in the OS `temporary directory` rather than the active `workspace` to prevent workspace clutter.
- The productivity index (`README.md`) defines `General workflow tools` and introduces the `stateful teaching workspace` pattern, `Markdown questionnaire` artifact, and `trigger phrasing` authoring technique for model-invoked capabilities.
- `teach` expands the `teaching workspace` and `guided workspace` patterns into multi-session, directory-grounded learning environments. The `teaching-workspace` concept inherits two known defects documented in its inventory (`doc-drift` where `teach/SKILL.md:14-17` omits the link to `GLOSSARY-FORMAT.md`, and `other` where `teach/SKILL.md:85-90` lacks an initial knowledge assessment step).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~18,800 bytes (~4,200 tokens) across 10 source files and ~35,000 bytes (~7,800 tokens) across 10 citing inventory cards.
Approximate output written: ~31,700 bytes (~7,100 tokens) across 30 concept cards and ~4,900 bytes (~1,100 tokens) in this unit report.
