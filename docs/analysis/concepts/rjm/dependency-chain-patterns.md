---
package: rjm
name: Dependency Chain Patterns
slug: dependency-chain-patterns
kind: pattern
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

# Dependency Chain Patterns

## Definition — verbatim
> "## Dependency Chain Patterns" — .claude/skills/slo-designer/references/slo-design-patterns.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 178 | defined here | Section heading introducing reliability compounding calculations across service dependencies and failure mitigation patterns. |

## Consumes
Service topology maps and individual dependency availability targets.

## Produces
Compounded availability calculations and architectural resilience recommendations (circuit breakers, fallbacks, retries, bulkheads).

## When applied
When analyzing end-to-end service reliability across multi-tier service architectures.

## Sub-concepts
chain-reliability-calculation, circuit-breakers, fallbacks, retries-with-backoff, bulkheads

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
Dependency Chain Patterns provides the mathematical and architectural framework for computing composite availability across chained dependencies (`Service A * Service B * Service C`), establishing four core mitigation strategies to prevent cascading failures.
