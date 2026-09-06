---
package: matt
path: skills/engineering/research/agents/openai.yaml
type: skill
bytes: 94
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/research/agents/openai.yaml, sha256: 9b4c470d63221c1f68f22df70b83e2f12401b317babe0d1b7b5f24a974474d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/research/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Research\"" — skills/engineering/research/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `research` skill. Specifies the user-facing display title and concise descriptive summary ("Research from high-trust sources") so that OpenAI agent platforms and compatible harnesses can register, display, and select the skill for execution. Unlike skills that set explicit invocation policies, this configuration omits policy restrictions, allowing default platform invocation.

## Phase — required
matt:Explore

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill research — skills/engineering/research/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/research/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/research/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/research/agents/openai.yaml:3 — defined here
- `Research` — skills/engineering/research/agents/openai.yaml:2 — used here
- `Research from high-trust sources` — skills/engineering/research/agents/openai.yaml:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Companion configuration file providing parity for OpenAI / Codex environments alongside Claude Code's frontmatter declarations.

## Context cost
94 bytes, 4 lines, approximately 25 tokens.
