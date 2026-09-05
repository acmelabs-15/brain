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
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/loop-me/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Spec the workflows you want to build\"" — skills/in-progress/loop-me/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `loop-me` in-progress workflow specification skill. Sets display name "Loop Me", short description "Spec the workflows you want to build", and configures `allow_implicit_invocation: false` to require explicit human user invocation, preventing autonomous execution by an AI model.

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
- `display_name` — skills/in-progress/loop-me/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/loop-me/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/loop-me/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/loop-me/agents/openai.yaml:1
- `policy:` — skills/in-progress/loop-me/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides Codex interface parity with Claude Code's `disable-model-invocation: true`, enforcing that intensive workflow grilling sessions are explicitly human-initiated.

## Context cost
140 bytes (~35 tokens). Agent harness configuration metadata; negligible context footprint.
