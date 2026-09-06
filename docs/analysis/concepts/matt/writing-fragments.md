---
package: matt
name: writing-fragments
slug: writing-fragments
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writing-fragments

## Definition — verbatim
> "Writing, explore: mine raw fragments, no structure yet." — skills/in-progress/writing-fragments/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Cited as one of six skills receiving quoted YAML frontmatter descriptions. |
| skills/in-progress/README.md | 13 | used here | Described as a grilling session mining raw heterogeneous writing fragments for future articles. |
| skills/in-progress/writing-fragments/SKILL.md | 2 | defined here | Defines the conversational explore loop collecting unstructured writing fragments into a single file. |

## Consumes
Unstructured thoughts, ideas, and initial prompts from the author.

## Produces
A markdown document containing raw, unorganized writing fragments under a single working title.

## When applied
During early writing exploration when widening the space of ideas without committing to outline or structure.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An in-progress writing skill implementing pure exploratory ideation. By interviewing the author relentlessly and appending ideas to a raw fragments document while forbidding outline generation, it prevents premature structural commitments and preserves rich creative material.
