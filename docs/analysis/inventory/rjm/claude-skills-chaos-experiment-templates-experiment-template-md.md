---
package: rjm
path: .claude/skills/chaos-experiment/templates/experiment-template.md
type: skill
bytes: 7127
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/templates/experiment-template.md

## Purpose — required, verbatim
> "# Chaos Experiment: {{EXPERIMENT_NAME}}" — .claude/skills/chaos-experiment/templates/experiment-template.md:1
(no explicit purpose statement)

## Design intent — required
Provides the canonical document schema for recording chaos engineering experiments throughout their lifecycle. Formatted with structured placeholder tags (e.g. `{{EXPERIMENT_NAME}}`, `{{SYSTEM_NAME}}`, `{{RECOVERY_TIME}}`), it standardizes metadata tracking, system architecture context, business justification, steady-state baseline metric tables, falsifiable hypothesis definitions, injection commands and blast radius controls, automated and manual rollback runbooks, stakeholder approvals, execution logs, quantitative result scorecards, identified weaknesses with ticket links, and follow-up experiment proposals.

## Phase — required
rjm:review

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill chaos-experiment — .claude/skills/chaos-experiment/SKILL.md:302
- script generate_experiment.py — .claude/skills/chaos-experiment/scripts/generate_experiment.py:75

## Concepts named — required, verbatim
- `Chaos Experiment` — .claude/skills/chaos-experiment/templates/experiment-template.md:1 — defined here
- `Metadata` — .claude/skills/chaos-experiment/templates/experiment-template.md:3 — defined here
- `System Under Test` — .claude/skills/chaos-experiment/templates/experiment-template.md:13 — defined here
- `Business Justification` — .claude/skills/chaos-experiment/templates/experiment-template.md:36 — defined here
- `Steady State Baseline` — .claude/skills/chaos-experiment/templates/experiment-template.md:52 — defined here
- `Hypothesis` — .claude/skills/chaos-experiment/templates/experiment-template.md:74 — defined here
- `Falsification Criteria` — .claude/skills/chaos-experiment/templates/experiment-template.md:91 — defined here
- `Injection Plan` — .claude/skills/chaos-experiment/templates/experiment-template.md:99 — defined here
- `Rollback Procedure` — .claude/skills/chaos-experiment/templates/experiment-template.md:146 — defined here
- `Approvals` — .claude/skills/chaos-experiment/templates/experiment-template.md:178 — defined here
- `Execution Log` — .claude/skills/chaos-experiment/templates/experiment-template.md:198 — defined here
- `Results` — .claude/skills/chaos-experiment/templates/experiment-template.md:221 — defined here
- `Follow-Up Experiments` — .claude/skills/chaos-experiment/templates/experiment-template.md:272 — defined here

## Structure
- # Chaos Experiment: {{EXPERIMENT_NAME}} — .claude/skills/chaos-experiment/templates/experiment-template.md:1
- ## Metadata — .claude/skills/chaos-experiment/templates/experiment-template.md:3
- ## System Under Test — .claude/skills/chaos-experiment/templates/experiment-template.md:13
- ### Target System — .claude/skills/chaos-experiment/templates/experiment-template.md:15
- ### Architecture Context — .claude/skills/chaos-experiment/templates/experiment-template.md:22
- ### Dependencies — .claude/skills/chaos-experiment/templates/experiment-template.md:30
- ## Business Justification — .claude/skills/chaos-experiment/templates/experiment-template.md:36
- ### Objective — .claude/skills/chaos-experiment/templates/experiment-template.md:38
- ### Historical Context — .claude/skills/chaos-experiment/templates/experiment-template.md:42
- ### Risk Assessment — .claude/skills/chaos-experiment/templates/experiment-template.md:46
- ## Steady State Baseline — .claude/skills/chaos-experiment/templates/experiment-template.md:52
- ### Metrics Collected — .claude/skills/chaos-experiment/templates/experiment-template.md:54
- ### Collection Period — .claude/skills/chaos-experiment/templates/experiment-template.md:63
- ### Dashboard Links — .claude/skills/chaos-experiment/templates/experiment-template.md:69
- ## Hypothesis — .claude/skills/chaos-experiment/templates/experiment-template.md:74
- ### Predictions — .claude/skills/chaos-experiment/templates/experiment-template.md:83
- ### Falsification Criteria — .claude/skills/chaos-experiment/templates/experiment-template.md:91
- ## Injection Plan — .claude/skills/chaos-experiment/templates/experiment-template.md:99
- ### Failure Type — .claude/skills/chaos-experiment/templates/experiment-template.md:101
- ### Injection Method — .claude/skills/chaos-experiment/templates/experiment-template.md:107
- ### Scope and Blast Radius — .claude/skills/chaos-experiment/templates/experiment-template.md:121
- ### Ramp-Up Strategy — .claude/skills/chaos-experiment/templates/experiment-template.md:130
- ### Abort Criteria — .claude/skills/chaos-experiment/templates/experiment-template.md:136
- ## Rollback Procedure — .claude/skills/chaos-experiment/templates/experiment-template.md:146
- ### Automatic Rollback — .claude/skills/chaos-experiment/templates/experiment-template.md:148
- ### Manual Rollback — .claude/skills/chaos-experiment/templates/experiment-template.md:154
- ### Rollback Verification — .claude/skills/chaos-experiment/templates/experiment-template.md:171
- ## Approvals — .claude/skills/chaos-experiment/templates/experiment-template.md:178
- ### Required Approvers — .claude/skills/chaos-experiment/templates/experiment-template.md:180
- ### Communication Plan — .claude/skills/chaos-experiment/templates/experiment-template.md:189
- ## Execution Log — .claude/skills/chaos-experiment/templates/experiment-template.md:198
- ### Pre-Execution Checklist — .claude/skills/chaos-experiment/templates/experiment-template.md:200
- ### Observation Log — .claude/skills/chaos-experiment/templates/experiment-template.md:209
- ### Post-Execution Checklist — .claude/skills/chaos-experiment/templates/experiment-template.md:214
- ## Results — .claude/skills/chaos-experiment/templates/experiment-template.md:221
- ### Verdict — .claude/skills/chaos-experiment/templates/experiment-template.md:223
- ### Summary — .claude/skills/chaos-experiment/templates/experiment-template.md:229
- ### Metrics During Experiment — .claude/skills/chaos-experiment/templates/experiment-template.md:233
- ### Findings — .claude/skills/chaos-experiment/templates/experiment-template.md:241
- #### Resilience Strengths — .claude/skills/chaos-experiment/templates/experiment-template.md:243
- #### Weaknesses Discovered — .claude/skills/chaos-experiment/templates/experiment-template.md:249
- #### Monitoring Gaps — .claude/skills/chaos-experiment/templates/experiment-template.md:255
- #### Unexpected Behaviors — .claude/skills/chaos-experiment/templates/experiment-template.md:260
- ### Action Items — .claude/skills/chaos-experiment/templates/experiment-template.md:265
- ## Follow-Up Experiments — .claude/skills/chaos-experiment/templates/experiment-template.md:272
- ## Appendix — .claude/skills/chaos-experiment/templates/experiment-template.md:279
- ### Raw Data — .claude/skills/chaos-experiment/templates/experiment-template.md:281
- ### Screenshots — .claude/skills/chaos-experiment/templates/experiment-template.md:285
- ### Related Documents — .claude/skills/chaos-experiment/templates/experiment-template.md:289

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Exhaustive template covering the complete experimental cycle from pre-planning approvals and baseline measurement to live telemetry logging and post-experiment remediation tickets.
- The template's required headings match the `REQUIRED_SECTIONS` list checked by `scripts/validate_experiment.py`.

## Context cost
7127 bytes. Approximately 1780 tokens.
