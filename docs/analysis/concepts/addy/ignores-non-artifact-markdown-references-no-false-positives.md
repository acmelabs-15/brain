---
package: addy
name: ignores non-artifact markdown references (no false positives)
slug: ignores-non-artifact-markdown-references-no-false-positives
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

# ignores non-artifact markdown references (no false positives)

## Definition — verbatim
(used, not defined)

> "test('ignores non-artifact markdown references (no false positives)', () => {" — scripts/validate-artifact-paths-test.js:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths-test.js | 93 | defined here | Test case checking that markdown references to non-artifact files do not trigger validation errors. |

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
Test case identifier in `scripts/validate-artifact-paths-test.js` verifying that general documentation links do not trigger false positive errors, rather than an agent lifecycle methodology concept.
