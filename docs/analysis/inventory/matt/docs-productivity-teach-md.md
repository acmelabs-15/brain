---
package: matt
path: docs/productivity/teach.md
type: doc
bytes: 13260
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/teach.md

## Purpose — required, verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Design intent — required
Converts a dedicated directory into a persistent, stateful learning environment that teaches complex topics over multi-session arcs through bite-sized, self-contained HTML lessons. Rejects untrusted parametric LLM knowledge in favor of grounded external citations (`RESOURCES.md`), and optimizes for durable memory retention ("storage strength") over transient ease ("fluency") via retrieval practice, interleaving, and incremental learning records.

## Phase — required
matt:productivity

## Inputs — required
User learning mission, stated preferences (`NOTES.md`), curated external sources (`RESOURCES.md`), and historical ADR-style learning records (`learning-records/*.md`).

## Outputs — required
`MISSION.md`, `RESOURCES.md`, `lessons/*.html`, `reference/*.html`, `learning-records/*.md`, `assets/*` (shared CSS, quiz widgets), and `NOTES.md`.

## Invokes — required
- doc wait-what — docs/productivity/teach.md:17
- doc grill-me — docs/productivity/teach.md:18
- doc research — docs/productivity/teach.md:19
- doc handoff — docs/productivity/teach.md:20
- doc ask-matt — docs/productivity/teach.md:97

## Invoked by — required
none

## Concepts named — required, verbatim
- `sessions` — docs/productivity/teach.md:3 — used here
- `teach` — docs/productivity/teach.md:3 — defined here
- `model` — docs/productivity/teach.md:5 — used here
- `Parametric knowledge` — docs/productivity/teach.md:5 — defined here
- `stateful` — docs/productivity/teach.md:5 — used here
- `agent` — docs/productivity/teach.md:9 — used here
- `primary sources` — docs/productivity/teach.md:19 — used here
- `grilling` — docs/productivity/teach.md:20 — used here
- `storage strength` — docs/productivity/teach.md:42 — defined here
- `fluency` — docs/productivity/teach.md:42 — defined here
- `mission` — docs/productivity/teach.md:44 — defined here
- `zone of proximal development` — docs/productivity/teach.md:44 — defined here
- `wisdom` — docs/productivity/teach.md:46 — defined here
- `lesson` — docs/productivity/teach.md:50 — defined here
- `components` — docs/productivity/teach.md:54 — defined here
- `reasoning effort` — docs/productivity/teach.md:80 — used here
- `harness` — docs/productivity/teach.md:80 — used here
- `reach-for-it-anytime standalone` — docs/productivity/teach.md:95 — defined here

## Structure
- ## What it does — docs/productivity/teach.md:1
- ## When to reach for it — docs/productivity/teach.md:7
- ## Prerequisites — docs/productivity/teach.md:22
- ## Storage strength, not fluency — docs/productivity/teach.md:40
- ## Lessons, references and components — docs/productivity/teach.md:48
- ## Common questions — docs/productivity/teach.md:56
- ## It's working if — docs/productivity/teach.md:82
- ## Where it fits — docs/productivity/teach.md:93

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · docs/productivity/teach.md:38 notes that `SKILL.md` ships a `GLOSSARY-FORMAT.md` template file that `SKILL.md` no longer links to (issue #559).
- `script-bug` · docs/productivity/teach.md:59 documents open issue #377 where relative `./` paths in `SKILL.md` resolve against the skill installation folder (`~/.claude/skills`) rather than the active workspace, dumping course lessons into the skill directory.
- `other` · docs/productivity/teach.md:68 documents issue #335 where multiple-choice quiz generators across Sonnet, Opus, and GLM place the correct answer in slot A 33 times out of 33 across nine lessons.
- `missing-path` · docs/productivity/teach.md:71 documents issue #725 where `teach` lacks an initial diagnostic knowledge-assessment step, leading to undefined jargon and uncalibrated lessons.

## Observations
Emphasizes that learning is supported in both programming and non-coding domains (languages, instruments, games, exam prep). Separates ephemeral lessons (rarely revisited once completed) from durable reference documents in `reference/` (cheat sheets, glossaries, syntax tables).

## Context cost
13260 bytes (~3315 tokens).
