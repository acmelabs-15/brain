---
package: matt
name: Rules
slug: rules
kind: name-only
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rules

## Definition — verbatim
(used, not defined)

> "## Rules" — skills/productivity/teach/GLOSSARY-FORMAT.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/GLOSSARY-FORMAT.md | 27 | defines | Section heading introducing authoring and compression constraints for workspace glossaries. |
| skills/productivity/teach/MISSION-FORMAT.md | 25 | defines | Section heading introducing constraints and scope rules for the teaching mission document. |
| skills/productivity/teach/RESOURCES-FORMAT.md | 25 | defines | Section heading introducing curation, annotation, and grouping rules for trusted learning resources. |

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
defects: doc-drift (teach/SKILL.md omits link to GLOSSARY-FORMAT.md)

## Design notes
Section heading appearing across GLOSSARY-FORMAT.md, MISSION-FORMAT.md, and RESOURCES-FORMAT.md to group authoring guidelines and pedagogical constraints, classified as name-only because it is a document formatting heading rather than an agent lifecycle concept.
