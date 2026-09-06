---
unit: cc-addy-1
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-1

## Files assigned
- [x] .claude/rules/skills-contributing.md
- [x] .codex-plugin/plugin.json
- [x] .gemini/commands/build.toml
- [x] .gemini/commands/code-simplify.toml
- [x] .gemini/commands/constraints.toml
- [x] .gemini/commands/planning.toml
- [x] .gemini/commands/review.toml
- [x] .gemini/commands/spec.toml
- [x] AGENTS.md
- [x] CLAUDE.md
- [x] README.md
- [x] commands/build.toml
- [x] commands/constraints.toml
- [x] commands/planning.toml
- [x] commands/spec.toml
- [x] docs/comparison.md
- [x] docs/copilot-setup.md
- [x] docs/opencode-setup.md
- [x] evals/cases/code-review-and-quality.json
- [x] evals/cases/code-simplification.json
- [x] evals/cases/constraint-driven-development.json
- [x] evals/cases/planning-and-task-breakdown.json
- [x] external/api-and-interface-design.md
- [x] external/code-review-and-quality.md
- [x] external/context-engineering.md
- [x] external/doubt-driven-development.md
- [x] external/frontend-ui-engineering.md
- [x] external/performance-optimization.md
- [x] external/planning-and-task-breakdown.md
- [x] external/security-and-hardening.md
- [x] external/source-driven-development.md
- [x] external/test-driven-development.md
- [x] plugin.json
- [x] references/definition-of-done.md
- [x] scripts/lib/skill-lint.js
- [x] scripts/validate-skills.js
- [x] skills/ci-cd-and-automation/SKILL.md
- [x] skills/constraint-driven-development/SKILL.md
- [x] skills/constraint-driven-development/references/floor-guard.md
- [x] skills/context-engineering/SKILL.md
- [x] skills/doubt-driven-development/SKILL.md
- [x] skills/git-workflow-and-versioning/SKILL.md
- [x] skills/planning-and-task-breakdown/SKILL.md

## Outputs produced
- docs/analysis/concepts/addy/anti-duplication-guardrail.md (1200 bytes)
- docs/analysis/concepts/addy/pre-flight-checks.md (1235 bytes)
- docs/analysis/concepts/addy/docs-skill-anatomy-md.md (1443 bytes)
- docs/analysis/concepts/addy/contributing-md.md (1028 bytes)
- docs/analysis/concepts/addy/agent-skills.md (1247 bytes)
- docs/analysis/concepts/addy/capabilities.md (786 bytes)
- docs/analysis/concepts/addy/defaultprompt.md (784 bytes)
- docs/analysis/concepts/addy/build.md (3046 bytes)
- docs/analysis/concepts/addy/build-auto.md (1468 bytes)
- docs/analysis/concepts/addy/autonomous-mode.md (1247 bytes)
- docs/analysis/concepts/addy/single-task-mode.md (988 bytes)
- docs/analysis/concepts/addy/acceptance-criteria.md (2528 bytes)
- docs/analysis/concepts/addy/clean-rollback-guarantee.md (1308 bytes)
- docs/analysis/concepts/addy/human-gate.md (1249 bytes)
- docs/analysis/concepts/addy/clean-rollback.md (1040 bytes)
- docs/analysis/concepts/addy/code-simplification.md (1916 bytes)
- docs/analysis/concepts/addy/gemini-md.md (952 bytes)
- docs/analysis/concepts/addy/guard-clauses.md (996 bytes)
- docs/analysis/concepts/addy/extracted-helpers.md (1051 bytes)
- docs/analysis/concepts/addy/code-review-and-quality.md (2585 bytes)
- docs/analysis/concepts/addy/constraints-md.md (1873 bytes)
- docs/analysis/concepts/addy/constraint-driven-development.md (1687 bytes)
- docs/analysis/concepts/addy/floor-section.md (1193 bytes)
- docs/analysis/concepts/addy/exceptions-table.md (1099 bytes)
- docs/analysis/concepts/addy/check-fast.md (1194 bytes)
- docs/analysis/concepts/addy/check-task.md (1222 bytes)
- docs/analysis/concepts/addy/check-full.md (1265 bytes)
- docs/analysis/concepts/addy/agents-md.md (1375 bytes)
- docs/analysis/concepts/addy/constraints-check.md (1241 bytes)
- docs/analysis/concepts/addy/constraints-guard.md (1327 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-1.md (3276 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The slug `build` covers both the lifecycle phase name (`Build` in CLAUDE.md:23 and `BUILD` in AGENTS.md:42) and the slash command (`/build` in .gemini/commands/build.toml:8), unified by `conceptSlug`. Both aspects are documented on `docs/analysis/concepts/addy/build.md`.
- File name concepts (`docs/skill-anatomy.md`, `CONTRIBUTING.md`, `agent-skills`, `capabilities`, `defaultPrompt`, `GEMINI.md`, `AGENTS.md`) were classified as `kind: name-only` per D-023 and the dispatch prompt instructions.
- Multiple concepts share definitions within single source lines (e.g., `Floor section` and `exceptions table` on `.gemini/commands/constraints.toml:18`; `check:fast`, `check:task`, and `check:full` on `skills/constraint-driven-development/SKILL.md:182`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~75,000 tokens across 43 source files and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
