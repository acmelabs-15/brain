---
package: addy
name: database unavailable
slug: database-unavailable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/server.js, sha256: 0b35e5dbb0226bb26d69bd7a71c3c1575b1182f2c071e10e46c863533e1be1f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# database unavailable

## Definition — verbatim
(used, not defined)
> "res.end('<h1>database unavailable</h1>');" — evals/fixtures/browser-testing-with-devtools/server.js:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/browser-testing-with-devtools/server.js | 10 | produces | Returned as mock error response payload simulating a 500 database failure. |

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
defects: doc-drift

## Design notes
database unavailable is a mock error message string returned by a test fixture HTTP server rather than a development lifecycle concept.
