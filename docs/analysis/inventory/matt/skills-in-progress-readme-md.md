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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/README.md

## Purpose — required, verbatim
> "Beta. These skills are public on purpose: try them and tell me what breaks. They're excluded from the plugin and the top-level README until they graduate to a stable bucket, they get no docs pages, and they can change or disappear without warning." — skills/in-progress/README.md:3

## Design intent — required
Catalog and governing orientation for experimental, in-progress skills in the `matt` repository. Explains the beta lifecycle stage: public for community experimentation and feedback, excluded from `.claude-plugin/plugin.json` and the root `README.md`, receiving no aihero.dev documentation pages, and subject to breaking changes. Documents direct installation via `npx skills@latest add mattpocock/skills --skill=<name>` and provides a flat inventory linking each experimental skill to its `SKILL.md`.

## Phase — required
none

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
- doc CLAUDE.md — CLAUDE.md:6

## Concepts named — required, verbatim
- `In Progress` — skills/in-progress/README.md:1 — defined here
- `Beta` — skills/in-progress/README.md:3 — defined here
- `npx skills@latest` — skills/in-progress/README.md:8 — used here
- `loop-me` — skills/in-progress/README.md:11 — used here
- `writing-beats` — skills/in-progress/README.md:12 — used here
- `writing-fragments` — skills/in-progress/README.md:13 — used here
- `writing-shape` — skills/in-progress/README.md:14 — used here
- `claude-handoff` — skills/in-progress/README.md:15 — used here
- `setup-ts-deep-modules` — skills/in-progress/README.md:16 — used here
- `implement-spec` — skills/in-progress/README.md:17 — used here
- `retro` — skills/in-progress/README.md:18 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies the bucket catalog pattern defined in `CLAUDE.md:15`. Non-promoted buckets (`in-progress/`, `misc/`) use a flat list, whereas promoted buckets (`engineering/`, `productivity/`) group by User-invoked and Model-invoked. Notes that `retro` is a STUB (design notes only, line 18).

## Context cost
2177 bytes, 19 lines, ~450 tokens. Loads no external files directly.
