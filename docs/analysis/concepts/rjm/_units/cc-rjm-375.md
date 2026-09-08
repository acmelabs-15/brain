---
unit: cc-rjm-375
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-375

## Files assigned
- [x] sources/rjm/templates/README.md
- [x] sources/rjm/templates/agents/qa.shared.md
- [x] sources/rjm/templates/agents/quality-auditor.shared.md
- [x] sources/rjm/templates/agents/retrospective.shared.md
- [x] sources/rjm/templates/agents/roadmap.shared.md
- [x] sources/rjm/templates/agents/security.shared.md
- [x] sources/rjm/templates/agents/task-decomposer.shared.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-qa-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-quality-auditor-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-retrospective-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-roadmap-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-security-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-task-decomposer-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/analyze-quality-testing-impact.md (1174 bytes)
- docs/analysis/concepts/rjm/phase-1-test-strategy.md (1158 bytes)
- docs/analysis/concepts/rjm/validation-failure.md (1148 bytes)
- docs/analysis/concepts/rjm/phase-1-discovery.md (1103 bytes)
- docs/analysis/concepts/rjm/phase-2-grading.md (1055 bytes)
- docs/analysis/concepts/rjm/phase-3-reporting.md (1093 bytes)
- docs/analysis/concepts/rjm/phase-4-recommendations.md (1187 bytes)
- docs/analysis/concepts/rjm/grade-domains-py.md (954 bytes)
- docs/analysis/concepts/rjm/search-memory-py.md (922 bytes)
- docs/analysis/concepts/rjm/reflective-analyst.md (1660 bytes)
- docs/analysis/concepts/rjm/timeline-analysis.md (1248 bytes)
- docs/analysis/concepts/rjm/learning-matrices.md (1258 bytes)
- docs/analysis/concepts/rjm/root-cause-pattern.md (1220 bytes)
- docs/analysis/concepts/rjm/resolve-by-interleave.md (1379 bytes)
- docs/analysis/concepts/rjm/outcome.md (994 bytes)
- docs/analysis/concepts/rjm/security-review-scope.md (1147 bytes)
- docs/analysis/concepts/rjm/cwe-699-categories-and-high-priority-cwes.md (1256 bytes)
- docs/analysis/concepts/rjm/task-decomposer-agent.md (1227 bytes)
- docs/analysis/concepts/rjm/task-list-template.md (1146 bytes)
- docs/analysis/concepts/rjm/reconciliation-process.md (1130 bytes)
- docs/analysis/concepts/rjm/reconciliation-actions.md (1219 bytes)
- docs/analysis/concepts/rjm/anti-pattern-unreconciled-estimate-drift.md (1203 bytes)
- docs/analysis/concepts/rjm/toolsets-yaml.md (872 bytes)
- docs/analysis/concepts/rjm/toolsets.md (1209 bytes)
- docs/analysis/concepts/rjm/github-mcp-server-toolsets.md (1313 bytes)
- docs/analysis/concepts/rjm/platform-transformations.md (1212 bytes)
- docs/analysis/concepts/rjm/handoff-syntax.md (1092 bytes)
- docs/analysis/concepts/rjm/agent-invocation-syntax.md (1234 bytes)
- docs/analysis/concepts/rjm/analysis-types.md (819 bytes)
- docs/analysis/concepts/rjm/adr-templates.md (816 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-375.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/analyze-quality-testing-impact.md docs/analysis/concepts/rjm/phase-1-test-strategy.md docs/analysis/concepts/rjm/validation-failure.md docs/analysis/concepts/rjm/phase-1-discovery.md docs/analysis/concepts/rjm/phase-2-grading.md docs/analysis/concepts/rjm/phase-3-reporting.md docs/analysis/concepts/rjm/phase-4-recommendations.md docs/analysis/concepts/rjm/grade-domains-py.md docs/analysis/concepts/rjm/search-memory-py.md docs/analysis/concepts/rjm/reflective-analyst.md docs/analysis/concepts/rjm/timeline-analysis.md docs/analysis/concepts/rjm/learning-matrices.md docs/analysis/concepts/rjm/root-cause-pattern.md docs/analysis/concepts/rjm/resolve-by-interleave.md docs/analysis/concepts/rjm/outcome.md docs/analysis/concepts/rjm/security-review-scope.md docs/analysis/concepts/rjm/cwe-699-categories-and-high-priority-cwes.md docs/analysis/concepts/rjm/task-decomposer-agent.md docs/analysis/concepts/rjm/task-list-template.md docs/analysis/concepts/rjm/reconciliation-process.md docs/analysis/concepts/rjm/reconciliation-actions.md docs/analysis/concepts/rjm/anti-pattern-unreconciled-estimate-drift.md docs/analysis/concepts/rjm/toolsets-yaml.md docs/analysis/concepts/rjm/toolsets.md docs/analysis/concepts/rjm/github-mcp-server-toolsets.md docs/analysis/concepts/rjm/platform-transformations.md docs/analysis/concepts/rjm/handoff-syntax.md docs/analysis/concepts/rjm/agent-invocation-syntax.md docs/analysis/concepts/rjm/analysis-types.md docs/analysis/concepts/rjm/adr-templates.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-375 completes 30 concept cards across QA, quality auditing, retrospective analysis, roadmap management, security assessment, task decomposition, and template generation:
  1. QA protocols in `qa.shared.md`: planning impact checklist (`analyze-quality-testing-impact`), pre-implementation strategy phase (`phase-1-test-strategy`), and handoff gating (`validation-failure`).
  2. Quality auditor 4-phase audit pipeline and script tools in `quality-auditor.shared.md`: `phase-1-discovery`, `phase-2-grading`, `phase-3-reporting`, `phase-4-recommendations`, plus script names `grade-domains-py` and `search-memory-py`.
  3. Retrospective analysis concepts in `retrospective.shared.md`: `reflective-analyst` role, `timeline-analysis` and `learning-matrices` techniques, and structured `root-cause-pattern` artifact.
  4. Roadmap prioritization in `roadmap.shared.md`: `resolve-by-interleave` conflict arbitration technique and `outcome` specification section.
  5. Security assessment in `security.shared.md`: mandatory `security-review-scope` gate and `cwe-699-categories-and-high-priority-cwes` taxonomy reference.
  6. Task decomposition in `task-decomposer.shared.md`: `task-decomposer-agent` role, `task-list-template` artifact, estimate drift management (`reconciliation-process`, `reconciliation-actions`, `anti-pattern-unreconciled-estimate-drift`).
  7. Cross-platform template generator architecture in `templates/README.md`: `toolsets` pattern, `toolsets-yaml` config, `github-mcp-server-toolsets` reference, `platform-transformations`, `handoff-syntax`, `agent-invocation-syntax`, and section headings `analysis-types` and `adr-templates`.
- Concepts representing script file names, config files, or section headings are classified as `kind: name-only` per D-023.
- All 30 occurrences from `facts/cc-rjm-375.txt` are mapped in their respective `Where used` tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`defects: missing-path`, `defects: missing-path, internal-contradiction`, `defects: doc-drift`, `defects: missing-path, doc-drift`, `defects: doc-drift, cross-file-contradiction`, or `clean`).
- All 30 cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 unit report.
