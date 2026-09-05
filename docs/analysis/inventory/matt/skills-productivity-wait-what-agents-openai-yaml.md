---
package: matt
path: skills/productivity/wait-what/agents/openai.yaml
type: skill
bytes: 158
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/wait-what/agents/openai.yaml, sha256: b41faadf741d51e4ea184148b2d1854d93f947aaf754c7844f70a00f04194999}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/wait-what/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Re-pitch that: simpler, with the context I'm missing\"" — skills/productivity/wait-what/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `wait-what` skill. Sets the display name (`Wait What`), provides a concise summary (`Re-pitch that: simpler, with the context I'm missing`), and configures `policy.allow_implicit_invocation: false`, ensuring it is strictly human-invoked and never triggered implicitly by an agent.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `display_name` — skills/productivity/wait-what/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/wait-what/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/productivity/wait-what/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/productivity/wait-what/agents/openai.yaml:1
- `policy:` — skills/productivity/wait-what/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures OpenAI Codex policy metadata (`allow_implicit_invocation: false`), directly mirroring Claude Code's `disable-model-invocation: true`.

## Context cost
158 bytes (~40 tokens). Interface configuration metadata; negligible context footprint.
