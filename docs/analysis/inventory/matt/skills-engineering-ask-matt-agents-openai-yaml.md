---
package: matt
path: skills/engineering/ask-matt/agents/openai.yaml
type: skill
bytes: 137
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/ask-matt/agents/openai.yaml, sha256: bdffbc5a0a99ed1b6ef3253d251d755fd18162b9845972e380007f844b09b05c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/ask-matt/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Ask Matt\"" — skills/engineering/ask-matt/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `ask-matt` router skill. Establishes the human-readable display title and concise descriptive summary shown in agent skill listings. Sets `allow_implicit_invocation: false` so that Codex and compatible harnesses do not automatically route queries through this skill behind the scenes, restricting execution to explicit user invocations.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `display_name` — skills/engineering/ask-matt/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/ask-matt/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/ask-matt/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides dual-harness alignment for Codex environments corresponding to Claude Code's `disable-model-invocation: true` frontmatter setting. Ensures consistent orchestrator behavior across both LLM runtimes.

## Context cost
137 bytes, 6 lines, approximately 35 tokens.
