---
package: matt
path: external/grilling.md
type: doc
bytes: 361073
unit: inv-matt-17
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/grilling.md

## Purpose — required, verbatim
> "The interview other skills run to stress-test a plan." — external/grilling.md:24

## Design intent — required
Provides the core interview engine and primitive logic that underpins the entire grilling family (`grill-me`, `grill-with-docs`, `wayfinder`). Instead of asking questions sequentially one by one or dumping a monolithic questionnaire all at once, it models the problem as a design tree and works in iterative rounds across the frontier (all questions whose prerequisites are currently settled). It strictly separates fact-finding (which the model investigates autonomously via tools and sub-agents) from human decision-making (which is presented with recommended answers and explicit user confirmation gates).

## Phase — required
matt:Reference Skills

## Inputs — required
A plan, decision, or architectural idea to stress-test; environmental facts discovered via filesystem tools and sub-agents; user answers to numbered frontier question rounds.

## Outputs — required
none

## Invokes — required
- skill grill-me — external/grilling.md:30
- skill grill-with-docs — external/grilling.md:30
- skill wayfinder — external/grilling.md:30
- skill batch-grill-me — external/grilling.md:45
- skill ask-matt — external/grilling.md:70
- skill setup-matt-pocock-skills — external/grilling.md:70

## Invoked by — required
- skill grill-me — external/grill-me.md:69
- skill grill-with-docs — external/grill-with-docs.md:34

## Concepts named — required, verbatim
- `design tree` — external/grilling.md:25 — defined here
- `frontier` — external/grilling.md:26 — defined here
- `round` — external/grilling.md:26 — defined here
- `model-invoked` — external/grilling.md:28 — defined here
- `recommended answer` — external/grilling.md:34 — defined here
- `facts` — external/grilling.md:35 — defined here
- `decisions` — external/grilling.md:35 — defined here
- `sequential format` — external/grilling.md:44 — defined here
- `primitive` — external/grilling.md:46 — defined here
- `round-based` — external/grilling.md:46 — defined here
- `confirmation gate` — external/grilling.md:50 — defined here
- `sub-agent` — external/grilling.md:64 — used here

## Structure
- # The /grilling Skill — external/grilling.md:24
- ## What it does — external/grilling.md:24
- ## When to reach for it — external/grilling.md:27
- ## The round, the frontier, and who decides — external/grilling.md:31
- ## What lives here and what lives in the wrappers — external/grilling.md:37
- ## Common questions — external/grilling.md:40
- ## It's working if — external/grilling.md:59
- ## Where it fits — external/grilling.md:69
- ## Related reading — external/grilling.md:70
- ## Skill actions — external/grilling.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/grilling.md:52: Model frequently answers its own questions instead of prompting the user, necessitating the strict separation between tool-based fact lookup and human decision prompting.
- `script-bug` · external/grilling.md:58: Dependent skills naming `grilling` fail to reliably trigger harness skill loading across several client environments.
- `doc-drift` · external/grilling.md:24: External documentation subtitle defines skill as "The interview other skills run to stress-test a plan." whereas SKILL.md:3 describes it as "Grill the user relentlessly about a plan, decision, or idea."
- `doc-drift` · external/grilling.md:46: Absorption of `/batch-grill-me` into `grilling` leaves historical references in changelogs without inline deprecation notices.
- `unfailable-gate` · external/grilling.md:50: Agents prematurely begin work immediately upon frontier emptying, bypassing the required explicit human confirmation gate.

## Observations
Documents the emergence of the frontier round-based interviewing technique from the historical `batch-grill-me` experiment into the central grilling primitive. Emphasizes that question formatting must follow the exact syntax of numbered `❓ Qn` headings followed by separate `➡️` recommendation lines. Notes that capping question counts is intentionally omitted from the specification to allow plans of varying complexity to fully expand.

## Context cost
361073 bytes, ~72000 tokens (HTML snapshot including full inline hydration payload).
