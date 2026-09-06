---
package: addy
name: Build phase
slug: build-phase
kind: phase
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

# Build phase

## Definition — verbatim
(used, not defined)
> "<span class=\"chip phase-chip\" data-astro-cid-jrlgpo3w><span class=\"phase-dot\" data-astro-cid-jrlgpo3w></span>Build phase</span>" — external/api-and-interface-design.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 5 | used here | Categorizes api-and-interface-design within the Build phase with command /build. |
| external/context-engineering.md | 5 | used here | Categorizes context-engineering within the Build phase. |
| external/doubt-driven-development.md | 5 | used here | Categorizes doubt-driven-development within the Build phase. |
| external/frontend-ui-engineering.md | 5 | used here | Categorizes frontend-ui-engineering within the Build phase. |
| external/source-driven-development.md | 5 | used here | Categorizes source-driven-development within the Build phase. |
| external/test-driven-development.md | 5 | used here | Categorizes test-driven-development within the Build phase. |

## Consumes
Spec documents, tasks, and task plans from the Define and Plan phases.

## Produces
Tested implementation code written in vertical slices.

## When applied
When writing code, implementing features, fixing bugs, or refactoring.

## Sub-concepts
thin-vertical-slices, test-driven-development, source-driven-development

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
The primary implementation phase in addy's lifecycle, triggered by /build, dedicated to writing production code in thin, tested vertical slices with automated verification.
