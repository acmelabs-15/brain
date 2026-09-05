---
package: matt
path: skills/engineering/prototype/SKILL.md
type: skill
bytes: 2931
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/prototype/SKILL.md, sha256: 714de632d116bb73f65cdb5a882db15b9369a6713b9a47c0fad827848f0bfbe3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/prototype/SKILL.md

## Purpose — required, verbatim
> "Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like." — skills/engineering/prototype/SKILL.md:3

## Design intent — required
A branching routing skill for building throwaway prototypes to resolve design uncertainty before committing to formal implementation. Analyzes the question at hand to choose between two distinct prototyping tracks: business logic/state modeling (routing to `LOGIC.md` to produce a single shareable HTML demo) or visual interface styling (routing to `UI.md` to produce toggleable UI variants on a route). Enforces six core prototyping disciplines across both branches: explicit throwaway naming and placement, zero-friction running via standard commands, in-memory state without persistence by default, skipping tests and polish, continuous surface exposure of state, and capturing validated results into production code while preserving the prototype code on a disposable git branch as a primary source.

## Phase — required
none

## Inputs — required
User prompt or surrounding code presenting a design ambiguity regarding state logic or visual presentation.

## Outputs — required
A single shareable HTML file (for state/logic questions) or toggleable UI route variants with a switcher bar (for UI questions); validated decisions integrated into production code; prototype committed to a throwaway branch (`prototype/<name>`) referenced from the tracker issue.

## Invokes — required
- doc LOGIC.md — skills/engineering/prototype/SKILL.md:14
- doc UI.md — skills/engineering/prototype/SKILL.md:15

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:80
- doc README.md — skills/engineering/README.md:23

## Concepts named — required, verbatim
- `prototype` — skills/engineering/prototype/SKILL.md:2 — defined here
- `throwaway code` — skills/engineering/prototype/SKILL.md:8 — defined here
- `LOGIC.md` — skills/engineering/prototype/SKILL.md:14 — used here
- `UI.md` — skills/engineering/prototype/SKILL.md:15 — used here
- `primary source` — skills/engineering/prototype/SKILL.md:26 — defined here
- `throwaway branch` — skills/engineering/prototype/SKILL.md:26 — defined here
- `context pointer` — skills/engineering/prototype/SKILL.md:26 — defined here

## Structure
- Prototype — skills/engineering/prototype/SKILL.md:6
- Pick a branch — skills/engineering/prototype/SKILL.md:10
- Rules that apply to both — skills/engineering/prototype/SKILL.md:19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Operates as a model-invoked skill (lacks `disable-model-invocation: true`), enabling AI agents to autonomously recommend or instantiate exploratory prototypes whenever design questions cannot be resolved on paper.

## Context cost
2931 bytes, 27 lines, ~680 tokens. Dynamically references `LOGIC.md` or `UI.md` based on selected branch.
