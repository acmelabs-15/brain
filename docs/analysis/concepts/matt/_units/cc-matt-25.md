---
unit: cc-matt-25
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-25

## Files assigned
- [x] sources/matt/LICENSE
- [x] sources/matt/README.md
- [x] sources/matt-external/writing-for-agents.md
- [x] sources/matt/package-lock.json
- [x] sources/matt/package.json
- [x] sources/matt/skills/deprecated/README.md
- [x] sources/matt/skills/engineering/ask-matt/SKILL.md
- [x] sources/matt/skills/engineering/codebase-design/SKILL.md
- [x] sources/matt/skills/engineering/to-tickets/agents/openai.yaml
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL-MECHANICS.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md
- [x] docs/analysis/inventory/matt/external-writing-for-agents-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-mechanics-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-md.md
- [x] docs/analysis/inventory/matt/license.md
- [x] docs/analysis/inventory/matt/package-lock-json.md
- [x] docs/analysis/inventory/matt/package-json.md
- [x] docs/analysis/inventory/matt/skills-deprecated-readme-md.md
- [x] docs/analysis/inventory/matt/readme-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-ask-matt-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-to-tickets-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-engineering-codebase-design-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/the-writing-for-agents-skill.md (901 bytes)
- docs/analysis/concepts/matt/runtime-prompt.md (1226 bytes)
- docs/analysis/concepts/matt/readme.md (1167 bytes)
- docs/analysis/concepts/matt/process.md (1143 bytes)
- docs/analysis/concepts/matt/frontmatter.md (1406 bytes)
- docs/analysis/concepts/matt/router-skills.md (1449 bytes)
- docs/analysis/concepts/matt/the-two-loads.md (1459 bytes)
- docs/analysis/concepts/matt/no-op-test.md (1253 bytes)
- docs/analysis/concepts/matt/failure-mode-vocabulary.md (1396 bytes)
- docs/analysis/concepts/matt/standalone-reference.md (1343 bytes)
- docs/analysis/concepts/matt/mit-license.md (741 bytes)
- docs/analysis/concepts/matt/lockfileversion.md (793 bytes)
- docs/analysis/concepts/matt/requires.md (783 bytes)
- docs/analysis/concepts/matt/changesets-apply-release-plan.md (904 bytes)
- docs/analysis/concepts/matt/changesets-assemble-release-plan.md (928 bytes)
- docs/analysis/concepts/matt/changeset.md (1422 bytes)
- docs/analysis/concepts/matt/package-manager-detector.md (811 bytes)
- docs/analysis/concepts/matt/private.md (760 bytes)
- docs/analysis/concepts/matt/license.md (706 bytes)
- docs/analysis/concepts/matt/scripts.md (747 bytes)
- docs/analysis/concepts/matt/check-plugin-version.md (780 bytes)
- docs/analysis/concepts/matt/devdependencies.md (774 bytes)
- docs/analysis/concepts/matt/packagemanager.md (770 bytes)
- docs/analysis/concepts/matt/skills-for-real-engineers.md (785 bytes)
- docs/analysis/concepts/matt/shared-language.md (1350 bytes)
- docs/analysis/concepts/matt/materialization-cascade.md (841 bytes)
- docs/analysis/concepts/matt/red-green-refactor-loop.md (1370 bytes)
- docs/analysis/concepts/matt/software-entropy.md (1215 bytes)
- docs/analysis/concepts/matt/tracer-bullet-tickets.md (2027 bytes)
- docs/analysis/concepts/matt/deep-modules.md (1691 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-25.md (7594 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/the-writing-for-agents-skill.md docs/analysis/concepts/matt/runtime-prompt.md docs/analysis/concepts/matt/readme.md docs/analysis/concepts/matt/process.md docs/analysis/concepts/matt/frontmatter.md docs/analysis/concepts/matt/router-skills.md docs/analysis/concepts/matt/the-two-loads.md docs/analysis/concepts/matt/no-op-test.md docs/analysis/concepts/matt/failure-mode-vocabulary.md docs/analysis/concepts/matt/standalone-reference.md docs/analysis/concepts/matt/mit-license.md docs/analysis/concepts/matt/lockfileversion.md docs/analysis/concepts/matt/requires.md docs/analysis/concepts/matt/changesets-apply-release-plan.md docs/analysis/concepts/matt/changesets-assemble-release-plan.md docs/analysis/concepts/matt/changeset.md docs/analysis/concepts/matt/package-manager-detector.md docs/analysis/concepts/matt/private.md docs/analysis/concepts/matt/license.md docs/analysis/concepts/matt/scripts.md docs/analysis/concepts/matt/check-plugin-version.md docs/analysis/concepts/matt/devdependencies.md docs/analysis/concepts/matt/packagemanager.md docs/analysis/concepts/matt/skills-for-real-engineers.md docs/analysis/concepts/matt/shared-language.md docs/analysis/concepts/matt/materialization-cascade.md docs/analysis/concepts/matt/red-green-refactor-loop.md docs/analysis/concepts/matt/software-entropy.md docs/analysis/concepts/matt/tracer-bullet-tickets.md docs/analysis/concepts/matt/deep-modules.md (exit 0: 34 PASS, 0 FAIL, 0 MISSING source, across 30 cards)
- bun scripts/synthesis/coverage.ts (exit 0 on matt concepts; all 30 concepts covered, 0 missing required fields, 0 orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-25 covers 30 concepts spanning four functional clusters:
  1. Agent documentation methodology and mechanics from `writing-for-agents`: `The /writing-for-agents Skill`, `runtime prompt`, `README`, `process`, `frontmatter`, `router skills`, `The two loads`, `no-op test`, `failure-mode vocabulary`, `standalone reference`. These define guidelines for authoring agent-facing documents, separating human cognitive load from model context load, behavioral no-op pruning, and router skill navigation.
  2. Package management, manifest schema, and release mechanics from `package.json`, `package-lock.json`, and `LICENSE`: `MIT License`, `lockfileVersion`, `requires`, `@changesets/apply-release-plan`, `@changesets/assemble-release-plan`, `changeset`, `package-manager-detector`, `private`, `license`, `scripts`, `check-plugin-version`, `devDependencies`, `packageManager`. Per D-023, configuration keys, file attributes, dependencies, and command names are classified as `kind: name-only`.
  3. Core repository philosophy and problem framing from `README.md`: `Skills For Real Engineers`, `shared language`, `materialization cascade`, `red-green-refactor loop`, `software entropy`. These contrast disciplined software engineering with "vibe coding", explain the role of shared language in reducing model verbosity, and highlight test-first feedback loops.
  4. Core engineering lifecycle abstractions spanning `README.md`, `ask-matt`, `to-tickets`, and `codebase-design`: `tracer-bullet tickets` and `deep modules`. `tracer-bullet tickets` represent thin, end-to-end vertical slices that declare explicit blocking edges so context windows can be cleared between implementations. `deep modules` formalize John Ousterhout's depth-as-leverage principle, maximizing capability for callers and locality for maintainers behind minimal interfaces.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~105,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~10,500 tokens across 30 concept cards (32,941 bytes) and 1 unit report.
