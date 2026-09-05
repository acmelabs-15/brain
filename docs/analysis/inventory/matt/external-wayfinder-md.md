---
package: matt
path: external/wayfinder.md
type: external-doc
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
verified: 2026-09-05 quote-check+coverage
---

# external/wayfinder.md

## Purpose — required, verbatim
> "Chart a large effort as a map of decisions, and settle them." — external/wayfinder.md:2

## Design intent — required
Serves as the public documentation and catalog landing page for the `wayfinder` skill on Matt Pocock's AI Hero platform (aihero.dev/skills-wayfinder). It defines an exploration and multi-session planning workflow for initiatives too large for a single agent session where the ultimate destination is identifiable but the route remains foggy. The skill establishes an operational invariant that it plans rather than executes: work is charted onto an issue tracker as a single index map issue (`wayfinder:map`) containing four structural zones (Destination, Decisions so far, Not yet specified fog of war, and Out of scope) with child decision tickets categorized into four types (`grilling`, `prototype`, `research`, `task`). Actionable, unblocked decisions form the frontier at the edge of the known, systematically burning down uncertainty until the map clears and hands off cleanly to `/to-spec`. Without this page and its underlying pattern, developers tackling multi-session builds would either fall into fragile upfront waterfall specifications that break on early invalidations or allow agents to prematurely execute uncoordinated production code.

## Phase — required
matt:situational on-ramp

## Inputs — required
- Destination statement for multi-session initiative: "takes an effort too big for one agent" — external/wayfinder.md:25
- Issue tracker configuration: "wayfinder needs the tracker wiring that" — external/wayfinder.md:33
- Tracker operations reference: "Wayfinder resolves that doc through the pointer in your" — external/wayfinder.md:33
- User answers during live exchange: "ticket only resolves through the live exchange;" — external/wayfinder.md:46
- Global configuration instructions: "put a plain-language instruction in your global" — external/wayfinder.md:66
- For pure documentation page: none

## Outputs — required
- Single index map issue: "its tickets are its child issues. It is an" — external/wayfinder.md:36
- Four-part map structure: "what reaching the end of this map looks like." — external/wayfinder.md:39
- Child decision tickets: "Every ticket carries a" — external/wayfinder.md:46
- Resolution comments: "posts the answer as a resolution comment, closes it, and leaves one line on the map" — external/wayfinder.md:76
- Downstream handoff: "The session that finishes the map hands you toward a spec, not a pull request." — external/wayfinder.md:79
- For pure documentation page: none

## Invokes — required
- command /wayfinder — external/wayfinder.md:28
- skill grill-with-docs — external/wayfinder.md:29
- skill grill-me — external/wayfinder.md:30
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
orphan

## Concepts named — required, verbatim
- `destination` — external/wayfinder.md:25 — defined here
- `map` — external/wayfinder.md:25 — defined here
- `decision tickets` — external/wayfinder.md:25 — defined here
- `session` — external/wayfinder.md:25 — used here
- `ticket` — external/wayfinder.md:26 — used here
- `agent` — external/wayfinder.md:26 — used here
- `CLAUDE.md` — external/wayfinder.md:33 — used here
- `AGENTS.md` — external/wayfinder.md:33 — used here
- `Decisions so far` — external/wayfinder.md:40 — defined here
- `Not yet specified` — external/wayfinder.md:41 — defined here
- `fog of war` — external/wayfinder.md:41 — defined here
- `Out of scope` — external/wayfinder.md:42 — defined here
- `frontier` — external/wayfinder.md:44 — defined here
- `HITL` — external/wayfinder.md:46 — defined here
- `AFK` — external/wayfinder.md:46 — used here
- `grilling` — external/wayfinder.md:46 — used here
- `prototype` — external/wayfinder.md:47 — used here
- `research` — external/wayfinder.md:47 — used here
- `subagent` — external/wayfinder.md:47 — used here
- `task` — external/wayfinder.md:47 — defined here
- `spec` — external/wayfinder.md:54 — used here
- `Notes` — external/wayfinder.md:58 — used here
- `prototyping` — external/wayfinder.md:60 — used here
- `context` — external/wayfinder.md:62 — used here
- `models` — external/wayfinder.md:66 — used here
- `reasoning effort` — external/wayfinder.md:66 — used here
- `decision-mapping` — external/wayfinder.md:69 — used here
- `situational on-ramp` — external/wayfinder.md:82 — defined here
- `domain-modeling` — external/wayfinder.md:47 — used here
- `to-spec` — external/wayfinder.md:30 — used here
- `to-tickets` — external/wayfinder.md:30 — used here
- `implement` — external/wayfinder.md:30 — used here
- `handoff` — external/wayfinder.md:30 — used here
- `ask-matt` — external/wayfinder.md:83 — used here
- `grill-me` — external/wayfinder.md:30 — used here
- `grill-with-docs` — external/wayfinder.md:29 — used here
- `setup-matt-pocock-skills` — external/wayfinder.md:33 — used here
- `The Main Flow` — external/wayfinder.md:5 — used here
- `Shaping` — external/wayfinder.md:5 — used here
- `Upkeep` — external/wayfinder.md:5 — used here
- `Productivity Skills` — external/wayfinder.md:5 — used here
- `Reference Skills` — external/wayfinder.md:5 — used here

## Structure
- # The /wayfinder Skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## The map, the fog, and the frontier
- ## The four decision-ticket types
- ## Common questions
- ## It's working if
- ## Where it fits
- ## Install the skills
- ## Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/wayfinder.md:1 — Snapshot of external documentation page that is not directly referenced by relative path from repository source files in sources/matt/.
- other — external/wayfinder.md:48 — Misinterpretation of task tickets: "agents interpret it as an implementation step and start writing product code inside the map." — external/wayfinder.md:48
- other — external/wayfinder.md:58 — Governance vulnerability where agents override constraints: "the constraint and its exemption live in the same file the constrained party owns." — external/wayfinder.md:58
- other — external/wayfinder.md:60 — Fragility of upfront multi-ticket planning: "a map whose later tickets rest on assumptions the earlier ones invalidate is exactly the waterfall trap the skill is accused of." — external/wayfinder.md:60
- other — external/wayfinder.md:62 — Friction in parallel ticket execution: "Users working two grilling tickets at once get asked in one session a question they just answered in the other, because the sessions share no" — external/wayfinder.md:62
- doc-drift — external/wayfinder.md:64 — Accidental persistence risk with local tracker files: "And local markdown puts the artifacts in your repo, which is not recommended: storing this material in the repo tends to lead to accidental persistence." — external/wayfinder.md:64
- other — external/wayfinder.md:66 — Excessive model verbosity causing cognitive fatigue: "the verbosity itself causes decision exhaustion, and the length strips out" — external/wayfinder.md:66
- doc-drift — external/wayfinder.md:68 — Absence of revision guidance for overturned decisions: "it tends to design around the bad decision rather than challenge it" — external/wayfinder.md:68

## Observations
- Clarifies the v1.1 renaming from `decision-mapping` to `wayfinder`: "renamed to <code class=\"ah-code-inline\">wayfinder</code> in v1.1 and invoked as <code class=\"ah-code-inline\">/wayfinder</code>." — external/wayfinder.md:70, replacing layered jargon with a unified navigation vocabulary (destination, fog of war, frontier, map).
- Emphasizes the architectural distinction between index and store: "It is an <strong class=\"ah-prose-strong\">index, not a store</strong>: a decision lives in exactly one place, its ticket, and the map only gists it and links." — external/wayfinder.md:36.
- Strictly bounds ticket scope to decisions rather than deliverables: "It plans, it does not do. Every ticket holds a question whose resolution is a decision, not a slice of a build to execute" — external/wayfinder.md:26.
- Provides a clear test for differentiating fog of war from concrete tickets: "The test for fog versus ticket is whether you can state the question precisely <em class=\"ah-prose-em\">now</em>, not whether you can answer it." — external/wayfinder.md:41.
- Promotes rapid iterative prototyping over massive upfront roadmaps: "Wayfinder is &quot;prototypemaxxing&quot;, not &quot;planmaxxing&quot;." — external/wayfinder.md:60.
- Clarifies subagent isolation during research tickets: "so its reading never lands in your session." — external/wayfinder.md:83, preventing research context from cluttering the main conversation.
- Documents standalone CLI skill installation: "npx skills@latest add mattpocock/skills" — external/wayfinder.md:83.

## Context cost
374029 bytes (~93507 tokens) on disk; 0 files loaded. As a fetched web snapshot of aihero.dev, the vast majority of file size consists of Next.js hydration payload and script bundles rather than markdown content.
