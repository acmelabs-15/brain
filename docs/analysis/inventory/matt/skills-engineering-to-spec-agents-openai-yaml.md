---
package: matt
path: skills/engineering/to-spec/agents/openai.yaml
type: skill
bytes: 135
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-spec/agents/openai.yaml, sha256: 1c5b4d1e3d8e52287ef19cc2742fdbbfae1914ac75d33af3e4c8174f08cc55bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/to-spec/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Turn a conversation into a spec\"" — skills/engineering/to-spec/agents/openai.yaml:3

## Design intent — required
Declares UI configuration and execution policy for the `to-spec` skill within OpenAI Codex and ChatGPT environments. Sets `display_name: "To Spec"` and `short_description: "Turn a conversation into a spec"`. Crucially enforces `policy.allow_implicit_invocation: false`, designating it as a user-invoked skill that models cannot invoke autonomously, matching `disable-model-invocation: true` in `SKILL.md`.

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
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `display_name` — skills/engineering/to-spec/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/to-spec/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/to-spec/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/to-spec/agents/openai.yaml:1
- `policy:` — skills/engineering/to-spec/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pairs `allow_implicit_invocation: false` with Claude Code's `disable-model-invocation: true`, strictly enforcing human-only invocation across harnesses.

## Context cost
135 bytes (~34 tokens). Harness UI configuration metadata; minimal context footprint.
