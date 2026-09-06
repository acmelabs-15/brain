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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/triage-labels.md

## Purpose — required, verbatim
> "The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker." — skills/engineering/setup-matt-pocock-skills/triage-labels.md:3

## Design intent — required
Seed template defining the mapping between the five canonical triage role names in `mattpocock/skills` and repository-specific issue tracker label strings. Allows host repositories to preserve customized label vocabularies (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) without breaking triage workflow integration across engineering skills.

## Phase — required
matt:Setup

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:109

## Concepts named — required, verbatim
- `Triage Labels` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:1 — defined here
- `needs-triage` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:7 — used here
- `needs-info` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:8 — used here
- `ready-for-agent` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:9 — used here
- `ready-for-human` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:10 — used here
- `wontfix` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:11 — used here

## Structure
- `# Triage Labels` — skills/engineering/setup-matt-pocock-skills/triage-labels.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Only maps the five state labels. Category labels (`bug`, `feature`) are also required during triage execution, but are not parameterized in this template.

## Context cost
1045 bytes, 16 lines, approximately 240 tokens.
