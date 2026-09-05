---
package: rjm
path: .agents/metrics/workflow-coalescing.md
type: agent
bytes: 3525
unit: inv-rjm-56
in_scope_via: docs/agent-metrics.md
aliases: []
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/metrics/workflow-coalescing.md

## Purpose — required, verbatim
> "This metrics report tracks the effectiveness of GitHub Actions workflow run coalescing for AI-powered workflows in the repository. Coalescing occurs when rapid successive commits to the same PR trigger concurrent workflow runs, and the concurrency control mechanism cancels in-progress runs to start fresh with the latest commit." — .agents/metrics/workflow-coalescing.md:11

## Design intent — required
Tracks GitHub Actions concurrency control performance for automated AI workflows where rapid sequential commits trigger redundant CI runs. Measures coalescing effectiveness (percentage of superseded runs cancelled vs executing in parallel), race condition rates, and average cancellation latency to ensure CI resources are conserved and conflicting check runs are avoided.

## Phase — required
none

## Inputs — required
- "/repos/{owner}/{repo}/actions/runs" — .agents/metrics/workflow-coalescing.md:57
- "ai-pr-quality-gate" — .agents/metrics/workflow-coalescing.md:42, 69
- "ai-spec-validation" — .agents/metrics/workflow-coalescing.md:43, 69
- "ai-session-protocol" — .agents/metrics/workflow-coalescing.md:44
- "pr-validation" — .agents/metrics/workflow-coalescing.md:45
- "label-pr" — .agents/metrics/workflow-coalescing.md:46
- "memory-validation" — .agents/metrics/workflow-coalescing.md:47
- "auto-assign-reviewer" — .agents/metrics/workflow-coalescing.md:48
- "ADR-026" — .agents/metrics/workflow-coalescing.md:80, 105

## Outputs — required
- ".github/scripts/measure_workflow_coalescing.py" — .agents/metrics/workflow-coalescing.md:54, 63, 66, 69
- ".github/workflows/workflow-coalescing-metrics.yml" — .agents/metrics/workflow-coalescing.md:55

## Invokes — required
- script measure_workflow_coalescing.py — .agents/metrics/workflow-coalescing.md:54
- config workflow-coalescing-metrics.yml — .agents/metrics/workflow-coalescing.md:55
- doc ADR-026-pr-automation-concurrency-and-safety.md — .agents/metrics/workflow-coalescing.md:105
- doc agent-metrics.md — .agents/metrics/workflow-coalescing.md:106

## Invoked by — required
- doc docs/agent-metrics.md — docs/agent-metrics.md:295

## Concepts named — required, verbatim
- `Workflow Run Coalescing Metrics` — .agents/metrics/workflow-coalescing.md:1 — defined here
- `workflow run coalescing` — .agents/metrics/workflow-coalescing.md:11 — defined here
- `concurrency control` — .agents/metrics/workflow-coalescing.md:11, 26, 78, 86 — used here
- `Coalescing Effectiveness` — .agents/metrics/workflow-coalescing.md:17, 25, 74 — defined here
- `Race Condition Rate` — .agents/metrics/workflow-coalescing.md:18, 26, 82 — defined here
- `Average Cancellation Time` — .agents/metrics/workflow-coalescing.md:19, 95 — defined here
- `ai-pr-quality-gate` — .agents/metrics/workflow-coalescing.md:42 — used here
- `ai-spec-validation` — .agents/metrics/workflow-coalescing.md:43 — used here
- `ai-session-protocol` — .agents/metrics/workflow-coalescing.md:44 — used here
- `pr-validation` — .agents/metrics/workflow-coalescing.md:45 — used here
- `label-pr` — .agents/metrics/workflow-coalescing.md:46 — used here
- `memory-validation` — .agents/metrics/workflow-coalescing.md:47 — used here
- `auto-assign-reviewer` — .agents/metrics/workflow-coalescing.md:48 — used here
- `ADR-026` — .agents/metrics/workflow-coalescing.md:80, 105 — used here

## Structure
- `## Report Period` — .agents/metrics/workflow-coalescing.md:3
- `## Executive Summary` — .agents/metrics/workflow-coalescing.md:9
- `## Purpose` — .agents/metrics/workflow-coalescing.md:21
- `## Workflow Run Analysis` — .agents/metrics/workflow-coalescing.md:29
- `### Total Runs Summary` — .agents/metrics/workflow-coalescing.md:31
- `### Monitored Workflows` — .agents/metrics/workflow-coalescing.md:38
- `## Data Collection` — .agents/metrics/workflow-coalescing.md:50
- `## How to Generate Manually` — .agents/metrics/workflow-coalescing.md:59
- `## Understanding the Metrics` — .agents/metrics/workflow-coalescing.md:72
- `### Coalescing Effectiveness` — .agents/metrics/workflow-coalescing.md:74
- `### Race Condition Rate` — .agents/metrics/workflow-coalescing.md:82
- `### Average Cancellation Time` — .agents/metrics/workflow-coalescing.md:95
- `## Related Documentation` — .agents/metrics/workflow-coalescing.md:103

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `workflow-patterns.md` — .agents/metrics/workflow-coalescing.md:107 — referenced file .agents/governance/workflow-patterns.md does not exist on disk.
- missing-path: `ADR-026-pr-automation-concurrency-and-safety.md` — .agents/metrics/workflow-coalescing.md:105 — markdown link target .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md is formatted as repo-root relative without leading slash or relative traversal (../architecture/), breaking relative link resolution from .agents/metrics/.
- missing-path: `agent-metrics.md` — .agents/metrics/workflow-coalescing.md:106 — markdown link target docs/agent-metrics.md is formatted as repo-root relative without leading slash or relative traversal (../../docs/), breaking relative link resolution from .agents/metrics/.

## Observations
Directly targets the CI cost and race conditions introduced by bot-driven commits. Sets quantitative thresholds: 90% coalescing effectiveness, <10% race condition rate, and <5s average cancellation time.

## Context cost
3525 bytes, approximately 850 tokens.
