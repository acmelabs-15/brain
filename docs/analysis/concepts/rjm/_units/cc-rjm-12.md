---
unit: cc-rjm-12
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-12

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-018-cache-invalidation-strategy.md
- [x] sources/rjm/.agents/architecture/ADR-019-script-organization.md
- [x] sources/rjm/.agents/architecture/ADR-020-feature-request-review-step.md
- [x] sources/rjm/.agents/architecture/ADR-021-model-routing-strategy.md
- [x] sources/rjm/.agents/architecture/ADR-TEMPLATE.md
- [x] sources/rjm/.claude/agents/issue-feature-review.md
- [x] sources/rjm/.claude/skills/adr-generator/references/adr-template.md
- [x] sources/rjm/.claude/skills/review/references/roadmap.md
- [x] sources/rjm/scripts/README.md
- [x] sources/rjm/scripts/eval/_report_writer.py
- [x] sources/rjm/templates/agents/issue-feature-review.shared.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-018-cache-invalidation-strategy-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-019-script-organization-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-020-feature-request-review-step-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-021-model-routing-strategy-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-template-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-issue-feature-review-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-adr-template-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-roadmap-md.md
- [x] docs/analysis/inventory/rjm/scripts-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--report-writer-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-issue-feature-review-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/cross-session-benefit.md (951 bytes)
- docs/analysis/concepts/rjm/invalidation-reliability.md (966 bytes)
- docs/analysis/concepts/rjm/session-local-cache.md (1438 bytes)
- docs/analysis/concepts/rjm/external-cache.md (1407 bytes)
- docs/analysis/concepts/rjm/invalidate-on-write-pattern.md (1398 bytes)
- docs/analysis/concepts/rjm/cloudmcp.md (808 bytes)
- docs/analysis/concepts/rjm/intended-audience-and-execution-context.md (1682 bytes)
- docs/analysis/concepts/rjm/validation-scripts.md (1741 bytes)
- docs/analysis/concepts/rjm/detection-scripts.md (1266 bytes)
- docs/analysis/concepts/rjm/utility-scripts.md (1269 bytes)
- docs/analysis/concepts/rjm/installation-scripts.md (1271 bytes)
- docs/analysis/concepts/rjm/workflow-modules.md (1235 bytes)
- docs/analysis/concepts/rjm/ci-helpers.md (1227 bytes)
- docs/analysis/concepts/rjm/report-generators.md (1205 bytes)
- docs/analysis/concepts/rjm/developer-facing-wrappers.md (1459 bytes)
- docs/analysis/concepts/rjm/ci-only-scripts.md (1347 bytes)
- docs/analysis/concepts/rjm/pester-test-files.md (1295 bytes)
- docs/analysis/concepts/rjm/categorize-issue.md (1316 bytes)
- docs/analysis/concepts/rjm/align-to-roadmap.md (1371 bytes)
- docs/analysis/concepts/rjm/generate-prd.md (1384 bytes)
- docs/analysis/concepts/rjm/feature-request-review.md (1686 bytes)
- docs/analysis/concepts/rjm/user-impact.md (1908 bytes)
- docs/analysis/concepts/rjm/strategic-alignment.md (2282 bytes)
- docs/analysis/concepts/rjm/trade-offs.md (2047 bytes)
- docs/analysis/concepts/rjm/recommendation.md (1412 bytes)
- docs/analysis/concepts/rjm/assignees.md (1007 bytes)
- docs/analysis/concepts/rjm/labels.md (1010 bytes)
- docs/analysis/concepts/rjm/roadmap-agent.md (1437 bytes)
- docs/analysis/concepts/rjm/explainer-agent.md (1388 bytes)
- docs/analysis/concepts/rjm/max-diff-lines.md (1026 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-12.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md (exit code 0, 42 PASS 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-12 covers 30 concepts spanning cache invalidation strategy (ADR-018), script taxonomy and organization (ADR-019), feature request triage and evaluation (ADR-020, issue-feature-review agent, shared templates), model routing thresholds (ADR-021), ADR template standards, and evaluation reporting.
- Output token formats (`RECOMMENDATION`, `ASSIGNEES`, `LABELS`), environment threshold parameters (`MAX_DIFF_LINES`), decision driver labels (`Cross-Session Benefit`, `Invalidation Reliability`), and external service providers (`cloudmcp`) were mapped to `kind: name-only` per METHOD.md D-023.
- Agent roles involved in the triage pipeline (`roadmap agent`, `explainer agent`) were mapped to `kind: role` under `package_phase: rjm:coordinator`.
- Multi-occurrence concepts (`validation-scripts`, `user-impact`, `strategic-alignment`, `trade-offs`, `recommendation`) have all inventory occurrences recorded in their Where used tables.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
