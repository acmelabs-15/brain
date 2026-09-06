---
package: addy
name: rejects incomplete or inconsistent grader summaries
slug: rejects-incomplete-or-inconsistent-grader-summaries
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

# rejects incomplete or inconsistent grader summaries

## Definition — verbatim
(used, not defined)
> "test('rejects incomplete or inconsistent grader summaries', () => {" — scripts/run-evals-test.js:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 93 | defined here | Test case asserting that parseGrading returns null when summary counts are inconsistent with expectation items. |

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
Unit test case in `scripts/run-evals-test.js` validating rejection of internally inconsistent grader summary counts, not an engineering lifecycle concept.
