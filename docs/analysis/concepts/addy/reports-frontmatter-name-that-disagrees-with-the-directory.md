---
package: addy
name: reports frontmatter name that disagrees with the directory
slug: reports-frontmatter-name-that-disagrees-with-the-directory
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

# reports frontmatter name that disagrees with the directory

## Definition — verbatim
(used, not defined)
> "test('reports frontmatter name that disagrees with the directory', () => {" — scripts/lib/skill-lint-test.js:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint-test.js | 103 | defined here | Test case verifying that a mismatch between frontmatter name and directory name produces a validation error. |

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
Unit test case in `scripts/lib/skill-lint-test.js` checking name and directory correspondence validation, rather than an engineering lifecycle concept.
