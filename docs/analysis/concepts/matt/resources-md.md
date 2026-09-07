---
package: matt
name: RESOURCES.md
slug: resources-md
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RESOURCES.md

## Definition — verbatim
> "`RESOURCES.md` is the curated set of trusted sources for this topic. Knowledge for explainers should be drawn from here, not from parametric guesses. Wisdom comes from the communities listed here." — skills/productivity/teach/RESOURCES-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 5 | defined here | Identifies the workspace file recording verified external sources cited in lessons. |
| external/teach.md | 26 | defined here | Describes vetting high-trust sources into RESOURCES.md prior to instruction. |
| skills/productivity/teach/RESOURCES-FORMAT.md | 3 | defined here | Formally defines the markdown format for curated knowledge and wisdom links. |
| skills/productivity/teach/SKILL.md | 16 | used here | Specifies maintaining trusted sources split into knowledge and wisdom. |

## Consumes
External search results, authoritative documentation, books, and practitioner communities.

## Produces
A persistent bibliography file dividing references into Knowledge and Wisdom.

## When applied
Populated before authoring lessons to ensure every lesson draws from verified materials.

## Sub-concepts
knowledge, wisdom

## Part of
standing-teaching-workspace

## Implementation status
clean

## Design notes
`RESOURCES.md` acts as the empirical bedrock of a teaching workspace. By forcing the agent to discover, curate, and record trusted books, articles, and community hubs before writing lessons, the workspace guarantees that all pedagogy is grounded in verified external authority rather than statistical hallucination.
