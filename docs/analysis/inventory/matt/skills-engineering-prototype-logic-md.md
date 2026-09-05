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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/prototype/LOGIC.md

## Purpose — required, verbatim
> "A single, self-contained HTML file (a **shareable demo**) that lets anyone drive a state model by clicking buttons. Use this when the question is about **business logic, state transitions, or data shape**: the kind of thing that looks reasonable on paper but only feels wrong once you push it through real cases." — skills/engineering/prototype/LOGIC.md:3

## Design intent — required
Specifies the requirements and lifecycle for logic prototypes. Solves the problem of evaluating state machines, business logic, or data shapes that seem correct on paper but break on edge cases, by building zero-dependency, double-clickable HTML demos that non-developers can run without a toolchain. Isolates portable pure logic in a liftable script module while placing domain-labeled interactive buttons and guided scenario walkthroughs around it, preserving the validated logic in production and parking the runnable HTML artifact on an unmerged throwaway branch.

## Phase — required
matt:engineering

## Inputs — required
An explicit state model and design question (`State the question` — skills/engineering/prototype/LOGIC.md:18), user prompt, or unresolved logic/state questions from grilling or wayfinder tickets.

## Outputs — required
A single self-contained HTML file (shareable demo) containing free-play action buttons, visible state panels, and tabbed guided walkthroughs (`Build the shareable HTML file` — skills/engineering/prototype/LOGIC.md:35); liftable pure logic module (reducer, state machine, or functions); throwaway branch commit; and documented decision/verdict.

## Invokes — required
- doc UI.md — skills/engineering/prototype/LOGIC.md:14
- doc SKILL.md — skills/engineering/prototype/LOGIC.md:58

## Invoked by — required
- skill prototype — skills/engineering/prototype/SKILL.md:14
- doc skills/engineering/prototype/UI.md — skills/engineering/prototype/UI.md:5

## Concepts named — required, verbatim
- `Logic Prototype` — skills/engineering/prototype/LOGIC.md:1 — defined here
- `shareable demo` — skills/engineering/prototype/LOGIC.md:3 — defined here
- `business logic` — skills/engineering/prototype/LOGIC.md:3 — used here
- `state transitions` — skills/engineering/prototype/LOGIC.md:3 — used here
- `data shape` — skills/engineering/prototype/LOGIC.md:3 — used here
- `UI.md` — skills/engineering/prototype/LOGIC.md:14 — used here
- `portable module` — skills/engineering/prototype/LOGIC.md:22 — defined here
- `pure reducer` — skills/engineering/prototype/LOGIC.md:28 — defined here
- `state machine` — skills/engineering/prototype/LOGIC.md:29 — defined here
- `pure functions` — skills/engineering/prototype/LOGIC.md:30 — defined here
- `domain language` — skills/engineering/prototype/LOGIC.md:39 — used here
- `Current state` — skills/engineering/prototype/LOGIC.md:44 — defined here
- `Free-play buttons` — skills/engineering/prototype/LOGIC.md:45 — defined here
- `Guided walkthroughs` — skills/engineering/prototype/LOGIC.md:46 — defined here
- `scenarios` — skills/engineering/prototype/LOGIC.md:46 — defined here
- `SKILL.md` — skills/engineering/prototype/LOGIC.md:58 — used here
- `primary source` — skills/engineering/prototype/LOGIC.md:58 — used here
- `throwaway branch` — skills/engineering/prototype/LOGIC.md:58 — used here
- `Anti-patterns` — skills/engineering/prototype/LOGIC.md:60 — defined here

## Structure
- `# Logic Prototype` — skills/engineering/prototype/LOGIC.md:1
- `## When this is the right shape` — skills/engineering/prototype/LOGIC.md:7
- `## Process` — skills/engineering/prototype/LOGIC.md:16
- `### 1. State the question` — skills/engineering/prototype/LOGIC.md:18
- `### 2. Isolate the logic in a portable module` — skills/engineering/prototype/LOGIC.md:22
- `### 3. Build the shareable HTML file` — skills/engineering/prototype/LOGIC.md:35
- `### 4. Hand it over` — skills/engineering/prototype/LOGIC.md:52
- `### 5. Capture the answer and the prototype` — skills/engineering/prototype/LOGIC.md:56
- `## Anti-patterns` — skills/engineering/prototype/LOGIC.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a clear architectural boundary: the page is a thin throwaway shell around a pure logic module that has no DOM dependencies, allowing the validated reducer or state machine to be lifted straight into production. Prohibits automated tests, real database connections, and framework dependencies for prototypes.

## Context cost
6,036 bytes (~1,509 tokens). Implementation reference for interactive single-file state machine and business logic prototyping.
