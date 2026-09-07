---
package: matt
name: NOTES.md
slug: notes-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NOTES.md

## Definition — verbatim
> "- `NOTES.md`: A scratchpad for you to jot down user preferences, or working notes." — skills/productivity/teach/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 36 | defined here | Holds stated teaching preferences and persistent session notes. |
| external/teach.md | 34 | defined here | Identified as the workspace scratchpad for recording user preferences. |
| skills/in-progress/loop-me/SKILL.md | 32 | defined here | Defines NOTES.md as raw notes on user tooling, channels, and terminology. |
| skills/productivity/teach/SKILL.md | 20 | defined here | Specifies NOTES.md as a scratchpad for preferences and working notes. |

## Consumes
Informal user preferences, pedagogical notes, and raw observations during sessions.

## Produces
A persistent markdown scratchpad consulted across multiple agent turns.

## When applied
Created at workspace setup and continuously updated as user preferences emerge.

## Sub-concepts
none

## Part of
standing-teaching-workspace

## Implementation status
clean

## Design notes
`NOTES.md` provides an unstructured, low-overhead scratchpad within standing workspaces. It captures qualitative preferences, user idiosyncrasies, and working notes that do not fit into formal learning records or mission statements, ensuring personalized continuity across sessions.
