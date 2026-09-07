---
package: rjm
name: Simplification
slug: simplification
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Simplification

## Definition — verbatim
> "### Simplification" — .claude/agents/janitor.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 46 | defined here | Section heading outlining techniques for replacing complex patterns with simpler constructs. |
| templates/agents/janitor.shared.md | 54 | defined here | Section heading outlining simplification refactoring tasks across shared templates. |

## Consumes
Complex design patterns, deeply nested conditionals/loops, single-use helper functions, and custom re-implementations of standard library features.

## Produces
Flattened logic, inlined functions, and simpler implementations utilizing built-in language primitives.

## When applied
When refactoring convoluted or over-engineered code to improve readability and maintainability.

## Sub-concepts
none

## Part of
debt-removal-tasks

## Implementation status
clean

## Design notes
Defines the refactoring strategy of replacing unnecessarily intricate architectures with simpler, idiomatic alternatives. It directs agents to inline single-use functions, flatten nested loops and conditionals, and prefer built-in standard library capabilities over custom utility frameworks, reducing structural complexity across the codebase.
