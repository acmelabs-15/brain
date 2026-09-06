---
package: addy
name: extractSkillReferences
slug: extractskillreferences
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# extractSkillReferences

## Definition — verbatim
(used, not defined)
> "function extractSkillReferences(content) {" — scripts/lib/skill-lint.js:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint.js | 113 | defined here | Extracts explicit cross-skill references from skill text using regex patterns. |

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
Helper function in `scripts/lib/skill-lint.js` scanning skill text for cross-skill invocation references, not an engineering lifecycle concept.
