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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/teach/RESOURCES-FORMAT.md

## Purpose — required, verbatim
> "`RESOURCES.md` is the curated set of trusted sources for this topic. Knowledge for explainers should be drawn from here, not from parametric guesses. Wisdom comes from the communities listed here." — skills/productivity/teach/RESOURCES-FORMAT.md:3

## Design intent — required
Defines the schema and curation rules for `RESOURCES.md`, the curated bibliography grounding all instruction in a `teach` workspace. Organizes materials into Knowledge (high-trust primary literature, textbooks, peer-reviewed articles) and Wisdom (moderated communities, local practice groups), requiring annotations on usage triggers and explicit tracking of knowledge gaps.

## Phase — required
matt:productivity

## Inputs — required
Vetted external sources, textbooks, articles, and reputable community forums.

## Outputs — required
`RESOURCES.md` file format specification and curation rules.

## Invokes — required
- skill SKILL.md — skills/productivity/teach/RESOURCES-FORMAT.md:29

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:16

## Concepts named — required, verbatim
- `RESOURCES.md` — skills/productivity/teach/RESOURCES-FORMAT.md:1 — defined here
- `Structure` — skills/productivity/teach/RESOURCES-FORMAT.md:5 — defined here
- `Knowledge` — skills/productivity/teach/RESOURCES-FORMAT.md:10 — defined here
- `Wisdom` — skills/productivity/teach/RESOURCES-FORMAT.md:17 — defined here
- `Communities` — skills/productivity/teach/RESOURCES-FORMAT.md:17 — defined here
- `Rules` — skills/productivity/teach/RESOURCES-FORMAT.md:25 — defined here

## Structure
- `# RESOURCES.md Format` — skills/productivity/teach/RESOURCES-FORMAT.md:1
- `## Structure` — skills/productivity/teach/RESOURCES-FORMAT.md:5
- `## Rules` — skills/productivity/teach/RESOURCES-FORMAT.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Rejects bare links ("A bare link is useless in three months"), mandating one-line annotations describing what each source covers and when to consult it. Emphasizes separating static codified knowledge (books, papers) from interactive wisdom (moderated communities).

## Context cost
1924 bytes (~480 tokens). Reference specification document.
