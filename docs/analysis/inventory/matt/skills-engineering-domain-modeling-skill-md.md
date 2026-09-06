---
package: matt
path: skills/engineering/domain-modeling/SKILL.md
type: skill
bytes: 3331
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/domain-modeling/SKILL.md

## Purpose — required, verbatim
> "Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a CONTEXT.md, or recording or editing an ADR." — skills/engineering/domain-modeling/SKILL.md:3

## Design intent — required
Active conversational discipline for building and sharpening a project's ubiquitous domain model. Enforces continuous term challenges, sharpening fuzzy language, stress-testing boundaries with concrete edge-case scenarios, cross-referencing user claims against actual code, updating `CONTEXT.md` inline without batching, and lazily creating ADRs for decisions meeting strict permanence and trade-off criteria. Prohibits turning `CONTEXT.md` into an implementation scratchpad or spec.

## Phase — required
cross-phase

## Inputs — required
User descriptions of system behavior, terminology dilemmas, codebase definitions, `CONTEXT.md` and `CONTEXT-MAP.md` entries, and architectural trade-offs.

## Outputs — required
Updated `CONTEXT.md` files (using `CONTEXT-FORMAT.md`) and newly recorded ADRs in `docs/adr/` (using `ADR-FORMAT.md`).

## Invokes — required
- reference CONTEXT.md — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:1
- reference ADR — skills/engineering/domain-modeling/ADR-FORMAT.md:1

## Invoked by — required
- skill grill-with-docs — skills/engineering/grill-with-docs/SKILL.md:7
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:79
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:66
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:58
- doc domain-modeling — docs/engineering/domain-modeling.md:3
- doc README.md — README.md:210

## Concepts named — required, verbatim
- `domain model` — skills/engineering/domain-modeling/SKILL.md:3 — defined here
- `CONTEXT.md` — skills/engineering/domain-modeling/SKILL.md:3 — used here
- `ADR` — skills/engineering/domain-modeling/SKILL.md:3 — used here
- `docs/adr/` — skills/engineering/domain-modeling/SKILL.md:40 — used here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/SKILL.md:28 — used here
- `Hard to reverse` — skills/engineering/domain-modeling/SKILL.md:70 — used here
- `Surprising without context` — skills/engineering/domain-modeling/SKILL.md:71 — used here
- `trade-off` — skills/engineering/domain-modeling/SKILL.md:72 — used here

## Structure
- `# Domain Modeling`
- `## File structure`
- `## During the session`
- `### Challenge against the glossary`
- `### Sharpen fuzzy language`
- `### Discuss concrete scenarios`
- `### Cross-reference with code`
- `### Update CONTEXT.md inline`
- `### Offer ADRs sparingly`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Separates consuming vocabulary (a passive one-line reading habit) from changing vocabulary (this active discipline). Explicitly warns (line 64) that `CONTEXT.md` must remain strictly a glossary devoid of implementation details.

## Context cost
3331 bytes, 75 lines (plus 2733 bytes ADR-FORMAT.md, 2290 bytes CONTEXT-FORMAT.md), approximately 1500 tokens.
