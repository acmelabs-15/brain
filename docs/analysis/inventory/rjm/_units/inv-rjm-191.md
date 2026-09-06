---
unit: inv-rjm-191
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-191

## Files assigned
- [x] sources/rjm/docs/copilot-cli-setup.md (4801 bytes, 135 lines)
- [x] sources/rjm/docs/customization.md (9493 bytes, 233 lines)
- [x] sources/rjm/docs/design/external-signal-gating.md (4324 bytes, 99 lines)
- [x] sources/rjm/docs/diagrams/routing-flowchart.md (7205 bytes, 250 lines)
- [x] sources/rjm/docs/getting-started.md (8254 bytes, 201 lines)
- [x] sources/rjm/docs/github-api-capabilities.md (12018 bytes, 328 lines)

## Outputs produced
- docs/analysis/inventory/rjm/docs-copilot-cli-setup-md.md (4873 bytes)
- docs/analysis/inventory/rjm/docs-customization-md.md (7023 bytes)
- docs/analysis/inventory/rjm/docs-design-external-signal-gating-md.md (7116 bytes)
- docs/analysis/inventory/rjm/docs-diagrams-routing-flowchart-md.md (5747 bytes)
- docs/analysis/inventory/rjm/docs-getting-started-md.md (6656 bytes)
- docs/analysis/inventory/rjm/docs-github-api-capabilities-md.md (8197 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-191.md

## Scripts executed
- `python3 scripts/external_signals/acceptance_criteria.py --body docs/design/external-signal-gating.md --allow-empty --json`: exit 0
- `python3 scripts/external_signals/acceptance_criteria.py --body docs/design/external-signal-gating.md --json`: exit 1
- `python3 scripts/external_signals/gate_aggregator.py --signal external:pytest=PASS --signal external:codeql=PASS --signal llm:security=WARN --json`: exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/customization.md` and `docs/design/external-signal-gating.md` cite `SOUL.md` as an identity cornerstone and design principle ("distrust your own artifacts"), but `SOUL.md` does not exist at repository root.
- `docs/diagrams/routing-flowchart.md` has three broken relative links at lines 240-242: `./orchestrator-routing-algorithm.md`, `./task-classification-guide.md`, and `../.agents/governance/agent-interview-protocol.md`.
- `docs/copilot-cli-setup.md` and `docs/github-api-capabilities.md` are unreferenced orphans in the documentation tree.
- `docs/github-api-capabilities.md` references the excluded `.claude/skills/github/` directory and `.serena/memories/` store (METHOD.md §1.2).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,500 tokens (46,095 bytes).
Approximate tokens of output written: ~10,000 tokens (39,612 bytes).
