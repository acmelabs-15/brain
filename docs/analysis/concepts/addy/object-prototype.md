---
package: addy
name: Object.prototype
slug: object-prototype
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/lib/skill-lint-test.js, sha256: dc3a01270a1b83399e7f21d72f6c457ebf3d878e4e040d2db0622858ddafa7df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Object.prototype

## Definition — verbatim
(used, not defined)
> "test('a directory named after an Object.prototype key is not exempt from section checks', () => {" — scripts/lib/skill-lint-test.js:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint-test.js | 40 | used here | Named in unit test title verifying that prototype properties do not trigger section exemptions |

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
defects: orphan, other (CommonJS require syntax in ES module scope)

## Design notes
Core JavaScript runtime prototype object identifier referenced in security unit tests to prevent prototype pollution rather than an engineering lifecycle concept.
