---
unit: cc-rjm-75
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-75

## Files assigned
- [x] sources/rjm/.claude/agents/orchestrator.md
- [x] sources/rjm/.claude/agents/qa.md
- [x] sources/rjm/.claude/skills/skillforge/references/regression-questions.md
- [x] sources/rjm/src/claude/orchestrator.md
- [x] sources/rjm/templates/agents/orchestrator.shared.md
- [x] sources/rjm/templates/agents/qa.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/session-end-gate.md (1528 bytes)
- docs/analysis/concepts/rjm/agent-capability-matrix.md (1720 bytes)
- docs/analysis/concepts/rjm/model-effort-and-cost-routing.md (1783 bytes)
- docs/analysis/concepts/rjm/routing-algorithm.md (1831 bytes)
- docs/analysis/concepts/rjm/handoff-contract.md (1691 bytes)
- docs/analysis/concepts/rjm/analyst-evidence-handoff.md (1821 bytes)
- docs/analysis/concepts/rjm/synthesis-protocol.md (1844 bytes)
- docs/analysis/concepts/rjm/context-maintenance.md (1725 bytes)
- docs/analysis/concepts/rjm/completion-gate.md (1697 bytes)
- docs/analysis/concepts/rjm/pre-close-sequence.md (1640 bytes)
- docs/analysis/concepts/rjm/failure-path.md (1569 bytes)
- docs/analysis/concepts/rjm/anti-drift-protocol.md (1737 bytes)
- docs/analysis/concepts/rjm/7-step-recovery.md (1895 bytes)
- docs/analysis/concepts/rjm/event-driven-todo-review.md (1714 bytes)
- docs/analysis/concepts/rjm/session-capture-protocol.md (1683 bytes)
- docs/analysis/concepts/rjm/orchestration-budget.md (1659 bytes)
- docs/analysis/concepts/rjm/hook-feedback.md (1664 bytes)
- docs/analysis/concepts/rjm/test-strategy-reasoning-protocol.md (1613 bytes)
- docs/analysis/concepts/rjm/coverage-tool-directive.md (1376 bytes)
- docs/analysis/concepts/rjm/a5.md (881 bytes)
- docs/analysis/concepts/rjm/completeness-verification.md (1775 bytes)
- docs/analysis/concepts/rjm/code-quality-gates.md (1477 bytes)
- docs/analysis/concepts/rjm/quality-gate-checklist.md (1331 bytes)
- docs/analysis/concepts/rjm/test-quality-standards.md (1408 bytes)
- docs/analysis/concepts/rjm/test-quality-criteria.md (1471 bytes)
- docs/analysis/concepts/rjm/insufficient-test-patterns.md (1483 bytes)
- docs/analysis/concepts/rjm/required-test-patterns.md (1460 bytes)
- docs/analysis/concepts/rjm/test-review-checklist.md (1317 bytes)
- docs/analysis/concepts/rjm/quality-metrics.md (1400 bytes)
- docs/analysis/concepts/rjm/risk-based-testing.md (1574 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-75.md (4775 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (all 30 cards), exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 1 (uncovered rows: 0, orphan cards: 0, empty required: 0 across repository)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Fixed `docs/analysis/concepts/rjm/synthesis-protocol.md` by including the verbatim bold markdown formatting (`**Verify artifacts, not reports**`) on line 181 of `.claude/agents/orchestrator.md`.
- Orchestrator session management and anti-drift concepts (`context-maintenance`, `completion-gate`, `pre-close-sequence`, `failure-path`, `anti-drift-protocol`, `7-step-recovery`, `event-driven-todo-review`, `session-capture-protocol`, `orchestration-budget`, `hook-feedback`) span `.claude/agents/orchestrator.md`, `src/claude/orchestrator.md`, and `templates/agents/orchestrator.shared.md`.
- QA quality governance and testing rigor concepts (`test-strategy-reasoning-protocol`, `coverage-tool-directive`, `a5`, `completeness-verification`, `code-quality-gates`, `quality-gate-checklist`, `test-quality-standards`, `test-quality-criteria`, `insufficient-test-patterns`, `required-test-patterns`, `test-review-checklist`, `quality-metrics`, `risk-based-testing`) span `.claude/agents/qa.md` and `templates/agents/qa.shared.md`.
- `a5` is designated as `kind: name-only` per D-023 as an identifier labeling the coverage tool directive within QA governance.
- `completeness-verification` also cites `.claude/skills/skillforge/references/regression-questions.md:103` where it functions as Category 5 in regression questioning.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 6 cited source files and 6 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 work unit report.
