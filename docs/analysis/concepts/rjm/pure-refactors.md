---
package: rjm
name: pure refactors
slug: pure-refactors
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pure refactors

## Definition — verbatim
(used, not defined)

> "The rule can be misapplied to pure refactors with no observable contract change." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 90 | used here | Negative consequence note cautioning against misapplying the contract-flipping rule to behavior-preserving changes. |

## Consumes
Existing source code, invariant observable contracts, existing test suites.

## Produces
Restructured, modularized, or optimized internal code while leaving caller-observable behavior completely unchanged.

## When applied
Undertaken during code cleanup, restructuring, or performance tuning where no public signature, exception, return value, or side effect is altered.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Internal code restructuring that preserves external observable behavior completely invariant. In rjm testing governance, pure refactors are explicitly distinguished from contract-changing modifications, exempting them from the requirement to flip test assertions.
