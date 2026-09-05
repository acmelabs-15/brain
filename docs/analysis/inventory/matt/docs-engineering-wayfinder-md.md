---
package: matt
path: docs/engineering/wayfinder.md
type: doc
bytes: 15976
unit: inv-matt-7
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/wayfinder.md

## Purpose — required, verbatim
> "`wayfinder` takes an effort too big for one agent [session](https://www.aihero.dev/ai-coding-dictionary/session): an idea whose **destination** you can name but whose route you cannot yet see, and charts it as a shared **map** of **decision tickets** on your issue tracker, then resolves them one at a time until the way is clear." — docs/engineering/wayfinder.md:3

## Design intent — required
Provides an exploration and multi-session planning workflow for complex, foggy initiatives where the destination is known but the route cannot yet be seen. Charts a single index map issue and child decision tickets categorized into four types (`grilling`, `prototype`, `research`, `task`). Enforces a strict "plans, does not do" invariant where every ticket resolves a decision or unblocks a question rather than delivering code slices. Surfaces actionable unblocked tickets as the frontier, shrinking the fog of war until the entire map is resolved and handed off to `/to-spec`. Without it, multi-session initiatives either descend into sprawling waterfall plans that invalidate themselves or tempt agents to write premature implementation code across uncoordinated sessions.

## Phase — required
matt:situational on-ramp

## Inputs — required
- A high-level destination for a foggy, multi-session initiative.
- Configured issue tracker with "Wayfinding operations" documentation via `setup-matt-pocock-skills`.
- Existing repository context (or greenfield project).
- Interactive user answers during HITL grilling and prototyping sessions.

## Outputs — required
- A single map issue on the issue tracker labelled `wayfinder:map` (containing Destination, Decisions so far, Not yet specified fog of war, and Out of scope).
- Child decision tickets labelled `wayfinder:<type>` (`grilling`, `prototype`, `research`, `task`) with explicit blocking edges.
- Resolved decision comments on closed tickets recorded onto the map.
- Handoff to `/to-spec #<map_issue>`.

## Invokes — required
- skill grill-me — docs/engineering/wayfinder.md:15
- skill grill-with-docs — docs/engineering/wayfinder.md:15
- skill to-spec — docs/engineering/wayfinder.md:17
- skill to-tickets — docs/engineering/wayfinder.md:18
- skill implement — docs/engineering/wayfinder.md:18
- skill handoff — docs/engineering/wayfinder.md:19
- skill setup-matt-pocock-skills — docs/engineering/wayfinder.md:25
- skill grilling — docs/engineering/wayfinder.md:48
- skill domain-modeling — docs/engineering/wayfinder.md:48
- skill prototype — docs/engineering/wayfinder.md:49
- skill research — docs/engineering/wayfinder.md:50
- skill ask-matt — docs/engineering/wayfinder.md:103

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:191

## Concepts named — required, verbatim
- `session` — docs/engineering/wayfinder.md:3 — used here
- `destination` — docs/engineering/wayfinder.md:3 — defined here
- `map` — docs/engineering/wayfinder.md:3 — defined here
- `decision tickets` — docs/engineering/wayfinder.md:3 — defined here
- `ticket` — docs/engineering/wayfinder.md:5 — used here
- `agent` — docs/engineering/wayfinder.md:9 — used here
- `Decisions so far` — docs/engineering/wayfinder.md:36 — defined here
- `Not yet specified` — docs/engineering/wayfinder.md:37 — defined here
- `fog of war` — docs/engineering/wayfinder.md:37 — defined here
- `Out of scope` — docs/engineering/wayfinder.md:38 — defined here
- `frontier` — docs/engineering/wayfinder.md:40 — defined here
- `HITL` — docs/engineering/wayfinder.md:44 — defined here
- `AFK` — docs/engineering/wayfinder.md:44 — used here
- `grilling` — docs/engineering/wayfinder.md:44 — used here
- `prototype` — docs/engineering/wayfinder.md:49 — used here
- `research` — docs/engineering/wayfinder.md:50 — used here
- `subagent` — docs/engineering/wayfinder.md:50 — used here
- `task` — docs/engineering/wayfinder.md:51 — defined here
- `spec` — docs/engineering/wayfinder.md:63 — used here
- `context` — docs/engineering/wayfinder.md:75 — used here
- `models` — docs/engineering/wayfinder.md:81 — used here
- `reasoning effort` — docs/engineering/wayfinder.md:81 — used here
- `decision-mapping` — docs/engineering/wayfinder.md:86 — used here
- `situational on-ramp` — docs/engineering/wayfinder.md:101 — defined here

## Structure
- ## What it does — docs/engineering/wayfinder.md:1
- ## When to reach for it — docs/engineering/wayfinder.md:7
- ## Prerequisites — docs/engineering/wayfinder.md:23
- ## The map, the fog, and the frontier — docs/engineering/wayfinder.md:29
- ## The four decision-ticket types — docs/engineering/wayfinder.md:42
- ## Common questions — docs/engineering/wayfinder.md:57
- ## It's working if — docs/engineering/wayfinder.md:89
- ## Where it fits — docs/engineering/wayfinder.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — docs/engineering/wayfinder.md:53 — Agents frequently misinterpret `wayfinder:task` tickets as implementation steps and begin writing product code inside the map.
- other — docs/engineering/wayfinder.md:69 — Agents can override the "plan, don't do" default constraint in map Notes, creating a governance loophole where the agent grants itself execution licence.
- other — docs/engineering/wayfinder.md:72 — Tendency toward upfront over-planning creates fragile dependency chains where later tickets are based on assumptions invalidated by earlier resolutions.
- other — docs/engineering/wayfinder.md:75 — Parallel execution of grilling tickets results in duplicate questions across unshared context sessions; prototype tickets risk agents selecting UI variants autonomously.
- doc-drift — docs/engineering/wayfinder.md:78 — Storing tickets as local markdown in the repository risks accidental persistence of ephemeral planning artifacts.
- other — docs/engineering/wayfinder.md:81 — Grilling questions become excessively verbose across iterations, causing user decision fatigue and obscuring underlying rationales.
- doc-drift — docs/engineering/wayfinder.md:84 — No official mechanism for revising overturned decisions, leading agents to design around bad decisions rather than challenging them.

## Observations
Clarifies the v1.1 renaming from `decision-mapping` to `wayfinder` to unify the vocabulary around navigation metaphors (destination, fog of war, frontier, map). Emphasizes that wayfinder produces decisions, not deliverables; a cleared map must be collapsed into a spec via `to-spec` rather than jumped straight to implementation. Uses four distinct ticket types with explicit HITL vs. AFK execution semantics.

## Context cost
15976 bytes, approximately 3800 tokens.
