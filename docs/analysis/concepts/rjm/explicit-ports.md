---
package: rjm
name: Explicit ports
slug: explicit-ports
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit ports

## Definition — verbatim
> "- **Explicit ports**: use cases depend on abstract ports for external needs like time, IDs, or HTTP calls. Define these ports alongside the use case. Concrete implementations live in adapter or framework layers." — .claude/skills/software-engineering-library/references/clean-architecture.md:122

## Also called — verbatim
`abstract ports` — .claude/skills/software-engineering-library/references/clean-architecture.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 122 | defined here | Boundary protection rule requiring use cases to declare explicit port interfaces for external dependencies. |

## Consumes
External services, time providers, and persistence needs required by use cases.

## Produces
Abstract port definitions co-located with use cases.

## When applied
Applied when constructing use cases that interact with external state, system clocks, or network resources.

## Sub-concepts
abstract-ports

## Part of
boundary-protection, use-cases

## Implementation status
clean

## Design notes
Explicit ports mandates that use cases formally declare abstract interfaces for all external interactions rather than accessing concrete clients or system APIs. In rjm, explicit ports enable complete deterministic simulation and unit testing of agent workflows.
