---
package: matt
path: external/grill-with-docs.md
type: doc
bytes: 362890
unit: inv-matt-16
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/grill-with-docs.md

## Purpose — required, verbatim
> "Get interviewed about a plan, and record the decisions." — external/grill-with-docs.md:24

## Design intent — required
Interviews a developer about an unformed plan or architecture against an existing codebase and captures settled vocabulary and architectural decisions on disk as the conversation progresses. Unlike stateless grilling, it produces persistent artifacts: definitions are immediately written to `CONTEXT.md` as pure vocabulary, and decisions clearing all three ADR gates are saved to `docs/adr/`. It establishes common ground and precise domain terms before spec synthesis begins, preventing later drift and ambiguity across the build chain.

## Phase — required
matt:The Main Flow

## Inputs — required
Proposed feature or architectural change, repository codebase context, existing `CONTEXT.md` glossary, and `docs/adr/` records.

## Outputs — required
- `CONTEXT.md` updates (inline glossary definitions) — external/grill-with-docs.md:37
- `docs/adr/NNNN-*.md` records (for decisions clearing all three gates) — external/grill-with-docs.md:37

## Invokes — required
- skill grill-me — external/grill-with-docs.md:30
- skill wayfinder — external/grill-with-docs.md:30
- skill grilling — external/grill-with-docs.md:34
- skill domain-modeling — external/grill-with-docs.md:34
- skill to-spec — external/grill-with-docs.md:52
- skill to-tickets — external/grill-with-docs.md:65
- skill implement — external/grill-with-docs.md:65
- skill code-review — external/grill-with-docs.md:65
- skill ask-matt — external/grill-with-docs.md:66
- skill setup-matt-pocock-skills — external/grill-with-docs.md:66

## Invoked by — required
none

## Concepts named — required, verbatim
- `stateful` — external/grill-with-docs.md:26 — defined here
- `CONTEXT.md` — external/grill-with-docs.md:26 — used here
- `ADR` — external/grill-with-docs.md:26 — used here
- `single-session` — external/grill-with-docs.md:29 — defined here
- `multi-session` — external/grill-with-docs.md:31 — defined here
- `glossary` — external/grill-with-docs.md:33 — defined here
- `paper trail` — external/grill-with-docs.md:35 — defined here
- `domain language` — external/grill-with-docs.md:39 — defined here
- `three gates` — external/grill-with-docs.md:44 — used here
- `delegation` — external/grill-with-docs.md:46 — used here
- `main flow` — external/grill-with-docs.md:52 — used here
- `build chain` — external/grill-with-docs.md:64 — defined here
- `shared understanding` — external/grill-with-docs.md:66 — defined here

## Structure
- # The /grill-with-docs Skill — external/grill-with-docs.md:24
- ## What it does — external/grill-with-docs.md:24
- ## When to reach for it — external/grill-with-docs.md:27
- ## Prerequisites — external/grill-with-docs.md:32
- ## The paper trail — external/grill-with-docs.md:35
- ## Common questions — external/grill-with-docs.md:40
- ## It's working if — external/grill-with-docs.md:55
- ## Where it fits — external/grill-with-docs.md:63
- ## Related reading — external/grill-with-docs.md:66
- ## Skill actions — external/grill-with-docs.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/grill-with-docs.md:46: Fragile two-step delegation via `Call the Skill tool twice` frequently fails in harness agents, resulting in missed loading of `grilling` and `domain-modeling`.
- `doc-drift` · external/grill-with-docs.md:24: External documentation subtitle states "Get interviewed about a plan, and record the decisions." whereas SKILL.md:3 states "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go."
- `doc-drift` · external/grill-with-docs.md:54: Documents known community confusion over skill naming with open proposal to rename to `grill-domain-model` to accurately reflect its strict restriction to glossary and ADR persistence.
- `other` · external/grill-with-docs.md:48: Substantive design limitation where all conversational decisions that fail ADR qualification remain trapped in conversational context and are lost upon clearing.

## Observations
Stresses that `CONTEXT.md` is strictly a glossary and must never hold implementation specifications or scratchpad notes. Explicitly identifies the single-session vs. multi-session dividing line between `grill-with-docs` and `wayfinder`. Serves as the first phase of the main build chain, feeding directly into `to-spec` before any code is written.

## Context cost
362890 bytes, ~73000 tokens (HTML snapshot including full inline hydration payload).
