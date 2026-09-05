---
package: matt
path: skills/engineering/setup-matt-pocock-skills/domain.md
type: skill
bytes: 2033
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/domain.md

## Purpose — required, verbatim
> "How the engineering skills should consume this repo's domain documentation when exploring the codebase." — skills/engineering/setup-matt-pocock-skills/domain.md:3

## Design intent — required
Reference documentation seeded into `docs/agents/domain.md` by `/setup-matt-pocock-skills` to guide how engineering skills consume repository domain knowledge. Establishes rules for reading `CONTEXT.md`, `CONTEXT-MAP.md`, and ADRs before exploring code. Instructs models to proceed silently when domain docs are missing rather than nagging upfront, strictly adhere to established glossary vocabulary without drifting to synonyms, and explicitly flag any proposed contradiction with an existing ADR.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill domain-modeling — skills/engineering/setup-matt-pocock-skills/domain.md:11
- skill grill-with-docs — skills/engineering/setup-matt-pocock-skills/domain.md:11
- skill improve-codebase-architecture — skills/engineering/setup-matt-pocock-skills/domain.md:11

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:110

## Concepts named — required, verbatim
- `Domain Docs` — skills/engineering/setup-matt-pocock-skills/domain.md:1 — defined here
- `CONTEXT.md` — skills/engineering/setup-matt-pocock-skills/domain.md:7 — used here
- `CONTEXT-MAP.md` — skills/engineering/setup-matt-pocock-skills/domain.md:8 — used here
- `context` — skills/engineering/setup-matt-pocock-skills/domain.md:8 — used here
- `ADRs` — skills/engineering/setup-matt-pocock-skills/domain.md:9 — used here
- `Single-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:15 — defined here
- `Multi-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:26 — defined here
- `glossary` — skills/engineering/setup-matt-pocock-skills/domain.md:41 — used here
- `vocabulary` — skills/engineering/setup-matt-pocock-skills/domain.md:41 — used here
- `synonyms` — skills/engineering/setup-matt-pocock-skills/domain.md:43 — used here
- `ADR conflicts` — skills/engineering/setup-matt-pocock-skills/domain.md:47 — defined here

## Structure
- `# Domain Docs` — skills/engineering/setup-matt-pocock-skills/domain.md:1
- `## Before exploring, read these` — skills/engineering/setup-matt-pocock-skills/domain.md:5
- `## File structure` — skills/engineering/setup-matt-pocock-skills/domain.md:13
- `## Use the glossary's vocabulary` — skills/engineering/setup-matt-pocock-skills/domain.md:41
- `## Flag ADR conflicts` — skills/engineering/setup-matt-pocock-skills/domain.md:47

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces a clear failure-mode prevention rule: "If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront."
- Clarifies that domain documentation files are created lazily by `/domain-modeling` when terms or decisions actually resolve.
- Distinguishes between root system-wide ADRs (`docs/adr/`) and context-scoped ADRs (`src/<context>/docs/adr/`).

## Context cost
2033 bytes (~508 tokens). Compact reference document.
