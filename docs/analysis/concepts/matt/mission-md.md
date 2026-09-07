---
package: matt
name: MISSION.md
slug: mission-md
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MISSION.md

## Definition — verbatim
> "`MISSION.md` lives at the workspace root. It captures the _reason_ the user is learning this topic. Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document." — skills/productivity/teach/MISSION-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 30 | defined here | Defines the root document capturing why the user is learning the topic. |
| external/teach.md | 34 | defined here | Explains that all lessons hang off the real-world purpose recorded in MISSION.md. |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 36 | used here | Explains relating learning records back to the overarching mission. |
| skills/productivity/teach/MISSION-FORMAT.md | 3 | defined here | Provides the specification and template for capturing the core learning goal. |
| skills/productivity/teach/SKILL.md | 14 | used here | Directs authoring MISSION.md to ground all subsequent teaching decisions. |

## Consumes
Initial user interview establishing concrete real-world goals and observable success criteria.

## Produces
A markdown file capturing the why and observable outcomes of the curriculum.

## When applied
Authored during the initial session before any lessons are generated.

## Sub-concepts
none

## Part of
standing-teaching-workspace

## Implementation status
clean

## Design notes
`MISSION.md` provides teleological grounding for the entire teaching workspace. Without a concrete, real-world objective, educational sessions inevitably drift into abstract trivia; grounding every curriculum decision in the user's explicit mission ensures focused and motivating progression.
