---
unit: cc-rjm-4
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-4

## Files assigned
- [x] .agents/analysis/002-project-constraints-consolidation.md
- [x] .agents/analysis/adr-045-feasibility-analysis.md
- [x] .agents/analysis/adr-045-inventory-audit.md
- [x] .agents/architecture/ADR-007-memory-first-architecture.md
- [x] .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md
- [x] .agents/architecture/ADR-011-session-state-mcp.md
- [x] .agents/architecture/ADR-020-feature-request-review-step.md
- [x] .agents/architecture/ADR-022-architecture-governance-split-criteria.md
- [x] .agents/architecture/ADR-023-quality-gate-prompt-testing.md
- [x] .agents/architecture/ADR-032-ears-requirements-syntax.md
- [x] .agents/architecture/ADR-033-routing-level-enforcement-gates.md
- [x] .agents/architecture/ADR-037-memory-router-architecture.md
- [x] .agents/architecture/ADR-038-reflexion-memory-schema.md
- [x] .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
- [x] .agents/architecture/ADR-047-plugin-mode-hook-behavior.md
- [x] .agents/architecture/ADR-050-adr-protocol-sync.md
- [x] .agents/architecture/ADR-072-jtbd-plugin-architecture.md
- [x] .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md
- [x] .agents/architecture/ASSESSMENT-session-qa-validation-options.md
- [x] .agents/critique/ADR-045-debate-log.md
- [x] .agents/governance/PROJECT-CONSTRAINTS.md
- [x] .agents/projects/v0.4.0/PLAN.md
- [x] .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md
- [x] .claude/agents/retrospective.md
- [x] .claude/commands/build.md
- [x] .claude/skills/adr-review/scripts/detect_adr_changes.py
- [x] .claude/skills/ai-agents-change-control/SKILL.md
- [x] .claude/skills/ai-agents-docs-of-record/SKILL.md
- [x] .claude/skills/buy-vs-build-framework/SKILL.md
- [x] .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md
- [x] .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py
- [x] .claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] .claude/skills/cva-analysis/scripts/validate-cva-matrix.py
- [x] .claude/skills/golden-principles/SKILL.md
- [x] .claude/skills/golden-principles/references/design-dry-principle.md
- [x] .claude/skills/merge-resolver/references/strategies.md
- [x] .claude/skills/reflect/references/integration-and-design.md
- [x] .claude/skills/review/references/decision-rigor.md
- [x] .claude/skills/spec-generator/references/spec-prior-art-schema.md
- [x] .github/copilot-instructions.md
- [x] CONTRIBUTING.md
- [x] README.md
- [x] docs/architecture.md
- [x] docs/workflow-commands.md
- [x] scripts/check_skill_exists.py
- [x] scripts/validation/check_adr_links.py
- [x] scripts/validation/check_adr_uniqueness.py
- [x] scripts/validation/check_push_lock_before_commit.py
- [x] templates/agents/security.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/documentation-drift.md (1626 bytes)
- docs/analysis/concepts/rjm/dry-principle.md (2110 bytes)
- docs/analysis/concepts/rjm/blocking-gate.md (1995 bytes)
- docs/analysis/concepts/rjm/trust-based-compliance.md (1497 bytes)
- docs/analysis/concepts/rjm/verification-based-compliance.md (1623 bytes)
- docs/analysis/concepts/rjm/verification-based-enforcement.md (2008 bytes)
- docs/analysis/concepts/rjm/adr.md (3867 bytes)
- docs/analysis/concepts/rjm/session-protocol.md (4064 bytes)
- docs/analysis/concepts/rjm/constraint-validation.md (1626 bytes)
- docs/analysis/concepts/rjm/pre-work.md (1367 bytes)
- docs/analysis/concepts/rjm/pre-implementation.md (1418 bytes)
- docs/analysis/concepts/rjm/pre-commit.md (1778 bytes)
- docs/analysis/concepts/rjm/phase-1-5.md (1510 bytes)
- docs/analysis/concepts/rjm/check-skillexists-ps1.md (1094 bytes)
- docs/analysis/concepts/rjm/commit-msg-hook.md (1500 bytes)
- docs/analysis/concepts/rjm/atomic-commits.md (1700 bytes)
- docs/analysis/concepts/rjm/thin-workflows.md (1705 bytes)
- docs/analysis/concepts/rjm/analyst-agent.md (1915 bytes)
- docs/analysis/concepts/rjm/retrospective-agent.md (2150 bytes)
- docs/analysis/concepts/rjm/rfc-2119.md (2470 bytes)
- docs/analysis/concepts/rjm/adr-045.md (1601 bytes)
- docs/analysis/concepts/rjm/framework-extraction.md (2109 bytes)
- docs/analysis/concepts/rjm/plugin-marketplace.md (1961 bytes)
- docs/analysis/concepts/rjm/zero-coupling.md (1621 bytes)
- docs/analysis/concepts/rjm/core-agents.md (1726 bytes)
- docs/analysis/concepts/rjm/framework-skills.md (1642 bytes)
- docs/analysis/concepts/rjm/path-parameterization.md (1654 bytes)
- docs/analysis/concepts/rjm/namespace-migration.md (1634 bytes)
- docs/analysis/concepts/rjm/2-plugin-model.md (1527 bytes)
- docs/analysis/concepts/rjm/4-plugin-model.md (1503 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-4.md (6712 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md, exit code 0
- scripts/synthesis/concept-index.ts, bun scripts/synthesis/concept-index.ts, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `Check-SkillExists.ps1` and `ADR-045` are categorized as `kind: name-only` per D-023 and the dispatch requirements because they are a script filename and specific architecture decision record identifier respectively.
- The concept `ADR` has 14 occurrences across the rjm codebase, linking architectural decision capture to CVA analyses, buy-vs-build evaluations, and uniqueness/link validation scripts.
- The concept `session protocol` has 15 occurrences across multiple architectural records, plans, and instructions, serving as the central lifecycle orchestration spine.
- The cluster of concepts around ADR-045 (`framework-extraction`, `plugin-marketplace`, `zero-coupling`, `core-agents`, `framework-skills`, `path-parameterization`, `namespace-migration`, `2-plugin-model`, `4-plugin-model`) captures the complete decomposition and packaging architecture of rjm's multi-agent system into Claude Code plugin marketplaces.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~145,000 tokens across 49 source files and citing inventory cards; approximate tokens of output written: ~16,500 tokens across 30 concept cards and this unit report.
