---
package: addy
name: Candidate meters
slug: candidate-meters
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Candidate meters

## Definition — verbatim
(used, not defined)
> "Candidate meters" — evals/fixtures/spec-driven-development/billing-brief.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development/billing-brief.md | 4 | references | Proposed usage measurement units (API requests, processed records, jobs) needing formal definition |

## Consumes
Business pricing models, user interaction patterns, and application telemetry event capabilities

## Produces
Evaluated options for quantifiable consumption metrics to be decided and finalized in the feature spec

## When applied
Identified during discovery and specification writing when defining metering criteria for consumption billing

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Potential operational metrics considered for usage-based billing; in Addy's spec-driven development fixture, candidate meters exemplify domain ambiguities that must be surfaced as explicit decisions rather than assumed during coding.
