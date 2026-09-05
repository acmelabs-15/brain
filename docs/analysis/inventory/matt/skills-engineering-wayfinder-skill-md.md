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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/wayfinder/SKILL.md

## Purpose — required, verbatim
> "Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear." — skills/engineering/wayfinder/SKILL.md:3

## Design intent — required
Facilitates multi-session architectural exploration and planning for complex, ambiguous software efforts too extensive for a single context window. Enforces a strict "plan, don't do" methodology where every ticket resolves an architectural question or decision rather than delivering production code slices. Maintains a centralized, low-resolution index issue (`wayfinder:map`) that tracks destination, notes, decisions so far, fog of war, and out of scope work. Employs native issue tracker dependency blocking to expose the available frontier of tickets, dispatching parallel background subagents for research tickets while guiding interactive human-in-the-loop sessions for grilling and prototyping.

## Phase — required
matt:engineering

## Inputs — required
- User-provided loose concept, initiative, or complex requirement too large for one agent session
- Issue tracker configuration provided via `setup-matt-pocock-skills` (or fallback to local markdown files)
- Existing map issue (URL or issue number) when working through an existing map
- Interactive human responses during HITL grilling, prototype evaluation, and manual prerequisite task checklists

## Outputs — required
- Canonical issue tracker issue labelled `wayfinder:map` (containing Destination, Notes, Decisions so far, Not yet specified, and Out of scope sections)
- Child decision ticket issues labelled `wayfinder:<type>` (`research`, `prototype`, `grilling`, `task`) with native tracker blocking links
- Resolution comments posted on closed tickets
- Context pointers appended to Decisions-so-far on the map issue
- Throwaway `research/<name>` git branches capturing subagent research findings
- Graduated tickets moving previously unsharp items from Not yet specified to the frontier

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/wayfinder/SKILL.md:25
- skill research — skills/engineering/wayfinder/SKILL.md:77
- skill prototype — skills/engineering/wayfinder/SKILL.md:78
- skill grilling — skills/engineering/wayfinder/SKILL.md:79
- skill domain-modeling — skills/engineering/wayfinder/SKILL.md:79

## Invoked by — required
- doc README.md — README.md:202
- doc ask-matt — skills/engineering/ask-matt/SKILL.md:44
- doc .claude-plugin/plugin.json — .claude-plugin/plugin.json:31

## Concepts named — required, verbatim
- `destination` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `shared map` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `decision tickets` — skills/engineering/wayfinder/SKILL.md:7 — defined here
- `wayfinder:map` — skills/engineering/wayfinder/SKILL.md:21 — defined here
- `child issues` — skills/engineering/wayfinder/SKILL.md:21 — defined here
- `frontier` — skills/engineering/wayfinder/SKILL.md:69 — defined here
- `HITL` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `AFK` — skills/engineering/wayfinder/SKILL.md:75 — defined here
- `Research` — skills/engineering/wayfinder/SKILL.md:77 — defined here
- `Prototype` — skills/engineering/wayfinder/SKILL.md:78 — defined here
- `Grilling` — skills/engineering/wayfinder/SKILL.md:79 — defined here
- `Task` — skills/engineering/wayfinder/SKILL.md:80 — defined here
- `fog of war` — skills/engineering/wayfinder/SKILL.md:84 — defined here
- `Not yet specified` — skills/engineering/wayfinder/SKILL.md:86 — defined here
- `Out of scope` — skills/engineering/wayfinder/SKILL.md:97 — defined here
- `Decisions so far` — skills/engineering/wayfinder/SKILL.md:101 — defined here
- `resolution comment` — skills/engineering/wayfinder/SKILL.md:125 — defined here
- `context pointer` — skills/engineering/wayfinder/SKILL.md:125 — defined here

## Structure
- `## Plan, don't do` — skills/engineering/wayfinder/SKILL.md:11
- `## Refer by name` — skills/engineering/wayfinder/SKILL.md:15
- `## The Map` — skills/engineering/wayfinder/SKILL.md:19
- `### The map body` — skills/engineering/wayfinder/SKILL.md:27
- `### Tickets` — skills/engineering/wayfinder/SKILL.md:55
- `## Ticket Types` — skills/engineering/wayfinder/SKILL.md:73
- `## Fog of war` — skills/engineering/wayfinder/SKILL.md:82
- `## Out of scope` — skills/engineering/wayfinder/SKILL.md:95
- `## Invocation` — skills/engineering/wayfinder/SKILL.md:103
- `### Chart the map` — skills/engineering/wayfinder/SKILL.md:107
- `### Work through the map` — skills/engineering/wayfinder/SKILL.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · skills/engineering/wayfinder/SKILL.md:25 references `/setup-matt-pocock-skills` and the tracker doc's "Wayfinding operations" section, but the setup-matt-pocock-skills configuration template is located at `skills/engineering/setup-matt-pocock-skills/issue-tracker.md` rather than a centralized docs path.
- `internal-contradiction` · skills/engineering/wayfinder/SKILL.md:13 allows an effort to override planning in its Notes carrying execution into the map itself, directly contradicting lines 7 and 11 ("Plan, don't do") and introducing the execution-bypass failure mode documented in docs/engineering/wayfinder.md:68-70.

## Observations
- Restricts resolution to at most one ticket per agent session (excluding parallel background research tickets) to prevent context fatigue and cascading assumption drift.
- Mandates referencing issues by their full descriptive title rather than bare numbers (#42), while embedding tracker hyperlinks within the title.
- Distinguishes between coarse fog of war (sketched loosely in Not yet specified) and sharp decision tickets (wired into dependency graph).

## Context cost
11908 bytes (~2977 tokens). Primary prompt for the wayfinder skill.
