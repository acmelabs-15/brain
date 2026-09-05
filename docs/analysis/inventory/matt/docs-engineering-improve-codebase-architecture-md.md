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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/improve-codebase-architecture.md

## Purpose — required, verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one. It writes them up as a self-contained HTML report, and then [grills](https://www.aihero.dev/ai-coding-dictionary/grilling) you through whichever one you pick." — docs/engineering/improve-codebase-architecture.md:3

## Design intent — required
Conducts non-destructive codebase surveys to discover architectural deepening opportunities, targeting places where shallow modules can be consolidated behind higher-leverage, simpler interfaces. By applying the deletion test, biasing evaluations toward actively modified paths via git history, producing a standalone HTML report with categorized strength badges, and guiding the developer through candidate selection before entering the build chain, it structures routine refactoring without altering source code in place.

## Phase — required
cross-phase

## Inputs — required
Repository codebase, recent git commit history, `CONTEXT.md` domain vocabulary, and existing architectural decision records under `docs/adr/`.

## Outputs — required
Self-contained HTML review report written to the operating system temporary directory (`<tmpdir>/architecture-review-<timestamp>.html`), updates to `CONTEXT.md`, and rejected candidate ADRs in `docs/adr/`.

## Invokes — required
- skill grilling — docs/engineering/improve-codebase-architecture.md:3
- skill codebase-design — docs/engineering/improve-codebase-architecture.md:24
- skill wayfinder — docs/engineering/improve-codebase-architecture.md:25
- skill diagnosing-bugs — docs/engineering/improve-codebase-architecture.md:26
- skill to-spec — docs/engineering/improve-codebase-architecture.md:50
- skill to-tickets — docs/engineering/improve-codebase-architecture.md:50
- skill implement — docs/engineering/improve-codebase-architecture.md:50
- skill grill-with-docs — docs/engineering/improve-codebase-architecture.md:72
- skill domain-modeling — docs/engineering/improve-codebase-architecture.md:101
- skill ask-matt — docs/engineering/improve-codebase-architecture.md:101

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `deepening opportunities` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `session` — docs/engineering/improve-codebase-architecture.md:5 — used here
- `deletion test` — docs/engineering/improve-codebase-architecture.md:7 — defined here
- `agent` — docs/engineering/improve-codebase-architecture.md:11 — used here
- `spec` — docs/engineering/improve-codebase-architecture.md:18 — used here
- `vibe-coded` — docs/engineering/improve-codebase-architecture.md:19 — used here
- `depth` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `locality` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `seams` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `leverage` — docs/engineering/improve-codebase-architecture.md:38 — defined here
- `Top recommendation` — docs/engineering/improve-codebase-architecture.md:46 — defined here
- `models` — docs/engineering/improve-codebase-architecture.md:56 — used here
- `context window` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `tickets` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `harness` — docs/engineering/improve-codebase-architecture.md:84 — used here

## Structure
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## Depth, and the report that hunts for it
- ## What happens after you pick one
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/improve-codebase-architecture.md:56 Lacks a configured no-grill mode, causing weaker models to bypass report presentation and jump directly into lengthy grilling.
- `doc-drift` · docs/engineering/improve-codebase-architecture.md:60 HTML report depends on external CDNs for styles and diagrams, failing silently under strict network policies or SRI hooks.
- `other` · docs/engineering/improve-codebase-architecture.md:84 Hardcodes Claude Code Agent tool exploration syntax, degrading survey depth on other harnesses.

## Observations
Labels candidates with explicit confidence badges (`Strong`, `Worth exploring`, `Speculative`) to indicate expected value. Recommends focusing on one candidate per session to prevent context saturation.

## Context cost
11,814 bytes (~2,953 tokens). Documentation page for `improve-codebase-architecture` skill.
