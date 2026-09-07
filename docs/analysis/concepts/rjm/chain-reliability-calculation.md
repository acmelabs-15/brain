---
package: rjm
name: Chain Reliability Calculation
slug: chain-reliability-calculation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chain Reliability Calculation

## Definition — verbatim
> "### Chain Reliability Calculation" — .claude/skills/slo-designer/references/slo-design-patterns.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 180 | defined here | Section detailing the multiplicative formula for calculating overall service availability across interdependent services. |

## Consumes
Availability percentages of each serial dependency in a service request path.

## Produces
The composite theoretical availability limit of the service chain (e.g., 99.9% * 99.9% * 99.9% = 99.7%).

## When applied
When establishing SLO targets for services that rely on synchronous downstream dependencies.

## Sub-concepts
none

## Part of
dependency-chain-patterns

## Implementation status
defects: orphan

## Design notes
Chain Reliability Calculation models serial system availability as the product of individual component availabilities, demonstrating mathematically why a composite service cannot achieve higher availability than its dependencies without asynchronous decoupling or fallback redundancy.
