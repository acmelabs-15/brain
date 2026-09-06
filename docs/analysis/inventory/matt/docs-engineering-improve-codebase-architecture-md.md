---
package: matt
path: docs/engineering/improve-codebase-architecture.md
type: doc
bytes: 11814
unit: inv-matt-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/improve-codebase-architecture.md

## Purpose — required, verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one. It writes them up as a self-contained HTML report, and then [grills](https://www.aihero.dev/ai-coding-dictionary/grilling) you through whichever one you pick." — docs/engineering/improve-codebase-architecture.md:3

## Design intent — required
Documentation describing the purpose, workflow, and architectural rubric of the `improve-codebase-architecture` skill. Operating outside the main build loop as a periodic maintenance survey tool, it identifies structural decay and opportunities to deepen shallow modules without modifying production code during the run. It generates a self-contained HTML review report in the OS temporary directory with before/after diagrams and strength badges (`Strong`, `Worth exploring`, `Speculative`), filtering candidates via the deletion test and commit history recency. Once a candidate is selected, it leads an interactive grilling session to crystallize architectural decisions before routing the work into the main build chain (`to-spec` → `to-tickets` → `implement`).

## Phase — required
matt:periodic maintenance

## Inputs — required
- Existing codebase structure and recent git commit history (or target area/spec).
- Project glossary (`CONTEXT.md`) and existing ADRs in `docs/adr/`.
- User interactive selection of a candidate card from the generated HTML survey report.

## Outputs — required
- Standalone HTML architecture survey report: `<tmpdir>/architecture-review-<timestamp>.html`.
- Updated terms in `CONTEXT.md`.
- Architecture Decision Records (`docs/adr/`) recording accepted choices or rejected candidates.
- Aligned decisions ready for handoff to `to-spec`.

## Invokes — required
- skill codebase-design — docs/engineering/improve-codebase-architecture.md:24
- skill wayfinder — docs/engineering/improve-codebase-architecture.md:25
- skill diagnosing-bugs — docs/engineering/improve-codebase-architecture.md:26
- skill to-spec — docs/engineering/improve-codebase-architecture.md:50
- skill to-tickets — docs/engineering/improve-codebase-architecture.md:50
- skill implement — docs/engineering/improve-codebase-architecture.md:50
- skill grill-with-docs — docs/engineering/improve-codebase-architecture.md:72
- skill grilling — docs/engineering/improve-codebase-architecture.md:101
- skill domain-modeling — docs/engineering/improve-codebase-architecture.md:101
- skill ask-matt — docs/engineering/improve-codebase-architecture.md:101

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `improve-codebase-architecture` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `deepening opportunities` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `shallow module` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `deep one` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `grills` — docs/engineering/improve-codebase-architecture.md:3 — used here
- `session` — docs/engineering/improve-codebase-architecture.md:5 — used here
- `deletion test` — docs/engineering/improve-codebase-architecture.md:7 — defined here
- `agent` — docs/engineering/improve-codebase-architecture.md:11 — used here
- `spec` — docs/engineering/improve-codebase-architecture.md:18 — used here
- `vibe-coded` — docs/engineering/improve-codebase-architecture.md:19 — used here
- `seams` — docs/engineering/improve-codebase-architecture.md:20 — used here
- `codebase-design` — docs/engineering/improve-codebase-architecture.md:24 — used here
- `wayfinder` — docs/engineering/improve-codebase-architecture.md:25 — used here
- `diagnosing-bugs` — docs/engineering/improve-codebase-architecture.md:26 — used here
- `ADR` — docs/engineering/improve-codebase-architecture.md:32 — used here
- `depth` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `deep module` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `locality` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `leverage` — docs/engineering/improve-codebase-architecture.md:38 — defined here
- `Strong` — docs/engineering/improve-codebase-architecture.md:42 — defined here
- `Worth exploring` — docs/engineering/improve-codebase-architecture.md:43 — defined here
- `Speculative` — docs/engineering/improve-codebase-architecture.md:44 — defined here
- `Top recommendation` — docs/engineering/improve-codebase-architecture.md:46 — defined here
- `grilling` — docs/engineering/improve-codebase-architecture.md:50 — used here
- `to-spec` — docs/engineering/improve-codebase-architecture.md:50 — used here
- `to-tickets` — docs/engineering/improve-codebase-architecture.md:50 — used here
- `implement` — docs/engineering/improve-codebase-architecture.md:50 — used here
- `model` — docs/engineering/improve-codebase-architecture.md:56 — used here
- `context window` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `tickets` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `grill-with-docs` — docs/engineering/improve-codebase-architecture.md:72 — used here
- `harness` — docs/engineering/improve-codebase-architecture.md:84 — used here
- `periodic maintenance` — docs/engineering/improve-codebase-architecture.md:101 — defined here
- `domain-modeling` — docs/engineering/improve-codebase-architecture.md:101 — used here
- `ask-matt` — docs/engineering/improve-codebase-architecture.md:101 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- Depth, and the report that hunts for it
- What happens after you pick one
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other · docs/engineering/improve-codebase-architecture.md:56 · Weaker models frequently skip presenting the overview HTML report and jump directly into a lengthy grilling interrogation on the first candidate, lacking a documented no-grill flag.
- other · docs/engineering/improve-codebase-architecture.md:60 · Standalone HTML report fails silently to render diagrams when external Tailwind/Mermaid CDN scripts are blocked in offline or SRI-enforced environments.
- missing-path · docs/engineering/improve-codebase-architecture.md:88 · Missing TYPESCRIPT.md reference for translating abstract depth and seam concepts into concrete file/directory layouts.
- other · docs/engineering/improve-codebase-architecture.md:84 · Coupled to Claude Code's Agent tool with subagent_type=Explore, preventing harness-neutral exploration.

## Observations
Separates architectural surveying from code refactoring: the skill runs outside the main build loop to discover deepening opportunities, produces an HTML report outside the repository, and feeds decisions back into `to-spec` and `to-tickets`. Employs Ousterhout-style software design concepts (depth, shallow modules, information hiding, locality, leverage).

## Context cost
11814 bytes, ~2800 tokens. Does not load repository code directly into prompt upfront; generates external HTML report and invokes grilling on selected candidate.
