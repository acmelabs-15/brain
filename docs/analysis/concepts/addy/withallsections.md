---
package: addy
name: withAllSections
slug: withallsections
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

# withAllSections

## Definition — verbatim
(used, not defined)
> "function withAllSections(frontmatter) {" — scripts/lib/skill-lint-test.js:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint-test.js | 13 | defined here | Test helper function appending all required SKILL.md sections to frontmatter fixtures |

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
Internal JavaScript test fixture function constructing synthetic SKILL.md documents with standard sections for frontmatter lint testing rather than an engineering lifecycle concept.
