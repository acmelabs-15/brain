---
package: rjm
path: .agents/architecture/ADR-016-workflow-execution-optimization.md
type: agent
bytes: 7564
unit: inv-rjm-8
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-016-workflow-execution-optimization.md, sha256: 4055bbee282f97a73b6d6d2500b14c20b448c941fb8c509ff5c824d4100517da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-016-workflow-execution-optimization.md

## Purpose — required, verbatim
> "Implement two complementary optimizations:" — .agents/architecture/ADR-016-workflow-execution-optimization.md:36

## Design intent — required
Reduces GitHub Actions billing minutes by roughly 30% by tackling two primary sources of waste: workflows executing on irrelevant file modifications, and duplicate runs queued by rapid sequential commits on the same branch or PR. It applies path filters to restrict triggers to files actively tested or analyzed, and configures concurrency groups with `cancel-in-progress: true` for branch and PR workflows to abort superseded runs, while maintaining `cancel-in-progress: false` for issue-based triggers to avoid race conditions.

## Phase — required
cross-phase

## Inputs — required
- Workflow execution costs and minutes — .agents/architecture/ADR-016-workflow-execution-optimization.md:24
- Metrics scripts workflow in `agent-metrics` — .agents/architecture/ADR-016-workflow-execution-optimization.md:49
- Git hooks workflow in `copilot-setup-steps` — .agents/architecture/ADR-016-workflow-execution-optimization.md:50
- Agent and template workflow in `drift-detection` — .agents/architecture/ADR-016-workflow-execution-optimization.md:51
- Script test workflow in `pester-tests` — .agents/architecture/ADR-016-workflow-execution-optimization.md:52
- Branch/PR context from GitHub event — .agents/architecture/ADR-016-workflow-execution-optimization.md:66
- Issue context from GitHub event — .agents/architecture/ADR-016-workflow-execution-optimization.md:82

## Outputs — required
- Path filter configuration for `agent-metrics.yml` — .agents/architecture/ADR-016-workflow-execution-optimization.md:140
- Path filter configuration for `copilot-setup-steps.yml` — .agents/architecture/ADR-016-workflow-execution-optimization.md:149
- Path filter configuration for `drift-detection.yml` — .agents/architecture/ADR-016-workflow-execution-optimization.md:156
- Path filter configuration for `pester-tests.yml` — .agents/architecture/ADR-016-workflow-execution-optimization.md:167
- Concurrency group configuration with `cancel-in-progress: true` — .agents/architecture/ADR-016-workflow-execution-optimization.md:186
- 30% reduction in workflow execution costs — .agents/architecture/ADR-016-workflow-execution-optimization.md:119

## Invokes — required
- agent ADR-025 — .agents/architecture/ADR-016-workflow-execution-optimization.md:204
- agent ADR-015 — .agents/architecture/ADR-016-workflow-execution-optimization.md:205
- agent ADR-006 — .agents/architecture/ADR-016-workflow-execution-optimization.md:206
- config agent-metrics.yml — .agents/architecture/ADR-016-workflow-execution-optimization.md:140
- config drift-detection.yml — .agents/architecture/ADR-016-workflow-execution-optimization.md:156

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:104
- agent ADR-016 — .agents/architecture/ADR-015-artifact-storage-minimization.md:136
- doc ADR-016 — docs/COST-GOVERNANCE.md:208

## Concepts named — required, verbatim
`Workflow Execution Optimization Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:12 — defined here
`Path filters` — .agents/architecture/ADR-016-workflow-execution-optimization.md:38, 97, 105, 138, 197 — defined here
`Path Filter Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:43 — defined here
`Concurrency groups` — .agents/architecture/ADR-016-workflow-execution-optimization.md:39, 98, 110, 180 — defined here
`Concurrency Group Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:64 — defined here
`cancel-in-progress` — .agents/architecture/ADR-016-workflow-execution-optimization.md:82, 83, 91, 113, 186 — used here
`workflow_dispatch` — .agents/architecture/ADR-016-workflow-execution-optimization.md:132, 152 — used here
`workflow_call` — .agents/architecture/ADR-016-workflow-execution-optimization.md:153 — used here

## Structure
- `# ADR-016: Workflow Execution Optimization Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:12
- `## Status` — .agents/architecture/ADR-016-workflow-execution-optimization.md:14
- `## Date` — .agents/architecture/ADR-016-workflow-execution-optimization.md:18
- `## Context` — .agents/architecture/ADR-016-workflow-execution-optimization.md:22
- `## Decision` — .agents/architecture/ADR-016-workflow-execution-optimization.md:34
- `## Rationale` — .agents/architecture/ADR-016-workflow-execution-optimization.md:41
- `### Path Filter Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:43
- `### Concurrency Group Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:64
- `### Alternatives Considered` — .agents/architecture/ADR-016-workflow-execution-optimization.md:85
- `### Cost Impact` — .agents/architecture/ADR-016-workflow-execution-optimization.md:94
- `### Trade-offs` — .agents/architecture/ADR-016-workflow-execution-optimization.md:103
- `## Consequences` — .agents/architecture/ADR-016-workflow-execution-optimization.md:115
- `### Positive` — .agents/architecture/ADR-016-workflow-execution-optimization.md:117
- `### Negative` — .agents/architecture/ADR-016-workflow-execution-optimization.md:124
- `### Neutral` — .agents/architecture/ADR-016-workflow-execution-optimization.md:130
- `## Implementation Notes` — .agents/architecture/ADR-016-workflow-execution-optimization.md:136
- `### Path Filters Added` — .agents/architecture/ADR-016-workflow-execution-optimization.md:138
- `### Concurrency Groups Added` — .agents/architecture/ADR-016-workflow-execution-optimization.md:180
- `### Monitoring` — .agents/architecture/ADR-016-workflow-execution-optimization.md:189
- `### Rollback Plan` — .agents/architecture/ADR-016-workflow-execution-optimization.md:195
- `## Related Decisions` — .agents/architecture/ADR-016-workflow-execution-optimization.md:202
- `## References` — .agents/architecture/ADR-016-workflow-execution-optimization.md:208

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `pester-tests` — .agents/architecture/ADR-016-workflow-execution-optimization.md:52 — Referenced workflow file does not exist in `.github/workflows/`.
- missing-path: `ai-session-protocol` — .agents/architecture/ADR-016-workflow-execution-optimization.md:55 — Referenced workflow file does not exist in `.github/workflows/`.
- missing-path: `ai-pr-quality-gate` — .agents/architecture/ADR-016-workflow-execution-optimization.md:61 — Referenced workflow file does not exist in `.github/workflows/`.
- doc-drift: unpopulated issue number placeholder — .agents/architecture/ADR-016-workflow-execution-optimization.md:213 — Cites `Issue: #[issue-number]` without actual issue number.

## Observations
Establishes clear rules for GitHub Actions concurrency controls: PR and branch workflows should aggressively cancel superseded runs to save runner minutes and reduce feedback latency, while event/issue-driven workflows must run without cancellation to preserve parallel event triage.

## Context cost
7,564 bytes, approximately 1,850 tokens.
