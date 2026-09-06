---
package: addy
name: reports a description with no trigger clause
slug: reports-a-description-with-no-trigger-clause
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

# reports a description with no trigger clause

## Definition — verbatim
(used, not defined)
> "test('reports a description with no trigger clause', () => {" — scripts/lib/skill-lint-test.js:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint-test.js | 94 | defined here | Test case verifying that skill frontmatter descriptions lacking a trigger clause trigger a validation error. |

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
defects: orphan, other

## Design notes
Unit test assertion in `scripts/lib/skill-lint-test.js` validating the enforcement of trigger clause requirements, not an engineering lifecycle concept.
