---
package: rjm
name: consumer-driven contract tests
slug: consumer-driven-contract-tests
kind: technique
package_phase: rjm:test
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

# consumer-driven contract tests

## Definition — verbatim
(used, not defined)

> "Mutation testing, snapshot testing, or consumer-driven contract tests" — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 73 | used here | Considered as an automated mechanism to prevent contract drift between providers and callers. |

## Consumes
Consumer expectations, interface definitions, service contracts.

## Produces
Contract verification suites that validate whether provider interfaces satisfy consumer-defined requirements.

## When applied
Used in integration testing across service boundaries and interdependent modules to prevent contract incompatibilities.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An integration testing methodology where consumers formulate the exact contract expectations that service providers must satisfy. In rjm architecture evaluation, it represents an automated approach to ensuring that upstream changes do not break downstream consumer expectations.
