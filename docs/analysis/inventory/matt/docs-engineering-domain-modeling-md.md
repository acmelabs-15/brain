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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/domain-modeling.md

## Purpose — required, verbatim
> "`domain-modeling` builds and sharpens a project's **ubiquitous language** while you are designing: challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — docs/engineering/domain-modeling.md:3

## Design intent — required
Maintains domain integrity and prevents conceptual drift by actively enforcing ubiquitous language during design and grilling conversations. By persisting resolved terms to `CONTEXT.md` immediately upon resolution and recording major architectural choices as ADRs under `docs/adr/` only when meeting three strict criteria (hard to reverse, surprising without context, real trade-off), it prevents glossary bloat and ensures the glossary remains a precise domain dictionary rather than an implementation spec.

## Phase — required
cross-phase

## Inputs — required
Design proposals, domain entities, relationships, code cross-references, and candidate terms requiring conceptual disambiguation.

## Outputs — required
Immediate updates to `CONTEXT.md` (or context-mapped `CONTEXT.md` file) with canonical definitions and rejected synonyms under `_Avoid_`, and qualifying architectural decision records in `docs/adr/NNNN-slug.md`.

## Invokes — required
- skill codebase-design — docs/engineering/domain-modeling.md:18
- skill grill-with-docs — docs/engineering/domain-modeling.md:19
- skill wayfinder — docs/engineering/domain-modeling.md:86
- skill triage — docs/engineering/domain-modeling.md:86
- skill improve-codebase-architecture — docs/engineering/domain-modeling.md:86
- skill ask-matt — docs/engineering/domain-modeling.md:86

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ubiquitous language` — docs/engineering/domain-modeling.md:3 — defined here
- `session` — docs/engineering/domain-modeling.md:5 — used here
- `models` — docs/engineering/domain-modeling.md:9 — used here
- `grilling` — docs/engineering/domain-modeling.md:9 — used here
- `spec` — docs/engineering/domain-modeling.md:40 — used here
- `tickets` — docs/engineering/domain-modeling.md:86 — used here

## Structure
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
- `other` · docs/engineering/domain-modeling.md:9 Weak model invocation causes agents to load generic grilling and skip domain modeling during collaborative planning.
- `other` · docs/engineering/domain-modeling.md:44 Models routinely bloat `CONTEXT.md` with implementation details and conversation summaries instead of pure glossary definitions.
- `doc-drift` · docs/engineering/domain-modeling.md:50 Cross-referencing checks only code and committed docs, failing to consult closed issue tracker discussions where terminology was settled.
- `other` · docs/engineering/domain-modeling.md:67 Tightly couples glossary editing and ADR generation into one skill, hindering customization for repos with distinct ADR formats.

## Observations
Enforces three strict threshold gates for generating ADRs: hard to reverse, surprising without context, and a genuine trade-off. Explains why the glossary file is named `CONTEXT.md` rather than `GLOSSARY.md` to align with DDD bounded contexts indexed by `CONTEXT-MAP.md`.

## Context cost
10,742 bytes (~2,685 tokens). Documentation page for `domain-modeling` skill.
