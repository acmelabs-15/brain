---
package: matt
name: interleaving
slug: interleaving
kind: technique
package_phase: matt:Productivity
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

# interleaving

## Definition — verbatim
> "Interleaving (mixing up different but related topics in practice - for skills practice only)" — skills/productivity/teach/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 42 | defined here | Cited as one of three desirable difficulty techniques used to build storage strength. |
| external/teach.md | 37 | used here | Explains that teach builds storage strength through retrieval practice, spacing, and interleaving. |
| skills/productivity/teach/SKILL.md | 45 | defined here | Defines interleaving as mixing up different but related topics in practice for skills practice. |

## Consumes
Multiple related skills or topics within a learning workspace.

## Produces
Varied practice sequences across related topics that enhance storage strength.

## When applied
When designing practice sessions for skill acquisition, specifically for skills practice only (not initial knowledge acquisition).

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: internal-contradiction

## Design notes
A cognitive learning technique used in `teach` to build long-term retention (storage strength) rather than temporary fluency. By alternating among distinct but related topics during practice drills, it forces active discrimination between concepts, preventing rote habituation.
