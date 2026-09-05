---
package: matt
path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md
type: skill
bytes: 2629
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/writing-for-agents/SKILL-MECHANICS.md

## Purpose — required, verbatim
> "The skill-specific branch of [`writing-for-agents`](SKILL.md): what changes when the document is a skill (frontmatter, the invocation choice, and router skills). Everything else about writing it is the universal reference in `SKILL.md`." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Design intent — required
Skill-specific reference companion to `writing-for-agents/SKILL.md`. Formulates the technical mechanics that apply specifically when an agent-facing document is packaged as a skill. Defines the binary trade-off between model-invoked skills (permanent context load via always-loaded descriptions in exchange for autonomous agent discovery and inter-skill invocation) and user-invoked skills (`disable-model-invocation: true`, zero context load, spending human cognitive load). Explains when to split skills by invocation trigger and introduces the concept of router skills (`ask-matt`) to manage cognitive load across multiple user-invoked skills.

## Phase — required
cross-phase

## Inputs — required
Referenced from `skills/productivity/writing-for-agents/SKILL.md` when the document being written or edited is a skill.

## Outputs — required
Architectural guidance on skill frontmatter, description tuning, invocation choice (`disable-model-invocation`), splitting boundaries, and router skills.

## Invokes — required
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3
- reference SKILL.md — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Invoked by — required
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL.md:8
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:7

## Concepts named — required, verbatim
- `Skill mechanics` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:1 — defined here
- `writing-for-agents` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3 — used here
- `skill` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3 — used here
- `frontmatter` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3 — used here
- `Invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:5 — defined here
- `model-invoked` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — defined here
- `description` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — used here
- `context pointer` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — used here
- `context load` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — used here
- `user-invoked` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:10 — defined here
- `cognitive load` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:10 — used here
- `disable-model-invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:10 — used here
- `Splitting by invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:16 — defined here
- `leading word` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:18 — used here
- `Router skills` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:20 — defined here
- `router skill` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:22 — defined here

## Structure
- Invocation — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:5
- Splitting by invocation — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:16
- Router skills — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:20

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies progressive disclosure by isolating skill-packaging mechanics out of the core `SKILL.md` document, keeping universal writing principles clean while providing deep reference on invocation mechanics. Clearly states the architectural rule that user-invoked skills cannot invoke one another or share reference via skill descriptions, necessitating plain external reference files or router skills.

## Context cost
2629 bytes, 23 lines, approximately 580 tokens. Loaded conditionally via context pointer from `SKILL.md:8`.
