---
package: matt
name: spacing
slug: spacing
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

# spacing

## Definition — verbatim
> "- Spacing (distributing practice over time)" — skills/productivity/teach/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 42 | defined here | Named as a pillar of desirable difficulty for long-term retention. |
| external/teach.md | 37 | used here | Cited in external documentation on building storage strength over time. |
| skills/productivity/teach/SKILL.md | 44 | defined here | Defined as distributing practice across time intervals in curriculum design. |

## Consumes
Historical learning records and multi-session teaching workspace interactions.

## Produces
Re-introduction of prior topics across subsequent sessions to counter the forgetting curve.

## When applied
When scheduling review items and drafting follow-up lessons across days or weeks.

## Sub-concepts
none

## Part of
desirable-difficulty

## Implementation status
defects: internal-contradiction (spacing lacks automated scheduling or calendar integration)

## Design notes
Spacing distributes practice intervals over time rather than massing instruction into a single marathon session. In the teach skill, spacing leverages the multi-session nature of the standing workspace to re-test previously learned concepts after intervals of decay, transforming transient familiarity into permanent capability.
