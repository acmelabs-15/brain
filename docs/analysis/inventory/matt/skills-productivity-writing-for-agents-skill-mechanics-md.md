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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/writing-for-agents/SKILL-MECHANICS.md

## Purpose — required, verbatim
> "The skill-specific branch of [`writing-for-agents`](SKILL.md): what changes when the document is a skill (frontmatter, the invocation choice, and router skills). Everything else about writing it is the universal reference in `SKILL.md`." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3 (no explicit purpose statement)

## Design intent — required
Specialized companion reference to `writing-for-agents` addressing the unique architectural requirements of authoring skills. Details the trade-offs between model-invoked skills (permanent context load via always-loaded descriptions, allowing autonomous discovery and inter-skill invocation) and user-invoked skills (`disable-model-invocation: true`, zero context load, shifted to human cognitive load). Explains splitting skills by invocation trigger words, handling shared references across user-invoked skills, and designing router skills.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Invoked by — required
- skill skills/productivity/writing-for-agents/SKILL.md — skills/productivity/writing-for-agents/SKILL.md:8

## Concepts named — required, verbatim
- `writing-for-agents` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3 — used here
- `model-invoked` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — defined here
- `description` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — used here
- `disable-model-invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:9 — used here
- `user-invoked` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:10 — defined here
- `router skill` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:22 — defined here

## Structure
- `# Skill mechanics` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:1
- `## Invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:5
- `## Splitting by invocation` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:16
- `## Router skills` — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:20

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines the package-wide taxonomy separating user-invoked skills (human typed `/command`, zero context load) from model-invoked skills (description always in context, agent discovery). Introduces the router skill pattern (exemplified by `ask-matt`), where a user-invoked skill assists the user in remembering and navigating multiple user-invoked skills.

## Context cost
2629 bytes (~600 tokens); 13515 bytes (~3300 tokens) with referenced `SKILL.md`.
