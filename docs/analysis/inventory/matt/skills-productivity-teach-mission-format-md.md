---
package: matt
path: skills/productivity/teach/MISSION-FORMAT.md
type: skill
bytes: 1540
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/MISSION-FORMAT.md

## Purpose — required, verbatim
> "`MISSION.md` lives at the workspace root. It captures the _reason_ the user is learning this topic. Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document." — skills/productivity/teach/MISSION-FORMAT.md:3

## Design intent — required
Specifies the structure and authoring guidelines for `MISSION.md` at the teaching workspace root. Acts as the pedagogical compass grounding all lesson plans, resource selections, and exercise designs in concrete real-world outcomes rather than abstract study. Limits workspaces to one mission each, bounds scope to protect the zone of proximal development, and mandates keeping the document concise (under one screen).

## Phase — required
matt:productivity

## Inputs — required
- User's stated goals, motivations, constraints, and learning preferences

## Outputs — required
- `MISSION.md` file format specification in the workspace

## Invokes — required
none

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:14

## Concepts named — required, verbatim
- `MISSION.md` — skills/productivity/teach/MISSION-FORMAT.md:3 — defined here
- `workspace root` — skills/productivity/teach/MISSION-FORMAT.md:3 — used here
- `teaching decision` — skills/productivity/teach/MISSION-FORMAT.md:3 — defined here
- `Why` — skills/productivity/teach/MISSION-FORMAT.md:10 — defined here
- `Success looks like` — skills/productivity/teach/MISSION-FORMAT.md:13 — defined here
- `Constraints` — skills/productivity/teach/MISSION-FORMAT.md:18 — defined here
- `Out of scope` — skills/productivity/teach/MISSION-FORMAT.md:21 — defined here
- `zone of proximal development` — skills/productivity/teach/MISSION-FORMAT.md:22 — used here
- `Rules` — skills/productivity/teach/MISSION-FORMAT.md:25 — defined here

## Structure
- `# MISSION.md Format` — skills/productivity/teach/MISSION-FORMAT.md:1
- `## Template` — skills/productivity/teach/MISSION-FORMAT.md:5
- `## Rules` — skills/productivity/teach/MISSION-FORMAT.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The rule "Push back on vagueness" requires the agent to actively interview the user before establishing the mission. Defining "Out of scope" is specifically designed to protect the learner's zone of proximal development from topic creep.

## Context cost
1540 bytes, 32 lines, approximately 320 tokens.
