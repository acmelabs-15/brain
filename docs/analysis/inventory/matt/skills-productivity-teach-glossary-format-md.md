---
package: matt
path: skills/productivity/teach/GLOSSARY-FORMAT.md
type: skill
bytes: 2122
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/GLOSSARY-FORMAT.md, sha256: 9b99859ec28437668130d8f2ce5a342938970f8a1ed4fd38c3eab4f4b5fff210}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/GLOSSARY-FORMAT.md

## Purpose — required, verbatim
> "`GLOSSARY.md` is the canonical language for this teaching workspace. All explainers, exercises, and learning records should adhere to its terminology. Building it is itself part of learning: compressing a concept into a tight definition is evidence the user understands it." — skills/productivity/teach/GLOSSARY-FORMAT.md:3

## Design intent — required
Structural specification and authoring standard for maintaining `GLOSSARY.md` within a teaching workspace. Employs glossary construction as a pedagogical assessment: terms are captured only after the user actively demonstrates mastery, rather than up-front as an introductory dictionary. Mandates opinionated terminology selection with explicit `_Avoid_` aliases to prevent conceptual drift, demands tight 1–2 sentence definitions specifying what a term IS rather than what it does, requires recursive use of defined terms, explicitly resolves field ambiguities, and mandates in-place updates as user understanding matures.

## Phase — required
cross-phase

## Inputs — required
- Demonstrated user understanding and correct usage of domain concepts (skills/productivity/teach/GLOSSARY-FORMAT.md:29).
- Loose, conflicting, or non-standard synonyms to be classified under `_Avoid_` (skills/productivity/teach/GLOSSARY-FORMAT.md:30).

## Outputs — required
- Canonical `GLOSSARY.md` file maintained at the teaching workspace root (skills/productivity/teach/GLOSSARY-FORMAT.md:3, 8-25).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GLOSSARY.md` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — defined here
- `teaching workspace` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — used here
- `Structure` — skills/productivity/teach/GLOSSARY-FORMAT.md:5 — defined here
- `Terms` — skills/productivity/teach/GLOSSARY-FORMAT.md:12 — defined here
- `Hypertrophy` — skills/productivity/teach/GLOSSARY-FORMAT.md:14 — used here
- `Avoid` — skills/productivity/teach/GLOSSARY-FORMAT.md:16 — defined here
- `Progressive overload` — skills/productivity/teach/GLOSSARY-FORMAT.md:18 — used here
- `RPE` — skills/productivity/teach/GLOSSARY-FORMAT.md:22 — used here
- `Rules` — skills/productivity/teach/GLOSSARY-FORMAT.md:27 — defined here

## Structure
- GLOSSARY.md Format — skills/productivity/teach/GLOSSARY-FORMAT.md:1
- Structure — skills/productivity/teach/GLOSSARY-FORMAT.md:5
- Terms — skills/productivity/teach/GLOSSARY-FORMAT.md:12
- Rules — skills/productivity/teach/GLOSSARY-FORMAT.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/productivity/teach/GLOSSARY-FORMAT.md:1 · unreferenced by teach/SKILL.md despite being shipped in the skill directory and glossaries being described as essential references in SKILL.md:134-136 (acknowledged in docs/productivity/teach.md:38 and issue #559).

## Observations
The rule "Add a term only when the user understands it. The glossary is a record of compressed knowledge, not a dictionary the user reads to learn" (line 29) ensures that glossary compilation is an active learning milestone rather than passive documentation.

## Context cost
2122 bytes, 36 lines, approximately 480 tokens.
