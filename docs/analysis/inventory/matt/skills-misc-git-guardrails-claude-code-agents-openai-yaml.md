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
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Git Guardrails for Claude Code\"" — skills/misc/git-guardrails-claude-code/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI Codex interface metadata for the `git-guardrails-claude-code` skill. Exposes human-readable display title and concise descriptive summary to OpenAI-compatible agent environments, aligning harness metadata across platforms.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill git-guardrails-claude-code — skills/misc/git-guardrails-claude-code/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:1 — defined here
- `display_name` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:2 — defined here
- `Git Guardrails for Claude Code` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:2 — defined here
- `short_description` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:3 — defined here
- `Block dangerous git commands` — skills/misc/git-guardrails-claude-code/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Unlike other skills in the repository that explicitly configure `allow_implicit_invocation: false`, this configuration file defines only interface metadata without an invocation policy block.

## Context cost
112 bytes, 4 lines, approximately 25 tokens.
