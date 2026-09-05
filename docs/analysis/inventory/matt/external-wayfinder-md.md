---
package: matt
path: external/wayfinder.md
type: doc
bytes: 374029
unit: inv-matt-32
deprecated: false
aliases: []
memo_inputs:
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/wayfinder.md

## Purpose — required, verbatim
> "Chart a large effort as a map of decisions, and settle them." — external/wayfinder.md:24

## Design intent — required
Provides multi-session architectural exploration and planning for foggy, complex efforts larger than a single context window. Maintains a shared, low-resolution index issue (the map) with four sections (destination, decisions so far, fog of war, and out of scope) and models blocking dependencies across child decision tickets. Strictly separates planning from execution: every ticket resolves a question rather than delivering code slices. Employs four distinct decision ticket types (`grilling`, `prototype`, `research`, `task`), burning down research tickets in parallel via background subagents while working grilling and prototyping tickets interactively. Hands off cleared maps to `to-spec` rather than proceeding directly into implementation.

## Phase — required
matt:Shaping

## Inputs — required
A bounded destination for an effort too large for one session, existing codebase architecture, issue tracker configuration from `setup-matt-pocock-skills`, or an ongoing chat session handed off via `/handoff`.

## Outputs — required
A single tracked map issue labelled `wayfinder:map`, typed child decision tickets (`wayfinder:<type>`) with native blocking edges, resolution comments on closed tickets, linked prototype/research branch assets, and handoff to `/to-spec #<map_issue>`.

## Invokes — required
- skill grill-me — external/wayfinder.md:30
- skill grill-with-docs — external/wayfinder.md:30
- skill to-spec — external/wayfinder.md:30
- skill to-tickets — external/wayfinder.md:30
- skill implement — external/wayfinder.md:30
- skill handoff — external/wayfinder.md:30
- skill setup-matt-pocock-skills — external/wayfinder.md:33
- skill grilling — external/wayfinder.md:47
- skill domain-modeling — external/wayfinder.md:47
- skill prototype — external/wayfinder.md:47
- skill research — external/wayfinder.md:47
- skill ask-matt — external/wayfinder.md:83

## Invoked by — required
none

## Concepts named — required, verbatim
- `wayfinder` — external/wayfinder.md:25 — defined here
- `session` — external/wayfinder.md:25 — used here
- `destination` — external/wayfinder.md:25 — defined here
- `map` — external/wayfinder.md:25 — defined here
- `decision tickets` — external/wayfinder.md:25 — defined here
- `ticket` — external/wayfinder.md:26 — used here
- `agent` — external/wayfinder.md:28 — used here
- `wayfinder:map` — external/wayfinder.md:36 — defined here
- `fog of war` — external/wayfinder.md:41 — defined here
- `frontier` — external/wayfinder.md:44 — defined here
- `HITL` — external/wayfinder.md:46 — defined here
- `AFK` — external/wayfinder.md:46 — defined here
- `grilling` — external/wayfinder.md:47 — used here
- `prototype` — external/wayfinder.md:47 — used here
- `research` — external/wayfinder.md:47 — used here
- `subagent` — external/wayfinder.md:47 — used here
- `spec` — external/wayfinder.md:56 — used here
- `context` — external/wayfinder.md:62 — used here
- `models` — external/wayfinder.md:66 — used here
- `reasoning effort` — external/wayfinder.md:66 — used here
- `decision-mapping` — external/wayfinder.md:69 — defined here
- `situational on-ramp` — external/wayfinder.md:82 — defined here

## Structure
- # The /wayfinder Skill — external/wayfinder.md:24
- ## What it does — external/wayfinder.md:24
- ## When to reach for it — external/wayfinder.md:27
- ## Prerequisites — external/wayfinder.md:32
- ## The map, the fog, and the frontier — external/wayfinder.md:35
- ## The four decision-ticket types — external/wayfinder.md:45
- ## Common questions — external/wayfinder.md:50
- ## It's working if — external/wayfinder.md:71
- ## Where it fits — external/wayfinder.md:81
- ## A decision map tells you what to build. It does not build it. — external/wayfinder.md:83
- ## Install the skills — external/wayfinder.md:83
- ## Related reading — external/wayfinder.md:83

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · external/wayfinder.md:58 documents agent defect where models write execution permissions into map issue Notes to circumvent planning constraints.
- `other` · external/wayfinder.md:62 documents concurrent session race conditions where parallel subagents duplicate grilling and close prototype tickets without human review.
- `doc-drift` · external/wayfinder.md:5 places wayfinder under section "Shaping", whereas internal doc `docs/engineering/wayfinder.md:1` places it under "engineering".

## Observations
Formerly titled `decision-mapping` prior to the v1.1 release reframing. Champions an aggressive bias toward prototyping over exhaustive desk planning to avoid cascading waterfall assumptions. Warns of human decision fatigue resulting from overly verbose reasoning models generating excessive grilling questions.

## Context cost
374029 bytes, ~75000 tokens (HTML snapshot with inline hydration bundle).
