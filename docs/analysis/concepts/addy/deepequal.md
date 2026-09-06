---
package: addy
name: deepEqual
slug: deepequal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/code-simplification/config-parser.test.js, sha256: 3ea15c84061c001ab4c0c366ad60efeac07b32a80deb9bf608d9a68b8a4df8c4}
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.test.js, sha256: d6a38c2c616961536b53fbebc3c7d9d46ad4311d382b3123a2700277f9bbc1ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deepEqual

## Definition — verbatim
(used, not defined)
> "assert.deepEqual(parseConfig([" — evals/fixtures/code-simplification/config-parser.test.js:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/code-simplification/config-parser.test.js | 8 | references | Invokes Node.js assert.deepEqual to verify parsed configuration object structure. |
| evals/fixtures/debugging-and-error-recovery/pagination.test.js | 8 | references | Invokes Node.js assert.deepEqual to assert equality of sliced pagination array results. |

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
Assertion method identifier from the Node.js standard library assert module, not a lifecycle methodology concept.
