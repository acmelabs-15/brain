---
package: matt
name: GLOSSARY-FORMAT.md
slug: glossary-format-md
kind: name-only
package_phase: matt:productivity
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

# GLOSSARY-FORMAT.md

## Definition — verbatim
(used, not defined)

> "Two honest notes on that list. A glossary suits most topics, but the skill ships a `GLOSSARY-FORMAT.md` that `SKILL.md` no longer links to, so you will only get one if you ask ([issue #559](https://github.com/mattpocock/skills/issues/559))." — docs/productivity/teach.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 38 | used here | Discussed as an unlinked template asset that requires explicit user requests. |
| external/teach.md | 35 | used here | Noted in external doc FAQ as an unreferenced template file due to issue #559. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift (teach/SKILL.md omits linking to GLOSSARY-FORMAT.md)

## Design notes
`GLOSSARY-FORMAT.md` is a filename referring to a shipped template asset in the teach skill that became disconnected from SKILL.md, documented here as a name-only reference rather than an active lifecycle concept.
