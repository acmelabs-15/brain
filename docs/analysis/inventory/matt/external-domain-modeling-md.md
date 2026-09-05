---
package: matt
path: external/domain-modeling.md
type: doc
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
verified: 2026-09-04 quote-check+coverage
---

# external/domain-modeling.md

## Purpose — required, verbatim
> "Sharpen the words a project uses, and write them down." — external/domain-modeling.md:24

## Design intent — required
Builds and maintains a project's ubiquitous language as an active design discipline rather than a passive vocabulary lookup. Interrogates ambiguous, overloaded, or contradictory terminology during architecture, grilling, or mapping conversations. Persists canonical definitions immediately into `CONTEXT.md` (recording discarded synonyms under `_Avoid_`) and documents non-trivial, hard-to-reverse architectural choices into `docs/adr/` only when they pass all three ADR qualifying tests (hard to reverse, surprising without context, real trade-off).

## Phase — required
matt:Reference Skills

## Inputs — required
Domain terms, overloaded nouns, user explanations of business concepts, existing codebase terminology, `CONTEXT.md`, `CONTEXT-MAP.md`, and architectural trade-offs discussed in sessions.

## Outputs — required
Inline term definitions added directly to `CONTEXT.md` (canonical definition + `_Avoid_` section) and Architecture Decision Records in `docs/adr/NNNN-slug.md` (context, choice, reason) when all three tests pass.

## Invokes — required
- skill codebase-design — external/domain-modeling.md:30
- skill grill-with-docs — external/domain-modeling.md:30
- skill wayfinder — external/domain-modeling.md:71
- skill triage — external/domain-modeling.md:71
- skill improve-codebase-architecture — external/domain-modeling.md:71
- skill ask-matt — external/domain-modeling.md:71

## Invoked by — required
- skill grill-with-docs — external/domain-modeling.md:71
- skill wayfinder — external/domain-modeling.md:71
- skill triage — external/domain-modeling.md:71
- skill improve-codebase-architecture — external/domain-modeling.md:71

## Concepts named — required, verbatim
- `ubiquitous language` — external/domain-modeling.md:25 — defined here
- `active` — external/domain-modeling.md:26 — defined here
- `CONTEXT.md` — external/domain-modeling.md:26 — defined here
- `_Avoid_` — external/domain-modeling.md:30 — defined here
- `CONTEXT-MAP.md` — external/domain-modeling.md:34 — used here
- `docs/adr/` — external/domain-modeling.md:35 — used here
- `model-invoked reference` — external/domain-modeling.md:71 — defined here

## Structure
- # The /domain-modeling Skill — external/domain-modeling.md:24
- ## What it does — external/domain-modeling.md:24
- ## When to reach for it — external/domain-modeling.md:27
- ## Prerequisites — external/domain-modeling.md:31
- ## Two artifacts, two bars — external/domain-modeling.md:38
- ## Cross-referencing, and where it stops — external/domain-modeling.md:43
- ## Common questions — external/domain-modeling.md:46
- ## It's working if — external/domain-modeling.md:61
- ## Where it fits — external/domain-modeling.md:70
- ## Related reading — external/domain-modeling.md:72
- ## Skill actions — external/domain-modeling.md:72

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/domain-modeling.md:28: Automatic invocation failure where models frequently drop secondary reference loading during grilling sessions, leaving `CONTEXT.md` unmaintained.
- `script-bug` · external/domain-modeling.md:42: Unchecked model generation expands `CONTEXT.md` into a 500-3000 line running spec by persisting all conversational answers instead of strictly maintaining a concise glossary.
- `doc-drift` · external/domain-modeling.md:45: Cross-referencing verifies code and committed ADRs but ignores issue tracker history, needlessly resurfacing terminology debates previously resolved in closed tickets.
- `doc-drift` · external/domain-modeling.md:56: Monolithic coupling of glossary discipline with a specific ADR directory and format prevents teams from integrating custom ADR conventions.

## Observations
Contrasts inline glossary maintenance (writing each term the moment it is settled) with batch summarization at the end of a session. Stresses that `CONTEXT.md` is strictly a glossary and must never hold implementation specifications or scratchpad notes.

## Context cost
361293 bytes, ~73000 tokens (HTML snapshot including full inline hydration payload).
