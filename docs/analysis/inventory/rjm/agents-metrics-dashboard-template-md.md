---
package: rjm
path: .agents/metrics/dashboard-template.md
type: agent
bytes: 5337
unit: inv-rjm-56
in_scope_via: docs/agent-metrics.md
aliases: []
memo_inputs:
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/metrics/dashboard-template.md

## Purpose — required, verbatim
> "# Agent Metrics Dashboard" — .agents/metrics/dashboard-template.md:1 (no explicit purpose statement)

## Design intent — required
Defines the canonical template for periodic (monthly/quarterly) agent performance and adoption reporting. Operationalizes the 8 metrics established in baseline-report.md, providing concrete reporting schemas for invocation rates, commit coverage, shift-left scoring, infrastructure review compliance, turnaround ROI, and portfolio optimization (flagging consolidation candidates with <5% usage and specialization candidates with >30% usage).

## Phase — required
none

## Inputs — required
- "Commits" — .agents/metrics/dashboard-template.md:214
- "PRs" — .agents/metrics/dashboard-template.md:215
- "Issues" — .agents/metrics/dashboard-template.md:216
- "Incidents" — .agents/metrics/dashboard-template.md:217
- ".github/workflows/*" — .agents/metrics/dashboard-template.md:98
- "lefthook.yml" — .agents/metrics/dashboard-template.md:99
- "scripts/validation/git_hook_policy.py" — .agents/metrics/dashboard-template.md:99

## Outputs — required
Executive summary, shift-left score calculations, turnaround ROI metrics, and consolidation/specialization recommendations across monthly and quarterly evaluation periods.

## Invokes — required
- config lefthook.yml — .agents/metrics/dashboard-template.md:99
- script git_hook_policy.py — .agents/metrics/dashboard-template.md:99

## Invoked by — required
- doc docs/agent-metrics.md — docs/agent-metrics.md:279

## Concepts named — required, verbatim
- `Agent Metrics Dashboard` — .agents/metrics/dashboard-template.md:1 — defined here
- `Agent Coverage` — .agents/metrics/dashboard-template.md:15, 47 — used here
- `Shift-Left Effectiveness` — .agents/metrics/dashboard-template.md:16, 71 — used here
- `Infrastructure Review Rate` — .agents/metrics/dashboard-template.md:17 — used here
- `Infrastructure Code Review Rate` — .agents/metrics/dashboard-template.md:92 — used here
- `Policy Compliance` — .agents/metrics/dashboard-template.md:18, 171 — used here
- `Invocation Rate by Agent` — .agents/metrics/dashboard-template.md:22 — used here
- `orchestrator` — .agents/metrics/dashboard-template.md:28, 119, 177 — used here
- `analyst` — .agents/metrics/dashboard-template.md:29, 122 — used here
- `architect` — .agents/metrics/dashboard-template.md:30 — used here
- `implementer` — .agents/metrics/dashboard-template.md:31, 121, 179 — used here
- `security` — .agents/metrics/dashboard-template.md:32, 120, 178 — used here
- `qa` — .agents/metrics/dashboard-template.md:33, 179 — used here
- `devops` — .agents/metrics/dashboard-template.md:34 — used here
- `critic` — .agents/metrics/dashboard-template.md:35 — used here
- `milestone-planner` — .agents/metrics/dashboard-template.md:36 — used here
- `Shift-Left Score` — .agents/metrics/dashboard-template.md:82 — defined here
- `lefthook.yml` — .agents/metrics/dashboard-template.md:99 — used here
- `Agent Review Turnaround Time` — .agents/metrics/dashboard-template.md:132 — used here
- `Vulnerability Discovery Timeline` — .agents/metrics/dashboard-template.md:153 — used here

## Structure
- `## Report Period` — .agents/metrics/dashboard-template.md:3
- `## Executive Summary` — .agents/metrics/dashboard-template.md:11
- `## Metric 1: Invocation Rate by Agent` — .agents/metrics/dashboard-template.md:22
- `### Distribution` — .agents/metrics/dashboard-template.md:24
- `### Observations` — .agents/metrics/dashboard-template.md:40
- `## Metric 2: Agent Coverage` — .agents/metrics/dashboard-template.md:47
- `### Coverage by Commit Type` — .agents/metrics/dashboard-template.md:49
- `### Trend` — .agents/metrics/dashboard-template.md:60
- `## Metric 3: Shift-Left Effectiveness` — .agents/metrics/dashboard-template.md:71
- `### Issue Discovery Phase` — .agents/metrics/dashboard-template.md:73
- `### Shift-Left Score` — .agents/metrics/dashboard-template.md:82
- `## Metric 4: Infrastructure Code Review Rate` — .agents/metrics/dashboard-template.md:92
- `### Infrastructure Changes` — .agents/metrics/dashboard-template.md:94
- `### Alert Response` — .agents/metrics/dashboard-template.md:105
- `## Metric 5: Usage Distribution` — .agents/metrics/dashboard-template.md:113
- `### Monthly Trend` — .agents/metrics/dashboard-template.md:115
- `### Anomalies` — .agents/metrics/dashboard-template.md:124
- `## Metric 6: Agent Review Turnaround Time` — .agents/metrics/dashboard-template.md:132
- `### Average Turnaround` — .agents/metrics/dashboard-template.md:134
- `### ROI Analysis` — .agents/metrics/dashboard-template.md:142
- `## Metric 7: Vulnerability Discovery Timeline` — .agents/metrics/dashboard-template.md:153
- `### Security Issue Discovery` — .agents/metrics/dashboard-template.md:155
- `### Notable Incidents` — .agents/metrics/dashboard-template.md:163
- `## Metric 8: Policy Compliance` — .agents/metrics/dashboard-template.md:171
- `### Compliance Rates` — .agents/metrics/dashboard-template.md:173
- `### Non-Compliance Details` — .agents/metrics/dashboard-template.md:182
- `## Recommendations` — .agents/metrics/dashboard-template.md:190
- `### Immediate Actions` — .agents/metrics/dashboard-template.md:192
- `### Process Improvements` — .agents/metrics/dashboard-template.md:197
- `### Consolidation Candidates` — .agents/metrics/dashboard-template.md:202
- `## Data Sources` — .agents/metrics/dashboard-template.md:210

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a mathematically concrete formula for evaluating agent effectiveness through the Shift-Left Score: `Score = Agent % + (PR % * 0.5) + (Production % * 0)`, targeting 87.5. Identifies thresholds for agent lifecycle management (consolidation if <5% usage, specialization if >30% usage).

## Context cost
5337 bytes, approximately 1300 tokens.
