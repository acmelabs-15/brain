---
package: rjm
name: observable contract
slug: observable-contract
kind: pattern
package_phase: cross-phase
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

# observable contract

## Definition — verbatim
> "when a change alters an observable contract, the author must find and flip stale tests in the same diff." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 32 | defined here | Decision text establishing observable contract modification as the trigger for flipping stale tests. |

## Consumes
Public signatures, return values, exception types, side effects, output ordering, serialized fields.

## Produces
External behavioral expectations that callers, operators, and automated integration tests rely upon without inspecting private implementation.

## When applied
Evaluated during feature specification, implementation, and test design to determine whether a change alters external behavior or is a pure internal refactor.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The externally visible behavior of a software component that callers, integration suites, and downstream maintainers observe without reading private internal implementation. Serves in rjm testing governance as the boundary separating behavioral contract changes from pure internal refactors.
