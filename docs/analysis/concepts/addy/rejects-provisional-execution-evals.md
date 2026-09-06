---
package: addy
name: rejects provisional execution evals
slug: rejects-provisional-execution-evals
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

# rejects provisional execution evals

## Definition — verbatim
(used, not defined)

> "test('rejects provisional execution evals', () => {" — scripts/run-evals-test.js:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 191 | defined here | Test case asserting that the runner rejects execution evals marked with provisional trust levels. |

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
Test case identifier in `scripts/run-evals-test.js` verifying that provisional execution evals are rejected by the eval runner, rather than an agent lifecycle methodology concept.
