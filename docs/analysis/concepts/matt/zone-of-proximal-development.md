---
package: matt
name: zone of proximal development
slug: zone-of-proximal-development
kind: technique
package_phase: matt:Productivity
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

# zone of proximal development

## Definition — verbatim
> "From the mission and the learning records, `teach` picks the next lesson inside your **zone of proximal development**: challenging enough to take effort, not so far ahead that it stops being learnable." — docs/productivity/teach.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 44 | defined here | Explains that teach selects lessons challenging enough to take effort but not so far ahead as to be unlearnable. |
| external/teach.md | 38 | defined here | Explains selection of next lesson within the learner's zone of proximal development based on mission and learning records. |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 5 | defined here | States that learning records are used to calculate the learner's zone of proximal development. |
| skills/productivity/teach/MISSION-FORMAT.md | 22 | used here | Explains that the Out of scope section protects the zone of proximal development from adjacent topic drift. |
| skills/productivity/teach/SKILL.md | 17 | defined here | Notes that learning records should be used to calculate the zone of proximal development. |
| skills/productivity/teach/SKILL.md | 81 | defined here | Section heading establishing rules for ensuring each lesson challenges the user just enough. |

## Consumes
The `MISSION.md` goal and accumulated `learning-records/*.md`.

## Produces
Calibrated lesson boundaries that challenge the learner without exceeding working memory capacity.

## When applied
During lesson planning in `teach` to calibrate the difficulty and scope of the next lesson.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: other, internal-contradiction

## Design notes
Vygotskian pedagogical principle adapted for AI instruction in `teach`. It balances challenge against current mastery, selecting lessons that require deliberate effort without exceeding working memory or jumping into ungrounded prerequisites.
