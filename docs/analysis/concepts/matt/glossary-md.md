---
package: matt
name: GLOSSARY.md
slug: glossary-md
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GLOSSARY.md

## Definition — verbatim
> "`GLOSSARY.md` is the canonical language for this teaching workspace. All explainers, exercises, and learning records should adhere to its terminology. Building it is itself part of learning: compressing a concept into a tight definition is evidence the user understands it." — skills/productivity/teach/GLOSSARY-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/domain-modeling.md | 49 | used here | Discussed in common questions explaining why domain modeling uses CONTEXT.md rather than GLOSSARY.md. |
| skills/productivity/teach/GLOSSARY-FORMAT.md | 3 | defined here | Canonical teaching artifact defining the workspace vocabulary that all explainers and exercises must follow. |
| skills/productivity/teach/LEARNING-RECORD-FORMAT.md | 41 | used here | Cited in learning record exclusion criteria, instructing agents not to duplicate terse term definitions already in GLOSSARY.md. |

## Consumes
Distilled concepts, terms, and corrected misconceptions acquired during teaching sessions.

## Produces
A standardized glossary of domain terminology ensuring coherent language across all explainers and exercises.

## When applied
Maintained continuously during teaching workflows whenever a new domain concept or term is defined.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift (teach/SKILL.md omits linking to GLOSSARY-FORMAT.md in its workspace file list)

## Design notes
GLOSSARY.md serves as the canonical terminology dictionary within teaching workspaces. Analogous to CONTEXT.md in domain modeling, it establishes a tight, unambiguous vocabulary that prevents terminological confusion across learning exercises and records.
