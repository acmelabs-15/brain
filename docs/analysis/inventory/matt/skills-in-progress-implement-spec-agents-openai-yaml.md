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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/implement-spec/agents/openai.yaml

## Purpose — required, verbatim
> "Implement a whole spec as one PR" — skills/in-progress/implement-spec/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI Codex agent interface declaration for the `implement-spec` skill. Declares display name ("Implement Spec") and short description. Sets `policy.allow_implicit_invocation: false` to enforce user-only activation in OpenAI Codex environments, mirroring Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill implement-spec — skills/in-progress/implement-spec/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/in-progress/implement-spec/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/implement-spec/agents/openai.yaml:2 — defined here
- `Implement Spec` — skills/in-progress/implement-spec/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/implement-spec/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/implement-spec/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/implement-spec/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Codex configuration metadata for `implement-spec`. Disallows implicit invocation so agents do not initiate multi-subagent implementation graphs autonomously.

## Context cost
143 bytes, 6 lines, ~35 tokens. Loads no external files.
