---
package: matt
path: skills/engineering/grill-with-docs/SKILL.md
type: skill
bytes: 247
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/grill-with-docs/SKILL.md

## Purpose — required, verbatim
> "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go." — skills/engineering/grill-with-docs/SKILL.md:3

## Design intent — required
Serves as the primary user-invoked entry point for the main build chain, pairing the relentless questioning loop of `grilling` with inline documentation side effects from `domain-modeling`. By delegating directly to both skills, it establishes a shared vocabulary and documents load-bearing architectural decisions in `CONTEXT.md` and ADRs before implementation begins.

## Phase — required
matt:The Main Flow

## Inputs — required
User's proposed plan or design, current repository codebase, existing `CONTEXT.md` domain model, and architectural decision records in `docs/adr/`.

## Outputs — required
- `CONTEXT.md` glossary updates via domain-modeling
- Architectural decision records in `docs/adr/` via domain-modeling

## Invokes — required
- skill grilling — skills/engineering/grill-with-docs/SKILL.md:7
- skill domain-modeling — skills/engineering/grill-with-docs/SKILL.md:7

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:17
- doc README.md — README.md:101
- doc skills/engineering/README.md — skills/engineering/README.md:10
- doc docs/engineering/grill-with-docs.md — docs/engineering/grill-with-docs.md:3
- doc docs/productivity/grilling.md — docs/productivity/grilling.md:16

## Concepts named — required, verbatim
- `grill-with-docs` — skills/engineering/grill-with-docs/SKILL.md:2 — defined here
- `interview` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `ADR's` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `glossary` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `grilling` — skills/engineering/grill-with-docs/SKILL.md:7 — used here
- `domain-modeling` — skills/engineering/grill-with-docs/SKILL.md:7 — used here

## Structure
- `name: grill-with-docs` — skills/engineering/grill-with-docs/SKILL.md:2
- `description: A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go.` — skills/engineering/grill-with-docs/SKILL.md:3
- `disable-model-invocation: true` — skills/engineering/grill-with-docs/SKILL.md:4
- `Call the Skill tool twice, for "grilling" and "domain-modeling".` — skills/engineering/grill-with-docs/SKILL.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/engineering/grill-with-docs/SKILL.md:7: The skill body consists of a single instruction to call Skill twice for "grilling" and "domain-modeling", but as documented in docs/productivity/grilling.md:73, models across harnesses do not reliably load two delegated skills without explicit prompting.

## Observations
Ultra-concise composite skill that implements composition purely by instructing the agent to call the Skill tool for two underlying primitives: `grilling` (interview) and `domain-modeling` (doc generation).

## Context cost
247 bytes (~60 tokens). If `grilling` (SKILL.md 4,374 bytes) and `domain-modeling` (SKILL.md 3,331 bytes, CONTEXT-FORMAT.md 2,290 bytes, ADR-FORMAT.md 2,733 bytes) are loaded, total ~12,975 bytes (~3,240 tokens).
