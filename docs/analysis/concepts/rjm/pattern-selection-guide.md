---
package: rjm
name: Pattern Selection Guide
slug: pattern-selection-guide
kind: technique
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

# Pattern Selection Guide

## Definition — verbatim
> "## Pattern Selection Guide" — .claude/skills/slo-designer/references/slo-design-patterns.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 5 | defined here | Section heading introducing the decision table mapping service types to primary SLIs, typical target percentages, and error budgets. |

## Consumes
Service archetype classification and operational requirements.

## Produces
Selected SLI metrics, target percentages, and monthly downtime budgets for the target service.

## When applied
During the initial discovery phase of designing SLOs to select the appropriate pattern for a service.

## Sub-concepts
consumer-api, internal-api, data-pipeline, real-time-system, batch-processing, service-type, primary-slis, typical-target, error-budget

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
The Pattern Selection Guide is a decision table in `slo-design-patterns.md` that maps five distinct service archetypes to their primary SLIs, baseline targets, and allowable monthly downtime error budgets, streamlining initial SLO selection during service discovery.
