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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/GLOSSARY-FORMAT.md

## Purpose — required, verbatim
> "`GLOSSARY.md` is the canonical language for this teaching workspace. All explainers, exercises, and learning records should adhere to its terminology. Building it is itself part of learning: compressing a concept into a tight definition is evidence the user understands it." — skills/productivity/teach/GLOSSARY-FORMAT.md:3

## Design intent — required
Defines the schema, authoring rules, and pedagogical philosophy of `GLOSSARY.md` within a teaching workspace. Serves as canonical language for lessons, explainers, exercises, and learning records. Treats glossary authoring as a pedagogical exercise where compressing a concept into a tight definition proves learner understanding. Enforces that terms are added only after the user demonstrates understanding, aliases to avoid are explicitly identified, and definitions state what the term is rather than what it does.

## Phase — required
matt:productivity

## Inputs — required
- User's demonstrated understanding of new concepts
- Identified loose nomenclature or synonyms to be avoided

## Outputs — required
- `GLOSSARY.md` file format specification in the teaching workspace

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GLOSSARY.md` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — defined here
- `teaching workspace` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — used here
- `explainers` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — used here
- `exercises` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — used here
- `learning records` — skills/productivity/teach/GLOSSARY-FORMAT.md:3 — used here
- `Structure` — skills/productivity/teach/GLOSSARY-FORMAT.md:5 — defined here
- `Terms` — skills/productivity/teach/GLOSSARY-FORMAT.md:12 — defined here
- `Hypertrophy` — skills/productivity/teach/GLOSSARY-FORMAT.md:14 — used here
- `Progressive overload` — skills/productivity/teach/GLOSSARY-FORMAT.md:18 — used here
- `RPE (Rate of Perceived Exertion)` — skills/productivity/teach/GLOSSARY-FORMAT.md:22 — used here
- `Rules` — skills/productivity/teach/GLOSSARY-FORMAT.md:27 — defined here

## Structure
- `# GLOSSARY.md Format` — skills/productivity/teach/GLOSSARY-FORMAT.md:1
- `## Structure` — skills/productivity/teach/GLOSSARY-FORMAT.md:5
- `## Rules` — skills/productivity/teach/GLOSSARY-FORMAT.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · skills/productivity/teach/SKILL.md:14-17 · `teach/SKILL.md` links to `MISSION-FORMAT.md`, `RESOURCES-FORMAT.md`, and `LEARNING-RECORD-FORMAT.md` in its Teaching Workspace section, but omits any link to `GLOSSARY-FORMAT.md` despite discussing glossaries in lines 15 and 134, leaving this format document unreferenced.

## Observations
Mirrors the domain-modeling philosophy seen across Matt's engineering skills (e.g. `CONTEXT.md` vocabulary and canonical language), but adapted for teaching and learner comprehension. The "_Avoid_" list enforces terminology discipline.

## Context cost
2122 bytes, 36 lines, approximately 450 tokens.
