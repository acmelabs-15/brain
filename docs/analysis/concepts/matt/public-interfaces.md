---
package: matt
name: public interfaces
slug: public-interfaces
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# public interfaces

## Definition — verbatim
> "Tests verify behavior through public interfaces, not implementation details. Code can change entirely; tests shouldn't." — skills/engineering/tdd/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 14 | defined here | Core design rule defining public interfaces as the sole valid interaction surface for tests. |

## Consumes
Module boundary contracts and seam definitions.

## Produces
Decoupled tests that survive internal architectural changes.

## When applied
When formulating test assertions, ensuring they execute solely against public methods and contracts.

## Sub-concepts
none

## Part of
tdd, good-tests

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)

## Design notes
Public interfaces represent the observable API boundaries exposed by modules and services to outside callers. Matt insists that all test verification occur through public interfaces rather than inspecting private methods or internal state, ensuring tests act as durable behavioral specifications that survive extensive internal refactoring.
