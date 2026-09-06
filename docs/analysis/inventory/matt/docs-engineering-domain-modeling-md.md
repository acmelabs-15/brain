---
package: matt
path: docs/engineering/domain-modeling.md
type: doc
bytes: 10742
unit: inv-matt-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/domain-modeling.md

## Purpose — required, verbatim
> "builds and sharpens a project's **ubiquitous language** while you are designing: challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — docs/engineering/domain-modeling.md:3

## Design intent — required
Documentation describing the active discipline of the `domain-modeling` skill, which enforces and sharpens a codebase's ubiquitous language during interactive design. Rather than passively reading vocabulary or batching summaries at the end of a session, it actively challenges ambiguous or conflicting terms, validates conversational assertions against existing code, writes settled canonical terms inline to `CONTEXT.md`, and gates hard-to-reverse architectural choices into ADRs under `docs/adr/`. It serves as a foundational vocabulary layer beneath conversational grilling and planning workflows.

## Phase — required
matt:vocabulary layer

## Inputs — required
- Conversational design assertions and proposed terminology during interactive design sessions.
- Existing codebase (`code`) for cross-referencing contradictions.
- Committed project glossary (`CONTEXT.md` at root or per-context `CONTEXT.md` directed by `CONTEXT-MAP.md`).
- Committed ADRs under `docs/adr/`.
- Repository instructions in `docs/agents/domain.md` (if present).

## Outputs — required
- `CONTEXT.md` at repository root (or per-context `CONTEXT.md` mapped by `CONTEXT-MAP.md`), containing settled terms with rejected synonyms listed under `_Avoid_`.
- Architecture Decision Records under `docs/adr/` (e.g. `docs/adr/NNNN-slug.md`).

## Invokes — required
- skill codebase-design — docs/engineering/domain-modeling.md:18
- skill grill-with-docs — docs/engineering/domain-modeling.md:19
- reference docs/agents/domain.md — docs/engineering/domain-modeling.md:50
- skill wayfinder — docs/engineering/domain-modeling.md:86
- skill triage — docs/engineering/domain-modeling.md:86
- skill improve-codebase-architecture — docs/engineering/domain-modeling.md:86
- skill ask-matt — docs/engineering/domain-modeling.md:86

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `domain-modeling` — docs/engineering/domain-modeling.md:3 — defined here
- `ubiquitous language` — docs/engineering/domain-modeling.md:3 — defined here
- `glossary` — docs/engineering/domain-modeling.md:3 — used here
- `session` — docs/engineering/domain-modeling.md:5 — used here
- `grill-with-docs` — docs/engineering/domain-modeling.md:9, 19, 55, 64, 86 — used here
- `wayfinder` — docs/engineering/domain-modeling.md:9, 86 — used here
- `models` — docs/engineering/domain-modeling.md:9 — used here
- `grilling` — docs/engineering/domain-modeling.md:9 — used here
- `ADR` — docs/engineering/domain-modeling.md:17, 27, 33, 42 — used here
- `codebase-design` — docs/engineering/domain-modeling.md:18, 86 — used here
- `seam` — docs/engineering/domain-modeling.md:18 — used here
- `interface` — docs/engineering/domain-modeling.md:18 — used here
- `CONTEXT-MAP.md` — docs/engineering/domain-modeling.md:26 — used here
- `_Avoid_` — docs/engineering/domain-modeling.md:37 — defined here
- `All three` — docs/engineering/domain-modeling.md:38 — defined here
- `spec` — docs/engineering/domain-modeling.md:40 — used here
- `ADR's three tests` — docs/engineering/domain-modeling.md:42 — defined here
- `three tests` — docs/engineering/domain-modeling.md:42, 79 — defined here
- `context` — docs/engineering/domain-modeling.md:58 — used here
- `bounded area` — docs/engineering/domain-modeling.md:58 — used here
- `ubiquitous-language` — docs/engineering/domain-modeling.md:60 — used here
- `DDD` — docs/engineering/domain-modeling.md:70 — used here
- `model-invoked reference` — docs/engineering/domain-modeling.md:86 — defined here
- `triage` — docs/engineering/domain-modeling.md:86 — used here
- `ticket` — docs/engineering/domain-modeling.md:86 — used here
- `tickets` — docs/engineering/domain-modeling.md:86 — used here
- `improve-codebase-architecture` — docs/engineering/domain-modeling.md:86 — used here
- `vocabulary layer` — docs/engineering/domain-modeling.md:86 — defined here
- `ask-matt` — docs/engineering/domain-modeling.md:86 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- Two artifacts, two bars
- Cross-referencing, and where it stops
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/engineering/domain-modeling.md:50 · docs/agents/domain.md referenced as repository instructions already read by the skills does not exist in sources/matt/.
- other · docs/engineering/domain-modeling.md:9-10 · Automatic invocation failure where models frequently load grilling and skip domain-modeling when instructed by grill-with-docs or wayfinder.
- other · docs/engineering/domain-modeling.md:44-45, 55 · Runaway artifact bloat where models treat permission to write to CONTEXT.md as license to persist every answer, causing the file to turn into a running spec.
- internal-contradiction · docs/engineering/domain-modeling.md:67 · Inherent convention conflict from coupling ADR and glossary guidance into a single skill, conflicting with repositories having established ADR templates and conventions.

## Observations
Documents the shift from a one-time `/ubiquitous-language` command to an active, inline `domain-modeling` discipline that runs underneath conversational planning skills (`grill-with-docs`, `wayfinder`, `triage`, `improve-codebase-architecture`). Distinguishes between low-friction glossary terms in `CONTEXT.md` (what a thing is, with rejected synonyms in `_Avoid_`) and high-barrier ADRs in `docs/adr/` (must pass all three ADR tests: hard to reverse, surprising without context, result of a real trade-off).

## Context cost
10742 bytes, ~2500 tokens. Loads no files directly; references `docs/agents/domain.md`.
