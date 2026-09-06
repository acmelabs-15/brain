---
package: addy
name: npm test
slug: npm-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/test-driven-development/README.md, sha256: f7ce058b1d7dd375235d7e917572e72ffefb1493fd39cb3b39039cb2a29b3567}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# npm test

## Definition — verbatim
(used, not defined)

> "npm test" — evals/fixtures/test-driven-development/README.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/test-driven-development/README.md | 27 | used here | CLI command instruction for executing test suites in the fixture repository |

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
CLI command string for invoking test suites in an evaluation fixture project; not a distinct lifecycle concept.
