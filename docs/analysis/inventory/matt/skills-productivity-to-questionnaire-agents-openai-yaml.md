---
package: matt
path: skills/productivity/to-questionnaire/agents/openai.yaml
type: skill
bytes: 166
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/to-questionnaire/agents/openai.yaml, sha256: 9e8a06c38c8842eea8d4922cb9d1ead8e3ace647bab259b943c994a1b4742bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/to-questionnaire/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Front-load questions into a doc for someone to answer\"" — skills/productivity/to-questionnaire/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `to-questionnaire` skill. Sets the display name (`To Questionnaire`), provides a concise summary (`Front-load questions into a doc for someone to answer`), and enforces `allow_implicit_invocation: false`, guaranteeing that the skill is strictly human-invoked and never triggered autonomously by an agent.

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
- `display_name` — skills/productivity/to-questionnaire/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/to-questionnaire/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/productivity/to-questionnaire/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/productivity/to-questionnaire/agents/openai.yaml:1
- `policy:` — skills/productivity/to-questionnaire/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures the OpenAI Codex equivalent of Claude Code's `disable-model-invocation: true` policy via `policy.allow_implicit_invocation: false`.

## Context cost
166 bytes (~40 tokens). Interface configuration metadata; negligible context footprint.
