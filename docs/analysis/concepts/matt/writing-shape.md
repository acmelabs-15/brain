---
package: matt
name: writing-shape
slug: writing-shape
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writing-shape

## Definition — verbatim
> "Writing, exploit: shape raw material into an article, paragraph by paragraph." — skills/in-progress/writing-shape/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Listed among skills updated with quoted frontmatter descriptions. |
| skills/in-progress/README.md | 14 | used here | Summarized as taking raw material and shaping it paragraph-by-paragraph into an article. |
| skills/in-progress/writing-shape/SKILL.md | 2 | defined here | Specifies the exploit loop transforming raw fragment piles into grounded, sequential articles. |

## Consumes
A read-only markdown file of raw material or fragments.

## Produces
A separate, structured article written and appended paragraph by paragraph.

## When applied
When raw exploration is complete and the author commits to structuring material into a cohesive piece.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An in-progress writing skill implementing the exploit phase of article authoring. It processes a fixed pile of raw fragments, forces deliberate opening selection, and grows the piece paragraph by paragraph while enforcing rigorous conceptual grounding and defensible formatting choices.
