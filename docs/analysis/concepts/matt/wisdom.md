---
package: matt
name: Wisdom
slug: wisdom
kind: reference
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

# Wisdom

## Definition — verbatim
> "- **Wisdom**, which comes from interacting with other learners and practitioners" — skills/productivity/teach/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 31 | defined here | Categorizes community resources in RESOURCES.md dedicated to real-world wisdom. |
| docs/productivity/teach.md | 46 | defined here | Notes that questions requiring real-world judgement get directed to community practitioners. |
| external/teach.md | 39 | defined here | Explains that questions needing wisdom receive pointers to practitioner communities. |
| skills/productivity/teach/RESOURCES-FORMAT.md | 3 | used here | Notes that wisdom comes from the communities listed in RESOURCES.md. |
| skills/productivity/teach/SKILL.md | 28 | defined here | Identifies wisdom as practitioner judgment arising from community interaction. |

## Consumes
Interaction with real-world practitioner communities, peer review, and lived context.

## Produces
Nuanced heuristic judgment and pointers to relevant practitioner forums.

## When applied
When user questions involve contextual trade-offs that cannot be resolved purely by book learning.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
Wisdom in Matt's framework represents contextual, hard-won practitioner judgement that cannot be synthesized from static text. When an educational question requires wisdom, the skill explicitly declines to invent synthetic dogma, instead directing the learner toward practitioner communities.
