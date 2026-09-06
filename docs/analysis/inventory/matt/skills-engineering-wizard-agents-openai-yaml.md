---
package: matt
path: skills/engineering/wizard/agents/openai.yaml
type: skill
bytes: 96
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wizard/agents/openai.yaml, sha256: 98f44d682d58e262f160dc59a8befc365e0aa65820dd0261864af26aa8e59d83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/wizard/agents/openai.yaml

## Purpose — required, verbatim
> "Generate an interactive setup wizard" — skills/engineering/wizard/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Codex agent interface declaration for the `wizard` skill. Declares display name ("Wizard") and short description ("Generate an interactive setup wizard"). Omits `policy.allow_implicit_invocation: false`, allowing model-initiated generation of interactive setup wizards when complex manual setup or migration procedures are required.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill wizard — skills/engineering/wizard/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/wizard/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/wizard/agents/openai.yaml:2 — defined here
- `Wizard` — skills/engineering/wizard/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/wizard/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
4 lines, 96 bytes. Intentionally omits `policy` restrictions, enabling OpenAI Codex agents to invoke wizard generation autonomously when users need assistance navigating external dashboards or provisioning infrastructure.

## Context cost
96 bytes, 4 lines, ~20 tokens. Loads no external files.
