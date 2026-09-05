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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/MISSION-FORMAT.md

## Purpose — required, verbatim
> "`MISSION.md` lives at the workspace root. It captures the _reason_ the user is learning this topic. Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document." — skills/productivity/teach/MISSION-FORMAT.md:3

## Design intent — required
Specification and template for `MISSION.md`, the foundational objective document anchored at the teaching workspace root. Serves as the overarching compass aligning curriculum sequencing, resource surfacing, and exercise authoring with the user's tangible, real-world goals rather than theoretical topic exploration. Establishes structural sections for real-world motivation ("Why"), concrete milestones ("Success looks like"), operational bounds ("Constraints"), and explicitly excluded subjects ("Out of scope") to protect the learner's zone of proximal development. Enforces a single mission per workspace, requires upfront interviewing to eliminate ambiguity, and mandates brevity to prevent the compass from degenerating into an unwieldy plan.

## Phase — required
cross-phase

## Inputs — required
- Concrete real-world goals, timeline constraints, learning preferences, and background boundaries elicited from the user (skills/productivity/teach/MISSION-FORMAT.md:10-22).
- Upfront interview clarification responses when user requests are initially vague (skills/productivity/teach/MISSION-FORMAT.md:29).

## Outputs — required
- Standardized `MISSION.md` document residing at the teaching workspace root (skills/productivity/teach/MISSION-FORMAT.md:3, 8-23).

## Invokes — required
none

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:14

## Concepts named — required, verbatim
- `MISSION.md` — skills/productivity/teach/MISSION-FORMAT.md:1 — defined here
- `workspace root` — skills/productivity/teach/MISSION-FORMAT.md:3 — used here
- `Template` — skills/productivity/teach/MISSION-FORMAT.md:5 — defined here
- `Why` — skills/productivity/teach/MISSION-FORMAT.md:10 — defined here
- `Success looks like` — skills/productivity/teach/MISSION-FORMAT.md:13 — defined here
- `Constraints` — skills/productivity/teach/MISSION-FORMAT.md:18 — defined here
- `Out of scope` — skills/productivity/teach/MISSION-FORMAT.md:21 — defined here
- `zone of proximal development` — skills/productivity/teach/MISSION-FORMAT.md:22 — used here
- `Rules` — skills/productivity/teach/MISSION-FORMAT.md:25 — defined here

## Structure
- MISSION.md Format — skills/productivity/teach/MISSION-FORMAT.md:1
- Template — skills/productivity/teach/MISSION-FORMAT.md:5
- Rules — skills/productivity/teach/MISSION-FORMAT.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a strict boundary principle: "One mission per workspace. If the user wants to learn two unrelated things, that is two workspaces" (line 27). The directive "Keep it short. If MISSION.md runs past a screen, it has stopped being a compass and started being a plan" (line 31) preserves high-level alignment without tactical micromanagement.

## Context cost
1540 bytes, 32 lines, approximately 360 tokens.
