---
package: matt
path: skills/engineering/research/agents/openai.yaml
type: skill
bytes: 94
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/research/agents/openai.yaml, sha256: 9b4c470d63221c1f68f22df70b83e2f12401b317babe0d1b7b5f24a974474d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/research/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Research from high-trust sources\"" — skills/engineering/research/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `research` skill. Establishes the display title (`Research`) and provides a concise summary description (`Research from high-trust sources`). Because it omits `policy.allow_implicit_invocation: false`, the skill permits model-initiated execution, aligning with its design as an autonomous background research delegate.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/engineering/research/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/research/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/research/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Omits `policy: allow_implicit_invocation: false`, enabling model-initiated invocation across OpenAI-compatible harnesses while keeping configuration minimal.
- Directly mirrors the model-invoked design of `skills/engineering/research/SKILL.md`.

## Context cost
94 bytes (~24 tokens). Harness configuration metadata; negligible context overhead.
