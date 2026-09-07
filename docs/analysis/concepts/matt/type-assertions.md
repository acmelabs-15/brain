---
package: matt
name: type assertions
slug: type-assertions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# type assertions

## Definition — verbatim
(used, not defined)

> "Migrate test files from `as` type assertions to @total-typescript/shoehorn." — skills/misc/README.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 6 | used here | Mentions `as` type assertions as an anti-pattern in test files targeted for migration to shoehorn. |

## Consumes
TypeScript expressions requiring explicit type narrowing or override.

## Produces
Type-coerced values accepted by the compiler without runtime validation.

## When applied
When forcing the TypeScript type checker to assign a specific type to an expression.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In TypeScript, `as` type assertions force the compiler to treat a value as a specific type, bypassing static type checking. Matt's workflow flags `as` assertions in test files as a code smell and provides automated migration to safer helper libraries.
