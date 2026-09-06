---
package: addy
name: skips guarded files that do not exist
slug: skips-guarded-files-that-do-not-exist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-artifact-paths-test.js, sha256: a4ba0537ce25c4e724a9d6894d0a417d6c19ef8da65cce7ce77a66578fabbcd7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skips guarded files that do not exist

## Definition — verbatim
(used, not defined)

> "test('skips guarded files that do not exist', () => {" — scripts/validate-artifact-paths-test.js:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths-test.js | 107 | defined here | Test case confirming that absent guarded files are gracefully skipped without failing validation. |

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
Test case identifier in `scripts/validate-artifact-paths-test.js` checking that absent files do not trigger validation failure, rather than an agent lifecycle methodology concept.
