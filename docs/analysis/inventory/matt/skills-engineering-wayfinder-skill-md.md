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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/wayfinder/SKILL.md

## Purpose — required, verbatim
> "Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear." — skills/engineering/wayfinder/SKILL.md:3

## Design intent — required
Provides an exploration and multi-session planning workflow for complex, foggy initiatives where the destination is known or named but the route cannot yet be seen. Establishes a single index map issue (`wayfinder:map`) on the repo's issue tracker and generates child decision tickets categorized into four types (`research`, `prototype`, `grilling`, `task`). Enforces a strict "plans, does not do" invariant where every ticket resolves a decision or unblocks a question rather than delivering code slices. Progressively clears the fog of war by working unblocked frontier tickets one per session, graduating clarified fog into new tickets until the destination is reached and handoff occurs.

## Phase — required
matt:engineering

## Inputs — required
- A loose idea or multi-session initiative whose destination is known or needs naming (`skills/engineering/wayfinder/SKILL.md:7`).
- Repo issue tracker configuration and "Wayfinding operations" documentation (`skills/engineering/wayfinder/SKILL.md:25`).
- User input during interactive grilling, domain-modeling, and prototype sessions (`skills/engineering/wayfinder/SKILL.md:75-80`).

## Outputs — required
- A canonical tracker issue labelled `wayfinder:map` containing Destination, Notes, Decisions so far, Not yet specified, and Out of scope (`skills/engineering/wayfinder/SKILL.md:21, 31-53`).
- Child decision tickets with `wayfinder:<type>` labels (`research`, `prototype`, `grilling`, `task`) and native blocking dependencies (`skills/engineering/wayfinder/SKILL.md:65, 69`).
- Resolution comments posted to closed tickets and context pointers linked on the map (`skills/engineering/wayfinder/SKILL.md:125`).

## Invokes — required
- skill /setup-matt-pocock-skills — skills/engineering/wayfinder/SKILL.md:25
- skill research — skills/engineering/wayfinder/SKILL.md:77
- skill prototype — skills/engineering/wayfinder/SKILL.md:78
- skill grilling — skills/engineering/wayfinder/SKILL.md:79
- skill domain-modeling — skills/engineering/wayfinder/SKILL.md:79

## Invoked by — required
- doc README.md — README.md:202
- doc skills/engineering/README.md — skills/engineering/README.md:17
- doc docs/engineering/wayfinder.md — docs/engineering/wayfinder.md:3

## Concepts named — required, verbatim
- `destination` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `shared map` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `decision tickets` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `Notes` — skills/engineering/wayfinder/SKILL.md:13 — defined here
- `name` — skills/engineering/wayfinder/SKILL.md:17 — defined here
- `wayfinder:map` — skills/engineering/wayfinder/SKILL.md:21 — defined here
- `index` — skills/engineering/wayfinder/SKILL.md:23 — defined here
- `Destination` — skills/engineering/wayfinder/SKILL.md:32 — defined here
- `Decisions so far` — skills/engineering/wayfinder/SKILL.md:40 — defined here
- `Not yet specified` — skills/engineering/wayfinder/SKILL.md:46 — defined here
- `Out of scope` — skills/engineering/wayfinder/SKILL.md:50 — defined here
- `child issue` — skills/engineering/wayfinder/SKILL.md:57 — defined here
- `Question` — skills/engineering/wayfinder/SKILL.md:60 — defined here
- `wayfinder:<type>` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `research` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `prototype` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `grilling` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `task` — skills/engineering/wayfinder/SKILL.md:65 — defined here
- `claims` — skills/engineering/wayfinder/SKILL.md:67 — defined here
- `assignee` — skills/engineering/wayfinder/SKILL.md:67 — defined here
- `native` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `unblocked` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `frontier` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `HITL` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `AFK` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `Research` — skills/engineering/wayfinder/SKILL.md:77 — defined here
- `Prototype` — skills/engineering/wayfinder/SKILL.md:78 — defined here
- `Grilling` — skills/engineering/wayfinder/SKILL.md:79 — defined here
- `Task` — skills/engineering/wayfinder/SKILL.md:80 — defined here
- `fog of war` — skills/engineering/wayfinder/SKILL.md:84 — defined here
- `Chart the map` — skills/engineering/wayfinder/SKILL.md:107 — defined here
- `Work through the map` — skills/engineering/wayfinder/SKILL.md:118 — defined here
- `resolution comment` — skills/engineering/wayfinder/SKILL.md:125 — defined here
- `context pointer` — skills/engineering/wayfinder/SKILL.md:125 — defined here

## Structure
- ## Plan, don't do — skills/engineering/wayfinder/SKILL.md:11
- ## Refer by name — skills/engineering/wayfinder/SKILL.md:15
- ## The Map — skills/engineering/wayfinder/SKILL.md:19
- ### The map body — skills/engineering/wayfinder/SKILL.md:27
- ### Tickets — skills/engineering/wayfinder/SKILL.md:55
- ## Ticket Types — skills/engineering/wayfinder/SKILL.md:73
- ## Fog of war — skills/engineering/wayfinder/SKILL.md:82
- ## Out of scope — skills/engineering/wayfinder/SKILL.md:95
- ## Invocation — skills/engineering/wayfinder/SKILL.md:103
- ### Chart the map — skills/engineering/wayfinder/SKILL.md:107
- ### Work through the map — skills/engineering/wayfinder/SKILL.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — skills/engineering/wayfinder/SKILL.md:13 — Notes override permits agents to self-authorize execution inside the map, creating an escape hatch that bypasses the "plan, don't do" constraint.

## Observations
Wayfinder strictly manages context window costs by loading the map at low resolution and zooming into ticket details only on demand. It enforces resolving at most one ticket per agent session (with parallel AFK research subagents as the only exception).

## Context cost
11908 bytes, 129 lines, ~1800 tokens. Dynamically invokes `research`, `prototype`, `grilling`, and `domain-modeling`.
