---
package: addy
name: Ship-readiness
slug: ship-readiness
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Ship-readiness

## Definition — verbatim
> "### Ship-readiness" — references/definition-of-done.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/definition-of-done.md | 47 | defined here | Standing checklist section establishing requirements for security review, observability, rollback paths, and human approval before release |

## Consumes
Completed features, test results, security posture evaluations, telemetry instrumentation, and rollback plans

## Produces
A verified release-ready increment cleared for production deployment

## When applied
Applied per-release as the final standing gate before merge or deployment

## Sub-concepts
none

## Part of
definition-of-done, shipping-and-launch

## Implementation status
clean

## Design notes
Ship-readiness is the terminal verification gate in addy's standing Definition of Done. Before code reaches production, it mandates that security implications have been reviewed, observability telemetry (logs, metrics, traces) is in place, an explicit rollback path exists, and human review and approval has been obtained, preventing unverified or dangerous code from shipping.
