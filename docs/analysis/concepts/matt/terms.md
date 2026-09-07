---
package: matt
name: Terms
slug: terms
kind: name-only
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Terms

## Definition — verbatim
(used, not defined)

> "## Terms" — skills/productivity/teach/GLOSSARY-FORMAT.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/GLOSSARY-FORMAT.md | 12 | defines | Section heading inside the template structure demarcating individual term definitions. |

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
Section heading in GLOSSARY-FORMAT.md demarcating individual term definitions within a teaching glossary, classified as name-only because it is a markdown template heading rather than an agent lifecycle concept.
