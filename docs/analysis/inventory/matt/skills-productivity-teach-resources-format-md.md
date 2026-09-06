---
package: matt
path: skills/productivity/teach/RESOURCES-FORMAT.md
type: skill
bytes: 1924
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/RESOURCES-FORMAT.md

## Purpose — required, verbatim
> "`RESOURCES.md` is the curated set of trusted sources for this topic. Knowledge for explainers should be drawn from here, not from parametric guesses. Wisdom comes from the communities listed here." — skills/productivity/teach/RESOURCES-FORMAT.md:3

## Design intent — required
Specifies the schema and curation rules for `RESOURCES.md` in a teaching workspace. Organizes learning sources into two primary categories: Knowledge (foundational texts, articles, primary documentation) and Wisdom (moderated communities, classes, practitioner forums). Prevents hallucinated or unverified instruction by grounding all explainers in verified sources rather than parametric model guesses. Mandates annotations for every entry and explicit documentation of knowledge gaps.

## Phase — required
matt:productivity

## Inputs — required
- Curated high-trust resources (books, articles, primary sources)
- Community links (forums, local groups)
- User community preferences

## Outputs — required
- `RESOURCES.md` file format specification in the workspace

## Invokes — required
- reference SKILL.md — skills/productivity/teach/RESOURCES-FORMAT.md:29

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:16

## Concepts named — required, verbatim
- `RESOURCES.md` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — defined here
- `Knowledge` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — used here
- `explainers` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — used here
- `parametric guesses` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — defined here
- `Wisdom` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — used here
- `Wisdom (Communities)` — skills/productivity/teach/RESOURCES-FORMAT.md:17 — defined here
- `Rules` — skills/productivity/teach/RESOURCES-FORMAT.md:25 — defined here
- `Gaps` — skills/productivity/teach/RESOURCES-FORMAT.md:30 — defined here

## Structure
- `# RESOURCES.md Format` — skills/productivity/teach/RESOURCES-FORMAT.md:1
- `## Structure` — skills/productivity/teach/RESOURCES-FORMAT.md:5
- `## Rules` — skills/productivity/teach/RESOURCES-FORMAT.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The distinction between Knowledge (static information from primary sources) and Wisdom (interactive communities and lived practice) directly implements the core pedagogical philosophy described in `teach/SKILL.md`.

## Context cost
1924 bytes, 33 lines, approximately 410 tokens.
