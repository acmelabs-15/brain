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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/grill-with-docs/SKILL.md

## Purpose — required, verbatim
> "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go." — skills/engineering/grill-with-docs/SKILL.md:3

## Design intent — required
A composite user-invoked orchestrator positioned at the start of matt's primary engineering flow. Rather than implementing questioning or persistence logic directly, it delegates the conversational interrogation to the `grilling` skill and domain documentation capture to `domain-modeling`. This ensures that a plan is rigorously challenged while capturing settled terms in `CONTEXT.md` and hard architectural decisions as ADRs. Marked with `disable-model-invocation: true` so that it is explicitly initiated by the user rather than invoked autonomously by the model.

## Phase — required
none

## Inputs — required
User-provided plan, design concept, or problem statement; existing repository context (`CONTEXT.md`, `docs/adr/`).

## Outputs — required
Domain glossary entries in `CONTEXT.md` and architecture decision records in `docs/adr/` produced via delegated child skills.

## Invokes — required
- skill grilling — skills/engineering/grill-with-docs/SKILL.md:7
- skill domain-modeling — skills/engineering/grill-with-docs/SKILL.md:7

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:17
- doc README.md — skills/engineering/README.md:10

## Concepts named — required, verbatim
- `interview` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `ADR's` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `glossary` — skills/engineering/grill-with-docs/SKILL.md:3 — used here
- `disable-model-invocation` — skills/engineering/grill-with-docs/SKILL.md:4 — used here
- `Skill tool` — skills/engineering/grill-with-docs/SKILL.md:7 — used here
- `grilling` — skills/engineering/grill-with-docs/SKILL.md:7 — used here
- `domain-modeling` — skills/engineering/grill-with-docs/SKILL.md:7 — used here

## Structure
(no headings; flat prompt)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Extremely compact 8-line orchestrator prompt. Downstream documentation in `docs/productivity/grilling.md` notes a known ecosystem limitation where agents instructed to call the Skill tool twice sometimes fail to load both child skills.

## Context cost
247 bytes, 8 lines, ~60 tokens. Loads `grilling` and `domain-modeling` skills at runtime.
