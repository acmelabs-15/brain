---
package: rjm
name: Sergeant methods
slug: sergeant-methods
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

# Sergeant methods

## Definition — verbatim
> "**Sergeant methods** direct **private methods**." — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:340

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 340 | defined here | Defines public orchestrating methods that coordinate high-level control flow without inline mechanics. |

## Consumes
High-level control flow logic and step-by-step procedure sequences for domain operations.

## Produces
Clear, readable public methods outlining high-level business actions without low-level implementation details.

## When applied
Applied when designing or refactoring public class interfaces using the Programming by Intention pattern.

## Sub-concepts
none

## Part of
programming-by-intention-pattern

## Implementation status
clean

## Design notes
In the Programming by Intention pattern, sergeant methods serve as the public orchestrators of a class. Rather than mixing domain workflow with low-level details (such as database queries or socket connections), sergeant methods read like concise task summaries that delegate every mechanical step to subordinate private methods.
