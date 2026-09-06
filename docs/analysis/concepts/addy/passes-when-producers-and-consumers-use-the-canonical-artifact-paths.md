---
package: addy
name: passes when producers and consumers use the canonical artifact paths
slug: passes-when-producers-and-consumers-use-the-canonical-artifact-paths
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

# passes when producers and consumers use the canonical artifact paths

## Definition — verbatim
(used, not defined)

> "test('passes when producers and consumers use the canonical artifact paths', () => {" — scripts/validate-artifact-paths-test.js:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths-test.js | 43 | defined here | Test case confirming validation passes when pipeline files reference allowed canonical paths. |

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
Test case identifier in `scripts/validate-artifact-paths-test.js` validating standard canonical artifact paths across pipeline files, rather than an agent lifecycle methodology concept.
