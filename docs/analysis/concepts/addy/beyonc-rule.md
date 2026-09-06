---
package: addy
name: Beyoncé Rule
slug: beyonc-rule
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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Beyoncé Rule

## Definition — verbatim
> "Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule." — external/api-and-interface-design.md:12

## Also called — verbatim
"Beyonce Rule" — README.md:250

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/context-engineering.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/doubt-driven-development.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/frontend-ui-engineering.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |
| external/source-driven-development.md | 12 | used here | Listed as a foundational testing principle in test-driven-development. |

## Consumes
Any behavior or invariant claimed to be supported.

## Produces
Automated tests proving the behavior holds ('if you liked it then you shoulda put a test on it').

## When applied
Whenever adding or asserting behavior in code or bug fixes.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: doc-drift

## Design notes
The rule stating that if an invariant or behavior is intended to be preserved, it must have an automated test asserting it; without a test, behavior is not guaranteed.
