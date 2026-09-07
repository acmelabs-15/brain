---
package: rjm
name: ReviewContextLike
slug: reviewcontextlike
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReviewContextLike

## Definition — verbatim
(used, not defined)

> "class ReviewContextLike(Protocol):" — scripts/ai_review_outputs.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 25 | defined here | Typing protocol specifying the structural interface required by write_outputs for review context payloads. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`ReviewContextLike` is a Python typing protocol class identifier defining attributes needed by review output writers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
