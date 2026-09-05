---
package: matt
path: skills/engineering/setup-matt-pocock-skills/triage-labels.md
type: skill
bytes: 1045
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/triage-labels.md

## Purpose — required, verbatim
> "The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker." — skills/engineering/setup-matt-pocock-skills/triage-labels.md:3

## Design intent — required
Seed template deployed to `docs/agents/triage-labels.md` when the `triage` skill is present. Establishes a bidirectional mapping between the five canonical triage roles assumed by the skills (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) and the custom label strings used by a specific repository's issue tracker. Decouples skill logic from tracker-specific taxonomies so existing team workflows are preserved without modifying skill prompts.

## Phase — required
none

## Inputs — required
Repository issue tracker label vocabulary; user label overrides collected during setup.

## Outputs — required
Emitted as `docs/agents/triage-labels.md` into consumer repositories during setup.

## Invokes — required
none

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:109

## Concepts named — required, verbatim
- `Triage Labels` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:1 — defined here
- `canonical triage roles` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:3 — defined here
- `issue tracker` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:3 — used here
- `needs-triage` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:7 — defined here
- `needs-info` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:8 — defined here
- `ready-for-agent` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:9 — defined here
- `AFK agent` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:9 — used here
- `ready-for-human` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:10 — defined here
- `wontfix` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:11 — defined here
- `AFK-ready triage label` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:13 — used here

## Structure
- Triage Labels — skills/engineering/setup-matt-pocock-skills/triage-labels.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a clean mapping table separating skill internal nomenclature from tracker-specific label names. Instructs agents to substitute the mapped tracker label string whenever a role is referenced in a skill flow.

## Context cost
1045 bytes, 16 lines, ~240 tokens. Loads no external files.
