---
package: addy
name: accepts the docs/SPEC.md alternate spec location
slug: accepts-the-docs-spec-md-alternate-spec-location
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

# accepts the docs/SPEC.md alternate spec location

## Definition — verbatim
(used, not defined)

> "test('accepts the docs/SPEC.md alternate spec location', () => {" — scripts/validate-artifact-paths-test.js:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths-test.js | 83 | defined here | Test case verifying that the validator permits docs/SPEC.md as an approved alternative spec path. |

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
Test case identifier in `scripts/validate-artifact-paths-test.js` confirming validation support for the secondary `docs/SPEC.md` path, rather than an agent lifecycle methodology concept.
