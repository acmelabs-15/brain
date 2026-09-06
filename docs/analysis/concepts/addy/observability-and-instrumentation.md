---
package: addy
name: observability-and-instrumentation
slug: observability-and-instrumentation
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# observability-and-instrumentation

## Definition — verbatim
> "Instruments code so production behavior is visible and diagnosable." — skills/observability-and-instrumentation/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 2 | used here | Target skill under evaluation for structured logging, metrics, and alerting triggers. |
| external/observability-and-instrumentation.md | 5 | defined here | Web documentation outlining the skill workflow, telemetry signals, and verification. |
| README.md | 281 | used here | Cataloged under the Ship phase for structured logging, RED metrics, tracing, and alerting. |
| references/definition-of-done.md | 49 | used here | Cited in ship-readiness checklist as the requirement for telemetry on new critical paths. |
| references/observability-checklist.md | 3 | used here | Cited in header as the primary companion skill for the reference checklist. |
| skills/observability-and-instrumentation/SKILL.md | 2 | defined here | Main skill definition setting rules for structured logging, RED/USE metrics, tracing, and alerts. |

## Consumes
New or modified production code paths, services, endpoints, or background jobs.

## Produces
Structured log events, RED/USE metrics, distributed trace spans, and symptom-based alerting rules.

## When applied
> "Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works." — skills/observability-and-instrumentation/SKILL.md:3

## Sub-concepts
structured-logging, on-call-questions, symptom-based-alerts, correlation-id, label-cardinality

## Part of
none

## Implementation status
clean

## Design notes
In Addy's lifecycle, `observability-and-instrumentation` ensures that production operability is built concurrently with business logic rather than added post-incident. It mandates starting from on-call diagnostic questions and selecting the appropriate telemetry signal (metrics for failure detection, traces for localization, structured logs for root-cause diagnosis). Without this skill, production code ships as a black box, turning operational triage into slow, speculative code archaeology.
