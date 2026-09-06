---
package: addy
name: slugify
slug: slugify
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/src/slug.js, sha256: 595429bcb045f7ec9d41e40b4ed4102e07a57240e7f2c333eaa794e2a9465ade}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# slugify

## Definition — verbatim
(used, not defined)
> "exports.slugify = (value) => value.trim().toLowerCase().replace(/\s+/g, '-');" — evals/fixtures/ci-cd-and-automation/src/slug.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/ci-cd-and-automation/src/slug.js | 3 | defines | Exports helper function that trims, lowercases, and hyphenates string input. |

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
Utility helper function identifier in an evaluation fixture project, not a lifecycle methodology concept.
