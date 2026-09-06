---
package: addy
name: splitCents
slug: splitcents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
  - {path: evals/fixtures/test-driven-development/BUG.md, sha256: d2ec9665dfe84bdd68c14b2226075351d650672c6a0b7cac7efe7dd8a130f112}
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
  - {path: evals/fixtures/test-driven-development/src/split.js, sha256: 5623b253e7904d759750cd0f6b5bef5f994e663b05b2d78ce3d1d5fce07adf41}
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# splitCents

## Definition — verbatim
(used, not defined)
> "`splitCents(totalCents, n)` returns an array of `n` integer cent amounts." — evals/fixtures/test-driven-development/README.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 39 | references | Referenced in evaluation assertions verifying proper remainder distribution across shares. |
| evals/fixtures/test-driven-development/BUG.md | 9 | references | Referenced in bug report fixture documenting incorrect return values for odd division remainders. |
| evals/fixtures/test-driven-development/README.md | 9 | defines | Documents the function contract, parameters, and return value specification in the fixture README. |
| evals/fixtures/test-driven-development/src/split.js | 3 | defines | Defines the JavaScript function declaration in the implementation fixture. |
| evals/fixtures/test-driven-development/test/split.test.js | 5 | references | Imported into the unit test file to execute regression and invariant assertions. |

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
splitCents is a JavaScript function identifier implemented in a test fixture for TDD evaluation rather than a software development lifecycle concept.
