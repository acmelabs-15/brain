---
package: rjm
path: .agents/architecture/ADR-016-workflow-execution-optimization.md
type: agent
bytes: 7564
unit: inv-rjm-8
deprecated: false
in_scope_via: inv-rjm-8
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-016-workflow-execution-optimization.md, sha256: 4055bbee282f97a73b6d6d2500b14c20b448c941fb8c509ff5c824d4100517da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-016-workflow-execution-optimization.md

## Purpose — required, verbatim
> "GitHub Actions costs are driven by workflow execution minutes. Analysis revealed two optimization opportunities:" — .agents/architecture/ADR-016-workflow-execution-optimization.md:24 (no explicit purpose statement)

## Design intent — required
Reduces GitHub Actions execution costs and developer feedback latency by eliminating unnecessary and duplicate workflow runs. It implements a two-fold optimization strategy: restrictive path filters on workflow push/PR triggers so workflows execute only when analyzed file sets change (20% reduction), and branch/PR-scoped concurrency groups with `cancel-in-progress: true` to abort superseded in-flight runs upon new commits (10% reduction), yielding an estimated 30% reduction in total workflow minutes. Without this strategy, rapid commits on feature branches and documentation-only edits would needlessly consume finite CI runner minutes and delay actionable feedback.

## Phase — required
cross-phase

## Inputs — required
GitHub Actions workflow triggers (push, pull_request, workflow_dispatch, workflow_call) (.agents/architecture/ADR-016-workflow-execution-optimization.md:142, 151-153), file change paths from commits and pull requests (.agents/architecture/ADR-016-workflow-execution-optimization.md:47-53, 144-147), and GitHub event context (`github.ref`, `github.event.issue.number`) (.agents/architecture/ADR-016-workflow-execution-optimization.md:185).

## Outputs — required
Workflow path filter definitions under `paths` in `.github/workflows/*.yml` (.agents/architecture/ADR-016-workflow-execution-optimization.md:144-178), and workflow concurrency configurations with `group` and `cancel-in-progress` settings (.agents/architecture/ADR-016-workflow-execution-optimization.md:184-187).

## Invokes — required
- agent ADR-006 — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:12
- agent ADR-015 — .agents/architecture/ADR-015-artifact-storage-minimization.md:12
- agent ADR-025 — .agents/architecture/ADR-025-github-actions-arm-runners.md:12

## Invoked by — required
- agent README — .agents/architecture/README.md:104

## Concepts named — required, verbatim
- `ADR-016` — .agents/architecture/ADR-016-workflow-execution-optimization.md:12 — defined here
- `Workflow Execution Optimization Strategy` — .agents/architecture/ADR-016-workflow-execution-optimization.md:12 — defined here
- `Path filters` — .agents/architecture/ADR-016-workflow-execution-optimization.md:38 — defined here
- `Concurrency groups` — .agents/architecture/ADR-016-workflow-execution-optimization.md:39 — defined here
- `agent-metrics` — .agents/architecture/ADR-016-workflow-execution-optimization.md:49 — used here
- `copilot-setup-steps` — .agents/architecture/ADR-016-workflow-execution-optimization.md:50 — used here
- `drift-detection` — .agents/architecture/ADR-016-workflow-execution-optimization.md:51 — used here
- `pester-tests` — .agents/architecture/ADR-016-workflow-execution-optimization.md:52 — used here
- `dorny/paths-filter` — .agents/architecture/ADR-016-workflow-execution-optimization.md:61 — used here
- `cancel-in-progress` — .agents/architecture/ADR-016-workflow-execution-optimization.md:82 — defined here
- `ADR-025` — .agents/architecture/ADR-016-workflow-execution-optimization.md:204 — used here
- `ADR-015` — .agents/architecture/ADR-016-workflow-execution-optimization.md:205 — used here
- `ADR-006` — .agents/architecture/ADR-016-workflow-execution-optimization.md:206 — used here

## Structure
- # ADR-016: Workflow Execution Optimization Strategy — .agents/architecture/ADR-016-workflow-execution-optimization.md:12
- ## Status — .agents/architecture/ADR-016-workflow-execution-optimization.md:14
- ## Date — .agents/architecture/ADR-016-workflow-execution-optimization.md:18
- ## Context — .agents/architecture/ADR-016-workflow-execution-optimization.md:22
- ## Decision — .agents/architecture/ADR-016-workflow-execution-optimization.md:34
- ## Rationale — .agents/architecture/ADR-016-workflow-execution-optimization.md:41
- ### Path Filter Strategy — .agents/architecture/ADR-016-workflow-execution-optimization.md:43
- ### Concurrency Group Strategy — .agents/architecture/ADR-016-workflow-execution-optimization.md:64
- ### Alternatives Considered — .agents/architecture/ADR-016-workflow-execution-optimization.md:85
- ### Cost Impact — .agents/architecture/ADR-016-workflow-execution-optimization.md:94
- ### Trade-offs — .agents/architecture/ADR-016-workflow-execution-optimization.md:103
- ## Consequences — .agents/architecture/ADR-016-workflow-execution-optimization.md:115
- ### Positive — .agents/architecture/ADR-016-workflow-execution-optimization.md:117
- ### Negative — .agents/architecture/ADR-016-workflow-execution-optimization.md:124
- ### Neutral — .agents/architecture/ADR-016-workflow-execution-optimization.md:130
- ## Implementation Notes — .agents/architecture/ADR-016-workflow-execution-optimization.md:136
- ### Path Filters Added — .agents/architecture/ADR-016-workflow-execution-optimization.md:138
- ### Concurrency Groups Added — .agents/architecture/ADR-016-workflow-execution-optimization.md:180
- ### Monitoring — .agents/architecture/ADR-016-workflow-execution-optimization.md:189
- ### Rollback Plan — .agents/architecture/ADR-016-workflow-execution-optimization.md:195
- ## Related Decisions — .agents/architecture/ADR-016-workflow-execution-optimization.md:202
- ## References — .agents/architecture/ADR-016-workflow-execution-optimization.md:208

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-016-workflow-execution-optimization.md:163 Referenced script "build/scripts/Detect-AgentDrift.ps1" does not exist; replaced by python script "build/scripts/detect_agent_drift.py".
- missing-path · .agents/architecture/ADR-016-workflow-execution-optimization.md:52 Referenced workflow "pester-tests" (.github/workflows/pester-tests.yml) does not exist in repository.
- doc-drift · .agents/architecture/ADR-016-workflow-execution-optimization.md:50 Mentions copilot-setup-steps as "Manual and reusable workflow only", but .github/workflows/copilot-setup-steps.yml defines workflow_dispatch and workflow_call triggers.

## Observations
Documents CI efficiency patterns combining path filtering to prevent unnecessary workflow runs with concurrency groups to cancel obsolete runs. It establishes distinct cancellation policies for issue-triggered workflows (`cancel-in-progress: false`) versus branch/PR workflows (`cancel-in-progress: true`).

## Context cost
7,564 bytes, ~1,900 tokens.
