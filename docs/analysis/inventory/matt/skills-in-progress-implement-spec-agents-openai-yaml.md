---
package: matt
path: skills/in-progress/implement-spec/agents/openai.yaml
type: skill
bytes: 143
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/implement-spec/agents/openai.yaml, sha256: d457ae78ff282b8798380b0c2e393c9798bc2bf5ee7dfe9ca31607714c6cd7d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/implement-spec/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Implement a whole spec as one PR\"" — skills/in-progress/implement-spec/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `implement-spec` in-progress skill. Configures the display name to "Implement Spec", defines the short description as implementing a whole spec as one PR, and specifies `allow_implicit_invocation: false` to restrict invocation strictly to explicit user commands, preventing unintended autonomous triggering by an AI model.

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
- `display_name` — skills/in-progress/implement-spec/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/implement-spec/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/implement-spec/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/implement-spec/agents/openai.yaml:1
- `policy:` — skills/in-progress/implement-spec/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Aligns Codex configuration with Claude Code's `disable-model-invocation: true`, guaranteeing that multi-agent implementation pipelines are user-initiated.

## Context cost
143 bytes (~36 tokens). Agent harness configuration metadata; negligible context footprint.
