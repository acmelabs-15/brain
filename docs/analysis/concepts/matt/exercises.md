---
package: matt
name: exercises/
slug: exercises
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# exercises/

## Definition — verbatim
> "- **Sections**: `XX-section-name/` inside `exercises/` (e.g., `01-retrieval-skill-building`)" — skills/misc/scaffold-exercises/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 12 | defined here | Designates the base root directory within which course sections and exercises are housed. |
| skills/productivity/teach/GLOSSARY-FORMAT.md | 3 | used here | Refers to interactive course exercises that must adhere to glossary terminology. |

## Consumes
Course curriculum outline and section specifications.

## Produces
Standardized filesystem hierarchy containing all course learning materials and exercises.

## When applied
When organizing, scaffolding, or validating teaching course repositories.

## Sub-concepts
sections, exercise-variants

## Part of
scaffold-exercises

## Implementation status
defects: doc-drift (teach/SKILL.md omits link to GLOSSARY-FORMAT.md)

## Design notes
The dedicated root directory holding educational course exercises and sections. It anchors automated scaffolding, linting, and student learning workflows across educational repositories.
