---
package: matt
name: mission
slug: mission
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mission

## Definition — verbatim
> "The **mission** (the concrete real-world reason you want this) grounds every lesson; without it the lessons drift abstract and nothing decides what comes next." — docs/productivity/teach.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 44 | defined here | Grounds every lesson in a concrete real-world goal to prevent lessons from drifting abstract. |
| external/teach.md | 38 | defined here | Defines mission as the concrete real-world reason the user wants to learn a topic. |

## Consumes
User goals, motivation, and learning preferences explored through an initial interview.

## Produces
The foundational purpose and scope document recorded in `MISSION.md`.

## When applied
At the start of every teaching workspace before any lessons are authored.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, script-bug, internal-contradiction

## Design notes
The foundational goal-orienting artifact in Matt's `teach` skill. It anchors pedagogical progression in a concrete real-world motivation, ensuring lessons focus on usable skills rather than abstract encyclopedic coverage.
