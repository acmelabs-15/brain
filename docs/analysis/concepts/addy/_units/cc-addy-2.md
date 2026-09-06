---
unit: cc-addy-2
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-2

## Files assigned
- [x] sources/addy/.gemini/commands/constraints.toml
- [x] sources/addy/.gemini/commands/planning.toml
- [x] sources/addy/.gemini/commands/review.toml
- [x] sources/addy/.gemini/commands/ship.toml
- [x] sources/addy/.gemini/commands/spec.toml
- [x] sources/addy/README.md
- [x] sources/addy/agents/code-reviewer.md
- [x] sources/addy/agents/security-auditor.md
- [x] sources/addy/agents/test-engineer.md
- [x] sources/addy/agents/web-performance-auditor.md
- [x] sources/addy/commands/constraints.toml
- [x] sources/addy/commands/planning.toml
- [x] sources/addy/commands/review.toml
- [x] sources/addy/commands/ship.toml
- [x] sources/addy/commands/spec.toml
- [x] sources/addy/docs/adoption-guide.md
- [x] sources/addy/docs/agents.md
- [x] sources/addy/docs/gemini-cli-setup.md
- [x] sources/addy/docs/getting-started.md
- [x] sources/addy/evals/cases/performance-optimization.json
- [x] sources/addy/evals/cases/planning-and-task-breakdown.json
- [x] sources/addy/evals/cases/security-and-hardening.json
- [x] sources/addy/evals/cases/spec-driven-development.json
- [x] sources/addy-external/code-review-and-quality.md
- [x] sources/addy-external/performance-optimization.md
- [x] sources/addy-external/planning-and-task-breakdown.md
- [x] sources/addy-external/security-and-hardening.md
- [x] sources/addy-external/source-driven-development.md
- [x] sources/addy/hooks/session-start-test.sh
- [x] sources/addy/references/definition-of-done.md
- [x] sources/addy/references/observability-checklist.md
- [x] sources/addy/references/performance-checklist.md
- [x] sources/addy/references/security-checklist.md
- [x] sources/addy/scripts/validate-reference-links-test.js
- [x] sources/addy/scripts/validate-reference-links.js
- [x] sources/addy/skills/code-review-and-quality/SKILL.md
- [x] sources/addy/skills/constraint-driven-development/SKILL.md
- [x] sources/addy/skills/doubt-driven-development/SKILL.md
- [x] sources/addy/skills/interview-me/SKILL.md
- [x] sources/addy/skills/observability-and-instrumentation/SKILL.md
- [x] sources/addy/skills/performance-optimization/SKILL.md
- [x] sources/addy/skills/planning-and-task-breakdown/SKILL.md
- [x] sources/addy/skills/security-and-hardening/SKILL.md
- [x] sources/addy/skills/source-driven-development/SKILL.md
- [x] sources/addy/skills/spec-driven-development/SKILL.md

## Outputs produced
- docs/analysis/concepts/addy/constraints-ratchet.md (1363 bytes)
- docs/analysis/concepts/addy/planning-and-task-breakdown.md (2206 bytes)
- docs/analysis/concepts/addy/spec-md.md (1703 bytes)
- docs/analysis/concepts/addy/plan-mode.md (1444 bytes)
- docs/analysis/concepts/addy/dependency-graph.md (1534 bytes)
- docs/analysis/concepts/addy/slice-work-vertically.md (1463 bytes)
- docs/analysis/concepts/addy/verification-steps.md (1352 bytes)
- docs/analysis/concepts/addy/checkpoints.md (1307 bytes)
- docs/analysis/concepts/addy/human-review.md (1292 bytes)
- docs/analysis/concepts/addy/tasks-plan-md.md (1817 bytes)
- docs/analysis/concepts/addy/tasks-todo-md.md (1792 bytes)
- docs/analysis/concepts/addy/five-axis-code-review.md (1804 bytes)
- docs/analysis/concepts/addy/correctness.md (1974 bytes)
- docs/analysis/concepts/addy/readability.md (1494 bytes)
- docs/analysis/concepts/addy/architecture.md (1709 bytes)
- docs/analysis/concepts/addy/security.md (1849 bytes)
- docs/analysis/concepts/addy/security-and-hardening.md (2900 bytes)
- docs/analysis/concepts/addy/performance.md (1878 bytes)
- docs/analysis/concepts/addy/performance-optimization.md (2554 bytes)
- docs/analysis/concepts/addy/critical.md (1545 bytes)
- docs/analysis/concepts/addy/important.md (1133 bytes)
- docs/analysis/concepts/addy/suggestion.md (1037 bytes)
- docs/analysis/concepts/addy/fan-out-orchestrator.md (1631 bytes)
- docs/analysis/concepts/addy/code-reviewer.md (1835 bytes)
- docs/analysis/concepts/addy/five-axis-review.md (2053 bytes)
- docs/analysis/concepts/addy/security-auditor.md (1787 bytes)
- docs/analysis/concepts/addy/owasp-top-10.md (2072 bytes)
- docs/analysis/concepts/addy/test-engineer.md (1786 bytes)
- docs/analysis/concepts/addy/references-orchestration-patterns-md.md (1654 bytes)
- docs/analysis/concepts/addy/persona-resolution.md (1085 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md (exit code 0, 31 PASS / 0 FAIL)
- bun scripts/synthesis/coverage.ts (exit code 0, clean, 0 failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Multiple concepts in this unit (`five-axis-code-review`, `correctness`, `readability`, `architecture`, `security`, `performance`, `critical`, `important`, `suggestion`) are defined and shared across `.gemini/commands/review.toml`, `commands/review.toml`, `agents/code-reviewer.md`, and `skills/code-review-and-quality/SKILL.md`.
- `critical`, `important`, and `suggestion` are severity labels used across review and notification payloads; per guidelines, these were authored as `kind: name-only`.
- `persona-resolution` is an operational precedence mechanism in `/ship` commands rather than an independent lifecycle artifact, authored as `kind: name-only`.
- `tasks/plan.md` and `tasks/todo.md` serve as distinct concrete artifacts in the Plan phase, with `tasks/plan.md` holding architectural rationale and `tasks/todo.md` tracking execution checkboxes.

## Blocked or uncertain
none

## Time and size
- Source read: ~68,000 tokens
- Output written: ~12,500 tokens across 30 concept cards and 1 unit report
