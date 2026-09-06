---
package: addy
name: enforces the configured rank-1 floor
slug: enforces-the-configured-rank-1-floor
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

# enforces the configured rank-1 floor

## Definition — verbatim
(used, not defined)

> "test('enforces the configured rank-1 floor', () => {" — scripts/run-evals-test.js:242

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 242 | defined here | Test case asserting that the eval runner exits non-zero when trigger rank-1 rate drops below the --min-rank1 threshold. |

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
Test case identifier in `scripts/run-evals-test.js` testing CLI enforcement of the minimum trigger rank-1 percentage floor, rather than an agent lifecycle methodology concept.
