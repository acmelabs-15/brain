---
package: matt
path: skills/misc/git-guardrails-claude-code/agents/openai.yaml
type: skill
bytes: 112
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/agents/openai.yaml, sha256: d53cd783fc0ac208dec9a4c267989284384785aab6422dccdaed42f9e40243ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Block dangerous git commands\"" — skills/misc/git-guardrails-claude-code/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration interface metadata for the `git-guardrails-claude-code` skill. Establishes the display title (`Git Guardrails for Claude Code`) and a concise summary (`Block dangerous git commands`).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `display_name` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:2 — defined here
- `short_description` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal 3-line configuration defining interface metadata for OpenAI agents, mirroring the Claude Code skill purpose. Unlike other skills in this repo, it does not declare a `policy:` block or `allow_implicit_invocation`.

## Context cost
112 bytes (~30 tokens). Interface configuration metadata; negligible context footprint.
