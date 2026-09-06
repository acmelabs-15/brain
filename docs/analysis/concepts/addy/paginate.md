---
package: addy
name: paginate
slug: paginate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.js, sha256: a60cc6ec6570f6ef27882cbc4855991d5c3f2c485722931556e549a2fba6d510}
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.test.js, sha256: d6a38c2c616961536b53fbebc3c7d9d46ad4311d382b3123a2700277f9bbc1ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# paginate

## Definition — verbatim
(used, not defined)
> "function paginate(items, page, pageSize) {" — evals/fixtures/debugging-and-error-recovery/pagination.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/debugging-and-error-recovery/pagination.js | 3 | defines | Declares buggy array pagination helper function. |
| evals/fixtures/debugging-and-error-recovery/pagination.test.js | 5 | references | Imports paginate function to test page extraction under 1-based indexing. |

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
defects: script-bug, other

## Design notes
Function identifier in a debugging evaluation fixture, not a lifecycle methodology concept.
