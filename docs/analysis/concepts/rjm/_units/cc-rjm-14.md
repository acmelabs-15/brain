---
unit: cc-rjm-14
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-14

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-024-github-actions-runner-selection.md
- [x] sources/rjm/.agents/architecture/ADR-025-github-actions-arm-runners.md
- [x] sources/rjm/.agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md
- [x] sources/rjm/.agents/architecture/ADR-027-github-mcp-agent-isolation.md
- [x] sources/rjm/.agents/architecture/ADR-030-skills-pattern-superiority.md
- [x] sources/rjm/.agents/architecture/ADR-055-github-actions-runner-selection.md
- [x] sources/rjm/.agents/architecture/ADR-104-gate-tier-placement-and-budgets.md
- [x] sources/rjm/.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md
- [x] sources/rjm/.agents/archive/planning/PR-60/003-pr-60-plan-critique.md
- [x] sources/rjm/.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md
- [x] sources/rjm/.agents/devops/arm-runner-migration-analysis.md
- [x] sources/rjm/.agents/guides/python-cicd-patterns.md
- [x] sources/rjm/.agents/projects/v0.3.1/PowerShell-migration.md
- [x] sources/rjm/.github/AGENTS.md
- [x] sources/rjm/docs/WORKFLOW-VALIDATION.md
- [x] sources/rjm/docs/codeql-rollout-checklist.md
- [x] sources/rjm/docs/copilot-cli-setup.md
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-024-github-actions-runner-selection-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-025-github-actions-arm-runners-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-026-pr-automation-concurrency-and-safety-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-027-github-mcp-agent-isolation-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-030-skills-pattern-superiority-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-055-github-actions-runner-selection-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-104-gate-tier-placement-and-budgets-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-002-pr-60-remediation-plan-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-003-pr-60-plan-critique-md.md
- [x] docs/analysis/inventory/rjm/agents-archive-planning-pr-60-005-consolidated-agent-review-summary-md.md
- [x] docs/analysis/inventory/rjm/agents-devops-arm-runner-migration-analysis-md.md
- [x] docs/analysis/inventory/rjm/agents-guides-python-cicd-patterns-md.md
- [x] docs/analysis/inventory/rjm/agents-projects-v0-3-1-powershell-migration-md.md
- [x] docs/analysis/inventory/rjm/github-agents-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-validation-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-rollout-checklist-md.md
- [x] docs/analysis/inventory/rjm/docs-copilot-cli-setup-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-run-workflow-local-test-py.md

## Outputs produced
- docs/analysis/concepts/rjm/ubuntu-latest.md (1395 bytes)
- docs/analysis/concepts/rjm/ubuntu-24-04-arm.md (1381 bytes)
- docs/analysis/concepts/rjm/windows-latest.md (1178 bytes)
- docs/analysis/concepts/rjm/runner-selection-policy.md (950 bytes)
- docs/analysis/concepts/rjm/compliance-comment-format.md (963 bytes)
- docs/analysis/concepts/rjm/adr-024-exception.md (1214 bytes)
- docs/analysis/concepts/rjm/compliance-comment.md (1282 bytes)
- docs/analysis/concepts/rjm/rollback-plan.md (2132 bytes)
- docs/analysis/concepts/rjm/metered-usage.md (1113 bytes)
- docs/analysis/concepts/rjm/runner-type-optimization.md (1344 bytes)
- docs/analysis/concepts/rjm/artifact-storage-costs.md (1000 bytes)
- docs/analysis/concepts/rjm/windows-based-workflows.md (1083 bytes)
- docs/analysis/concepts/rjm/ubuntu-lts.md (967 bytes)
- docs/analysis/concepts/rjm/migration-checklist.md (1807 bytes)
- docs/analysis/concepts/rjm/validation-steps.md (1127 bytes)
- docs/analysis/concepts/rjm/concurrency.md (1282 bytes)
- docs/analysis/concepts/rjm/cancel-in-progress.md (1135 bytes)
- docs/analysis/concepts/rjm/test-ratelimitsafe.md (1014 bytes)
- docs/analysis/concepts/rjm/test-safebranchname.md (1026 bytes)
- docs/analysis/concepts/rjm/dryrun.md (1002 bytes)
- docs/analysis/concepts/rjm/bot-pat.md (1166 bytes)
- docs/analysis/concepts/rjm/dorny-paths-filter.md (1444 bytes)
- docs/analysis/concepts/rjm/workflow-debounce.md (1103 bytes)
- docs/analysis/concepts/rjm/measure-workflowcoalescing-ps1.md (1063 bytes)
- docs/analysis/concepts/rjm/agent-isolation.md (1482 bytes)
- docs/analysis/concepts/rjm/pwsh.md (908 bytes)
- docs/analysis/concepts/rjm/noprofile.md (948 bytes)
- docs/analysis/concepts/rjm/superpowers-chrome.md (1309 bytes)
- docs/analysis/concepts/rjm/github-mcp-server.md (1075 bytes)
- docs/analysis/concepts/rjm/github-agent.md (1342 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-14.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <cards> (exit code 0, 30 PASS 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-14 addresses CI runner selection and migration architecture (ADR-024, ADR-025, ADR-055), workflow concurrency, coalescing, and safety mechanisms (ADR-026, AGENTS.md, WORKFLOW-VALIDATION.md), and agent tool isolation patterns (ADR-027, ADR-030).
- External infrastructure identifiers and tool names (`ubuntu-latest`, `ubuntu-24-04-arm`, `windows-latest`, `pwsh`, `-NoProfile`, `dorny/paths-filter`, `github-mcp-server`, `superpowers-chrome`, `BOT_PAT`) were categorized with `kind: name-only` per METHOD.md D-023.
- `Migration Checklist` spans runner architecture migration (ADR-025), Python CI/CD migration patterns (`python-cicd-patterns.md`), and the comprehensive PowerShell-to-Python repository migration (`PowerShell-migration.md`), serving as a central cross-cutting checklist concept.
- `Rollback Plan` spans architecture decisions (ADR-024, ADR-025), remediation plans (PR-60 planning artifacts 002, 003, 005), and rollout checklists (`codeql-rollout-checklist.md`).
- `Agent Isolation` (ADR-027) establishes the pattern for restricting heavy toolsets to dedicated subagents, which directly informed ADR-030's subsequent analysis contrasting subagent isolation with skill-based direct tool binding.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~72,000 tokens across 18 source files and 18 citing inventory cards.
Approximate tokens of output written: ~11,500 tokens across 30 concept cards and this unit report.
