---
package: rjm
path: docs/agent-metrics.md
type: doc
bytes: 8129
unit: inv-rjm-188
in_scope_via: .claude/skills/metrics/SKILL.md
aliases: []
memo_inputs:
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/agent-metrics.md

## Purpose — required, verbatim
> "This document defines the 8 key metrics for measuring agent system health, effectiveness, and adoption. These metrics enable data-driven decisions about agent system evolution." — docs/agent-metrics.md:5

## Design intent — required
Defines the empirical measurement system for tracking multi-agent adoption, operational effectiveness, and code quality impact across the repository. It specifies exact formulas, commit message regex detection patterns, collection schedules, and target thresholds for 8 core metrics (plus an extended 9th metric on workflow coalescing), ensuring agent governance decisions—such as consolidation of underutilized agents or specialization of overloaded agents—are grounded in objective repository telemetry.

## Phase — required
cross-phase

## Inputs — required
- Git commit messages, logs, and conventional commit tags — docs/agent-metrics.md:21, 49-60
- GitHub PR titles, descriptions, and review comments — docs/agent-metrics.md:22, 50, 206
- GitHub Actions workflow runs and API telemetry — docs/agent-metrics.md:314
- Production incident reports and tagged issues — docs/agent-metrics.md:92, 205
- Orchestrator routing decisions — docs/agent-metrics.md:23
- Metric collection utility output: `collect_metrics.py` — docs/agent-metrics.md:250

## Outputs — required
- Metrics data in JSON or markdown format — docs/agent-metrics.md:251
- Dashboard reports adhering to `.agents/metrics/dashboard-template.md` — docs/agent-metrics.md:279
- Baseline report in `.agents/metrics/baseline-report.md` — docs/agent-metrics.md:283
- Workflow coalescing metrics report in `.agents/metrics/workflow-coalescing.md` — docs/agent-metrics.md:332
- Actionable signals for agent consolidation (< 5% usage) or specialization (> 30% usage) — docs/agent-metrics.md:150-155

## Invokes — required
- script .claude/skills/metrics/collect_metrics.py — docs/agent-metrics.md:250
- doc .agents/metrics/dashboard-template.md — docs/agent-metrics.md:279
- doc .agents/metrics/baseline-report.md — docs/agent-metrics.md:283
- config .github/workflows/agent-metrics.yml — docs/agent-metrics.md:287
- doc orchestrator-routing-algorithm.md — docs/agent-metrics.md:296
- doc agent-governance.md — docs/agent-metrics.md:297
- doc .agents/metrics/workflow-coalescing.md — docs/agent-metrics.md:332
- config .github/workflows/workflow-coalescing-metrics.yml — docs/agent-metrics.md:333
- doc .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md — docs/agent-metrics.md:334

## Invoked by — required
- doc .claude/skills/metrics/SKILL.md — .claude/skills/metrics/SKILL.md:15
- script .claude/skills/metrics/collect_metrics.py — .claude/skills/metrics/collect_metrics.py:5
- doc src/copilot-cli/skills/metrics/SKILL.md — src/copilot-cli/skills/metrics/SKILL.md:15

## Concepts named — required, verbatim
- `Agent Invocation Metrics` — docs/agent-metrics.md:1 — defined here
- `The 8 Key Metrics` — docs/agent-metrics.md:7 — defined here
- `Invocation Rate by Agent` — docs/agent-metrics.md:9 — defined here
- `Agent Coverage` — docs/agent-metrics.md:37 — defined here
- `Shift-Left Effectiveness` — docs/agent-metrics.md:72 — defined here
- `Infrastructure Code Review Rate` — docs/agent-metrics.md:100 — defined here
- `Usage Distribution by Agent` — docs/agent-metrics.md:136 — defined here
- `Agent Review Turnaround Time` — docs/agent-metrics.md:158 — defined here
- `Vulnerability Discovery Timeline` — docs/agent-metrics.md:190 — defined here
- `Compliance with Agent Policies` — docs/agent-metrics.md:215 — defined here
- `Workflow Coalescing Effectiveness` — docs/agent-metrics.md:303 — defined here
- `orchestrator` — docs/agent-metrics.md:23 — used here
- `security agent` — docs/agent-metrics.md:57 — used here
- `architect agent` — docs/agent-metrics.md:57 — used here
- `implementer agent` — docs/agent-metrics.md:57 — used here
- `analyst` — docs/agent-metrics.md:58 — used here
- `QA` — docs/agent-metrics.md:225 — used here
- `conventional commits` — docs/agent-metrics.md:226 — used here
- `CWE-78` — docs/agent-metrics.md:96 — used here

## Structure
- `# Agent Invocation Metrics` — docs/agent-metrics.md:1
- `## Purpose` — docs/agent-metrics.md:3
- `## The 8 Key Metrics` — docs/agent-metrics.md:7
- `### Metric 1: Invocation Rate by Agent` — docs/agent-metrics.md:9
- `### Metric 2: Agent Coverage` — docs/agent-metrics.md:37
- `### Metric 3: Shift-Left Effectiveness` — docs/agent-metrics.md:72
- `### Metric 4: Infrastructure Code Review Rate` — docs/agent-metrics.md:100
- `### Metric 5: Usage Distribution by Agent` — docs/agent-metrics.md:136
- `### Metric 6: Agent Review Turnaround Time` — docs/agent-metrics.md:158
- `### Metric 7: Vulnerability Discovery Timeline` — docs/agent-metrics.md:190
- `### Metric 8: Compliance with Agent Policies` — docs/agent-metrics.md:215
- `## Measurement Implementation` — docs/agent-metrics.md:239
- `### Data Collection` — docs/agent-metrics.md:241
- `#### Commit Analysis` — docs/agent-metrics.md:243
- `#### PR Analysis` — docs/agent-metrics.md:255
- `### Collection Schedule` — docs/agent-metrics.md:262
- `## Dashboard Template` — docs/agent-metrics.md:277
- `## Baseline Report` — docs/agent-metrics.md:281
- `## CI Integration` — docs/agent-metrics.md:285
- `## Related Documents` — docs/agent-metrics.md:291
- `## Extended Metrics` — docs/agent-metrics.md:301
- `### Metric 9: Workflow Coalescing Effectiveness` — docs/agent-metrics.md:303

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/agent-metrics.md:331 · References .github/scripts/Measure-WorkflowCoalescing.ps1 which does not exist in the repository (migrated to Python script .github/scripts/measure_workflow_coalescing.py per ADR-042).

## Observations
Defines 9 operational metrics with explicit mathematical formulas, commit message regex detection patterns, collection cadences (per commit/PR/session, aggregated weekly/monthly), and SLA compliance targets (such as 100% security coverage on security-critical changes, 90%+ workflow coalescing effectiveness). Grounded in real incident post-mortems (noting a baseline of 0% shift-left effectiveness due to a historical CWE-78 command injection caught only in PR review rather than pre-implementation agent review).

## Context cost
8129 bytes (~2050 tokens). Pure documentation reference file; loads no executable runtime dependencies.
