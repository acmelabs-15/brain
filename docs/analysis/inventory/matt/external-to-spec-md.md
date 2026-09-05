---
package: matt
path: external/to-spec.md
type: external-doc
bytes: 359264
unit: inv-matt-28
deprecated: false
aliases: []
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/to-spec.md

## Purpose — required, verbatim
> "Turn an agreed conversation into a written spec." — external/to-spec.md:24

## Design intent — required
Public web documentation and reference guide for the `to-spec` skill published on Matt Pocock's AI Hero website (aihero.dev/skills-to-spec). It explains the architectural function, prerequisites, and operating rules of `/to-spec` within the main build flow (`grill-with-docs → to-spec → to-tickets → implement → code-review`). It clarifies that `to-spec` does not interview or decide; rather, it synthesises decisions already settled during grilling before context windows clear, establishes pre-agreed test seams before drafting prose, and publishes the resulting specification to the project issue tracker with the `ready-for-agent` triage label. It provides essential guidance on navigating workflow boundaries, such as skipping the spec on single-session tasks, collapsing multi-ticket wayfinder maps into a single buildable document, and managing known limitations like user-story template bias on refactoring work and tracker issue truncation. Without this documentation, users and coding agents would lack guidance on the transition from exploratory conversation to structured execution artifacts, the rationale behind upfront seam negotiation for downstream `tdd` and `code-review`, and operational mitigations for AFK agent collisions and tracker issue truncation.

## Phase — required
matt:The Main Flow

## Inputs — required
- Prior conversation context: "turns the conversation you have just had into a" — external/to-spec.md:25
- Codebase context and documentation: "from the thread, from the codebase, from your" — external/to-spec.md:26, "CONTEXT.md" — external/to-spec.md:26, and "ADRs" — external/to-spec.md:26
- User command invocation: "You invoke this by typing" — external/to-spec.md:28 and "/to-spec" — external/to-spec.md:28
- Cleared wayfinder map issue (for multi-session planning): "wayfinder</a> map has cleared" — external/to-spec.md:30 and "/to-spec #&lt;map_issue&gt;" — external/to-spec.md:30
- Tracker configuration: "setup-matt-pocock-skills" — external/to-spec.md:32, "configured a tracker and the triage-label vocabulary for this repo first." — external/to-spec.md:32, and ".scratch/" — external/to-spec.md:32
- Upstream grilling decisions: "Everything you settled while" — external/to-spec.md:34 and "choices you argued through, what you deliberately refused" — external/to-spec.md:34
- User confirmation on seams: "the feature will be tested at, and checks them with you." — external/to-spec.md:37 and "prefers seams that already exist to new ones" — external/to-spec.md:37

## Outputs — required
- Published single issue on issue tracker: "publishes it to your issue tracker as a single issue." — external/to-spec.md:25
- Triage label on published issue: "ready-for-agent" — external/to-spec.md:42 and "the document is complete enough for an agent to work from." — external/to-spec.md:43
- Pre-agreed test seams for downstream skills: "Seams before prose" — external/to-spec.md:36 and "pre-agreed seams" — external/to-spec.md:38
- Package manager installation command: "npx skills@latest add mattpocock/skills --skill=to-spec" — external/to-spec.md:24

## Invokes — required
- command /to-spec — external/to-spec.md:28
- skill grill-with-docs — external/to-spec.md:30
- skill implement — external/to-spec.md:30
- skill to-tickets — external/to-spec.md:30
- skill wayfinder — external/to-spec.md:30
- skill setup-matt-pocock-skills — external/to-spec.md:32
- skill tdd — external/to-spec.md:38
- skill code-review — external/to-spec.md:38
- skill ask-matt — external/to-spec.md:69
- skill prototype — external/to-spec.md:69

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The Main Flow` — external/to-spec.md:5 — used here
- `to-spec` — external/to-spec.md:24 — defined here
- `/to-spec` — external/to-spec.md:24 — defined here
- `spec` — external/to-spec.md:25 — defined here
- `issue tracker` — external/to-spec.md:25 — used here
- `CONTEXT.md` — external/to-spec.md:26 — used here
- `ADRs` — external/to-spec.md:26 — used here
- `grill-with-docs` — external/to-spec.md:30 — used here
- `implement` — external/to-spec.md:30 — used here
- `to-tickets` — external/to-spec.md:30 — used here
- `setup-matt-pocock-skills` — external/to-spec.md:32 — used here
- `.scratch/` — external/to-spec.md:32 — used here
- `triage` — external/to-spec.md:32 — used here
- `decision record` — external/to-spec.md:33 — defined here
- `grilling` — external/to-spec.md:34 — used here
- `context windows` — external/to-spec.md:34 — used here
- `seams before prose` — external/to-spec.md:36 — defined here
- `seams` — external/to-spec.md:37 — defined here
- `tdd` — external/to-spec.md:38 — used here
- `code-review` — external/to-spec.md:38 — used here
- `/to-prd` — external/to-spec.md:40 — used here
- `tickets` — external/to-spec.md:41 — used here
- `ready-for-agent` — external/to-spec.md:42 — defined here
- `AFK` — external/to-spec.md:43 — used here
- `/to-tickets` — external/to-spec.md:44 — used here
- `multi-session` — external/to-spec.md:45 — used here
- `wayfinder` — external/to-spec.md:47 — used here
- `out-of-scope` — external/to-spec.md:49 — used here
- `user stories` — external/to-spec.md:53 — used here
- `implementation-decisions` — external/to-spec.md:53 — used here
- `testing-decisions` — external/to-spec.md:53 — used here
- `context hygiene` — external/to-spec.md:57 — defined here
- `clearing` — external/to-spec.md:57 — used here
- `compaction` — external/to-spec.md:57 — used here
- `main build chain` — external/to-spec.md:67 — used here
- `tracer-bullet` — external/to-spec.md:69 — used here
- `ask-matt` — external/to-spec.md:69 — used here
- `prototype` — external/to-spec.md:69 — used here

## Structure
- # The /to-spec Skill
- ## Install this skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## The spec is a decision record
- ## Seams before prose
- ## Common questions
- ## It's working if
- ## Where it fits
- ## Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/to-spec.md:1 — External documentation snapshot hosted at aihero.dev; not referenced via relative filesystem path by any in-scope repository file in sources/matt/ (repo markdown files cite the live URL instead).
- doc-drift — external/to-spec.md:41 — Mentions historical rename from `/to-prd` in v1.1 ("renamed in v1.1." — external/to-spec.md:41), leaving deprecated legacy references across user environments.
- doc-drift — external/to-spec.md:43 — Documents known rough edge where automated AFK agents polling for "ready-for-agent" — external/to-spec.md:42 attempt to implement the full spec in one run instead of waiting for ticket slices.
- doc-drift — external/to-spec.md:53 — Documents known structural limitation where "The template leans hard on user stories, which is the wrong shape for architectural work" — external/to-spec.md:53 such as refactors or module boundaries.
- doc-drift — external/to-spec.md:55 — Documents gap where "It reads and respects the ADRs covering the area it touches" — external/to-spec.md:55 but fails to link them or check the tracker for overlapping issues.
- doc-drift — external/to-spec.md:57 — Documents truncation failure mode where "Very large specs can outgrow what a tracker issue will serve back cleanly" — external/to-spec.md:57 and no local fallback copy exists.

## Observations
- Public catalog documentation: Functions as the public web reference guide for `to-spec` on Matt Pocock's AI Hero platform (aihero.dev/skills-to-spec).
- Synthesis vs interviewing: Clarifies that `/to-spec` synthesises already settled context and never opens new interviews: "It does not interview you. By the time you reach for it the deciding is already done" — external/to-spec.md:26.
- Upfront seam negotiation: Requires establishing test seams before writing specification prose: "the feature will be tested at, and checks them with you." — external/to-spec.md:37.
- Disposable execution artifacts: Establishes that specs are point-in-time snapshots that go stale during implementation and should be discarded post-ship: "Treat it as throwaway once the work ships." — external/to-spec.md:51.
- Map consolidation: Collapses multi-issue wayfinder decision trees into a unified specification: "collapses them into one buildable document." — external/to-spec.md:47.
- Build chain placement: Positioned in the multi-session branch of the main build chain: "grill-with-docs → to-spec → to-tickets → implement → code-review" — external/to-spec.md:68.

## Context cost
359264 bytes, ~89800 tokens. Static web documentation snapshot; loads no dependencies directly into agent context.
