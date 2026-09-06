---
package: addy
name: DAMP over DRY
slug: damp-over-dry
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DAMP over DRY

## Definition — verbatim
> "Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule." — external/api-and-interface-design.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/context-engineering.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/doubt-driven-development.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/frontend-ui-engineering.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/source-driven-development.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/test-driven-development.md | 5 | used here | Highlighted in the detail summary for test-driven-development. |

## Consumes
Test cases and test fixtures.

## Produces
Descriptive, readable test code that values clarity over premature abstraction.

## When applied
When authoring tests in test-driven-development.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: doc-drift

## Design notes
Descriptive And Meaningful Phrases over Don't Repeat Yourself: a testing philosophy where readability and explicit setup in each test case are prioritized over DRY test abstractions.
