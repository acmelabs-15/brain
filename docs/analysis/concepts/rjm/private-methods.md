---
package: rjm
name: private methods
slug: private-methods
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# private methods

## Definition — verbatim
> "**Sergeant methods** direct **private methods**." — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:340

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 340 | defined here | Defines focused helper methods directed by sergeant methods to execute isolated implementation details. |

## Consumes
Concrete operational steps (validation checks, database calls, connection lifecycle) delegated from sergeant methods.

## Produces
Encapsulated private helper methods that execute single-purpose low-level actions away from public view.

## When applied
Applied when breaking down complex procedures into focused, private steps under the Programming by Intention pattern.

## Sub-concepts
none

## Part of
programming-by-intention-pattern

## Implementation status
clean

## Design notes
In the Programming by Intention pattern, private methods encapsulate the low-level implementation mechanics directed by sergeant methods. Isolating technical details (such as database queries, email client connections, or complex parsing) into private helpers keeps public orchestrators clean while making each sub-step simple and cohesive.
