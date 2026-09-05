---
package: matt
path: external/teach.md
type: doc
bytes: 373585
unit: inv-matt-26
deprecated: false
aliases: []
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/teach.md

## Purpose — required, verbatim
> "Learn a topic across many sessions that build on each other." — external/teach.md:24

## Design intent — required
Transforms a dedicated local directory into a standing, self-contained interactive learning curriculum across multi-session arcs. Emphasizes "storage strength" over superficial fluency through active retrieval practice, interleaving, and incremental learning records. Bypasses unreliable parametric model knowledge by anchoring lessons to primary sources documented in `RESOURCES.md`, generating self-contained HTML lessons with embedded quizzes, tracking mastery in `learning-records/`, and maintaining enduring reference documents (`reference/*.html`) for future lookup.

## Phase — required
matt:Productivity Skills

## Inputs — required
User learning objective and goals, preferred topics or learning mission (`MISSION.md`), personal notes and preferences (`NOTES.md`), curated external documentation (`RESOURCES.md`), and cumulative learning history (`learning-records/*.md`).

## Outputs — required
Interactive HTML lessons (`lessons/*.html`), reference summaries (`reference/*.html`), learning records tracking mastered and unmastered concepts (`learning-records/*.md`), course assets (`assets/*`), `MISSION.md`, `RESOURCES.md`, and `NOTES.md`.

## Invokes — required
- skill wait-what — external/teach.md:30
- skill grill-me — external/teach.md:30
- skill research — external/teach.md:30
- skill handoff — external/teach.md:30
- skill ask-matt — external/teach.md:74

## Invoked by — required
none

## Concepts named — required, verbatim
- `teach` — external/teach.md:25 — defined here
- `model` — external/teach.md:26 — used here
- `Parametric knowledge` — external/teach.md:26 — defined here
- `stateful` — external/teach.md:26 — used here
- `agent` — external/teach.md:28 — used here
- `primary sources` — external/teach.md:30 — used here
- `storage strength` — external/teach.md:37 — defined here
- `fluency` — external/teach.md:37 — defined here
- `mission` — external/teach.md:38 — defined here
- `zone of proximal development` — external/teach.md:38 — defined here
- `lesson` — external/teach.md:41 — defined here
- `components` — external/teach.md:43 — defined here
- `reasoning effort` — external/teach.md:60 — used here
- `harness` — external/teach.md:60 — used here
- `reach-for-it-anytime standalone` — external/teach.md:73 — defined here

## Structure
- # The /teach Skill — external/teach.md:24
- ## What it does — external/teach.md:24
- ## When to reach for it — external/teach.md:27
- ## Prerequisites — external/teach.md:31
- ## Storage strength, not fluency — external/teach.md:36
- ## Lessons, references and components — external/teach.md:40
- ## Common questions — external/teach.md:44
- ## It's working if — external/teach.md:61
- ## Where it fits — external/teach.md:72
- ## Install the skills — external/teach.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · external/teach.md:46: Open issue #377 where lessons and generated course files land in repo root or parent directories rather than the dedicated course folder.
- `other` · external/teach.md:52: Multiple-choice quiz questions generated across Sonnet, Opus, and GLM consistently place the correct option as the first choice, eliminating retrieval challenge.
- `other` · external/teach.md:54: Lacks an initial assessment mechanism, regularly assuming prior knowledge or technical terms that beginners do not possess.
- `doc-drift` · external/teach.md:35: The skill text notes that a glossary suits most topics but ships no default glossary template or structure.
- `other` · external/teach.md:56: Does not implement automated spaced repetition or reliable decay intervals for previously learned concepts.

## Observations
Represents the web documentation snapshot of `/teach` from `aihero.dev/skills-teach`. Highlights that lessons are single-sitting HTML artifacts designed for consumption rather than revision, while reference files serve as long-term lookups. Emphasizes that `teach` pushes back with challenging retrieval questions and external study links rather than obliging passive answers.

## Context cost
373585 bytes, ~75000 tokens (HTML snapshot including full inline hydration payload).
