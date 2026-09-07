---
unit: cc-rjm-73
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-73

## Files assigned
- [x] sources/rjm/.claude/agents/issue-feature-review.md
- [x] sources/rjm/.claude/agents/janitor.md
- [x] sources/rjm/.claude/agents/merge-resolver.md
- [x] sources/rjm/.claude/agents/milestone-planner.md
- [x] sources/rjm/.claude/skills/merge-resolver/SKILL.md
- [x] sources/rjm/.claude/skills/merge-resolver/references/strategies.md
- [x] sources/rjm/templates/agents/issue-feature-review.shared.md
- [x] sources/rjm/templates/agents/janitor.shared.md
- [x] sources/rjm/templates/agents/merge-resolver.shared.md
- [x] sources/rjm/templates/agents/milestone-planner.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-issue-feature-review-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-issue-feature-review-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-janitor-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-janitor-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-merge-resolver-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-merge-resolver-shared-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-merge-resolver-references-strategies-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-merge-resolver-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-milestone-planner-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-milestone-planner-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/canonical-sync.md (2199 bytes)
- docs/analysis/concepts/rjm/janitor-agent.md (1895 bytes)
- docs/analysis/concepts/rjm/tech-debt-remediation-specialist.md (2117 bytes)
- docs/analysis/concepts/rjm/less-code-less-debt.md (1616 bytes)
- docs/analysis/concepts/rjm/debt-removal-tasks.md (1949 bytes)
- docs/analysis/concepts/rjm/code-elimination.md (1890 bytes)
- docs/analysis/concepts/rjm/simplification.md (1934 bytes)
- docs/analysis/concepts/rjm/dependency-hygiene.md (1871 bytes)
- docs/analysis/concepts/rjm/test-optimization.md (1878 bytes)
- docs/analysis/concepts/rjm/documentation-cleanup.md (1866 bytes)
- docs/analysis/concepts/rjm/execution-strategy.md (1934 bytes)
- docs/analysis/concepts/rjm/measure-first.md (1575 bytes)
- docs/analysis/concepts/rjm/delete-safely.md (1483 bytes)
- docs/analysis/concepts/rjm/simplify-incrementally.md (1534 bytes)
- docs/analysis/concepts/rjm/validate-continuously.md (1558 bytes)
- docs/analysis/concepts/rjm/document-nothing.md (1592 bytes)
- docs/analysis/concepts/rjm/analysis-priority.md (1857 bytes)
- docs/analysis/concepts/rjm/merge-conflict-resolution-specialist.md (2259 bytes)
- docs/analysis/concepts/rjm/execution-capability-precondition.md (1757 bytes)
- docs/analysis/concepts/rjm/resolution-workflow.md (2025 bytes)
- docs/analysis/concepts/rjm/context-gathering.md (1574 bytes)
- docs/analysis/concepts/rjm/conflict-classification.md (1720 bytes)
- docs/analysis/concepts/rjm/auto-resolvable.md (1899 bytes)
- docs/analysis/concepts/rjm/rename-never-content-merge.md (2745 bytes)
- docs/analysis/concepts/rjm/intent-analysis.md (1752 bytes)
- docs/analysis/concepts/rjm/resolution-report.md (1760 bytes)
- docs/analysis/concepts/rjm/auto-resolution-script.md (1575 bytes)
- docs/analysis/concepts/rjm/confidence-scoring.md (2030 bytes)
- docs/analysis/concepts/rjm/milestone-planner-agent.md (1655 bytes)
- docs/analysis/concepts/rjm/first-principles-planning.md (1918 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-73.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/canonical-sync.md docs/analysis/concepts/rjm/janitor-agent.md docs/analysis/concepts/rjm/tech-debt-remediation-specialist.md docs/analysis/concepts/rjm/less-code-less-debt.md docs/analysis/concepts/rjm/debt-removal-tasks.md docs/analysis/concepts/rjm/code-elimination.md docs/analysis/concepts/rjm/simplification.md docs/analysis/concepts/rjm/dependency-hygiene.md docs/analysis/concepts/rjm/test-optimization.md docs/analysis/concepts/rjm/documentation-cleanup.md docs/analysis/concepts/rjm/execution-strategy.md docs/analysis/concepts/rjm/measure-first.md docs/analysis/concepts/rjm/delete-safely.md docs/analysis/concepts/rjm/simplify-incrementally.md docs/analysis/concepts/rjm/validate-continuously.md docs/analysis/concepts/rjm/document-nothing.md docs/analysis/concepts/rjm/analysis-priority.md docs/analysis/concepts/rjm/merge-conflict-resolution-specialist.md docs/analysis/concepts/rjm/execution-capability-precondition.md docs/analysis/concepts/rjm/resolution-workflow.md docs/analysis/concepts/rjm/context-gathering.md docs/analysis/concepts/rjm/conflict-classification.md docs/analysis/concepts/rjm/auto-resolvable.md docs/analysis/concepts/rjm/rename-never-content-merge.md docs/analysis/concepts/rjm/intent-analysis.md docs/analysis/concepts/rjm/resolution-report.md docs/analysis/concepts/rjm/auto-resolution-script.md docs/analysis/concepts/rjm/confidence-scoring.md docs/analysis/concepts/rjm/milestone-planner-agent.md docs/analysis/concepts/rjm/first-principles-planning.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-73 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 card(s) stamped (47 input(s)))

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-73 authors 30 concept cards spanning four core capability areas:
  1. On-demand and CI/CD review synchronization (`canonical-sync`) from issue-feature-review specifications.
  2. Technical debt remediation and codebase simplification lifecycle (`janitor-agent`, `tech-debt-remediation-specialist`, `less-code-less-debt`, `debt-removal-tasks`, `code-elimination`, `simplification`, `dependency-hygiene`, `test-optimization`, `documentation-cleanup`, `execution-strategy`, `measure-first`, `delete-safely`, `simplify-incrementally`, `validate-continuously`, `document-nothing`, `analysis-priority`) from janitor agent definitions across Claude and shared platform templates.
  3. Merge conflict resolution architecture, blocking execution gates, intent analysis, and append-only evidence safety (`merge-conflict-resolution-specialist`, `execution-capability-precondition`, `resolution-workflow`, `context-gathering`, `conflict-classification`, `auto-resolvable`, `rename-never-content-merge`, `intent-analysis`, `resolution-report`, `auto-resolution-script`, `confidence-scoring`) from merge-resolver agents, skills, and reference strategies.
  4. Milestone planning architecture and risk-first sequencing (`milestone-planner-agent`, `first-principles-planning`) from milestone-planner specifications.
- `rename-never-content-merge.md` documents the critical audit-trail preservation rule resulting from PR #4856 (`.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md`), capturing all 3 citations across agent, skill, and reference strategies files.
- All 47 occurrences across the 10 source files listed in `facts/cc-rjm-73.txt` are mapped in the respective cards' Where used tables.
- Defect statuses were propagated accurately from citing inventory cards (`defects: doc-drift` from `claude-agents-merge-resolver-md.md`; `defects: missing-path, doc-drift, internal-contradiction` from `claude-skills-merge-resolver-skill-md.md` and `claude-skills-merge-resolver-references-strategies-md.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 authored concept cards and 1 unit report.
