---
package: rjm
path: .claude/skills/slo-designer/templates/slo-config-template.yaml
type: skill
bytes: 2498
unit: inv-rjm-168
in_scope_via: .claude/skills/slo-designer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slo-designer/templates/slo-config-template.yaml

## Purpose — required, verbatim
> "SLO Configuration Template" — .claude/skills/slo-designer/templates/slo-config-template.yaml:1

## Design intent — required
Provides a declarative YAML configuration blueprint for modeling a service's reliability specifications, critical user journeys, SLI definitions (PromQL measurement expressions, data sources, good/total event counters), SLO targets with measurement windows and rationales, and multi-tier alerting rules. Serves as the primary input configuration structure consumed by `generate_slo_document.py`. Without this template, teams configuring SLOs would have to construct YAML schemas and PromQL queries without guidance, resulting in schema validation errors or missing Prometheus metric expressions.

## Phase — required
rjm:spec

## Inputs — required
Service metadata (name, owner, description, criticality), user journeys, SLI definitions (Prometheus metrics and queries), SLO target percentages, alerting burn rate thresholds.

## Outputs — required
none (declarative template configuration consumed as input by `generate_slo_document.py` to produce Markdown documentation).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SLO Configuration Template` — .claude/skills/slo-designer/templates/slo-config-template.yaml:1 — defined here
- `service` — .claude/skills/slo-designer/templates/slo-config-template.yaml:4 — defined here
- `user_journeys` — .claude/skills/slo-designer/templates/slo-config-template.yaml:11 — defined here
- `slis` — .claude/skills/slo-designer/templates/slo-config-template.yaml:17 — defined here
- `Availability` — .claude/skills/slo-designer/templates/slo-config-template.yaml:18 — used here
- `Latency (p99)` — .claude/skills/slo-designer/templates/slo-config-template.yaml:28 — used here
- `Error Rate` — .claude/skills/slo-designer/templates/slo-config-template.yaml:37 — used here
- `slos` — .claude/skills/slo-designer/templates/slo-config-template.yaml:47 — defined here
- `alerts` — .claude/skills/slo-designer/templates/slo-config-template.yaml:64 — defined here

## Structure
none (YAML configuration template; top-level keys: service, user_journeys, slis, slos, alerts)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/skills/slo-designer/templates/slo-config-template.yaml:1 · File is not directly referenced by SKILL.md or generate_slo_document.py; generate_slo_document.py includes an inline create_sample_config generator instead.
- internal-contradiction · .claude/skills/slo-designer/templates/slo-config-template.yaml:59 · Template sets target: 0.1 for Error Rate, which causes generate_slo_document.py to calculate an inverted error budget of 99.9% (719h monthly downtime) due to assuming targets are availability percentages.

## Observations
- Provides sample PromQL expressions for both request count ratios and histogram quantile latency percentiles.
- Demonstrates three tiers of burn rate alerting (14.4x critical page, 6x warning investigation, 2x info sprint ticket).

## Context cost
2,498 bytes, approximately 624 tokens.
