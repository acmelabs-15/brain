---
package: rjm
name: SLO Configuration Template
slug: slo-configuration-template
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLO Configuration Template

## Definition — verbatim
> "# SLO Configuration Template" — .claude/skills/slo-designer/templates/slo-config-template.yaml:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 1 | defined here | Header title defining the declarative YAML template structure for service reliability configurations. |

## Consumes
Service metadata, user journeys, SLI definitions, SLO targets, and alerting thresholds.

## Produces
Declarative YAML configuration file specifying service reliability targets and PromQL metrics.

## When applied
Applied when configuring reliability indicators, PromQL query expressions, objectives, and alerting rules for a service.

## Sub-concepts
service, user-journeys, slis, alerts

## Part of
slo-designer

## Implementation status
defects: orphan, internal-contradiction

## Design notes
Provides a declarative YAML configuration blueprint for modeling a service's reliability specifications, critical user journeys, SLI PromQL expressions, and multi-window burn rate alerts. Without it, developers and agents would have to construct unstructured SLO configurations without schema validation or metric expression standards.
