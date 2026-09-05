---
package: matt
path: skills/engineering/code-review/agents/openai.yaml
type: skill
bytes: 100
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/code-review/agents/openai.yaml, sha256: 8229ca854e11dc8e6aef2131ee03f31fb1561cf905fab9ccc325180cf3331352}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/code-review/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Code Review\"" — skills/engineering/code-review/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `code-review` skill. Defines the human-readable display name and descriptive summary for agent catalog interfaces. Unlike user-invoked skills (which include `policy.allow_implicit_invocation: false`), this file omits policy restrictions because `code-review` is a model-invoked skill designed to be reachable automatically by agents during implementation workflows or when users request diff reviews.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill code-review — skills/engineering/code-review/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `display_name` — skills/engineering/code-review/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/code-review/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex interface registration metadata matching Claude Code plugin behavior. By omitting `allow_implicit_invocation: false`, it allows Codex agents to invoke `code-review` autonomously whenever reviewing code changes.

## Context cost
100 bytes, 4 lines, approximately 25 tokens.
