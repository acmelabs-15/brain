---
package: addy
name: node:test
slug: node-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.test.js, sha256: 988ac8424130965fc6384b258d7e40a6be7751df9fa5c896d069395442c8534d}
  - {path: evals/fixtures/test-driven-development/package.json, sha256: 46e0250dba3325f1abb7eeb24f4ce0df0529a8cea7646f73f3ba25f3695b86db}
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# node:test

## Definition — verbatim
(used, not defined)
> "const test = require('node:test');" — evals/fixtures/security-and-hardening/webhook.test.js:4

## Also called — verbatim
`node --test` — evals/fixtures/test-driven-development/package.json:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/security-and-hardening/webhook.test.js | 4 | references | Imported as the native test runner module in evaluation test fixture |
| evals/fixtures/test-driven-development/package.json | 7 | references | Invoked via npm test script specifying node --test |
| evals/fixtures/test-driven-development/test/split.test.js | 4 | references | Imported as the native test runner module in split unit test fixture |

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
defects: script-bug (evals/fixtures/security-and-hardening/webhook.test.js uses CommonJS require() which throws ReferenceError under node --test in ESM scope; clean in evals/fixtures/test-driven-development/package.json and test/split.test.js)

## Design notes
Node.js built-in test runner module and CLI command used to execute test suites in evaluation fixtures; it is an external runtime library identifier rather than a development lifecycle concept.
