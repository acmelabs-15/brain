---
package: matt
name: MISSION-FORMAT.md
slug: mission-format-md
kind: name-only
package_phase: none
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

# MISSION-FORMAT.md

## Definition — verbatim
(used, not defined)

> "- `MISSION.md`: A document capturing the _reason_ the user is interested in the topic. This should be used to ground all teaching. Use the format in [MISSION-FORMAT.md](./MISSION-FORMAT.md)." — skills/productivity/teach/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 59 | used here | Cited in FAQ discussing relative path ambiguity issues when resolving skill format templates. |
| external/teach.md | 46 | used here | Explains relative path resolution bugs between installed skill format templates and user workspace files. |
| skills/productivity/teach/SKILL.md | 14 | used here | Directs the agent to use the template structure specified in MISSION-FORMAT.md when creating MISSION.md. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug

## Design notes
This name designates a template file providing structural formatting rules for `MISSION.md` in the `teach` skill rather than an operational lifecycle concept.
