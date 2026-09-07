---
package: rjm
name: Metrics (Pillar 2)
slug: metrics-pillar-2
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Metrics (Pillar 2)

## Definition — verbatim
> "### 2. Metrics (Pillar 2)" — .claude/skills/review/references/observability.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 64 | defined here | Focus area checklist verifying that rate, error, and duration counters are counted for services, utilization/saturation for resources, and label dimensions are bounded. |

## Consumes
Metric instrumentation, counter increment points, timing histograms, and metric label declarations.

## Produces
Review findings evaluating metric signal adequacy, error alert trigger counters, and label cardinality bounds.

## When applied
Applied during observability review when evaluating numeric aggregated measurements and alerting signals in new code paths.

## Sub-concepts
none

## Part of
three-pillars

## Implementation status
clean

## Design notes
The second focus area checklist of rjm's three-pillars observability review, verifying that services instrument critical operational measurements (rate, errors, duration) and that metric labels avoid high-cardinality values that degrade monitoring systems.
