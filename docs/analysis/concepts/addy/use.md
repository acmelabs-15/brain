---
package: addy
name: USE
slug: use
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# USE

## Definition — verbatim
> "**USE** instrumented for every resource (queues, pools, hosts): Utilization, Saturation, Errors" — references/observability-checklist.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/observability-checklist.md | 38 | defined here | Checklist item requiring USE instrumentation (Utilization, Saturation, Errors) for system resources |
| skills/observability-and-instrumentation/SKILL.md | 95 | defined here | Method guideline prescribing the USE pattern for resources such as queues, pools, and hosts |

## Consumes
System resources, background worker pools, queues, database connection pools, host infrastructure

## Produces
Resource utilization percentages, queue saturation metrics, and error rates

## When applied
When instrumenting infrastructure and system resources rather than request-driven endpoints

## Sub-concepts
none

## Part of
metrics, observability-checklist, observability-and-instrumentation

## Implementation status
clean

## Design notes
The USE methodology (Utilization, Saturation, Errors) complements the RED method in addy by targeting system resources (connection pools, worker queues, host capacity) rather than request endpoints. Tracking how busy a resource is, the extent of queued excess work, and any failure events provides immediate insight into resource bottlenecks before cascading failures impact service-level objectives.
