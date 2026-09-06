---
package: addy
name: requires fixtures for execution evals
slug: requires-fixtures-for-execution-evals
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# requires fixtures for execution evals

## Definition — verbatim
(used, not defined)

> "test('requires fixtures for execution evals', () => {" — scripts/run-evals-test.js:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 165 | defined here | Test case asserting that execution evals require a non-empty files fixture list. |

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
Test case identifier in `scripts/run-evals-test.js` validating that execution evals enforce mandatory test fixture definitions, rather than an agent lifecycle methodology concept.
