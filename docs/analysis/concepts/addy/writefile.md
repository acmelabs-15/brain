---
package: addy
name: writeFile
slug: writefile
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-artifact-paths-test.js, sha256: a4ba0537ce25c4e724a9d6894d0a417d6c19ef8da65cce7ce77a66578fabbcd7}
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writeFile

## Definition — verbatim
(used, not defined)

> "function writeFile(root, relativePath, content) {" — scripts/validate-artifact-paths-test.js:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths-test.js | 24 | defined here | Helper function writing fixture content into temporary sandbox directories. |
| scripts/validate-commands-test.js | 24 | defined here | Helper function writing synthetic commands into test directories. |

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
clean

## Design notes
Test utility helper function in script test suites for writing file contents into temporary test sandboxes, rather than an agent lifecycle methodology concept.
