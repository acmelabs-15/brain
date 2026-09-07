---
package: rjm
name: Cascading failure
slug: cascading-failure
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

# Cascading failure

## Definition — verbatim
> "**Cascading failure**: one component's failure brings down its callers, then their callers, with no breaker between them." — .claude/skills/software-engineering-library/references/release-it.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 221 | defined here | Defined as a stability anti-pattern where a failure in one component propagates transitively to its callers due to missing circuit breakers. |

## Consumes
Unprotected integration points, missing circuit breakers, and unhandled timeout cascades.

## Produces
Systemic service collapse and architectural review rejection.

## When applied
Evaluated and flagged during code reviews and resilience audits of multi-tier service architectures.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
A major stability anti-pattern where an unisolated dependency failure causes callers to fail, propagating upward through the dependency graph until the entire platform is disabled. Defended against in rjm using circuit breakers, bulkheads, and timeouts at every integration boundary.
