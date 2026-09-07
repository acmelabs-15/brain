---
package: rjm
name: closed
slug: closed
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# closed

## Definition — verbatim
> "closed (calls flow)" — .claude/skills/software-engineering-library/references/release-it.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 71 | defined here | Defined as the normal operating state of a circuit breaker in which requests flow through to the dependency. |

## Consumes
Dependency health metrics, error rate measurements, and successful probe outcomes.

## Produces
Normal forwarding of inbound requests to the downstream integration point.

## When applied
Active when a dependency operates normally within expected error and timeout thresholds.

## Sub-concepts
none

## Part of
circuit-breaker

## Implementation status
defects: missing-path

## Design notes
The baseline operational state of a circuit breaker in rjm's resilience architecture. While closed, traffic flows without interruption to the target service; if error rates or consecutive timeouts exceed established thresholds, the breaker trips to open.
