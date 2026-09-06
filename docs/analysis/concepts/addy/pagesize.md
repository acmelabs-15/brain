---
package: addy
name: pageSize
slug: pagesize
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.js, sha256: a60cc6ec6570f6ef27882cbc4855991d5c3f2c485722931556e549a2fba6d510}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# pageSize

## Definition — verbatim
(used, not defined)
> "function paginate(items, page, pageSize) {" — evals/fixtures/debugging-and-error-recovery/pagination.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/debugging-and-error-recovery/pagination.js | 3 | defines | Formal parameter defining the count of items per page in pagination helper. |

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
Parameter identifier in an evaluation fixture function, not a lifecycle methodology concept.
