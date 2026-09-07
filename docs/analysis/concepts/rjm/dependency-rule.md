---
package: rjm
name: dependency rule
slug: dependency-rule
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

# dependency rule

## Definition — verbatim
> "The goal is one constraint that everything else falls out of: the dependency rule. When that rule holds, the codebase stays testable, replaceable at the edges, and free of accidental coupling." — .claude/skills/software-engineering-library/references/clean-architecture.md:6

## Also called — verbatim
`The Dependency Rule` — .claude/skills/software-engineering-library/references/clean-architecture.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 6 | defined here | Foundational architectural constraint ensuring source code dependencies point strictly inward toward business rules. |

## Consumes
Concentric architectural layers (Entities, Use Cases, Interface Adapters, Frameworks and Drivers).

## Produces
Inward-pointing dependency graph maintaining boundary integrity and testability.

## When applied
Applied when adding code that touches multiple layers, introducing new dependencies, or importing frameworks.

## Sub-concepts
frameworks-and-drivers, interface-adapters, use-cases, entities, abstract-ports, boundary-protection

## Part of
clean-architecture

## Implementation status
clean

## Design notes
The dependency rule is the central governing architectural constraint in Clean Architecture, mandating that source code dependencies point strictly inward toward business entities. In rjm, this ensures that core domain logic and multi-agent coordination remain decoupled from transient external frameworks, CLI harnesses, and transport protocols.
