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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/teach/MISSION-FORMAT.md

## Purpose — required, verbatim
> "`MISSION.md` lives at the workspace root. It captures the _reason_ the user is learning this topic. Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document." — skills/productivity/teach/MISSION-FORMAT.md:3

## Design intent — required
Defines the schema and authoring constraints for `MISSION.md`, the foundational objective document at the root of every `teach` workspace. Demands concrete real-world outcomes ("Why"), specific observable capabilities ("Success looks like"), explicit boundaries ("Constraints"), and declared exclusions ("Out of scope") to protect the user's zone of proximal development and prevent academic topic drift.

## Phase — required
matt:productivity

## Inputs — required
Initial user dialogue interrogating the underlying real-world motivation for learning a topic.

## Outputs — required
`MISSION.md` file format specification and authoring rules.

## Invokes — required
none

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:14

## Concepts named — required, verbatim
- `MISSION.md` — skills/productivity/teach/MISSION-FORMAT.md:1 — defined here
- `Template` — skills/productivity/teach/MISSION-FORMAT.md:5 — defined here
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
Enforces a strict 1:1 relationship between workspaces and learning missions ("One mission per workspace. If the user wants to learn two unrelated things, that is two workspaces"). Warns that if `MISSION.md` runs past a single screen, it ceases to function as a strategic compass and degenerates into an unmaintainable plan.

## Context cost
1540 bytes (~385 tokens). Reference specification document.
