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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/RESOURCES-FORMAT.md

## Purpose — required, verbatim
> "`RESOURCES.md` is the curated set of trusted sources for this topic. Knowledge for explainers should be drawn from here, not from parametric guesses. Wisdom comes from the communities listed here." — skills/productivity/teach/RESOURCES-FORMAT.md:3

## Design intent — required
Defines the schema, curation criteria, and governance guidelines for `RESOURCES.md` within a teaching workspace. Establishes an epistemological split between static "Knowledge" (foundational books, peer-reviewed literature, evidence-based articles used to ground lessons and eliminate model hallucinations) and human "Wisdom" (moderated communities, local practice groups, peer feedback forums where skills are applied). Mandates annotation for every cited source explaining its relevance and trigger condition, requires surfacing missing coverage via a dedicated `## Gaps` section, and insists on ruthless pruning of low-signal or off-mission links.

## Phase — required
cross-phase

## Inputs — required
- Verified primary literature, textbooks, and evidence-based publications (skills/productivity/teach/RESOURCES-FORMAT.md:12-15, 27).
- Vetted practitioner communities and moderated discussion groups (skills/productivity/teach/RESOURCES-FORMAT.md:19-22, 27).
- Recorded user community participation preferences (skills/productivity/teach/RESOURCES-FORMAT.md:32).

## Outputs — required
- Curated `RESOURCES.md` document maintained at the teaching workspace root (skills/productivity/teach/RESOURCES-FORMAT.md:3, 8-23).

## Invokes — required
- skill SKILL.md — skills/productivity/teach/RESOURCES-FORMAT.md:29

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:16

## Concepts named — required, verbatim
- `RESOURCES.md` — skills/productivity/teach/RESOURCES-FORMAT.md:1 — defined here
- `parametric guesses` — skills/productivity/teach/RESOURCES-FORMAT.md:3 — used here
- `Structure` — skills/productivity/teach/RESOURCES-FORMAT.md:5 — defined here
- `Knowledge` — skills/productivity/teach/RESOURCES-FORMAT.md:10 — defined here
- `Wisdom` — skills/productivity/teach/RESOURCES-FORMAT.md:17 — defined here
- `Communities` — skills/productivity/teach/RESOURCES-FORMAT.md:17 — defined here
- `Rules` — skills/productivity/teach/RESOURCES-FORMAT.md:25 — defined here
- `Gaps` — skills/productivity/teach/RESOURCES-FORMAT.md:30 — defined here

## Structure
- RESOURCES.md Format — skills/productivity/teach/RESOURCES-FORMAT.md:1
- Structure — skills/productivity/teach/RESOURCES-FORMAT.md:5
- Rules — skills/productivity/teach/RESOURCES-FORMAT.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly prohibits ungrounded model output: "Knowledge for explainers should be drawn from here, not from parametric guesses" (line 3). The instruction to annotate every link ("A bare link is useless in three months", line 28) prevents link hoarding.

## Context cost
1924 bytes, 33 lines, approximately 440 tokens.
