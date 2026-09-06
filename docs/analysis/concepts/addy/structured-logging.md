---
package: addy
name: structured logging
slug: structured-logging
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: references/observability-checklist.md, sha256: 28659e0a4b9625a434285fa9ede632802afa909f768d0f8d839dca227e53d8fe}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# structured logging

## Definition — verbatim
> "Log events, not prose. Every log line is a JSON object with a stable event name and machine-readable fields:" — skills/observability-and-instrumentation/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/observability-and-instrumentation.json | 6 | used here | Used in trigger prompt to evaluate skill activation when adding telemetry. |
| external/observability-and-instrumentation.md | 5 | used here | Summarized as a core capability of the observability skill in web documentation. |
| references/observability-checklist.md | 8 | defined here | Titled in the table of contents and defined as structured JSON events with stable names. |
| skills/observability-and-instrumentation/SKILL.md | 52 | defined here | Step 3 heading and section defining structured event logging over string interpolation. |

## Consumes
Runtime execution context, operation parameters, and error details.

## Produces
Machine-readable JSON log events with stable keys, timestamps, log levels, and correlation IDs.

## When applied
When recording significant state changes, handled degradations, or system invariants breaking during execution.

## Sub-concepts
correlation-id

## Part of
observability-and-instrumentation

## Implementation status
clean

## Design notes
`structured logging` replaces unstructured string concatenation with standardized, machine-queryable JSON payloads carrying stable event names and contextual metadata. Addy mandates structured logging so operational logs can be aggregated, filtered, and alerted on programmatically without relying on brittle regex scraping. Without structured logging, diagnostic context like user IDs and error codes are lost or unsearchable during incidents.
