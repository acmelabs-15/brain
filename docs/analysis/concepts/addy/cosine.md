---
package: addy
name: cosine
slug: cosine
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cosine

## Definition — verbatim
(used, not defined)

> "function cosine(a, b) {" — scripts/run-evals.js:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 127 | defined here | Computes the cosine similarity between two sparse term-weight vectors. |

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
Mathematical helper function in `scripts/run-evals.js` computing vector cosine similarity for prompt ranking and collision detection, rather than an agent lifecycle methodology concept.
