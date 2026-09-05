---
package: matt
path: skills/productivity/to-questionnaire/agents/openai.yaml
type: skill
bytes: 166
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/to-questionnaire/agents/openai.yaml, sha256: 9e8a06c38c8842eea8d4922cb9d1ead8e3ace647bab259b943c994a1b4742bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/to-questionnaire/agents/openai.yaml

## Purpose — required, verbatim
> "Front-load questions into a doc for someone to answer" — skills/productivity/to-questionnaire/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `to-questionnaire` skill. Establishes the user-facing display name ("To Questionnaire") and a concise descriptive summary ("Front-load questions into a doc for someone to answer") for OpenAI tool listings. Sets `allow_implicit_invocation: false` under `policy`, enforcing that the skill cannot be autonomously invoked by models behind the scenes, ensuring strict parity with Claude Code's `disable-model-invocation: true` setting for user-invoked skills.

## Phase — required
matt:Productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill to-questionnaire — skills/productivity/to-questionnaire/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `display_name` — skills/productivity/to-questionnaire/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/to-questionnaire/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/productivity/to-questionnaire/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex dual-harness registration metadata for the `to-questionnaire` skill. Enforces `policy.allow_implicit_invocation: false`, which aligns with Claude Code's `disable-model-invocation: true` in `SKILL.md:4`, ensuring the skill remains strictly user-invoked and cannot be called autonomously by OpenAI models.

## Context cost
166 bytes, 6 lines, approximately 40 tokens.
