---
package: addy
name: correlation identifiers
slug: correlation-identifiers
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/observability-and-instrumentation/operations.md, sha256: 37aa8678c2df2ac7c8c5836804003ba5429b955681968df75421fbb65c13ffa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# correlation identifiers

## Definition — verbatim
> "Payment and attempt IDs are safe correlation identifiers. Card numbers," — evals/fixtures/observability-and-instrumentation/operations.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/observability-and-instrumentation/operations.md | 10 | used here | Designated as safe, privacy-preserving tracking keys for correlating retry events across telemetry streams. |

## Consumes
Unique request tokens, transaction IDs, or attempt numbers.

## Produces
Traceable identifier attached to log records, traces, and metrics.

## When applied
During telemetry instrumentation and error logging to link distributed operations across services without leaking PII.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An observability pattern utilizing unique, non-sensitive identifiers across service boundaries and retry attempts to reconstruct transaction lifecycles without logging sensitive customer data.
