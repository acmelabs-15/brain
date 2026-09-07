---
package: rjm
name: Direction by name
slug: direction-by-name
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

# Direction by name

## Definition — verbatim
> "- **Direction by name**: when an inner module wants to call an outer one, define an interface in the inner module and let the outer module implement it. Outer modules import the interface; inner modules never import the implementation." — .claude/skills/software-engineering-library/references/clean-architecture.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 119 | defined here | Boundary protection rule establishing dependency inversion via inner interfaces implemented by outer modules. |

## Consumes
Inner module requirements for external capabilities.

## Produces
Inverted dependency interfaces owned by inner modules.

## When applied
Applied whenever an inner layer component needs to invoke functionality implemented in an outer layer.

## Sub-concepts
none

## Part of
boundary-protection

## Implementation status
clean

## Design notes
Direction by name enforces the Dependency Inversion Principle across layer boundaries, requiring inner modules to define the interfaces they need rather than importing outer implementations. In rjm, this ensures orchestrator use cases remain unaware of concrete tool or database implementations.
