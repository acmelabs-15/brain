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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Setup Matt Pocock Skills\"" — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `setup-matt-pocock-skills` repository scaffolding skill. Sets human-readable title and short description for UI listing, and explicitly sets `allow_implicit_invocation: false` so that Codex or ChatGPT models cannot implicitly run repository setup in the background without direct user command.

## Phase — required
matt:Setup

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill setup-matt-pocock-skills — skills/engineering/setup-matt-pocock-skills/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33
- doc skills/engineering/README.md — skills/engineering/README.md:7

## Concepts named — required, verbatim
- `interface` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:3 — defined here
- `policy` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:5 — defined here
- `Setup Matt Pocock Skills` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:2 — used here
- `Configure a repo for the skills` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides explicit invocation gating (`allow_implicit_invocation: false`) for OpenAI agent runtimes, ensuring parity with Claude Code's `disable-model-invocation: true`.

## Context cost
152 bytes, 6 lines, approximately 40 tokens.
