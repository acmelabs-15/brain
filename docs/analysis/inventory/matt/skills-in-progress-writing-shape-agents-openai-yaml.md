---
package: matt
path: skills/in-progress/writing-shape/agents/openai.yaml
type: skill
bytes: 144
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-shape/agents/openai.yaml, sha256: 56de45430e23104ff178415f5ecf7821d51a9cfabd8814b1607ebf39da2ef5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-shape/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Shape raw material into an article\"" — skills/in-progress/writing-shape/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `writing-shape` in-progress skill. Sets the interface display name to "Writing Shape" and short description to "Shape raw material into an article", enforcing `allow_implicit_invocation: false` so that paragraph-by-paragraph article composition is explicitly initiated by a human user.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/in-progress/writing-shape/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-shape/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/writing-shape/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/writing-shape/agents/openai.yaml:1
- `policy:` — skills/in-progress/writing-shape/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Aligns Codex configuration with Claude Code's `disable-model-invocation: true`, safeguarding human control over the iterative shaping loop.

## Context cost
144 bytes (~36 tokens). Agent harness configuration metadata; negligible context footprint.
