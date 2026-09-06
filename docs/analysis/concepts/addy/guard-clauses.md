---
package: addy
name: guard clauses
slug: guard-clauses
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# guard clauses

## Definition — verbatim
> "- Deep nesting → guard clauses or extracted helpers" — .gemini/commands/code-simplify.toml:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/code-simplify.toml | 12 | used here | Prescribed as a simplification pattern to eliminate deep nesting. |

## Consumes
Code with deeply nested conditional branches.

## Produces
Flattened function flow with early precondition returns.

## When applied
During code simplification when encountering nested if/else statements.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A refactoring pattern that replaces nested conditional structures with early exit returns, reducing cyclomatic complexity and visual indentation.
