---
package: matt
path: docs/engineering/prototype.md
type: doc
bytes: 9630
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/prototype.md

## Purpose — required, verbatim
> "writes **throwaway code that answers a question**: does this state model feel right, or what should this screen look like." — docs/engineering/prototype.md:3

## Design intent — required
Documentation explaining the role, execution rules, and artifact lifecycles of the `prototype` skill. The skill produces throwaway code strictly designed to answer a single unresolved design question (either logic/state modeling or UI structure) that cannot be settled by conversational grilling. Prototypes are not merged into main; instead, the settled answer is folded into production code while the runnable prototype is archived on a dedicated branch as a primary source evidence asset.

## Phase — required
none

## Inputs — required
Unresolved design questions ("Does this logic / state model feel right?" or "What should this look like?"), decision tickets filed by `wayfinder`, or ungrillable questions escalated from `grill-me` or `grill-with-docs`.

## Outputs — required
For logic exploration: a single shareable HTML file containing state panel, free-play buttons, and tabbed guided walkthroughs with pure logic module.
For UI exploration: radically different UI variations on a real route switchable via floating bottom bar and `?variant=` query param.
Durable answer captured in commit message, ADR, or implementation issue; runnable prototype committed to throwaway branch `prototype/<name>`.

## Invokes — required
- skill diagnosing-bugs — docs/engineering/prototype.md:11
- skill wayfinder — docs/engineering/prototype.md:13
- skill handoff — docs/engineering/prototype.md:47
- skill grill-me — docs/engineering/prototype.md:67
- skill grill-with-docs — docs/engineering/prototype.md:67
- skill to-spec — docs/engineering/prototype.md:67
- skill ask-matt — docs/engineering/prototype.md:67

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `prototype` — docs/engineering/prototype.md:3 — defined here
- `throwaway code` — docs/engineering/prototype.md:3 — defined here
- `state model` — docs/engineering/prototype.md:3 — used here
- `agent` — docs/engineering/prototype.md:9 — used here
- `Grilling` — docs/engineering/prototype.md:11 — used here
- `tickets` — docs/engineering/prototype.md:13 — used here
- `single shareable HTML file` — docs/engineering/prototype.md:19 — defined here
- `state panel` — docs/engineering/prototype.md:19 — defined here
- `guided walkthroughs` — docs/engineering/prototype.md:19 — defined here
- `UI variations` — docs/engineering/prototype.md:20 — defined here
- `ADR` — docs/engineering/prototype.md:28 — used here
- `context pointer` — docs/engineering/prototype.md:30 — used here
- `session` — docs/engineering/prototype.md:35 — used here
- `primary source` — docs/engineering/prototype.md:35 — used here
- `context` — docs/engineering/prototype.md:47 — used here
- `token` — docs/engineering/prototype.md:50 — used here
- `decision tickets` — docs/engineering/prototype.md:65 — used here
- `asset` — docs/engineering/prototype.md:65 — used here

## Structure
- What it does
- When to reach for it
- Two branches
- The prototype is a primary source
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the shift away from deleting prototypes or building terminal apps toward emitting a single shareable, double-clickable HTML file for state logic (so non-technical stakeholders can interact with the state machine via guided walkthroughs) and multi-variant in-page UI routes. The prototype is archived on a `prototype/<name>` git branch out of main as a durable primary source, while main receives only the settled decision/answer and context pointer.

## Context cost
9630 bytes, ~2200 tokens. Loads no external files.
