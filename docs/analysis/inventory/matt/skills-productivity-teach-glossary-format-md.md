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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/teach/GLOSSARY-FORMAT.md

## Purpose — required, verbatim
> "`GLOSSARY.md` is the canonical language for this teaching workspace. All explainers, exercises, and learning records should adhere to its terminology. Building it is itself part of learning: compressing a concept into a tight definition is evidence the user understands it." — skills/productivity/teach/GLOSSARY-FORMAT.md:3

## Design intent — required
Defines the schema, structure, and compression rules for `GLOSSARY.md` files within a `teach` workspace. Mandates that terms only be added when the user has demonstrated genuine understanding, requires opinionated selection of preferred terms with explicit lists of aliases to avoid, dictates tight 1–2 sentence definitions specifying what a term IS, and enforces recursive usage of defined terms across definitions.

## Phase — required
matt:productivity

## Inputs — required
Validated user comprehension of domain terminology and emerging concept clusters during learning sessions.

## Outputs — required
`GLOSSARY.md` file format specification and schema rules.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GLOSSARY.md` — skills/productivity/teach/GLOSSARY-FORMAT.md:1 — defined here
- `Structure` — skills/productivity/teach/GLOSSARY-FORMAT.md:5 — defined here
- `Terms` — skills/productivity/teach/GLOSSARY-FORMAT.md:12 — defined here
- `Hypertrophy` — skills/productivity/teach/GLOSSARY-FORMAT.md:14 — used here
- `Progressive overload` — skills/productivity/teach/GLOSSARY-FORMAT.md:18 — used here
- `RPE` — skills/productivity/teach/GLOSSARY-FORMAT.md:22 — used here
- `Rate of Perceived Exertion` — skills/productivity/teach/GLOSSARY-FORMAT.md:22 — used here
- `Rules` — skills/productivity/teach/GLOSSARY-FORMAT.md:27 — defined here

## Structure
- `# GLOSSARY.md Format` — skills/productivity/teach/GLOSSARY-FORMAT.md:1
- `## Structure` — skills/productivity/teach/GLOSSARY-FORMAT.md:5
- `## Rules` — skills/productivity/teach/GLOSSARY-FORMAT.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/productivity/teach/GLOSSARY-FORMAT.md:1: Ships format specification inside skill directory but is not linked from `teach/SKILL.md` (documented in `docs/productivity/teach.md:38` as issue #559).

## Observations
Uses strength training domain examples (Hypertrophy, Progressive overload, RPE) to demonstrate how definitions should identify what a term is, alongside an `_Avoid_:` list of colloquial synonyms to enforce lexical precision.

## Context cost
2122 bytes (~530 tokens). Reference specification document.
