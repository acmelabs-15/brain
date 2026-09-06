---
package: rjm
path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md
type: reference
bytes: 2362
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md

## Purpose — required, verbatim
> "Service level objectives provide the measurable targets that chaos experiments validate." — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:9

## Design intent — required
Defines the conceptual hierarchy, mathematical formulas, and operational mechanics of Service Level Indicators (SLIs), Service Level Objectives (SLOs), and Service Level Agreements (SLAs). Establishes how error budgets are calculated, consumed, and used as go/no-go gates for running chaos experiments and balancing reliability against release velocity.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference .claude/skills/chaos-experiment/SKILL.md:342

## Concepts named — required, verbatim
- `SLO / SLI / SLA Reference` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:7 — defined here
- `SLI (Service Level Indicator)` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:15 — defined here
- `SLO (Service Level Objective)` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:16 — defined here
- `SLA (Service Level Agreement)` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:17 — defined here
- `Availability` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:31 — used here
- `Latency` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:32 — used here
- `Throughput` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:33 — used here
- `Error rate` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:34 — used here
- `Error Budget Formula` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:36 — defined here
- `Error Budget Mechanics` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:46 — defined here
- `Go/no-go gate` — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:60 — defined here

## Structure
- # SLO / SLI / SLA Reference — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:7
- ## Definitions — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:11
- ## Hierarchy — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:19
- ## Common SLIs — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:27
- ## Error Budget Formula — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:36
- ## Error Budget Mechanics — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:46
- ## Chaos Experiment Integration — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:54
- ## Benefits of Error Budgets — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:62

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:2 · Frontmatter declares `source: wiki/concepts/Reliability/SLO SLI SLA.md` which does not exist in the repository.

## Observations
- Provides concrete mathematical formulas for error budgets (e.g., 99.9% availability SLO = 0.1% error budget = ~43 minutes/month) and links experiment gating directly to error budget health.
- Shares domain terminology directly with `.claude/skills/slo-designer/`.

## Context cost
2362 bytes. Approximately 580 tokens.
