---
package: matt
path: skills/in-progress/README.md
type: skill
bytes: 2177
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/README.md

## Purpose — required, verbatim
> "Beta. These skills are public on purpose: try them and tell me what breaks." — skills/in-progress/README.md:3

## Design intent — required
Serves as the index, installation documentation, and catalog for incubating experimental skills under `skills/in-progress/`. Details their public beta status, their exclusion from the Claude Code plugin and top-level documentation site, and provides exact CLI instructions for installing individual in-progress skills using `npx skills@latest add`. Summarizes each of the eight experimental capabilities and links to their definitions.

## Phase — required
matt:in-progress

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill loop-me — skills/in-progress/README.md:11
- skill writing-beats — skills/in-progress/README.md:12
- skill writing-fragments — skills/in-progress/README.md:13
- skill writing-shape — skills/in-progress/README.md:14
- skill claude-handoff — skills/in-progress/README.md:15
- skill setup-ts-deep-modules — skills/in-progress/README.md:16
- skill implement-spec — skills/in-progress/README.md:17
- skill retro — skills/in-progress/README.md:18

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Beta` — skills/in-progress/README.md:3 — defined here
- `npx skills` — skills/in-progress/README.md:8 — used here
- `loop-me` — skills/in-progress/README.md:11 — used here
- `writing-beats` — skills/in-progress/README.md:12 — used here
- `writing-fragments` — skills/in-progress/README.md:13 — used here
- `writing-shape` — skills/in-progress/README.md:14 — used here
- `claude-handoff` — skills/in-progress/README.md:15 — used here
- `setup-ts-deep-modules` — skills/in-progress/README.md:16 — used here
- `dependency-cruiser` — skills/in-progress/README.md:16 — used here
- `deep module` — skills/in-progress/README.md:16 — defined here
- `implement-spec` — skills/in-progress/README.md:17 — used here
- `task graph` — skills/in-progress/README.md:17 — used here
- `frontier` — skills/in-progress/README.md:17 — used here
- `PR` — skills/in-progress/README.md:17 — used here
- `retro` — skills/in-progress/README.md:18 — used here
- `STUB` — skills/in-progress/README.md:18 — defined here

## Structure
- # In Progress — skills/in-progress/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents standalone installation mechanism via `npx skills@latest add mattpocock/skills --skill=<name>` that allows developers to test experimental skills before official plugin graduation.

## Context cost
2177 bytes, 19 lines, ~350 tokens. Loads no external files.
