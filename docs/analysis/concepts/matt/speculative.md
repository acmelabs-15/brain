---
package: matt
name: Speculative
slug: speculative
kind: gate
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Speculative

## Definition — verbatim
> "| `Speculative` | Surfaced for completeness. Most of these are safe to ignore. |" — docs/engineering/improve-codebase-architecture.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 44 | defined here | Defines the Speculative badge for candidates surfaced for completeness that are generally safe to ignore. |
| external/improve-codebase-architecture.md | 44 | defined here | Explains the Speculative badge criteria in candidate reviews. |

## Consumes
An evaluated architectural deepening candidate.

## Produces
A low-confidence classification advising developers that the opportunity can be safely bypassed.

## When applied
Assigned to candidates that meet minimal theoretical criteria but lack pressing practical payoff.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
Speculative is an explicit filter badge in improve-codebase-architecture reports that flags low-priority candidates. By marking them as surfaced for completeness, it shields engineers from spending time on refactorings that provide negligible structural leverage.
