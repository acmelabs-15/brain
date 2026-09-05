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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/teach.md

## Purpose — required, verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Design intent — required
Documentation page for the user-invoked `teach` productivity skill in the matt package published on aihero.dev. Formalizes the stateful teaching workspace architecture designed to build long-term retention ("storage strength") rather than fleeting recall ("fluency") through cognitive pedagogy (retrieval practice, interleaving, spacing) calibrated to the learner's zone of proximal development. Treats model parametric knowledge as untrusted, mandating that resources are grounded in `RESOURCES.md` and cited in every HTML lesson. Specifies workspace layout across `MISSION.md`, `RESOURCES.md`, `lessons/`, `reference/`, `learning-records/`, `assets/`, and `NOTES.md`.

## Phase — required
matt:productivity

## Inputs — required
Learner topic and mission; vetted web resources captured in `RESOURCES.md`; learner demonstration of understanding during interactive quizzes and drills; learning records from prior sessions.

## Outputs — required
Stateful teaching workspace containing `MISSION.md`, `RESOURCES.md`, `NOTES.md`, numbered HTML lessons (`lessons/*.html`), reference cheat-sheets (`reference/*.html`), ADR-style learning records (`learning-records/*.md`), and shared course assets (`assets/*`).

## Invokes — required
- skill wait-what — docs/productivity/teach.md:17
- skill grill-me — docs/productivity/teach.md:18
- skill research — docs/productivity/teach.md:19
- skill handoff — docs/productivity/teach.md:20
- skill ask-matt — docs/productivity/teach.md:97

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `teach` — docs/productivity/teach.md:3 — defined here
- `standing teaching workspace` — docs/productivity/teach.md:3 — defined here
- `HTML lessons` — docs/productivity/teach.md:3 — defined here
- `parametric knowledge` — docs/productivity/teach.md:5 — defined here
- `MISSION.md` — docs/productivity/teach.md:30 — defined here
- `RESOURCES.md` — docs/productivity/teach.md:31 — defined here
- `storage strength` — docs/productivity/teach.md:42 — defined here
- `fluency` — docs/productivity/teach.md:42 — defined here
- `desirable difficulty` — docs/productivity/teach.md:42 — defined here
- `mission` — docs/productivity/teach.md:44 — defined here
- `zone of proximal development` — docs/productivity/teach.md:44 — defined here
- `wisdom` — docs/productivity/teach.md:46 — defined here
- `lesson` — docs/productivity/teach.md:50 — defined here
- `reference documents` — docs/productivity/teach.md:52 — defined here
- `components` — docs/productivity/teach.md:54 — defined here
- `reach-for-it-anytime standalone` — docs/productivity/teach.md:95 — defined here

## Structure
- What it does — docs/productivity/teach.md:1
- When to reach for it — docs/productivity/teach.md:7
- Prerequisites — docs/productivity/teach.md:22
- Storage strength, not fluency — docs/productivity/teach.md:40
- Lessons, references and components — docs/productivity/teach.md:48
- Common questions — docs/productivity/teach.md:56
- It's working if — docs/productivity/teach.md:82
- Where it fits — docs/productivity/teach.md:93

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — docs/productivity/teach.md:38 — Mentions `GLOSSARY-FORMAT.md` shipped in the skill that `SKILL.md` no longer links to (issue #559).
- other — docs/productivity/teach.md:59 — Ambiguity in `./` path resolution causes course files to be authored into the skill install folder rather than the workspace (issue #377).
- other — docs/productivity/teach.md:68 — Model generation bias results in correct quiz answers landing in slot A 33 times out of 33 across multiple frontier models (issue #335).
- other — docs/productivity/teach.md:71 — Absence of a baseline assessment step causes lessons to make untested assumptions about prior knowledge (issue #725).

## Observations
Details a pedagogical architecture separating knowledge acquisition (where cognitive load is minimized to protect working memory) from skill drilling (where deliberate difficulty fosters durable retention). Emphasizes that `teach` treats parametric knowledge as untrusted ("It does not teach from what the [model](https://www.aihero.dev/ai-coding-dictionary/model) already knows." — docs/productivity/teach.md:5). Documents widespread non-coding adoption.

## Context cost
13260 bytes, ~3200 tokens.
