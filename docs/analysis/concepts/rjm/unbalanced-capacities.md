---
package: rjm
name: Unbalanced capacities
slug: unbalanced-capacities
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

# Unbalanced capacities

## Definition — verbatim
> "**Unbalanced capacities**: a downstream service sized for a fraction of upstream traffic with no rate limit between them." — .claude/skills/software-engineering-library/references/release-it.md:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 224 | defined here | Defined as a stability anti-pattern where high-throughput upstream producers overwhelm downstream services lacking rate limits. |

## Consumes
High-capacity upstream traffic, low-capacity downstream services, and missing rate-limiting layers.

## Produces
Downstream saturation, high error rates, and degraded service availability.

## When applied
Assessed during architecture review and integration design when coupling high-concurrency producers to lightweight consumers.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
An anti-pattern where upstream caller capacity vastly exceeds downstream service capacity without rate limits or backpressure mechanisms. In rjm, rate-limiting adapters and bounded queues buffer traffic to prevent upstream components from crushing fragile dependencies.
