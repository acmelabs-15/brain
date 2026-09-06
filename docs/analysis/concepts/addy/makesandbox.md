---
package: addy
name: makeSandbox
slug: makesandbox
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
  - {path: scripts/validate-artifact-paths-test.js, sha256: a4ba0537ce25c4e724a9d6894d0a417d6c19ef8da65cce7ce77a66578fabbcd7}
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# makeSandbox

## Definition — verbatim
(used, not defined)
> "function makeSandbox() {" — scripts/run-evals-test.js:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals-test.js | 53 | defined here | Creates a temporary directory sandbox with necessary test directories, fixtures, and runner copies. |
| scripts/validate-artifact-paths-test.js | 15 | defined here | Initializes an isolated temporary sandbox containing the validate-artifact-paths validator script. |
| scripts/validate-commands-test.js | 15 | defined here | Creates an isolated temporary directory sandbox containing the validate-commands validator script. |

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
Test utility function creating isolated temporary directory sandboxes across test suites, rather than an engineering lifecycle concept.
