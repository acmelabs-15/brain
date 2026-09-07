---
package: rjm
name: RED method
slug: red-method
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RED method

## Definition — verbatim
> "- RED method: Rate, Errors, Duration (for services)" — .claude/skills/analyze/references/reliability-observability-pillars.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 46 | defined here | Metric best practice methodology for request-driven service observability. |
| .claude/skills/observability/references/three-pillars-reference.md | 44 | defined here | Prescribed metric framework for monitoring services via throughput rate, error count, and request duration. |

## Consumes
Service-level request metrics, HTTP/RPC status codes, and latency distributions.

## Produces
Service health assessment, customer-impacting degradation detection, and SLO compliance tracking.

## When applied
When designing metrics, dashboard panels, and alert rules for microservices and request-handling endpoints.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The RED (Rate, Errors, Duration) method is rjm's service-oriented observability framework for request-handling architectures. Complementing the resource-centric USE method, RED focuses directly on user-facing metrics—request throughput (rate), failure counts (errors), and latency (duration)—enabling rapid detection of service degradation and immediate alignment with SLOs.
