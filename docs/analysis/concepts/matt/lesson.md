---
package: matt
name: lesson
slug: lesson
kind: artifact
package_phase: matt:Productivity
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

# lesson

## Definition — verbatim
> "A **lesson** is one self-contained HTML file, short enough to finish in a sitting, tied to the mission, giving one tangible win." — docs/productivity/teach.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 50 | defined here | Defines a lesson as a self-contained HTML file providing one tangible win tied to the mission. |
| external/teach.md | 41 | defined here | Defines lesson structure, brevity, mission alignment, source citations, and links to sibling lessons. |
| skills/productivity/teach/SKILL.md | 18 | defined here | Establishes lessons in `./lessons/*.html` as the primary unit of teaching in the workspace. |

## Consumes
`MISSION.md`, `RESOURCES.md`, prior `learning-records/`, and shared `assets/` components.

## Produces
A self-contained HTML file (`./lessons/NNNN-slug.html`) with embedded interactive components and exercises.

## When applied
Sequentially authored and drilled one sitting at a time within a teaching workspace.

## Sub-concepts
components

## Part of
teach

## Implementation status
defects: script-bug, internal-contradiction

## Design notes
The primary instructional delivery unit in Matt's `teach` skill. Unlike typical markdown summaries, lessons are rendered as standalone, styled HTML files containing interactive widgets (quizzes, simulations) that deliver a single tangible learning win per sitting.
