---
unit: cc-addy-6
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-6

## Files assigned
- [x] sources/addy/CONTRIBUTING.md
- [x] sources/addy/README.md
- [x] sources/addy/commands/code-simplify.toml
- [x] sources/addy/commands/constraints.toml
- [x] sources/addy/commands/test.toml
- [x] sources/addy/commands/webperf.toml
- [x] sources/addy/docs/adoption-guide.md
- [x] sources/addy/docs/comparison.md
- [x] sources/addy/docs/gemini-cli-setup.md
- [x] sources/addy/docs/getting-started.md
- [x] sources/addy/docs/skill-anatomy.md
- [x] sources/addy/evals/cases/using-agent-skills.json
- [x] sources/addy-external/api-and-interface-design.md
- [x] sources/addy-external/browser-testing-with-devtools.md
- [x] sources/addy-external/ci-cd-and-automation.md
- [x] sources/addy-external/code-review-and-quality.md
- [x] sources/addy-external/code-simplification.md
- [x] sources/addy-external/context-engineering.md
- [x] sources/addy-external/debugging-and-error-recovery.md
- [x] sources/addy-external/deprecation-and-migration.md
- [x] sources/addy-external/documentation-and-adrs.md
- [x] sources/addy-external/doubt-driven-development.md
- [x] sources/addy-external/frontend-ui-engineering.md
- [x] sources/addy-external/git-workflow-and-versioning.md
- [x] sources/addy-external/idea-refine.md
- [x] sources/addy-external/interview-me.md
- [x] sources/addy-external/observability-and-instrumentation.md
- [x] sources/addy-external/performance-optimization.md
- [x] sources/addy-external/planning-and-task-breakdown.md
- [x] sources/addy-external/security-and-hardening.md
- [x] sources/addy-external/shipping-and-launch.md
- [x] sources/addy-external/source-driven-development.md
- [x] sources/addy-external/spec-driven-development.md
- [x] sources/addy-external/test-driven-development.md
- [x] sources/addy-external/using-agent-skills.md
- [x] sources/addy/hooks/session-start-test.sh
- [x] sources/addy/hooks/session-start.sh
- [x] sources/addy/references/definition-of-done.md
- [x] sources/addy/scripts/run-evals.js
- [x] sources/addy/scripts/validate-reference-links.js
- [x] sources/addy/skills/api-and-interface-design/SKILL.md
- [x] sources/addy/skills/browser-testing-with-devtools/SKILL.md
- [x] sources/addy/skills/ci-cd-and-automation/SKILL.md
- [x] sources/addy/skills/code-review-and-quality/SKILL.md
- [x] sources/addy/skills/code-simplification/SKILL.md
- [x] sources/addy/skills/constraint-driven-development/SKILL.md
- [x] sources/addy/skills/constraint-driven-development/references/floor-guard.md
- [x] sources/addy/skills/git-workflow-and-versioning/SKILL.md
- [x] sources/addy/skills/planning-and-task-breakdown/SKILL.md
- [x] sources/addy/skills/security-and-hardening/SKILL.md
- [x] sources/addy/skills/shipping-and-launch/SKILL.md
- [x] sources/addy/skills/source-driven-development/SKILL.md
- [x] sources/addy/skills/spec-driven-development/SKILL.md
- [x] sources/addy/skills/test-driven-development/SKILL.md
- [x] sources/addy/skills/using-agent-skills/SKILL.md

## Outputs produced
- docs/analysis/concepts/addy/preserving-exact-behavior.md (1364 bytes)
- docs/analysis/concepts/addy/simplification-opportunities.md (1314 bytes)
- docs/analysis/concepts/addy/floor.md (1972 bytes)
- docs/analysis/concepts/addy/place-each-check-by-cost.md (1559 bytes)
- docs/analysis/concepts/addy/tdd-workflow.md (1427 bytes)
- docs/analysis/concepts/addy/lighthouse.md (1399 bytes)
- docs/analysis/concepts/addy/crux.md (1296 bytes)
- docs/analysis/concepts/addy/devtools-performance-trace.md (1317 bytes)
- docs/analysis/concepts/addy/developer-onboarding-md.md (899 bytes)
- docs/analysis/concepts/addy/skill-anatomy-md.md (818 bytes)
- docs/analysis/concepts/addy/specific.md (1171 bytes)
- docs/analysis/concepts/addy/verifiable.md (1187 bytes)
- docs/analysis/concepts/addy/battle-tested.md (1185 bytes)
- docs/analysis/concepts/addy/minimal.md (1193 bytes)
- docs/analysis/concepts/addy/positive-triggers.md (1243 bytes)
- docs/analysis/concepts/addy/negative-triggers.md (1230 bytes)
- docs/analysis/concepts/addy/behavioral-eval.md (1354 bytes)
- docs/analysis/concepts/addy/execution-evals.md (1422 bytes)
- docs/analysis/concepts/addy/common-rationalizations.md (3454 bytes)
- docs/analysis/concepts/addy/red-flags.md (6811 bytes)
- docs/analysis/concepts/addy/session-start-hook.md (1526 bytes)
- docs/analysis/concepts/addy/using-agent-skills.md (2533 bytes)
- docs/analysis/concepts/addy/no-jq-fallback.md (1184 bytes)
- docs/analysis/concepts/addy/greenfield.md (1215 bytes)
- docs/analysis/concepts/addy/brownfield.md (1408 bytes)
- docs/analysis/concepts/addy/full-lifecycle-immediately.md (1326 bytes)
- docs/analysis/concepts/addy/incremental-verification-first.md (1367 bytes)
- docs/analysis/concepts/addy/five-step-triage.md (1625 bytes)
- docs/analysis/concepts/addy/characterization-tests.md (1419 bytes)
- docs/analysis/concepts/addy/beyonce-rule.md (1419 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <all 30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `Common Rationalizations` (14 occurrences) and `Red Flags` (40 occurrences) represent foundational architectural sections of addy's standard skill anatomy (`docs/skill-anatomy.md:60,65`), recurring across almost every skill in the package.
- `Floor` and `floor-guard` bridge `commands/constraints.toml` and `skills/constraint-driven-development/`, linking the high-level quality bar definition with the diff-level enforcement script.
- `session-start-hook` in `hooks/session-start.sh` exhibits a known contract defect with `hooks/session-start-test.sh` where emitting the Claude Code/Codex CLI `hookSpecificOutput` envelope fails the test suite expecting top-level `priority` and `message` properties.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens across 55 cited source files and inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work-unit report.
