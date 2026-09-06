---
package: rjm
path: .claude/skills/slo-designer/SKILL.md
type: skill
bytes: 10487
unit: inv-rjm-168
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slo-designer/SKILL.md

## Purpose — required, verbatim
> "Design Service Level Objectives (SLOs) with SLIs, targets, alerting thresholds, and error budget calculations following Google SRE best practices. Use when defining reliability targets, designing SLOs, calculating error budgets, or establishing service level indicators." — .claude/skills/slo-designer/SKILL.md:4

## Design intent — required
Guides developers and autonomous agents through designing production-grade Service Level Objectives following Google SRE principles. Structures reliability design into a 6-stage lifecycle (Discovery, SLI Definition, SLO Targets, Error Budget, Alerting, Documentation), supported by a 5-part question framework (Service Context, User Journeys, Current State, Infrastructure, Targets). Outlines quantitative formulas for 5 SLI types (Availability, Latency, Throughput, Error Rate, Correctness), guidelines by service tier, burn rate alerting rules, anti-patterns, and an output template. Without this skill, service designers would lack a structured framework to translate subjective reliability goals into measurable SLI queries and actionable error budget policies.

## Phase — required
rjm:spec

## Inputs — required
- Natural language activation triggers ("Design SLOs for my service", "Define reliability targets", "Calculate error budget", "Define SLIs for this system", "What should my availability target be?")
- Service requirements and user journey details gathered via the question framework
- Telemetry baseline data (current availability %, latency percentiles, error rates)
- Service architecture context (dependencies, DR capability, maintenance windows)

## Outputs — required
- Markdown formatted Service Level Objective specification document following the defined template
- Configured burn rate alerting rules and multi-window conditions
- Commands executing `calculate_error_budget.py` and `generate_slo_document.py`

## Invokes — required
- skill chaos-experiment — .claude/skills/slo-designer/SKILL.md:33
- skill threat-modeling — .claude/skills/slo-designer/SKILL.md:38
- script calculate_error_budget.py — .claude/skills/slo-designer/SKILL.md:132
- script generate_slo_document.py — .claude/skills/slo-designer/SKILL.md:156

## Invoked by — required
- command spec — .claude/commands/spec.md:167
- reference reliability.md — .claude/skills/review/references/reliability.md:51
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:223
- skill chaos-experiment — .claude/skills/chaos-experiment/SKILL.md:359

## Concepts named — required, verbatim
- `slo-designer` — .claude/skills/slo-designer/SKILL.md:2 — defined here
- `SLI` — .claude/skills/slo-designer/SKILL.md:46 — defined here
- `SLO` — .claude/skills/slo-designer/SKILL.md:47 — defined here
- `SLA` — .claude/skills/slo-designer/SKILL.md:48 — defined here
- `Error Budget` — .claude/skills/slo-designer/SKILL.md:49 — defined here
- `Burn Rate` — .claude/skills/slo-designer/SKILL.md:50 — defined here
- `Availability` — .claude/skills/slo-designer/SKILL.md:54 — defined here
- `Latency` — .claude/skills/slo-designer/SKILL.md:64 — defined here
- `Throughput` — .claude/skills/slo-designer/SKILL.md:74 — defined here
- `Error Rate` — .claude/skills/slo-designer/SKILL.md:84 — defined here
- `Correctness` — .claude/skills/slo-designer/SKILL.md:94 — defined here
- `DISCOVERY` — .claude/skills/slo-designer/SKILL.md:107 — defined here
- `SLI DEFINITION` — .claude/skills/slo-designer/SKILL.md:110 — defined here
- `SLO TARGETS` — .claude/skills/slo-designer/SKILL.md:113 — defined here
- `ERROR BUDGET` — .claude/skills/slo-designer/SKILL.md:116 — defined here
- `ALERTING` — .claude/skills/slo-designer/SKILL.md:119 — defined here
- `DOCUMENTATION` — .claude/skills/slo-designer/SKILL.md:122 — defined here
- `Question Framework` — .claude/skills/slo-designer/SKILL.md:161 — defined here
- `SLO Target Guidelines` — .claude/skills/slo-designer/SKILL.md:200 — defined here
- `Error Budget Table` — .claude/skills/slo-designer/SKILL.md:217 — defined here
- `Burn Rate Alerting` — .claude/skills/slo-designer/SKILL.md:228 — defined here
- `Output Template` — .claude/skills/slo-designer/SKILL.md:249 — defined here
- `Error Budget Policy` — .claude/skills/slo-designer/SKILL.md:319 — defined here

## Structure
# SLO Designer
## Triggers
## When to Use
## Core Concepts
## Common SLI Categories
### Availability
### Latency
### Throughput
### Error Rate
### Correctness
## Process
## Scripts
### calculate_error_budget.py
### generate_slo_document.py
## Question Framework
### 1. Service Context
### 2. User Journeys
### 3. Current State
### 4. Infrastructure
### 5. Targets
## SLO Target Guidelines
## Error Budget Table
## Burn Rate Alerting
## Output Template
## Related Concepts
### SLO vs SLA
### Error Budget Policy
## Anti-Patterns
## Verification
## References

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, language: Python 3, lines: 291
- documented invocation:
  - "python3 .claude/skills/slo-designer/scripts/calculate_error_budget.py" — .claude/skills/slo-designer/SKILL.md:132
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target 99.9 --period monthly`
  abridged stdout:
  ```
  SLO Error Budget Calculator
  ========================================

  Target: 99.9%
  Period: monthly

  Error Budget: 0.1%
  Allowed Downtime: 43m 12s
    (43.20 minutes)
  ```
  **actual exit code:** 0
- path: `.claude/skills/slo-designer/scripts/generate_slo_document.py`, language: Python 3, lines: 504
- documented invocation:
  - "uv run python .claude/skills/slo-designer/scripts/generate_slo_document.py" — .claude/skills/slo-designer/SKILL.md:156
- **executed:** yes
- actual command run: `sources/rjm/.venv/bin/python sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py --config sources/rjm/.claude/skills/slo-designer/templates/slo-config-template.yaml`
  abridged stdout:
  ```markdown
  # SLO Document: Your Service Name

  > Generated: 2026-09-05

  ## Service Overview

  - **Name**: Your Service Name
  ```
  **actual exit code:** 0
- documented exit codes:
  - calculate_error_budget.py: 0: Success, 1: Invalid arguments, 2: Calculation error (documented at .claude/skills/slo-designer/SKILL.md:147-149)
  - vs actual exit paths: invalid CLI arguments exit with code 2 from argparse, not 1.
- for validators/gates:
  - Both scripts exit non-zero on malformed arguments or missing inputs; neither is a test/lint validation gate.
- does the output match what the documentation claims? Partially; burn rate calculation in `calculate_error_budget.py` has a logic bug dividing budget minutes instead of period hours, contradicting the 15-day burn rate claims in SKILL.md:50.

## Defects — required
- missing-path · .claude/skills/slo-designer/SKILL.md:38 · Relative path link `../threat-modeling/SKILL.md` does not exist in `.claude/skills/`.
- doc-drift · .claude/skills/slo-designer/SKILL.md:156 · Documents invocation via `uv run python` for `generate_slo_document.py` while documenting `python3` for `calculate_error_budget.py`.
- cross-file-contradiction · .claude/skills/slo-designer/SKILL.md:50 · Documents "2x burn = budget exhausted in 15 days", but `calculate_error_budget.py` outputs 21.6 minutes.
- exit-code-mismatch · .claude/skills/slo-designer/SKILL.md:148 · Documents exit code 1 for invalid arguments for `calculate_error_budget.py`, but argparse exits with status code 2 on missing or malformed CLI arguments.

## Observations
- Clear separation between SLO (internal target without contract penalties) and SLA (external legal/financial agreement).
- Distinguishes when to use this skill versus `chaos-experiment` (validating SLO resilience through failure injection).

## Context cost
10,487 bytes + references (7,081) + scripts (21,906) = approximately 39,474 bytes, ~9,868 tokens.
