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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/domain.md

## Purpose — required, verbatim
> "How the engineering skills should consume this repo's domain documentation when exploring the codebase." — skills/engineering/setup-matt-pocock-skills/domain.md:3

## Design intent — required
Reference template intended to be copied to `docs/agents/domain.md` by `setup-matt-pocock-skills`. Establishes standard consumer rules for engineering skills when reading domain architecture documentation: inspecting `CONTEXT.md`, `CONTEXT-MAP.md`, and `docs/adr/`; proceeding silently without warning if files do not yet exist (deferring lazy creation to `/domain-modeling`); adhering strictly to vocabulary defined in the domain glossary; and explicitly surfacing any conflicts with existing Architecture Decision Records (ADRs).

## Phase — required
matt:Explore

## Inputs — required
Existing domain documentation files in host repository: `CONTEXT.md`, `CONTEXT-MAP.md`, and ADR files under `docs/adr/`.

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
- `docs/adr/` — skills/engineering/setup-matt-pocock-skills/domain.md:9 — used here
- `domain-modeling` — skills/engineering/setup-matt-pocock-skills/domain.md:11 — used here
- `grill-with-docs` — skills/engineering/setup-matt-pocock-skills/domain.md:11 — used here
- `improve-codebase-architecture` — skills/engineering/setup-matt-pocock-skills/domain.md:11 — used here
- `Single-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:15 — used here
- `Multi-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:26 — used here
- `glossary` — skills/engineering/setup-matt-pocock-skills/domain.md:43 — used here
- `ADR-0007` — skills/engineering/setup-matt-pocock-skills/domain.md:51 — used here

## Structure
- `# Domain Docs` — skills/engineering/setup-matt-pocock-skills/domain.md:1
- `## Before exploring, read these` — skills/engineering/setup-matt-pocock-skills/domain.md:5
- `## File structure` — skills/engineering/setup-matt-pocock-skills/domain.md:13
- `## Use the glossary's vocabulary` — skills/engineering/setup-matt-pocock-skills/domain.md:41
- `## Flag ADR conflicts` — skills/engineering/setup-matt-pocock-skills/domain.md:47

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/engineering/setup-matt-pocock-skills/domain.md:3 · The repository path `docs/agents/domain.md` referenced in documentation (such as docs/engineering/domain-modeling.md:50) as an existing configuration file read by skills does not exist in the source repository root (sources/matt/); this template provides the un-instantiated seed that setup-matt-pocock-skills scaffolds into consumer repos.

## Observations
Codifies graceful degradation: skills proceed silently when domain documentation is absent, avoiding nagging or premature file generation until `/domain-modeling` is invoked.

## Context cost
2033 bytes, 52 lines, approximately 450 tokens.
