---
package: matt
path: skills/engineering/prototype/LOGIC.md
type: skill
bytes: 6036
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/prototype/LOGIC.md

## Purpose — required, verbatim
> "A single, self-contained HTML file (a **shareable demo**) that lets anyone drive a state model by clicking buttons." — skills/engineering/prototype/LOGIC.md:3

## Design intent — required
Specialized authoring manual for the logic and state-machine branch of the `prototype` skill. Instructs agents to build a standalone, zero-dependency HTML file that encapsulates a portable, pure logic module (such as a reducer, state machine, or pure function set) wrapped in an interactive interface with free-play buttons and guided scenario walkthroughs. Tailored specifically for non-developers (PMs, designers, domain experts) to validate state transitions and identify conceptual edge-case flaws before code is written, while ensuring the underlying logic module remains unpolluted by DOM code so it can be lifted cleanly into production.

## Phase — required
cross-phase

## Inputs — required
An ambiguous business logic question, data model edge case, or state transition dilemma.

## Outputs — required
A single self-contained HTML file featuring current state display, action buttons, and scenario walkthrough tabs; capture of validated logic into production code and archive of demo to a throwaway branch.

## Invokes — required
- doc UI.md — skills/engineering/prototype/LOGIC.md:14
- doc SKILL.md — skills/engineering/prototype/LOGIC.md:58

## Invoked by — required
- skill prototype — skills/engineering/prototype/SKILL.md:14
- doc UI.md — skills/engineering/prototype/UI.md:5

## Concepts named — required, verbatim
- `Logic Prototype` — skills/engineering/prototype/LOGIC.md:1 — defined here
- `shareable demo` — skills/engineering/prototype/LOGIC.md:3 — defined here
- `business logic` — skills/engineering/prototype/LOGIC.md:3 — used here
- `state transitions` — skills/engineering/prototype/LOGIC.md:3 — used here
- `portable module` — skills/engineering/prototype/LOGIC.md:22 — defined here
- `pure reducer` — skills/engineering/prototype/LOGIC.md:28 — defined here
- `state machine` — skills/engineering/prototype/LOGIC.md:29 — defined here
- `domain language` — skills/engineering/prototype/LOGIC.md:39 — used here
- `Current state` — skills/engineering/prototype/LOGIC.md:44 — defined here
- `Free-play buttons` — skills/engineering/prototype/LOGIC.md:45 — defined here
- `Guided walkthroughs` — skills/engineering/prototype/LOGIC.md:46 — defined here
- `scenarios` — skills/engineering/prototype/LOGIC.md:46 — defined here
- `throwaway branch` — skills/engineering/prototype/LOGIC.md:58 — used here

## Structure
- Logic Prototype — skills/engineering/prototype/LOGIC.md:1
- When this is the right shape — skills/engineering/prototype/LOGIC.md:7
- Process — skills/engineering/prototype/LOGIC.md:16
- 1. State the question — skills/engineering/prototype/LOGIC.md:18
- 2. Isolate the logic in a portable module — skills/engineering/prototype/LOGIC.md:22
- 3. Build the shareable HTML file — skills/engineering/prototype/LOGIC.md:35
- 4. Hand it over — skills/engineering/prototype/LOGIC.md:52
- 5. Capture the answer and the prototype — skills/engineering/prototype/LOGIC.md:56
- Anti-patterns — skills/engineering/prototype/LOGIC.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a clean separation between the throwaway HTML UI harness and the portable pure logic engine, ensuring the core logic can be lifted into the primary codebase without modification. Forbids frameworks, bundlers, tests, and persistence layers.

## Context cost
6036 bytes, 68 lines, ~1400 tokens.
