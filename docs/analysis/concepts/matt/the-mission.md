---
package: matt
name: The Mission
slug: the-mission
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Mission

## Definition — verbatim
> "Every lesson should be tied into the mission - the reason that the user is interested in learning about the topic." — skills/productivity/teach/SKILL.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 71 | defined here | Section heading introducing the mission as the anchoring goal for all lessons and workspace activities. |

## Consumes
User's learning request and real-world motivation for studying a topic.

## Produces
`MISSION.md` document defining objectives, constraints, and success criteria for the teaching workspace.

## When applied
At workspace initialization and whenever evaluating or designing subsequent lessons.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other

## Design notes
The Mission acts as the primary anchor for the pedagogical workspace, preventing learning activities from drifting into abstract or irrelevant theory. It establishes real-world goals against which lesson relevance, zone of proximal development, and curriculum progression are judged.
