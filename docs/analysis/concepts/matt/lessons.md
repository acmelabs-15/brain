---
package: matt
name: lessons
slug: lessons
kind: artifact
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

# lessons

## Definition — verbatim
> "A lesson is the main thing you produce: the unit in which knowledge and skills reach the user." — skills/productivity/teach/SKILL.md:47-49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 32 | defined here | Lists lessons/*.html as the primary numbered unit of teaching. |
| external/teach.md | 34 | defined here | Details the lessons directory holding incremental, self-contained educational units. |
| skills/productivity/teach/SKILL.md | 47 | defined here | Details pedagogical structure, formatting standards, and brevity constraints for lessons. |

## Consumes
Target goals from MISSION.md, knowledge from RESOURCES.md, and prior records.

## Produces
Sequentially numbered HTML files (`0001-slug.html`) delivering one tangible win.

## When applied
Generated incrementally in each session within the user's zone of proximal development.

## Sub-concepts
html-lessons

## Part of
standing-teaching-workspace

## Implementation status
defects: internal-contradiction (quiz answer positioning flaw; absence of initial assessment)

## Design notes
Lessons are the atomic pedagogical delivery vehicles in `teach`. Designed to be completed in a single sitting and stored as standalone HTML files, each lesson targets a single conceptual win, enforcing strict brevity to remain within the learner's limited working memory.
