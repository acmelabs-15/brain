---
package: rjm
path: .agents/architecture/ADR-015-artifact-storage-minimization.md
type: agent
bytes: 5330
unit: inv-rjm-8
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-015-artifact-storage-minimization.md, sha256: b91304f564738c0b52e7bd19d2589c25bf40074ea8bd0ad7165f0e8675b213f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-015-artifact-storage-minimization.md

## Purpose — required, verbatim
> "**Reduce artifact retention to minimum necessary duration:**" — .agents/architecture/ADR-015-artifact-storage-minimization.md:43

## Design intent — required
Minimizes GitHub Actions storage expenditure by replacing long retention windows (90 days for metrics, 30 days for pester test outputs) with a strict, standardized retention policy. It sets a 1-day retention limit on transient operational review artifacts and a 7-day window on test results and metrics reports (producing a 76–92% reduction in storage volume), delegating long-term historical records to repository git commits.

## Phase — required
cross-phase

## Inputs — required
- Metered GitHub Actions artifact storage costs — .agents/architecture/ADR-015-artifact-storage-minimization.md:24
- Workflow retention settings in `agent-metrics.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:36
- Workflow retention settings in `pester-tests.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:37
- Operational PR review workflow `ai-pr-quality-gate.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:38
- Operational session protocol workflow `ai-session-protocol.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:39
- GitHub billing dashboard metrics — .agents/architecture/ADR-015-artifact-storage-minimization.md:124

## Outputs — required
- Standardized 7-day retention in `agent-metrics.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:107
- Standardized 7-day retention in `pester-tests.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:112
- Standardized 1-day retention for operational artifacts — .agents/architecture/ADR-015-artifact-storage-minimization.md:45
- Git-based persistence for test results and metrics — .agents/architecture/ADR-015-artifact-storage-minimization.md:89

## Invokes — required
- agent ADR-025 — .agents/architecture/ADR-015-artifact-storage-minimization.md:135
- agent ADR-016 — .agents/architecture/ADR-015-artifact-storage-minimization.md:136
- config agent-metrics.yml — .agents/architecture/ADR-015-artifact-storage-minimization.md:36

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:103
- agent ADR-015 — .agents/architecture/ADR-016-workflow-execution-optimization.md:205
- script .agents/architecture/ADR-015-artifact-storage-minimization.md — scripts/ci/adr015_workflow_retention.py:29
- doc ADR-015 — docs/COST-GOVERNANCE.md:207

## Concepts named — required, verbatim
`Artifact Storage Minimization Strategy` — .agents/architecture/ADR-015-artifact-storage-minimization.md:12 — defined here
`Operational artifacts` — .agents/architecture/ADR-015-artifact-storage-minimization.md:45 — defined here
`Test results` — .agents/architecture/ADR-015-artifact-storage-minimization.md:46, 56 — defined here
`Metrics reports` — .agents/architecture/ADR-015-artifact-storage-minimization.md:47, 57 — defined here
`retention-days` — .agents/architecture/ADR-015-artifact-storage-minimization.md:100, 109, 114 — used here
`PR review results` — .agents/architecture/ADR-015-artifact-storage-minimization.md:55 — defined here
`git-based persistence` — .agents/architecture/ADR-015-artifact-storage-minimization.md:89 — defined here

## Structure
- `# ADR-015: Artifact Storage Minimization Strategy` — .agents/architecture/ADR-015-artifact-storage-minimization.md:12
- `## Status` — .agents/architecture/ADR-015-artifact-storage-minimization.md:14
- `## Date` — .agents/architecture/ADR-015-artifact-storage-minimization.md:18
- `## Context` — .agents/architecture/ADR-015-artifact-storage-minimization.md:22
- `### Current Artifact Usage` — .agents/architecture/ADR-015-artifact-storage-minimization.md:32
- `## Decision` — .agents/architecture/ADR-015-artifact-storage-minimization.md:41
- `## Rationale` — .agents/architecture/ADR-015-artifact-storage-minimization.md:49
- `### Retention Period Analysis` — .agents/architecture/ADR-015-artifact-storage-minimization.md:51
- `### Alternatives Considered` — .agents/architecture/ADR-015-artifact-storage-minimization.md:59
- `### Cost Impact` — .agents/architecture/ADR-015-artifact-storage-minimization.md:68
- `### Trade-offs` — .agents/architecture/ADR-015-artifact-storage-minimization.md:76
- `## Consequences` — .agents/architecture/ADR-015-artifact-storage-minimization.md:83
- `### Positive` — .agents/architecture/ADR-015-artifact-storage-minimization.md:85
- `### Negative` — .agents/architecture/ADR-015-artifact-storage-minimization.md:92
- `### Neutral` — .agents/architecture/ADR-015-artifact-storage-minimization.md:98
- `## Implementation Notes` — .agents/architecture/ADR-015-artifact-storage-minimization.md:103
- `### Changed Retention Periods` — .agents/architecture/ADR-015-artifact-storage-minimization.md:105
- `### Unchanged Artifacts (Already Minimal)` — .agents/architecture/ADR-015-artifact-storage-minimization.md:117
- `### Monitoring` — .agents/architecture/ADR-015-artifact-storage-minimization.md:122
- `### Compliance Considerations` — .agents/architecture/ADR-015-artifact-storage-minimization.md:126
- `## Related Decisions` — .agents/architecture/ADR-015-artifact-storage-minimization.md:133
- `## References` — .agents/architecture/ADR-015-artifact-storage-minimization.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `pester-tests.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:37 — Referenced workflow file does not exist on disk in `.github/workflows/`.
- missing-path: `ai-pr-quality-gate.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:38 — Referenced operational workflow does not exist in `.github/workflows/`.
- missing-path: `ai-session-protocol.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:39 — Referenced workflow does not exist in `.github/workflows/`.
- doc-drift: unpopulated issue number placeholder — .agents/architecture/ADR-015-artifact-storage-minimization.md:143 — Cites `Issue: #[issue-number]` without actual issue ID.

## Observations
Standardizes CI artifact storage down to 7 days for test/metrics data and 1 day for PR-level operational data, reducing storage costs by 76–92%. Compliance is actively checked by `scripts/ci/adr015_workflow_retention.py` in CI.

## Context cost
5,330 bytes, approximately 1,300 tokens.
