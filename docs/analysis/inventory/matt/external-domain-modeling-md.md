---
package: matt
path: external/domain-modeling.md
type: external-doc
bytes: 361293
unit: inv-matt-14
deprecated: false
aliases: []
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/domain-modeling.md

## Purpose — required, verbatim
> "Sharpen the words a project uses, and write them down." — external/domain-modeling.md:2

The page lede expands on this:
> "challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — external/domain-modeling.md:25

## Design intent — required
Public documentation and architectural guide for the `/domain-modeling` skill on the AI Hero website (`aihero.dev/skills-domain-modeling`). It defines domain modeling as an active discipline that interrupts the design conversation to challenge ambiguous terms, cross-reference assertions against codebase reality, and capture vocabulary directly into `CONTEXT.md`. It resolves critical failure modes observed across models in the field—most notably models treating glossary persistence as license to write running specs, bloating `CONTEXT.md` to thousands of lines, and automatic invocation dropping `domain-modeling` when running alongside `grill-with-docs` or `wayfinder`. It establishes a strict two-tier threshold separating lightweight glossary entries from high-bar architectural decision records (ADRs) that must satisfy three strict tests before creation. Without this page, agents and users lack canonical guidance on when to separate domain terms from module shapes, how to maintain lean project glossaries, and how to verify that domain modeling is functioning properly.

## Phase — required
cross-phase

## Inputs — required
- User domain terminology and design statements: "challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — external/domain-modeling.md:25
- Existing project codebase: "when you state how something works, it checks the code and surfaces the contradiction." — external/domain-modeling.md:44
- Committed glossary and architectural records: "It does not search your issue tracker" — external/domain-modeling.md:45
- Root context map: `CONTEXT-MAP.md` — external/domain-modeling.md:34
- User direct or automated invocation: "or the agent reaches for it automatically when a task fits." — external/domain-modeling.md:28

## Outputs — required
- Root or per-context glossary: "None up front. The skill writes into two places and creates both lazily:" — external/domain-modeling.md:32; creates "at the repo root, created by the first resolved term." — external/domain-modeling.md:34
- Architectural Decision Records: "created by the first ADR that clears the bar." — external/domain-modeling.md:35
- Conversational challenges and contradiction surfacing: "It stops you mid-sentence to ask which of two things you meant, instead of picking one and moving on." — external/domain-modeling.md:63
- Rejection of low-stakes decisions: "It refuses to write an ADR for something you could undo tomorrow, and says which of the three tests failed." — external/domain-modeling.md:65
- Code dispute quotes: "It quotes your code back at you when your code and your sentence disagree." — external/domain-modeling.md:67

## Invokes — required
- skill codebase-design — external/domain-modeling.md:30
- skill grill-with-docs — external/domain-modeling.md:28
- skill wayfinder — external/domain-modeling.md:28
- skill grilling — external/domain-modeling.md:28
- skill triage — external/domain-modeling.md:71
- skill improve-codebase-architecture — external/domain-modeling.md:71
- skill ask-matt — external/domain-modeling.md:71

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `domain-modeling` — external/domain-modeling.md:25 — defined here
- `ubiquitous language` — external/domain-modeling.md:25 — defined here
- `glossary` — external/domain-modeling.md:25 — used here
- `CONTEXT.md` — external/domain-modeling.md:26 — used here
- `When to reach for it` — external/domain-modeling.md:27 — defined here
- `/domain-modeling` — external/domain-modeling.md:28 — used here
- `grill-with-docs` — external/domain-modeling.md:28 — used here
- `wayfinder` — external/domain-modeling.md:28 — used here
- `grilling` — external/domain-modeling.md:28 — used here
- `_Avoid_` — external/domain-modeling.md:30 — defined here
- `ADR` — external/domain-modeling.md:30 — used here
- `codebase-design` — external/domain-modeling.md:30 — used here
- `Prerequisites` — external/domain-modeling.md:31 — defined here
- `CONTEXT.md` — external/domain-modeling.md:34 — used here
- `CONTEXT-MAP.md` — external/domain-modeling.md:34 — used here
- `docs/adr/` — external/domain-modeling.md:35 — used here
- `Two artifacts, two bars` — external/domain-modeling.md:38 — defined here
- `spec` — external/domain-modeling.md:40 — used here
- `scratch pad` — external/domain-modeling.md:40 — used here
- `CONTEXT.md` — external/domain-modeling.md:42 — used here
- `Cross-referencing, and where it stops` — external/domain-modeling.md:43 — defined here
- `docs/agents/domain.md` — external/domain-modeling.md:45 — used here
- `Common questions` — external/domain-modeling.md:46 — defined here
- `/grill-with-docs` — external/domain-modeling.md:48 — used here
- `GLOSSARY.md` — external/domain-modeling.md:49 — used here
- `context` — external/domain-modeling.md:50 — used here
- `/ubiquitous-language` — external/domain-modeling.md:51 — used here
- `triage` — external/domain-modeling.md:52 — used here
- `mapping` — external/domain-modeling.md:52 — used here
- `DDD` — external/domain-modeling.md:58 — used here
- `Where it fits` — external/domain-modeling.md:70 — defined here
- `model-invoked reference` — external/domain-modeling.md:71 — defined here
- `tickets` — external/domain-modeling.md:71 — used here
- `improve-codebase-architecture` — external/domain-modeling.md:71 — used here
- `ask-matt` — external/domain-modeling.md:71 — used here

## Structure
- # The /domain-modeling Skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## Two artifacts, two bars
- ## Cross-referencing, and where it stops
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · external/domain-modeling.md:45 · The page suggests putting instructions in `docs/agents/domain.md`, but no such file or directory exists in the source repository.
- doc-drift · external/domain-modeling.md:45 · The page claims "the workaround is to put the instruction in your own" docs/agents/domain.md "which the skills already read.", but `skills/engineering/domain-modeling/SKILL.md` contains no instructions to read docs/agents/domain.md.
- doc-drift · external/domain-modeling.md:52 · Mentions that /ubiquitous-language "was removed, and it was not deprecated", but the source repository contains no changelog or migration record for /ubiquitous-language.
- orphan · external/domain-modeling.md:1 · This external documentation page is an orphan not loaded or invoked by any agent skill or entry point.

## Observations
- Clear separation of concerns between glossary and ADR: terms define what a thing is in one or two sentences with rejected synonyms in `_Avoid_`, whereas ADRs record decisions satisfying all three bars: hard to reverse, surprising without context, and the result of a real trade-off.
- Details the primary failure mode of domain modeling in practice: models treating write permission to `CONTEXT.md` as permission to persist a running spec, bloating the file to thousands of lines. Recommends running `/grill-with-docs make my CONTEXT.md more concise and remove any implementation details from it`.
- Documents model invocation brittleness: models routinely load `grilling` and omit `domain-modeling` when prompted by orchestrator skills like `grill-with-docs` or `wayfinder`.
- Identifies scope friction: bundling glossary maintenance and ADR recording in a single skill causes conflicts for teams with their own established ADR conventions (GitHub issue #557).
- Snapshotted from `https://aihero.dev/skills-domain-modeling` and includes Next.js hydration scripts, Tailwind utility classes, navigation shell, and course promotional aside.

## Context cost
361293 bytes, ~90,300 tokens (raw HTML document snapshot; article prose alone is ~3,000 words / ~4,000 tokens). Loads no external files.
