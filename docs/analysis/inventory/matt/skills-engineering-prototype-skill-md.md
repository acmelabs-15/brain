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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/prototype/SKILL.md

## Purpose — required, verbatim
> "A prototype is **throwaway code that answers a question**. The question decides the shape." — skills/engineering/prototype/SKILL.md:8

## Design intent — required
Establishes the core definition, branch selection, and common lifecycle rules for prototyping. Categorizes prototypes into two mutually exclusive branches based on the question being asked: logic prototypes (interactive, self-contained HTML demos for business logic and state models) and UI prototypes (radically different UI variations on a single route). Mandates that prototypes be throwaway, trivial to run, memory-only by default, unpolished, transparent about state, and archived on a throwaway git branch as primary sources while recording settled decisions in the main codebase.

## Phase — required
matt:engineering

## Inputs — required
Design question from user prompt, conversation, surrounding codebase, or wayfinder prototype decision tickets.

## Outputs — required
Answer to the design question folded into real code/ADRs/issues, plus runnable prototype committed to a throwaway git branch (`prototype/<name>`) with context pointers.

## Invokes — required
- doc LOGIC.md — skills/engineering/prototype/SKILL.md:14
- doc UI.md — skills/engineering/prototype/SKILL.md:15

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:20
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:78
- doc README.md — README.md:206
- doc skills/engineering/README.md — skills/engineering/README.md:23
- doc docs/engineering/prototype.md — docs/engineering/prototype.md:3

## Concepts named — required, verbatim
- `prototype` — skills/engineering/prototype/SKILL.md:2 — defined here
- `throwaway code` — skills/engineering/prototype/SKILL.md:8 — defined here
- `Pick a branch` — skills/engineering/prototype/SKILL.md:10 — defined here
- `LOGIC.md` — skills/engineering/prototype/SKILL.md:14 — used here
- `state model` — skills/engineering/prototype/SKILL.md:14 — used here
- `shareable HTML file` — skills/engineering/prototype/SKILL.md:14 — used here
- `UI.md` — skills/engineering/prototype/SKILL.md:15 — used here
- `UI variations` — skills/engineering/prototype/SKILL.md:15 — used here
- `floating bottom bar` — skills/engineering/prototype/SKILL.md:15 — used here
- `No persistence by default` — skills/engineering/prototype/SKILL.md:23 — defined here
- `primary source` — skills/engineering/prototype/SKILL.md:26 — defined here
- `throwaway branch` — skills/engineering/prototype/SKILL.md:26 — defined here

## Structure
- `name: prototype` — skills/engineering/prototype/SKILL.md:2
- `# Prototype` — skills/engineering/prototype/SKILL.md:6
- `## Pick a branch` — skills/engineering/prototype/SKILL.md:10
- `## Rules that apply to both` — skills/engineering/prototype/SKILL.md:19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Model-invoked skill (omits `disable-model-invocation: true`). Establishes the six universal rules for prototypes: (1) throwaway from day one and clearly marked, (2) trivial to run with single command or double-click, (3) no persistence by default, (4) skip polish and automated tests, (5) surface full state transparently, and (6) capture validated decisions in main while archiving the prototype as a primary source on a throwaway branch.

## Context cost
2,931 bytes (~733 tokens). When loading `LOGIC.md` (6,036 bytes) or `UI.md` (6,913 bytes), total context expands to ~8,967–9,844 bytes (~2,242–2,461 tokens).
