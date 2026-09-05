---
package: matt
path: skills/engineering/triage/agents/openai.yaml
type: skill
bytes: 135
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/agents/openai.yaml, sha256: 2e683717720cf456d165d0bb1a68bb600d0b6a8ccb61841c172e50d26f95351c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/triage/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Move issues through triage roles\"" — skills/engineering/triage/agents/openai.yaml:3

## Design intent — required
Declares UI configuration metadata and execution policy for the `triage` skill within OpenAI Codex and ChatGPT environments. Sets `display_name: "Triage"` and `short_description: "Move issues through triage roles"`. Enforces `policy.allow_implicit_invocation: false`, designating triage as a human-initiated workflow that autonomous models may not invoke implicitly.

## Phase — required
matt:Upkeep

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `display_name` — skills/engineering/triage/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/triage/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/triage/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/triage/agents/openai.yaml:1
- `policy:` — skills/engineering/triage/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Maintains alignment between Codex policy and Claude Code's `disable-model-invocation: true`.

## Context cost
135 bytes (~34 tokens). Minimal harness UI metadata.
