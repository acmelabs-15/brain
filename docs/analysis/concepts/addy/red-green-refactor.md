---
package: addy
name: red-green-refactor
slug: red-green-refactor
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
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

# red-green-refactor

## Definition — verbatim
> "Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing." — external/test-driven-development.md:5

## Also called — verbatim
The TDD Cycle

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 10 | applies | Cited in evaluation prompt instructing the agent to implement a streak calculator using red-green-refactor. |
| external/api-and-interface-design.md | 12 | references | Referenced in search keywords metadata on external API design documentation page. |
| external/context-engineering.md | 12 | references | Referenced in search keywords metadata on external context engineering documentation page. |
| external/doubt-driven-development.md | 12 | references | Referenced in search keywords metadata on external doubt-driven development documentation page. |
| external/frontend-ui-engineering.md | 12 | references | Referenced in search keywords metadata on external frontend UI engineering documentation page. |
| external/source-driven-development.md | 12 | references | Referenced in search keywords metadata on external source-driven development documentation page. |
| external/test-driven-development.md | 5 | defines | Summarized in external documentation as the primary iterative cycle of test-driven development. |

## Consumes
Behavioral specification, bug report, or interface contract.

## Produces
Failing test (RED), minimal passing code (GREEN), and clean refactored implementation (REFACTOR).

## When applied
Applied iteratively during code authoring and bug fixing whenever changing application behavior.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: doc-drift, orphan

## Design notes
Red-green-refactor establishes the tight three-beat feedback loop of TDD that proves test failure before writing minimal code to pass and cleanly refactoring.
