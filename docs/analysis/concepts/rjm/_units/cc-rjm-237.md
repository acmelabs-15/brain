---
unit: cc-rjm-237
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-237

## Files assigned
- [x] sources/rjm/docs/agent-governance.md
- [x] sources/rjm/docs/agent-metrics.md
- [x] sources/rjm/docs/architecture.md
- [x] sources/rjm/docs/autonomous-issue-development.md
- [x] sources/rjm/templates/agents/implementer.shared.md
- [x] docs/analysis/inventory/rjm/docs-agent-governance-md.md
- [x] docs/analysis/inventory/rjm/docs-agent-metrics-md.md
- [x] docs/analysis/inventory/rjm/docs-architecture-md.md
- [x] docs/analysis/inventory/rjm/docs-autonomous-issue-development-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-implementer-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/interview-protocol.md (1287 bytes)
- docs/analysis/concepts/rjm/the-six-design-principles.md (1421 bytes)
- docs/analysis/concepts/rjm/steering-committee.md (1355 bytes)
- docs/analysis/concepts/rjm/agent-lifecycle.md (1205 bytes)
- docs/analysis/concepts/rjm/retired.md (859 bytes)
- docs/analysis/concepts/rjm/agent-invocation-metrics.md (933 bytes)
- docs/analysis/concepts/rjm/the-8-key-metrics.md (904 bytes)
- docs/analysis/concepts/rjm/workflow-coalescing-effectiveness.md (1402 bytes)
- docs/analysis/concepts/rjm/implementer-agent.md (1692 bytes)
- docs/analysis/concepts/rjm/conventional-commits.md (1133 bytes)
- docs/analysis/concepts/rjm/runtime.md (1189 bytes)
- docs/analysis/concepts/rjm/template-system.md (1307 bytes)
- docs/analysis/concepts/rjm/plugin-structure.md (1296 bytes)
- docs/analysis/concepts/rjm/platform-differences.md (1286 bytes)
- docs/analysis/concepts/rjm/agent-communication.md (1247 bytes)
- docs/analysis/concepts/rjm/directory-layout.md (1070 bytes)
- docs/analysis/concepts/rjm/adr-011.md (845 bytes)
- docs/analysis/concepts/rjm/adr-012.md (867 bytes)
- docs/analysis/concepts/rjm/adr-013.md (888 bytes)
- docs/analysis/concepts/rjm/adr-032.md (897 bytes)
- docs/analysis/concepts/rjm/adr-043.md (861 bytes)
- docs/analysis/concepts/rjm/autonomous-issue-development-prompt.md (1532 bytes)
- docs/analysis/concepts/rjm/autonomous-development-agent.md (1396 bytes)
- docs/analysis/concepts/rjm/autonomous-development-session.md (1374 bytes)
- docs/analysis/concepts/rjm/multi-agent-workflow.md (1520 bytes)
- docs/analysis/concepts/rjm/orchestrator-agent.md (1411 bytes)
- docs/analysis/concepts/rjm/recursive-review-cycles.md (1584 bytes)
- docs/analysis/concepts/rjm/critic-review-recursive.md (1395 bytes)
- docs/analysis/concepts/rjm/qa-review-recursive.md (1338 bytes)
- docs/analysis/concepts/rjm/security-review-recursive.md (1429 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-237.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/interview-protocol.md docs/analysis/concepts/rjm/the-six-design-principles.md docs/analysis/concepts/rjm/steering-committee.md docs/analysis/concepts/rjm/agent-lifecycle.md docs/analysis/concepts/rjm/retired.md docs/analysis/concepts/rjm/agent-invocation-metrics.md docs/analysis/concepts/rjm/the-8-key-metrics.md docs/analysis/concepts/rjm/workflow-coalescing-effectiveness.md docs/analysis/concepts/rjm/implementer-agent.md docs/analysis/concepts/rjm/conventional-commits.md docs/analysis/concepts/rjm/runtime.md docs/analysis/concepts/rjm/template-system.md docs/analysis/concepts/rjm/plugin-structure.md docs/analysis/concepts/rjm/platform-differences.md docs/analysis/concepts/rjm/agent-communication.md docs/analysis/concepts/rjm/directory-layout.md docs/analysis/concepts/rjm/adr-011.md docs/analysis/concepts/rjm/adr-012.md docs/analysis/concepts/rjm/adr-013.md docs/analysis/concepts/rjm/adr-032.md docs/analysis/concepts/rjm/adr-043.md docs/analysis/concepts/rjm/autonomous-issue-development-prompt.md docs/analysis/concepts/rjm/autonomous-development-agent.md docs/analysis/concepts/rjm/autonomous-development-session.md docs/analysis/concepts/rjm/multi-agent-workflow.md docs/analysis/concepts/rjm/orchestrator-agent.md docs/analysis/concepts/rjm/recursive-review-cycles.md docs/analysis/concepts/rjm/critic-review-recursive.md docs/analysis/concepts/rjm/qa-review-recursive.md docs/analysis/concepts/rjm/security-review-recursive.md` (exit code 0, 38 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-237 authors 30 concept cards across 5 source files and 5 inventory cards in package rjm:
  1. Governance framework concepts from `docs/agent-governance.md`: `interview-protocol`, `the-six-design-principles`, `steering-committee`, `agent-lifecycle`, and `retired`.
  2. Telemetry and metrics concepts from `docs/agent-metrics.md`: `agent-invocation-metrics`, `the-8-key-metrics`, `workflow-coalescing-effectiveness`, `implementer-agent` (also cited in `templates/agents/implementer.shared.md`), and `conventional-commits`.
  3. Architecture and platform layout concepts from `docs/architecture.md`: `runtime`, `template-system`, `plugin-structure`, `platform-differences`, `agent-communication`, `directory-layout`, and ADR references (`adr-011`, `adr-012`, `adr-013`, `adr-032`, `adr-043`).
  4. Autonomous issue development prompt and execution harness concepts from `docs/autonomous-issue-development.md`: `autonomous-issue-development-prompt`, `autonomous-development-agent`, `autonomous-development-session`, `multi-agent-workflow`, `orchestrator-agent`, `recursive-review-cycles`, and the three recursive review gates (`critic-review-recursive`, `qa-review-recursive`, `security-review-recursive`).
- Non-lifecycle concepts representing document/section headings, ADR identifiers, or status enums were classified as `kind: name-only` per D-023 (`retired`, `agent-invocation-metrics`, `the-8-key-metrics`, `adr-011`, `adr-012`, `adr-013`, `adr-032`, `adr-043`).
- All 31 occurrences recorded in `facts/cc-rjm-237.txt` are mapped in the respective Where used tables.
- Defect annotations from inventory cards were propagated to `Implementation status` (`clean`, `defects: missing-path`, `defects: doc-drift`, and `defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift` for `implementer-agent`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (38 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~20,000 tokens across 5 source files and 5 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
