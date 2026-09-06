---
package: addy
name: python3 -m unittest
slug: python3-m-unittest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# python3 -m unittest

## Definition — verbatim
(used, not defined)
> "Tests are run with the repository's own command (python3 -m unittest), not npm test or another ecosystem's tool" — evals/cases/test-driven-development.json:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 66 | references | Cited in evaluation criteria as the ecosystem-specific shell command for executing Python tests. |

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
python3 -m unittest is a command-line shell invocation string for running Python tests in an evaluation case rather than a lifecycle concept.
