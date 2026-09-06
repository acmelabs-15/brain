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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Resolving Merge Conflicts\"" — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `resolving-merge-conflicts` skill. Establishes the human-readable display title and concise descriptive summary shown in agent skill listings. Enables OpenAI agent environments to discover and select the skill for resolving in-progress git merge and rebase conflicts. Omits policy constraints, adhering to default invocation handling.

## Phase — required
matt:Build

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill resolving-merge-conflicts — skills/engineering/resolving-merge-conflicts/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3 — defined here
- `Resolving Merge Conflicts` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:2 — used here
- `Resolve merge and rebase conflicts` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides interface registration metadata for OpenAI Codex / ChatGPT agent platforms, matching Claude Code plugin capabilities.

## Context cost
113 bytes, 4 lines, approximately 30 tokens.
