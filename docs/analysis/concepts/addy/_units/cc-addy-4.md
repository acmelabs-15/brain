---
unit: cc-addy-4
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-4

## Files assigned
- [x] sources/addy/.github/workflows/test-plugin-install.yml
- [x] sources/addy/AGENTS.md
- [x] sources/addy/CLAUDE.md
- [x] sources/addy/README.md
- [x] sources/addy/agents/code-reviewer.md
- [x] sources/addy/agents/security-auditor.md
- [x] sources/addy/docs/comparison.md
- [x] sources/addy/docs/cursor-setup.md
- [x] sources/addy/docs/developer-onboarding.md
- [x] sources/addy/docs/gemini-cli-setup.md
- [x] sources/addy/docs/opencode-setup.md
- [x] sources/addy-external/ci-cd-and-automation.md
- [x] sources/addy-external/code-review-and-quality.md
- [x] sources/addy-external/code-simplification.md
- [x] sources/addy-external/deprecation-and-migration.md
- [x] sources/addy-external/documentation-and-adrs.md
- [x] sources/addy-external/git-workflow-and-versioning.md
- [x] sources/addy-external/idea-refine.md
- [x] sources/addy-external/interview-me.md
- [x] sources/addy-external/observability-and-instrumentation.md
- [x] sources/addy-external/performance-optimization.md
- [x] sources/addy-external/planning-and-task-breakdown.md
- [x] sources/addy-external/security-and-hardening.md
- [x] sources/addy-external/shipping-and-launch.md
- [x] sources/addy-external/spec-driven-development.md
- [x] sources/addy/references/orchestration-patterns.md
- [x] sources/addy/references/security-checklist.md
- [x] sources/addy/skills/code-review-and-quality/SKILL.md
- [x] sources/addy/skills/constraint-driven-development/SKILL.md
- [x] sources/addy/skills/doubt-driven-development/SKILL.md

## Outputs produced
- docs/analysis/concepts/addy/validate-skill-content.md (900 bytes)
- docs/analysis/concepts/addy/validate-command-parity-and-description-sync.md (1076 bytes)
- docs/analysis/concepts/addy/validate-plugin-structure.md (919 bytes)
- docs/analysis/concepts/addy/skill-driven-execution-model.md (1285 bytes)
- docs/analysis/concepts/addy/intent-skill-mapping.md (1253 bytes)
- docs/analysis/concepts/addy/lifecycle-mapping-implicit-commands.md (1278 bytes)
- docs/analysis/concepts/addy/define.md (2153 bytes)
- docs/analysis/concepts/addy/plan.md (2134 bytes)
- docs/analysis/concepts/addy/verify.md (1804 bytes)
- docs/analysis/concepts/addy/review.md (3142 bytes)
- docs/analysis/concepts/addy/ship.md (3001 bytes)
- docs/analysis/concepts/addy/execution-model.md (1181 bytes)
- docs/analysis/concepts/addy/anti-rationalization.md (1337 bytes)
- docs/analysis/concepts/addy/personas.md (1392 bytes)
- docs/analysis/concepts/addy/skills.md (1363 bytes)
- docs/analysis/concepts/addy/slash-commands.md (1296 bytes)
- docs/analysis/concepts/addy/parallel-fan-out-with-a-merge-step.md (1381 bytes)
- docs/analysis/concepts/addy/claude-code-interop.md (1220 bytes)
- docs/analysis/concepts/addy/creating-a-new-skill.md (848 bytes)
- docs/analysis/concepts/addy/senior-code-reviewer.md (1325 bytes)
- docs/analysis/concepts/addy/review-framework.md (1106 bytes)
- docs/analysis/concepts/addy/required.md (1204 bytes)
- docs/analysis/concepts/addy/optional.md (1554 bytes)
- docs/analysis/concepts/addy/nit.md (1512 bytes)
- docs/analysis/concepts/addy/review-output-template.md (1089 bytes)
- docs/analysis/concepts/addy/verification-story.md (1097 bytes)
- docs/analysis/concepts/addy/review-scope.md (1086 bytes)
- docs/analysis/concepts/addy/input-handling.md (1094 bytes)
- docs/analysis/concepts/addy/authentication-authorization.md (1192 bytes)
- docs/analysis/concepts/addy/idor.md (1493 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-4.md (2870 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/*.md`, exit code 0
- scripts/synthesis/coverage.ts: `bun scripts/synthesis/coverage.ts`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Major lifecycle phases DEFINE, PLAN, VERIFY, REVIEW, SHIP belong to this unit (BUILD is inventoried in another unit).
- In addy, the lifecycle is structured with implicit mappings from slash commands (`/spec`, `/plan`, `/test`, `/review`, `/ship`) to dedicated skills (`spec-driven-development`, `planning-and-task-breakdown`, `debugging-and-error-recovery`, `code-review-and-quality`, `shipping-and-launch`) for harness portability (e.g., OpenCode).
- CI workflow job names (`Validate skill content`, `Validate command parity and description sync`, `Validate plugin structure`) and contributor documentation sections (`Creating a New Skill`) are inventoried as `name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~372,000 bytes (~93,000 tokens)
Approximate output written: ~45,000 bytes (~11,000 tokens)
