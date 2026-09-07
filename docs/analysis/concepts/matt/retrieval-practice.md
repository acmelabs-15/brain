---
package: matt
name: retrieval practice
slug: retrieval-practice
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retrieval practice

## Definition — verbatim
> "- Using retrieval practice (recall from memory)" — skills/productivity/teach/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 42 | defined here | Named as a core component of desirable difficulty alongside spacing and interleaving. |
| external/teach.md | 37 | used here | Cited as an active technique for establishing durable storage strength. |
| skills/productivity/teach/SKILL.md | 43 | defined here | Defined as active recall from memory incorporated into lesson design. |

## Consumes
Prior lessons and acquired concepts requiring consolidation.

## Produces
Interactive quizzes, self-tests, and recall prompts embedded in HTML lessons.

## When applied
Integrated into lesson review gates and interactive quiz components.

## Sub-concepts
none

## Part of
desirable-difficulty

## Implementation status
defects: internal-contradiction (quiz answers defaulting to slot A impairs retrieval testing)

## Design notes
Retrieval practice requires learners to actively pull knowledge from memory rather than passively re-reading text. By embedding quizzes and diagnostic drills directly within lessons, the teach skill reinforces memory pathways and confirms understanding before advancing to new material.
