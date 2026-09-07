---
package: matt
name: Knowledge
slug: knowledge
kind: reference
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Knowledge

## Definition — verbatim
> "- **Knowledge**, captured from high-quality, high-trust resources" — skills/productivity/teach/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 31 | defined here | Describes vetted sources in RESOURCES.md categorized into knowledge and wisdom. |
| skills/productivity/teach/RESOURCES-FORMAT.md | 3 | used here | Specifies drawing explainer knowledge from curated resources rather than parametric guesses. |
| skills/productivity/teach/SKILL.md | 26 | defined here | Defines knowledge as factual material captured from high-quality resources. |

## Consumes
High-trust primary literature, technical documentation, and authoritative textbooks.

## Produces
Factual explanations and reference materials presented in introductory lessons.

## When applied
Applied when introducing foundational concepts where cognitive difficulty must be minimized.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
In the epistemology of the `teach` skill, Knowledge represents explicit, verifiable facts and mental models acquired from high-trust external sources. It is carefully distinguished from procedural skill and real-world wisdom, requiring clear presentation without extraneous cognitive friction during initial acquisition.
