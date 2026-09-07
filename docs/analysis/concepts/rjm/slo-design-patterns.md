---
package: rjm
name: SLO Design Patterns
slug: slo-design-patterns
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLO Design Patterns

## Definition — verbatim
> "# SLO Design Patterns" — .claude/skills/slo-designer/references/slo-design-patterns.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 1 | defined here | Reference document heading establishing reusable SLO patterns across five service archetypes based on Google SRE practices. |

## Consumes
Service classifications, operational requirements, and telemetry metrics.

## Produces
Standardized SLIs, Prometheus queries, baseline targets, and multi-window burn rate alert rules.

## When applied
When establishing or validating reliability targets and telemetry for a service.

## Sub-concepts
consumer-facing-api-pattern, internal-api-pattern, data-pipeline-pattern, real-time-system-pattern, dependency-chain-patterns

## Part of
none

## Implementation status
defects: orphan

## Design notes
SLO Design Patterns provides standardized architectural blueprints, recommended SLIs, and Prometheus query expressions across five service archetypes following Google SRE principles, preventing arbitrary or inconsistent reliability commitments.
