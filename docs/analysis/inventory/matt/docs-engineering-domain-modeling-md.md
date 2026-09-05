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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/domain-modeling.md

## Purpose — required, verbatim
> "`domain-modeling` builds and sharpens a project's **ubiquitous language** while you are designing: challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — docs/engineering/domain-modeling.md:3

## Design intent — required
Documentation and reference guide for the `domain-modeling` skill, explaining how active domain modeling functions as an inline conversational discipline rather than passive vocabulary borrowing or post-hoc glossary generation. It establishes the operational separation between `CONTEXT.md` (a strict glossary of canonical terms and avoided synonyms) and Architecture Decision Records (requiring a three-part test: hard to reverse, surprising without context, and a real trade-off). It guides practitioners away from common pitfalls such as allowing models to bloat glossary files into running specifications.

## Phase — required
cross-phase

## Inputs — required
Conversational design statements, codebase implementations (cross-referenced for contradictions), existing root or per-context `CONTEXT.md` files (guided by `CONTEXT-MAP.md`), existing ADRs under `docs/adr/`, and repository-specific guidance in `docs/agents/domain.md`.

## Outputs — required
Settled canonical terms written inline to `CONTEXT.md` (with rejected synonyms recorded under `_Avoid_`) and Architecture Decision Records written to `docs/adr/NNNN-slug.md`.

## Invokes — required
- skill grill-with-docs — docs/engineering/domain-modeling.md:9
- skill wayfinder — docs/engineering/domain-modeling.md:9
- skill grilling — docs/engineering/domain-modeling.md:9
- skill codebase-design — docs/engineering/domain-modeling.md:18
- skill triage — docs/engineering/domain-modeling.md:61
- skill improve-codebase-architecture — docs/engineering/domain-modeling.md:86
- skill ask-matt — docs/engineering/domain-modeling.md:86

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ubiquitous language` — docs/engineering/domain-modeling.md:3 — defined here
- `glossary` — docs/engineering/domain-modeling.md:3 — used here
- `CONTEXT.md` — docs/engineering/domain-modeling.md:5 — used here
- `session` — docs/engineering/domain-modeling.md:5 — used here
- `grilling` — docs/engineering/domain-modeling.md:9 — used here
- `canonical term` — docs/engineering/domain-modeling.md:15 — defined here
- `ADR` — docs/engineering/domain-modeling.md:17 — used here
- `CONTEXT-MAP.md` — docs/engineering/domain-modeling.md:26 — used here
- `_Avoid_` — docs/engineering/domain-modeling.md:37 — defined here
- `spec` — docs/engineering/domain-modeling.md:40 — used here
- `cross-referencing` — docs/engineering/domain-modeling.md:46 — defined here
- `docs/agents/domain.md` — docs/engineering/domain-modeling.md:50 — used here
- `ubiquitous-language` — docs/engineering/domain-modeling.md:60 — used here
- `DDD` — docs/engineering/domain-modeling.md:70 — used here
- `aggregates` — docs/engineering/domain-modeling.md:70 — used here
- `synonym control` — docs/engineering/domain-modeling.md:70 — defined here
- `model-invoked reference` — docs/engineering/domain-modeling.md:86 — defined here

## Structure
- What it does — docs/engineering/domain-modeling.md:1
- When to reach for it — docs/engineering/domain-modeling.md:7
- Prerequisites — docs/engineering/domain-modeling.md:22
- Two artifacts, two bars — docs/engineering/domain-modeling.md:31
- Cross-referencing, and where it stops — docs/engineering/domain-modeling.md:46
- Common questions — docs/engineering/domain-modeling.md:52
- It's working if — docs/engineering/domain-modeling.md:75
- Where it fits — docs/engineering/domain-modeling.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The document highlights that automatic invocation is the weakest joint of `domain-modeling` because models frequently load `grilling` and skip `domain-modeling` when invoked via higher-level skills (docs/engineering/domain-modeling.md:9). It emphasizes that `CONTEXT.md` is strictly a glossary and warns that models tend to treat permission to write to it as permission to dump full specifications (docs/engineering/domain-modeling.md:44). It explicitly details the retirement of `/ubiquitous-language` in favor of inline continuous modeling (docs/engineering/domain-modeling.md:60-61).

## Context cost
10742 bytes, ~2500 tokens.
