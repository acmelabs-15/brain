---
package: matt
path: skills/misc/scaffold-exercises/agents/openai.yaml
type: skill
bytes: 108
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/scaffold-exercises/agents/openai.yaml, sha256: 525b33913340bea7947ad2de17f2a7c5fb94be543345fe80ae753b9a44ba601d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/scaffold-exercises/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Scaffold Exercises\"" — skills/misc/scaffold-exercises/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI Codex interface metadata for the `scaffold-exercises` skill, registering human-readable display title and concise descriptive summary for OpenAI-compatible agents.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill scaffold-exercises — skills/misc/scaffold-exercises/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/misc/scaffold-exercises/agents/openai.yaml:1 — defined here
- `display_name` — skills/misc/scaffold-exercises/agents/openai.yaml:2 — defined here
- `Scaffold Exercises` — skills/misc/scaffold-exercises/agents/openai.yaml:2 — defined here
- `short_description` — skills/misc/scaffold-exercises/agents/openai.yaml:3 — defined here
- `Scaffold lint-ready course exercises` — skills/misc/scaffold-exercises/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal tool interface metadata for Codex environments without implicit invocation constraints.

## Context cost
108 bytes, 4 lines, approximately 25 tokens.
