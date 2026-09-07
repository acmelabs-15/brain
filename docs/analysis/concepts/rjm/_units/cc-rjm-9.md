---
unit: cc-rjm-9
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-9

## Files assigned
- [x] .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md
- [x] .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md
- [x] .agents/architecture/ADR-011-session-state-mcp.md
- [x] .agents/architecture/ADR-020-feature-request-review-step.md
- [x] .agents/architecture/ADR-032-ears-requirements-syntax.md
- [x] .agents/architecture/ADR-039-agent-model-cost-optimization.md
- [x] .agents/architecture/ADR-050-adr-protocol-sync.md
- [x] .agents/architecture/ADR-060-rework-warning-session-log-persistence.md
- [x] .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md
- [x] .agents/architecture/ADR-077-flip-stale-contract-tests.md
- [x] .agents/architecture/ADR-087-held-out-validated-improvement.md
- [x] .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md
- [x] .agents/archive/planning/PR-60/003-pr-60-plan-critique.md
- [x] .agents/governance/ears-format.md
- [x] .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md
- [x] .claude/agents/critic.md
- [x] .claude/skills/autoplan/SKILL.md
- [x] .claude/skills/merge-resolver/SKILL.md
- [x] .claude/skills/skillforge/references/regression-questions.md
- [x] .claude/skills/skillforge/references/specification-template.md
- [x] .claude/skills/slashcommandcreator/scripts/validate_slash_command.py
- [x] .claude/skills/slo-designer/SKILL.md
- [x] .claude/skills/slo-designer/references/slo-design-patterns.md
- [x] docs/autonomous-issue-development.md
- [x] docs/technical-guardrails.md
- [x] scripts/eval/eval-agents.py
- [x] templates/agents/critic.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/hierarchical-mode.md (1544 bytes)
- docs/analysis/concepts/rjm/parallel-task-invocation.md (935 bytes)
- docs/analysis/concepts/rjm/swarm-coordination-modes.md (886 bytes)
- docs/analysis/concepts/rjm/quality-gates-with-evaluator-optimizer-pattern.md (994 bytes)
- docs/analysis/concepts/rjm/critic-agent.md (2742 bytes)
- docs/analysis/concepts/rjm/single-pass-generation.md (1185 bytes)
- docs/analysis/concepts/rjm/binary-outcomes.md (1199 bytes)
- docs/analysis/concepts/rjm/generator-evaluator-regenerate-loop.md (1365 bytes)
- docs/analysis/concepts/rjm/evaluator-optimizer-pattern.md (1664 bytes)
- docs/analysis/concepts/rjm/evaluator-optimizer-loop.md (1636 bytes)
- docs/analysis/concepts/rjm/evaluation-rubric.md (1299 bytes)
- docs/analysis/concepts/rjm/completeness.md (2142 bytes)
- docs/analysis/concepts/rjm/correctness.md (1395 bytes)
- docs/analysis/concepts/rjm/clarity.md (1097 bytes)
- docs/analysis/concepts/rjm/actionability.md (1327 bytes)
- docs/analysis/concepts/rjm/structured-feedback.md (1166 bytes)
- docs/analysis/concepts/rjm/regeneration-limit.md (1148 bytes)
- docs/analysis/concepts/rjm/termination-criteria.md (1589 bytes)
- docs/analysis/concepts/rjm/independent-thinker-agent.md (1274 bytes)
- docs/analysis/concepts/rjm/loop-protocol.md (1337 bytes)
- docs/analysis/concepts/rjm/when-to-apply.md (936 bytes)
- docs/analysis/concepts/rjm/session-protocol-md.md (1128 bytes)
- docs/analysis/concepts/rjm/blocking.md (1794 bytes)
- docs/analysis/concepts/rjm/validate-sessionjson-ps1.md (963 bytes)
- docs/analysis/concepts/rjm/handoff-md.md (1431 bytes)
- docs/analysis/concepts/rjm/serena-initialization.md (1360 bytes)
- docs/analysis/concepts/rjm/skill-validation.md (1307 bytes)
- docs/analysis/concepts/rjm/context-retrieval.md (1677 bytes)
- docs/analysis/concepts/rjm/session-log-creation.md (1272 bytes)
- docs/analysis/concepts/rjm/git-state-verification.md (1344 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-9.md (5500 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Concepts from ADR-010 define the evaluator-optimizer loop (`critic-agent`, `evaluator-optimizer-loop`, `evaluation-rubric`, `completeness`, `correctness`, `clarity`, `actionability`, `structured-feedback`, `regeneration-limit`, `termination-criteria`, `loop-protocol`). These provide the quality review architecture used across planning, feature requests, and EARS requirements.
- Concepts from ADR-011 specify the session protocol phases and gating mechanics (`serena-initialization`, `skill-validation`, `context-retrieval`, `session-log-creation`, `git-state-verification`, `blocking`), establishing verification-based enforcement over trust-based compliance.
- Concepts that represent document section headings, file names, or roadmap identifiers were classified with `kind: name-only` per D-023 (`parallel-task-invocation`, `swarm-coordination-modes`, `quality-gates-with-evaluator-optimizer-pattern`, `when-to-apply`, `session-protocol-md`, `validate-sessionjson-ps1`, `handoff-md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 27 source files and 20 citing inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 unit report.
