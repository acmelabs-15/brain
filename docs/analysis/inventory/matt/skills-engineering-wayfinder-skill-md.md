---
package: matt
path: skills/engineering/wayfinder/SKILL.md
type: skill
bytes: 11908
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/wayfinder/SKILL.md

## Purpose — required, verbatim
> "Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear." — skills/engineering/wayfinder/SKILL.md:3

## Design intent — required
Multi-session planning framework designed for initiatives too large for a single agent context window (~100K tokens). Rather than pre-planning detailed execution steps or charging at the destination, wayfinding models the initiative as an issue tracker map (labelled `wayfinder:map`) holding child decision tickets (`wayfinder:<type>`). Strictly enforces "plan, don't do", resolving questions one per session, maintaining an active frontier of unblocked tickets, and graduating the undiscovered "fog of war" incrementally into tickets or ruling items out of scope.

## Phase — required
none

## Inputs — required
- User's loose idea for a large effort (skills/engineering/wayfinder/SKILL.md:7, 109).
- Issue tracker configured with "Wayfinding operations" documentation or local-markdown fallback (skills/engineering/wayfinder/SKILL.md:25).
- Issue tracker child issues and tickets (skills/engineering/wayfinder/SKILL.md:21, 57).
- Live human interaction during HITL tickets (skills/engineering/wayfinder/SKILL.md:75).

## Outputs — required
- Single map issue on repo issue tracker labelled `wayfinder:map` (skills/engineering/wayfinder/SKILL.md:21, 113).
- Child tickets labelled `wayfinder:<type>` with tracker-native dependency blocking (skills/engineering/wayfinder/SKILL.md:65, 69, 114).
- Resolution comments on closed tickets (skills/engineering/wayfinder/SKILL.md:125).
- Context pointers appended to the map's Decisions-so-far index (skills/engineering/wayfinder/SKILL.md:125).
- Throwaway `research/<name>` branches capturing research subagent findings (skills/engineering/wayfinder/SKILL.md:115).

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/wayfinder/SKILL.md:25
- skill research — skills/engineering/wayfinder/SKILL.md:77
- skill prototype — skills/engineering/wayfinder/SKILL.md:78
- skill grilling — skills/engineering/wayfinder/SKILL.md:79
- skill domain-modeling — skills/engineering/wayfinder/SKILL.md:79

## Invoked by — required
- doc README.md — README.md:202
- doc skills/engineering/README.md — skills/engineering/README.md:17
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:44
- doc docs/engineering/wayfinder.md — docs/engineering/wayfinder.md:3
- doc CHANGELOG.md — CHANGELOG.md:191

## Concepts named — required, verbatim
- `wayfinder` — skills/engineering/wayfinder/SKILL.md:2 — defined here
- `decision tickets` — skills/engineering/wayfinder/SKILL.md:3 — defined here
- `destination` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `shared map` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `planning` — skills/engineering/wayfinder/SKILL.md:13 — defined here
- `name` — skills/engineering/wayfinder/SKILL.md:17 — defined here
- `The Map` — skills/engineering/wayfinder/SKILL.md:19 — defined here
- `wayfinder:map` — skills/engineering/wayfinder/SKILL.md:21 — defined here
- `index` — skills/engineering/wayfinder/SKILL.md:23 — defined here
- `child issue` — skills/engineering/wayfinder/SKILL.md:57 — defined here
- `wayfinder:<type>` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `research` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `prototype` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `grilling` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `task` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `claims` — skills/engineering/wayfinder/SKILL.md:67 — defined here
- `native` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `unblocked` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `frontier` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `HITL` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `AFK` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `fog of war` — skills/engineering/wayfinder/SKILL.md:84 — defined here
- `Not yet specified` — skills/engineering/wayfinder/SKILL.md:86 — defined here
- `Out of scope` — skills/engineering/wayfinder/SKILL.md:97 — defined here
- `Chart the map` — skills/engineering/wayfinder/SKILL.md:107 — defined here
- `Work through the map` — skills/engineering/wayfinder/SKILL.md:118 — defined here
- `resolution comment` — skills/engineering/wayfinder/SKILL.md:125 — defined here
- `context pointer` — skills/engineering/wayfinder/SKILL.md:125 — defined here

## Structure
- Plan, don't do — skills/engineering/wayfinder/SKILL.md:11
- Refer by name — skills/engineering/wayfinder/SKILL.md:15
- The Map — skills/engineering/wayfinder/SKILL.md:19
- The map body — skills/engineering/wayfinder/SKILL.md:27
- Tickets — skills/engineering/wayfinder/SKILL.md:55
- Ticket Types — skills/engineering/wayfinder/SKILL.md:73
- Fog of war — skills/engineering/wayfinder/SKILL.md:82
- Out of scope — skills/engineering/wayfinder/SKILL.md:95
- Invocation — skills/engineering/wayfinder/SKILL.md:103
- Chart the map — skills/engineering/wayfinder/SKILL.md:107
- Work through the map — skills/engineering/wayfinder/SKILL.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Limits ticket size to ~100K token agent sessions and caps resolution to one ticket per session (except parallel AFK research tickets), preventing context explosion and model fatigue during large, foggy undertakings. Leverages tracker-native blocking to render frontier visibility directly in tracker UI.

## Context cost
11908 bytes, 129 lines, ~2600 tokens. Invokes tracker docs and external skills (`setup-matt-pocock-skills`, `research`, `prototype`, `grilling`, `domain-modeling`).
