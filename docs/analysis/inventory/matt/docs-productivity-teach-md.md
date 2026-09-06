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
verified: 2026-09-06 quote-check+coverage
---

# docs/productivity/teach.md

## Purpose — required, verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-teach` and `docs/productivity/teach.md`) for the user-invoked `teach` productivity skill. Solves the problem of ephemeral, low-retention AI explanations by transforming a dedicated directory into a standing, cumulative learning workspace. Instead of relying on untrusted parametric LLM recall or fleeting conversational fluency, it grounds curricula in high-trust external sources (`RESOURCES.md`), generates bite-sized modular HTML lessons with shared components (`assets/`), builds ADR-style records of demonstrated mastery (`learning-records/`), and targets long-term storage strength through cognitive science principles (retrieval practice, spacing, interleaving, and desirable difficulty).

## Phase — required
matt:Productivity

## Inputs — required
- User invocation via `/teach` in a dedicated directory.
- User topic specification and interview answers establishing the real-world learning goal (`MISSION.md`).
- High-trust vetted web/community resources compiled into `RESOURCES.md`.
- User learning records in `learning-records/*.md` reflecting demonstrated understanding and gaps.
- Stated user pedagogical preferences in `NOTES.md`.
- Interactive quiz responses and drill feedback during lesson execution.

## Outputs — required
- Standing workspace artifacts in target directory:
  - `MISSION.md` (overarching learning goal).
  - `RESOURCES.md` (vetted sources divided into Knowledge and Wisdom).
  - `lessons/*.html` (numbered self-contained HTML lessons with citations and quizzes).
  - `reference/*.html` (distilled cheat sheets, glossaries, syntax tables, algorithms).
  - `learning-records/*.md` (ADR-style records of demonstrated learning steering subsequent lessons).
  - `assets/*` (shared course stylesheet, quiz widgets, diagram helpers, simulators).
  - `NOTES.md` (user teaching preferences).

## Invokes — required
- skill wait-what — docs/productivity/teach.md:17
- skill grill-me — docs/productivity/teach.md:18
- skill research — docs/productivity/teach.md:19
- skill grilling — docs/productivity/teach.md:20
- skill handoff — docs/productivity/teach.md:20
- skill grilling — docs/productivity/teach.md:97
- skill handoff — docs/productivity/teach.md:97
- skill research — docs/productivity/teach.md:97
- skill ask-matt — docs/productivity/teach.md:97

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `teach` — docs/productivity/teach.md:3 — defined here
- `standing teaching workspace` — docs/productivity/teach.md:3 — defined here
- `sessions` — docs/productivity/teach.md:3 — used here
- `HTML lessons` — docs/productivity/teach.md:3 — defined here
- `model` — docs/productivity/teach.md:5 — used here
- `parametric knowledge` — docs/productivity/teach.md:5 — defined here
- `RESOURCES.md` — docs/productivity/teach.md:5 — defined here
- `stateful` — docs/productivity/teach.md:5 — defined here
- `agent` — docs/productivity/teach.md:9 — used here
- `wait-what` — docs/productivity/teach.md:17 — used here
- `grill-me` — docs/productivity/teach.md:18 — used here
- `primary sources` — docs/productivity/teach.md:19 — used here
- `research` — docs/productivity/teach.md:19 — used here
- `grilling` — docs/productivity/teach.md:20 — used here
- `handoff` — docs/productivity/teach.md:20 — used here
- `MISSION.md` — docs/productivity/teach.md:30 — defined here
- `Knowledge` — docs/productivity/teach.md:31 — defined here
- `Wisdom` — docs/productivity/teach.md:31 — defined here
- `lessons` — docs/productivity/teach.md:32 — defined here
- `reference` — docs/productivity/teach.md:33 — defined here
- `learning-records` — docs/productivity/teach.md:34 — defined here
- `assets` — docs/productivity/teach.md:35 — defined here
- `NOTES.md` — docs/productivity/teach.md:36 — defined here
- `GLOSSARY-FORMAT.md` — docs/productivity/teach.md:38 — used here
- `SKILL.md` — docs/productivity/teach.md:38 — used here
- `storage strength` — docs/productivity/teach.md:42 — defined here
- `fluency` — docs/productivity/teach.md:42 — defined here
- `desirable difficulty` — docs/productivity/teach.md:42 — defined here
- `retrieval practice` — docs/productivity/teach.md:42 — defined here
- `spacing` — docs/productivity/teach.md:42, 74 — defined here
- `interleaving` — docs/productivity/teach.md:42, 74 — defined here
- `mission` — docs/productivity/teach.md:44 — defined here
- `zone of proximal development` — docs/productivity/teach.md:44 — defined here
- `wisdom` — docs/productivity/teach.md:46 — defined here
- `lesson` — docs/productivity/teach.md:50 — defined here
- `components` — docs/productivity/teach.md:54 — defined here
- `MISSION-FORMAT.md` — docs/productivity/teach.md:59 — used here
- `learning records` — docs/productivity/teach.md:71 — used here
- `wayfinder` — docs/productivity/teach.md:71 — used here
- `reasoning effort` — docs/productivity/teach.md:80 — used here
- `harness` — docs/productivity/teach.md:80 — used here
- `reach-for-it-anytime standalone` — docs/productivity/teach.md:95 — defined here
- `grilling` — docs/productivity/teach.md:97 — used here
- `ask-matt` — docs/productivity/teach.md:97 — used here

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
- doc-drift — docs/productivity/teach.md:38 — Skill ships a GLOSSARY-FORMAT.md template that SKILL.md no longer links to or references, leaving glossary creation unprompted unless requested (GitHub issue #559).
- script-bug — docs/productivity/teach.md:59 — Ambiguous relative path resolution (./) causes agents resolving installed skill templates against the skill install directory to place user workspace outputs (lessons/, reference/, learning-records/, assets/) into ~/.claude/skills instead of the current working directory (GitHub issue #377).
- internal-contradiction — docs/productivity/teach.md:68 — Quiz answer positioning consistently places the correct option in slot A (tested 33 out of 33 times across nine lessons on multiple models) because instructions standardize word counts but do not randomize option placement (GitHub issue #335).
- internal-contradiction — docs/productivity/teach.md:71 — Absence of an initial knowledge-assessment interview causes the skill to infer user level solely from non-existent initial learning records, resulting in unwarranted assumptions and undefined jargon (GitHub issue #725).
- internal-contradiction — docs/productivity/teach.md:74 — Spaced repetition and interleaving design principles lack automated scheduling, calendar integration, or self-prompting review exit criteria to transition from generating new lessons to deliberate practice.

## Observations
Resolves Phase 1V omissions by capturing invocations to `skill grilling` (lines 20, 97) and named cognitive concepts: `retrieval practice` (line 42), `spacing` (lines 42, 74), `interleaving` (lines 42, 74), and `learning-records` (lines 34, 71). Explains the architectural decision to decouple lessons (consumed once) from reference cheat sheets (revisited frequently). Emphasizes that learning workspaces must be distinct repositories rather than subfolders of code projects, preventing accidental commits and workspace collisions.

## Context cost
13260 bytes, approximately 3000 tokens. Standalone doc; references templates at `skills/productivity/teach/` (`MISSION-FORMAT.md`, `GLOSSARY-FORMAT.md`).
