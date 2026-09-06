---
package: addy
name: Inline Documentation
slug: inline-documentation
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Inline Documentation

## Definition — verbatim
> "Comment the *why*, not the *what*:" — skills/documentation-and-adrs/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 102 | defined here | Heading for standards, positive examples, and anti-patterns for code comments. |

## Consumes
Code with non-obvious algorithms, complex invariants, performance optimizations, or subtle design trade-offs.

## Produces
Targeted code comments explaining non-obvious design rationale without restating self-explanatory code.

## When applied
Applied whenever code requires explanation of the underlying reasons or constraints that cannot be inferred from the syntax alone.

## Sub-concepts
known-gotchas

## Part of
none

## Implementation status
clean

## Design notes
`Inline Documentation` focuses exclusively on capturing non-obvious intent and domain constraints directly in code, preventing misleading self-evident comments and ensuring comments remain stable across minor code refactorings.
