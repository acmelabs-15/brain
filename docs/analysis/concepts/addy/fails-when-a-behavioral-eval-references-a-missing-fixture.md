---
package: addy
name: fails when a behavioral eval references a missing fixture
slug: fails-when-a-behavioral-eval-references-a-missing-fixture
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

# fails when a behavioral eval references a missing fixture

## Definition — verbatim
(used, not defined)

> "test('fails when a behavioral eval references a missing fixture', () => {" — scripts/run-evals-test.js:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 151 | defined here | Test case verifying that the eval runner rejects behavioral evaluations referencing non-existent fixture files. |

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
Test case identifier in `scripts/run-evals-test.js` verifying that the evaluation runner validates fixture paths and reports missing fixtures, rather than an agent lifecycle methodology concept.
