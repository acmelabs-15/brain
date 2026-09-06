---
package: matt
path: skills/in-progress/loop-me/agents/openai.yaml
type: skill
bytes: 140
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/loop-me/agents/openai.yaml, sha256: b66fa10079957051be6a812f45e55b67ac394b71d5ba88349962b4c9205802c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/loop-me/agents/openai.yaml

## Purpose — required, verbatim
> "Spec the workflows you want to build" — skills/in-progress/loop-me/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI Codex agent interface declaration for the `loop-me` skill. Declares display name ("Loop Me") and short description. Sets `policy.allow_implicit_invocation: false` to enforce explicit user-only invocation in OpenAI Codex environments, mirroring Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill loop-me — skills/in-progress/loop-me/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/in-progress/loop-me/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/loop-me/agents/openai.yaml:2 — defined here
- `Loop Me` — skills/in-progress/loop-me/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/loop-me/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/loop-me/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/loop-me/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Codex configuration metadata for `loop-me`. Disallows implicit invocation so models do not initiate stateful workflow interview loops unprompted.

## Context cost
140 bytes, 6 lines, ~30 tokens. Loads no external files.
