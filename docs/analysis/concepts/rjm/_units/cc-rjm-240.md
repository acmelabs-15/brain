---
unit: cc-rjm-240
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-240

## Files assigned
- [x] sources/rjm/docs/copilot-cli-setup.md
- [x] sources/rjm/docs/customization.md
- [x] sources/rjm/docs/design/external-signal-gating.md
- [x] sources/rjm/docs/diagrams/routing-flowchart.md
- [x] sources/rjm/docs/getting-started.md
- [x] docs/analysis/inventory/rjm/docs-copilot-cli-setup-md.md
- [x] docs/analysis/inventory/rjm/docs-customization-md.md
- [x] docs/analysis/inventory/rjm/docs-design-external-signal-gating-md.md
- [x] docs/analysis/inventory/rjm/docs-diagrams-routing-flowchart-md.md
- [x] docs/analysis/inventory/rjm/docs-getting-started-md.md

## Outputs produced
- docs/analysis/concepts/rjm/diagnostic-summary.md (796 bytes)
- docs/analysis/concepts/rjm/copilot-health.md (818 bytes)
- docs/analysis/concepts/rjm/copilot-diagnostic.md (836 bytes)
- docs/analysis/concepts/rjm/auth-status.md (833 bytes)
- docs/analysis/concepts/rjm/reconstruction-target.md (1420 bytes)
- docs/analysis/concepts/rjm/the-bicameral-bet.md (1159 bytes)
- docs/analysis/concepts/rjm/orchestrator-routing.md (1361 bytes)
- docs/analysis/concepts/rjm/memory-system.md (1115 bytes)
- docs/analysis/concepts/rjm/user-docs.md (1402 bytes)
- docs/analysis/concepts/rjm/contributor-docs.md (1525 bytes)
- docs/analysis/concepts/rjm/installation-artifacts.md (1431 bytes)
- docs/analysis/concepts/rjm/external-signal-gating.md (1378 bytes)
- docs/analysis/concepts/rjm/externally-grounded-signal.md (1434 bytes)
- docs/analysis/concepts/rjm/spec-acceptance.md (1357 bytes)
- docs/analysis/concepts/rjm/prose.md (1306 bytes)
- docs/analysis/concepts/rjm/acceptance-criteria-py.md (892 bytes)
- docs/analysis/concepts/rjm/gate-aggregator-py.md (887 bytes)
- docs/analysis/concepts/rjm/agent-can-edit-workflows.md (930 bytes)
- docs/analysis/concepts/rjm/orchestrator-routing-flowchart.md (1390 bytes)
- docs/analysis/concepts/rjm/orchestrator-routing-algorithm.md (1495 bytes)
- docs/analysis/concepts/rjm/phase-2-select.md (1271 bytes)
- docs/analysis/concepts/rjm/phase-3-execute.md (1294 bytes)
- docs/analysis/concepts/rjm/phase-4-synthesize.md (1330 bytes)
- docs/analysis/concepts/rjm/multi-domain.md (1291 bytes)
- docs/analysis/concepts/rjm/multi-step.md (1359 bytes)
- docs/analysis/concepts/rjm/parallel-group.md (1337 bytes)
- docs/analysis/concepts/rjm/serial-group.md (1354 bytes)
- docs/analysis/concepts/rjm/claude-code-cli.md (872 bytes)
- docs/analysis/concepts/rjm/vs-code-with-github-copilot.md (904 bytes)
- docs/analysis/concepts/rjm/7-phase-pipeline.md (1451 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-240.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/diagnostic-summary.md docs/analysis/concepts/rjm/copilot-health.md docs/analysis/concepts/rjm/copilot-diagnostic.md docs/analysis/concepts/rjm/auth-status.md docs/analysis/concepts/rjm/reconstruction-target.md docs/analysis/concepts/rjm/the-bicameral-bet.md docs/analysis/concepts/rjm/orchestrator-routing.md docs/analysis/concepts/rjm/memory-system.md docs/analysis/concepts/rjm/user-docs.md docs/analysis/concepts/rjm/contributor-docs.md docs/analysis/concepts/rjm/installation-artifacts.md docs/analysis/concepts/rjm/external-signal-gating.md docs/analysis/concepts/rjm/externally-grounded-signal.md docs/analysis/concepts/rjm/spec-acceptance.md docs/analysis/concepts/rjm/prose.md docs/analysis/concepts/rjm/acceptance-criteria-py.md docs/analysis/concepts/rjm/gate-aggregator-py.md docs/analysis/concepts/rjm/agent-can-edit-workflows.md docs/analysis/concepts/rjm/orchestrator-routing-flowchart.md docs/analysis/concepts/rjm/orchestrator-routing-algorithm.md docs/analysis/concepts/rjm/phase-2-select.md docs/analysis/concepts/rjm/phase-3-execute.md docs/analysis/concepts/rjm/phase-4-synthesize.md docs/analysis/concepts/rjm/multi-domain.md docs/analysis/concepts/rjm/multi-step.md docs/analysis/concepts/rjm/parallel-group.md docs/analysis/concepts/rjm/serial-group.md docs/analysis/concepts/rjm/claude-code-cli.md docs/analysis/concepts/rjm/vs-code-with-github-copilot.md docs/analysis/concepts/rjm/7-phase-pipeline.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-240 authored 30 concept cards across five rjm documentation sources:
  1. `docs/copilot-cli-setup.md`: CLI diagnostics and output fields (`diagnostic-summary`, `copilot-health`, `copilot-diagnostic`, `auth-status`).
  2. `docs/customization.md`: Multi-layer agent architecture, routing, documentation separation, and PRD checklists (`reconstruction-target`, `the-bicameral-bet`, `orchestrator-routing`, `memory-system`, `user-docs`, `contributor-docs`, `installation-artifacts`). `memory-system` has `implementation_in_scope: false` per METHOD §1.2 exclusion boundaries.
  3. `docs/design/external-signal-gating.md`: Deterministic external-signal gating and safety controls (`external-signal-gating`, `externally-grounded-signal`, `spec-acceptance`, `prose`, `acceptance-criteria-py`, `gate-aggregator-py`, `agent-can-edit-workflows`).
  4. `docs/diagrams/routing-flowchart.md`: Orchestrator routing flowchart, phases, and complexity/execution patterns (`orchestrator-routing-flowchart`, `orchestrator-routing-algorithm`, `phase-2-select`, `phase-3-execute`, `phase-4-synthesize`, `multi-domain`, `multi-step`, `parallel-group`, `serial-group`).
  5. `docs/getting-started.md`: External tooling prerequisites and canonical end-to-end development lifecycle (`claude-code-cli`, `vs-code-with-github-copilot`, `7-phase-pipeline`).
- Non-lifecycle concepts (identifiers, file names, headings, labels, external tools) were classified as `kind: name-only` per D-023.
- All 30 occurrences from `facts/cc-rjm-240.txt` are represented in the Where used tables.
- Implementation defects were accurately propagated from the citing inventory cards (`defects: orphan`, `defects: missing-path`, and `clean`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
