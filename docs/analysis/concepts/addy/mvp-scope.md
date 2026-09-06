---
package: addy
name: MVP scope
slug: mvp-scope
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# MVP scope

## Definition — verbatim
(used, not defined)
> "Sharpening questions, distinct directions, surfaced assumptions, and a one-pager with MVP scope and a Not Doing list" — evals/cases/idea-refine.json:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 34 | used here | Specified as a required component of the idea-refine one-pager deliverable. |

## Consumes
User problems, market requirements, and candidate feature lists explored during ideation.

## Produces
The minimal set of core features required to validate value and deliver functional utility to initial users.

## When applied
During the convergence step of idea refinement when defining the initial release boundary.

## Sub-concepts
none

## Part of
- one-pager
- idea-refine

## Implementation status
clean

## Design notes
MVP scope isolates the smallest viable functional subset of an idea that proves value and tests core hypotheses. It prevents premature bloat by deferring secondary enhancements to future iterations.
