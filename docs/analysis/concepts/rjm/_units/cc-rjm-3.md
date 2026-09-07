---
unit: cc-rjm-3
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-3

## Files assigned
- [x] .agents/AGENT-SYSTEM.md
- [x] .agents/analysis/002-project-constraints-consolidation.md
- [x] .agents/analysis/claude-flow-architecture-analysis.md
- [x] .agents/architecture/ADR-036-two-source-agent-template-architecture.md
- [x] .agents/governance/PROJECT-CONSTRAINTS.md
- [x] .claude/agents/AGENTS.md
- [x] .claude/agents/architect.md
- [x] .claude/agents/backlog-generator.md
- [x] .claude/agents/code-reviewer.md
- [x] .claude/agents/devops.md
- [x] .claude/agents/high-level-advisor.md
- [x] .claude/agents/independent-thinker.md
- [x] .claude/agents/merge-resolver.md
- [x] .claude/agents/qa.md
- [x] .claude/agents/retrospective.md
- [x] .claude/agents/security.md
- [x] .claude/agents/skillbook.md
- [x] .claude/agents/task-decomposer.md
- [x] .claude/skills/retrospective/references/diagnosis-and-actions.md
- [x] CONTRIBUTING.md
- [x] docs/skill-reference.md
- [x] scripts/error_classification.py
- [x] templates/AGENTS.md
- [x] templates/README.md
- [x] templates/agents/architect.shared.md
- [x] templates/agents/backlog-generator.shared.md
- [x] templates/agents/code-reviewer.shared.md
- [x] templates/agents/devops.shared.md
- [x] templates/agents/high-level-advisor.shared.md
- [x] templates/agents/independent-thinker.shared.md
- [x] templates/agents/qa.shared.md
- [x] templates/agents/retrospective.shared.md
- [x] templates/agents/security.shared.md
- [x] templates/agents/skillbook.shared.md
- [x] templates/agents/task-decomposer.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/session-handoff.md (1367 bytes)
- docs/analysis/concepts/rjm/memory-protocol.md (5448 bytes)
- docs/analysis/concepts/rjm/skill-persistence.md (1483 bytes)
- docs/analysis/concepts/rjm/parallel-execution.md (1790 bytes)
- docs/analysis/concepts/rjm/parallel-execution-readiness.md (1325 bytes)
- docs/analysis/concepts/rjm/rate-limit-pre-check.md (1419 bytes)
- docs/analysis/concepts/rjm/worktree-isolation-pattern.md (1447 bytes)
- docs/analysis/concepts/rjm/sectioning-pattern.md (1334 bytes)
- docs/analysis/concepts/rjm/voting-pattern.md (1334 bytes)
- docs/analysis/concepts/rjm/session-coordination-protocol.md (1534 bytes)
- docs/analysis/concepts/rjm/steering-system.md (1438 bytes)
- docs/analysis/concepts/rjm/kiro-pattern.md (1203 bytes)
- docs/analysis/concepts/rjm/glob-based-inclusion.md (1272 bytes)
- docs/analysis/concepts/rjm/injection-protocol.md (1360 bytes)
- docs/analysis/concepts/rjm/critic-validation.md (1309 bytes)
- docs/analysis/concepts/rjm/qa-verification.md (1260 bytes)
- docs/analysis/concepts/rjm/traceability-validation.md (1503 bytes)
- docs/analysis/concepts/rjm/agent-disagreement.md (1356 bytes)
- docs/analysis/concepts/rjm/scope-creep.md (1518 bytes)
- docs/analysis/concepts/rjm/blocked-tasks.md (1284 bytes)
- docs/analysis/concepts/rjm/blocker-report.md (1243 bytes)
- docs/analysis/concepts/rjm/workflow-selection.md (912 bytes)
- docs/analysis/concepts/rjm/agent-model-assignment.md (963 bytes)
- docs/analysis/concepts/rjm/entity-naming-conventions.md (909 bytes)
- docs/analysis/concepts/rjm/relation-types.md (861 bytes)
- docs/analysis/concepts/rjm/skill-categories.md (1004 bytes)
- docs/analysis/concepts/rjm/priority-definitions.md (879 bytes)
- docs/analysis/concepts/rjm/project-constraints-md.md (988 bytes)
- docs/analysis/concepts/rjm/single-source-of-truth.md (1818 bytes)
- docs/analysis/concepts/rjm/ssot.md (979 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-3.md (5480 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 21 of the 30 concept cards in this unit were authored in prior sessions; 9 missing concept cards were completed in this session (`workflow-selection`, `agent-model-assignment`, `entity-naming-conventions`, `relation-types`, `skill-categories`, `priority-definitions`, `project-constraints-md`, `single-source-of-truth`, and `ssot`).
- Concepts representing quick reference table headings (`workflow-selection`, `agent-model-assignment`), appendix taxonomies/headings (`entity-naming-conventions`, `relation-types`, `skill-categories`, `priority-definitions`), specific file paths (`project-constraints-md`), and acronyms (`ssot`) were assigned `kind: name-only` with `(used, not defined)` definitions and explanatory design notes per METHOD.md R6 and D-023.
- `single-source-of-truth` was authored as `kind: pattern`, aligning with cross-phase architectural patterns for governance consolidation and mirroring `matt/single-source-of-truth.md`.
- `memory-protocol` has 29 occurrences across agent definitions and templates, serving as the universal cross-agent interface contract for Serena memory tools.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~135,000 tokens across 35 source files and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
