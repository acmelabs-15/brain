---
package: matt
name: learning-records
slug: learning-records
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# learning-records

## Definition — verbatim
> "Learning records live in `./learning-records/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 34 | defined here | ADR-style notes on what was learned, used to decide what to teach next. |
| docs/productivity/teach.md | 71 | used here | Highlighted as the sole input used to infer user knowledge level. |
| external/teach.md | 34 | defined here | Lists learning-records directory containing sequential markdown notes. |
| skills/productivity/teach/GLOSSARY-FORMAT.md | 3 | used here | Cross-references learning records within the teaching workspace layout. |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 3 | defined here | Specifies directory structure, naming scheme, and single-paragraph template. |
| skills/productivity/teach/SKILL.md | 17 | used here | Explains using learning records to calculate the zone of proximal development. |

## Consumes
Demonstrated mastery, user feedback, or established prior knowledge from completed lessons.

## Produces
Sequentially numbered markdown files (`0001-slug.md`) recording key learning milestones.

## When applied
Authored at the conclusion of a lesson to capture what was learned and guide future sessions.

## Sub-concepts
none

## Part of
standing-teaching-workspace

## Implementation status
defects: internal-contradiction (lack of initial assessment leaves first session with zero learning records)

## Design notes
Learning records adapt the architectural decision record (ADR) pattern to education. By recording concise, immutable statements of what the learner has mastered and why it matters, future sessions can accurately determine the learner's zone of proximal development without re-evaluating baseline competence.
