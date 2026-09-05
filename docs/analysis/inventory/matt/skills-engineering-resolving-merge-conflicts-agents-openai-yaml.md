---
package: matt
path: skills/engineering/resolving-merge-conflicts/agents/openai.yaml
type: skill
bytes: 113
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/resolving-merge-conflicts/agents/openai.yaml, sha256: a1f4f96838f2ed6282eb28abbbf99029cb8fadce552baf53da90a025b8bffddf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Resolve merge and rebase conflicts\"" — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `resolving-merge-conflicts` skill. Sets the display name (`Resolving Merge Conflicts`) and short description (`Resolve merge and rebase conflicts`). Does not restrict invocation policy, permitting autonomous execution by coding agents when merge or rebase conflicts are encountered.

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

## Concepts named — required, verbatim
- `display_name` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Omits `policy: allow_implicit_invocation: false`, mirroring the model-invoked status of `skills/engineering/resolving-merge-conflicts/SKILL.md`.
- Provides minimal 4-line configuration for multi-harness compatibility.

## Context cost
113 bytes (~28 tokens). Agent configuration metadata; minimal context footprint.
