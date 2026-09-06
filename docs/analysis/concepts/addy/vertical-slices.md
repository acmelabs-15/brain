---
package: addy
name: vertical slices
slug: vertical-slices
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# vertical slices

## Definition — verbatim
(used, not defined)
> "Tasks are vertical slices rather than horizontal layers" — evals/cases/planning-and-task-breakdown.json:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 38 | used here | Expectation requiring work to proceed in thin vertical slices rather than large changes. |
| evals/cases/planning-and-task-breakdown.json | 39 | used here | Planning expectation mandating tasks be structured as vertical slices instead of horizontal layers. |
| external/doubt-driven-development.md | 12 | used here | Mentions writing code in thin, tested vertical slices in Build phase sidebar blurb. |
| external/frontend-ui-engineering.md | 12 | used here | Mentions vertical slices in related Build phase documentation. |
| external/source-driven-development.md | 12 | used here | References vertical slices in Build phase navigation sidebar. |

## Consumes
Decomposed features requiring cross-layer implementation across UI, business logic, and data storage.

## Produces
Complete, narrow functional paths delivered across architectural layers that can be tested end-to-end.

## When applied
When breaking down features during planning and implementing tasks during build.

## Sub-concepts
- verifiable-slice
- working-increment

## Part of
- incremental-implementation
- planning-and-task-breakdown

## Implementation status
clean

## Design notes
Vertical slices deliver narrow but complete end-to-end functionality across all system layers (database, API, UI), in contrast to horizontal layers that implement entire tiers in isolation. This ensures each increment is testable, demonstrable, and independently valuable.
