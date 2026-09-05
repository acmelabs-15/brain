---
package: matt
path: external/prototype.md
type: doc
bytes: 341956
unit: inv-matt-21
deprecated: false
aliases: []
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/prototype.md

## Purpose — required, verbatim
> "Answer a design question with code you then delete." — external/prototype.md:24

## Design intent — required
Produces throwaway code to answer a specific design question ("Does this logic / state model feel right?" or "What should this look like?") that cannot be settled by conversation alone. Emits either a single self-contained shareable HTML file with guided walkthroughs and state inspection, or multiple radically different UI variations on a single route switchable via URL parameters. The runnable code is preserved on a dedicated `prototype/<name>` branch while the durable verdict is captured in `main` via issues, ADRs, or commit messages.

## Phase — required
matt:Shaping

## Inputs — required
Explicit invocation via `/prototype` command or automated routing by an orchestrating agent (`wayfinder`) on prototype decision tickets (external/prototype.md:28, 30); a focused design question concerning state machine behavior or visual screen hierarchy that cannot be settled through conversation (external/prototype.md:29); ungrillable design questions escalated from `grill-me` or `grill-with-docs` (external/prototype.md:67).

## Outputs — required
Single self-contained shareable HTML file for logic prototypes with zero build requirements, double-clickable execution, labelled state machine displays, and tabbed guided walkthroughs (external/prototype.md:34, 46); radically different UI variations on a single route switchable via floating bottom bar and `?variant=` URL parameter (external/prototype.md:35); exploratory code committed to a throwaway `prototype/<name>` git branch out of `main` (external/prototype.md:41); durable verdicts recorded in commit messages, ADRs, or implementation issues pointing back to the prototype branch (external/prototype.md:40, 41, 62); decision-rich snippets and validated state models fed downstream to `to-spec` (external/prototype.md:67).

## Invokes — required
- skill diagnosing-bugs — external/prototype.md:29
- skill wayfinder — external/prototype.md:30
- skill implement — external/prototype.md:48
- skill handoff — external/prototype.md:52
- skill grill-me — external/prototype.md:67
- skill grill-with-docs — external/prototype.md:67
- skill to-spec — external/prototype.md:67
- skill ask-matt — external/prototype.md:67

## Invoked by — required
none

## Concepts named — required, verbatim
- `prototype` — external/prototype.md:25 — defined here
- `throwaway code that answers a question` — external/prototype.md:25 — defined here
- `agent` — external/prototype.md:28 — used here
- `grilling` — external/prototype.md:29 — used here
- `ticket` — external/prototype.md:30 — used here
- `guided walkthroughs` — external/prototype.md:34 — defined here
- `radically different` — external/prototype.md:35 — defined here
- `primary source` — external/prototype.md:38 — defined here
- `context pointer` — external/prototype.md:41 — used here
- `session` — external/prototype.md:44 — used here
- `context` — external/prototype.md:52 — used here
- `tokens` — external/prototype.md:54 — used here
- `reach-for-it-anytime standalone` — external/prototype.md:65 — defined here
- `decision tickets` — external/prototype.md:66 — used here

## Structure
- # The /prototype Skill — external/prototype.md:24
- ## What it does — external/prototype.md:24
- ## When to reach for it — external/prototype.md:27
- ## Two branches — external/prototype.md:31
- ## The prototype is a primary source — external/prototype.md:38
- ## Common questions — external/prototype.md:42
- ## It's working if — external/prototype.md:55
- ## Where it fits — external/prototype.md:64
- ## Install the skills — external/prototype.md:67

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/prototype.md:46: Logic prototyping shifted from terminal applications to single shareable HTML files, leaving older documentation or skill descriptions referencing terminal apps.
- `doc-drift` · external/prototype.md:44: Earlier project guidance recommended completely destroying prototype code upon finding the answer ("build it, keep the answer, bin the code"), whereas current practice preserves code on `prototype/<name>` branches as primary source evidence.
- `doc-drift` · external/prototype.md:48: Flow-unaware agents reflexively recommend `/prototype` after tickets exist instead of `/implement`, misinterpreting the generic word prototype as the next implementation step.

## Observations
Represents the web documentation snapshot of Matt Pocock's `/prototype` skill from `aihero.dev/skills-prototype`. Bounded strictly to answering a single design question that dialogue cannot resolve, using throwaway code that skips tests, abstractions, and persistence. Emphasizes that throwaway is a code-authoring constraint rather than a deletion rule: runnable code is committed to a `prototype/<name>` branch to preserve primary source evidence while `main` holds the durable decision in an ADR or issue.

## Context cost
341956 bytes, ~70000 tokens (HTML snapshot including full inline hydration payload).
