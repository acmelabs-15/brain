---
package: addy
name: parseGrading
slug: parsegrading
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# parseGrading

## Definition — verbatim
(used, not defined)
> "function parseGrading(raw, expectedCount) {" — scripts/run-evals.js:429

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 11 | used here | Imported to test validation and parsing of LLM grader JSON outputs. |
| scripts/run-evals.js | 429 | defined here | Extracts JSON object from raw grader output and validates structure and expectation counts. |

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
Parsing and validation function in `scripts/run-evals.js` checking structured JSON grading outputs from LLM evaluators, not an engineering lifecycle concept.
