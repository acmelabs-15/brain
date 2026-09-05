---
package: matt
path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml
type: skill
bytes: 152
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml, sha256: 9527de0110541c45712319025155aeab8dc7d77c6ed6e5e83271bab1851ab939}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Configure a repo for the skills\"" — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `setup-matt-pocock-skills` repository scaffolding skill. Sets the display name (`Setup Matt Pocock Skills`), short description (`Configure a repo for the skills`), and enforces `policy.allow_implicit_invocation: false`. This guarantees that the setup flow is exclusively human-invoked and cannot be called autonomously by an agent or other skill.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:1
- `policy:` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces user-only invocation via `policy.allow_implicit_invocation: false`, directly matching `disable-model-invocation: true` in `skills/engineering/setup-matt-pocock-skills/SKILL.md`.
- Prevents recursive or autonomous invocation loops by agents or preconditions in other skills.

## Context cost
152 bytes (~38 tokens). Compact agent harness configuration file.
