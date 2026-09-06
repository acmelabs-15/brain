---
package: addy
name: totalCents
slug: totalcents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
  - {path: evals/fixtures/test-driven-development/src/split.js, sha256: 5623b253e7904d759750cd0f6b5bef5f994e663b05b2d78ce3d1d5fce07adf41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# totalCents

## Definition — verbatim
(used, not defined)

> "function splitCents(totalCents, n) {" — evals/fixtures/test-driven-development/src/split.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/test-driven-development/README.md | 10 | used here | Input parameter constraint description in fixture problem statement |
| evals/fixtures/test-driven-development/src/split.js | 3 | defined here | Function parameter identifier in splitCents implementation |

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
defects: other

## Design notes
Function parameter identifier in an evaluation fixture JavaScript file; not a development lifecycle concept.
