---
package: addy
name: On-call questions
slug: on-call-questions
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# On-call questions

## Definition — verbatim
(used, not defined)
> "On-call questions defined first, then structured logs, RED metrics, and symptom-based alerts that answer them" — evals/cases/observability-and-instrumentation.json:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 32 | used here | Defined as the required starting point in expected evaluation output for instrumentation. |

## Consumes
System design, deployment architecture, and expected operational failure modes.

## Produces
A prioritized list of 2–4 practical operational questions an engineer will ask when paged.

## When applied
Applied before emitting any log, metric, or trace when adding telemetry to a production feature.

## Sub-concepts
none

## Part of
observability-and-instrumentation

## Implementation status
clean

## Design notes
`On-call questions` enforces a question-driven approach to telemetry: before writing any code that emits signals, the engineer must document the exact 2–4 diagnostic questions an on-call responder will ask during an incident. Every emitted log line, metric gauge, or trace span must directly serve to answer one of those questions. Without this practice, engineers add noisy, unfocused telemetry that clutters dashboards without aiding triage during an outage.
