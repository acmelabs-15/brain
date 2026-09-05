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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/domain.md

## Purpose — required, verbatim
> "How the engineering skills should consume this repo's domain documentation when exploring the codebase." — skills/engineering/setup-matt-pocock-skills/domain.md:3

## Design intent — required
Seed template deployed to `docs/agents/domain.md` by `setup-matt-pocock-skills`. Establishes the consumption rules for domain documentation (`CONTEXT.md`, `CONTEXT-MAP.md`, and `docs/adr/`) across the engineering skill suite. Instructs agents to proceed silently if these files do not yet exist (as `/domain-modeling` creates them lazily), adhere strictly to glossary vocabulary without synonym drift, and explicitly highlight ADR conflicts rather than silently overriding prior architectural decisions.

## Phase — required
none

## Inputs — required
Repo root `CONTEXT.md` or `CONTEXT-MAP.md`, and ADR markdown files under `docs/adr/` or `src/<context>/docs/adr/`.

## Outputs — required
Emitted as `docs/agents/domain.md` into consumer repositories during setup.

## Invokes — required
- skill domain-modeling — skills/engineering/setup-matt-pocock-skills/domain.md:11
- skill grill-with-docs — skills/engineering/setup-matt-pocock-skills/domain.md:11
- skill improve-codebase-architecture — skills/engineering/setup-matt-pocock-skills/domain.md:11

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:110

## Concepts named — required, verbatim
- `Domain Docs` — skills/engineering/setup-matt-pocock-skills/domain.md:1 — defined here
- `CONTEXT.md` — skills/engineering/setup-matt-pocock-skills/domain.md:7 — defined here
- `CONTEXT-MAP.md` — skills/engineering/setup-matt-pocock-skills/domain.md:8 — defined here
- `docs/adr/` — skills/engineering/setup-matt-pocock-skills/domain.md:9 — defined here
- `ADRs` — skills/engineering/setup-matt-pocock-skills/domain.md:9 — used here
- `proceed silently` — skills/engineering/setup-matt-pocock-skills/domain.md:11 — defined here
- `Single-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:15 — defined here
- `Multi-context repo` — skills/engineering/setup-matt-pocock-skills/domain.md:26 — defined here
- `glossary` — skills/engineering/setup-matt-pocock-skills/domain.md:41 — used here
- `domain concept` — skills/engineering/setup-matt-pocock-skills/domain.md:43 — used here
- `ADR conflicts` — skills/engineering/setup-matt-pocock-skills/domain.md:47 — defined here

## Structure
- Before exploring, read these — skills/engineering/setup-matt-pocock-skills/domain.md:5
- File structure — skills/engineering/setup-matt-pocock-skills/domain.md:13
- Use the glossary's vocabulary — skills/engineering/setup-matt-pocock-skills/domain.md:41
- Flag ADR conflicts — skills/engineering/setup-matt-pocock-skills/domain.md:47

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines single-context vs. multi-context repo layouts and establishes the lazy-creation convention: missing domain files should not be flagged as errors during exploration because `/domain-modeling` creates them on demand.

## Context cost
2033 bytes, 52 lines, ~450 tokens. Loads no external files.
