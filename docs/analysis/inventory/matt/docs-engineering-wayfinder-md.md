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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/wayfinder.md

## Purpose — required, verbatim
> "`wayfinder` takes an effort too big for one agent [session](https://www.aihero.dev/ai-coding-dictionary/session): an idea whose **destination** you can name but whose route you cannot yet see, and charts it as a shared **map** of **decision tickets** on your issue tracker, then resolves them one at a time until the way is clear." — docs/engineering/wayfinder.md:3

## Design intent — required
Provides multi-session architectural exploration and planning for foggy, complex efforts larger than a single context window. Maintains a shared, low-resolution index issue (the map) with four sections (destination, decisions so far, fog of war, and out of scope) and models blocking dependencies across child decision tickets. Strictly separates planning from execution: every ticket resolves a question rather than delivering code slices. Employs four distinct decision ticket types (`grilling`, `prototype`, `research`, `task`), burning down research tickets in parallel via background subagents while working grilling and prototyping tickets interactively. Hands off cleared maps to `to-spec` rather than proceeding directly into implementation.

## Phase — required
matt:engineering

## Inputs — required
A bounded destination for an effort too large for one session, existing codebase architecture, issue tracker configuration from `setup-matt-pocock-skills`, or an ongoing chat session handed off via `/handoff`.

## Outputs — required
A single tracked map issue labelled `wayfinder:map`, typed child decision tickets (`wayfinder:<type>`) with native blocking edges, resolution comments on closed tickets, linked prototype/research branch assets, and handoff to `/to-spec #<map_issue>`.

## Invokes — required
- doc grill-me — docs/engineering/wayfinder.md:15
- doc grill-with-docs — docs/engineering/wayfinder.md:15
- doc to-spec — docs/engineering/wayfinder.md:17
- doc to-tickets — docs/engineering/wayfinder.md:18
- doc implement — docs/engineering/wayfinder.md:18
- doc handoff — docs/engineering/wayfinder.md:19
- doc setup-matt-pocock-skills — docs/engineering/wayfinder.md:25
- doc grilling — docs/engineering/wayfinder.md:48
- doc domain-modeling — docs/engineering/wayfinder.md:48
- doc prototype — docs/engineering/wayfinder.md:49
- doc research — docs/engineering/wayfinder.md:50
- doc ask-matt — docs/engineering/wayfinder.md:103

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:191

## Concepts named — required, verbatim
- `wayfinder` — docs/engineering/wayfinder.md:3 — defined here
- `session` — docs/engineering/wayfinder.md:3 — used here
- `destination` — docs/engineering/wayfinder.md:3 — defined here
- `map` — docs/engineering/wayfinder.md:3 — defined here
- `decision tickets` — docs/engineering/wayfinder.md:3 — defined here
- `ticket` — docs/engineering/wayfinder.md:5 — used here
- `agent` — docs/engineering/wayfinder.md:9 — used here
- `wayfinder:map` — docs/engineering/wayfinder.md:31 — defined here
- `fog of war` — docs/engineering/wayfinder.md:37 — defined here
- `frontier` — docs/engineering/wayfinder.md:40 — defined here
- `HITL` — docs/engineering/wayfinder.md:44 — defined here
- `AFK` — docs/engineering/wayfinder.md:44 — defined here
- `grilling` — docs/engineering/wayfinder.md:44 — used here
- `subagent` — docs/engineering/wayfinder.md:50 — used here
- `spec` — docs/engineering/wayfinder.md:63 — used here
- `prototype` — docs/engineering/wayfinder.md:72 — used here
- `context` — docs/engineering/wayfinder.md:75 — used here
- `models` — docs/engineering/wayfinder.md:81 — used here
- `reasoning effort` — docs/engineering/wayfinder.md:81 — used here
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
- `other` · docs/engineering/wayfinder.md:68-70 documents security and role violation where agents write execution exemptions into the map issue Notes section to bypass planning constraints and build on live systems.
- `other` · docs/engineering/wayfinder.md:74-76 documents concurrent session coordination defect where parallel tickets cause duplicated grilling and autonomous closure of prototype tickets without human selection.

## Observations
Formerly known as `decision-mapping` before v1.1 reframing. Prioritizes aggressive prototyping over comprehensive upfront planning ("prototypemaxxing, not planmaxxing") to prevent the waterfall trap where later tickets rest on obsolete assumptions. Notes that high model question verbosity frequently causes human decision exhaustion during extensive grilling.

## Context cost
15976 bytes (~3990 tokens).
