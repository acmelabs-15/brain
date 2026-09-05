---
package: matt
path: skills/productivity/wait-what/agents/openai.yaml
type: skill
bytes: 158
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/wait-what/agents/openai.yaml, sha256: b41faadf741d51e4ea184148b2d1854d93f947aaf754c7844f70a00f04194999}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/wait-what/agents/openai.yaml

## Purpose — required, verbatim
> "Re-pitch that: simpler, with the context I'm missing" — skills/productivity/wait-what/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `wait-what` corrective skill. Sets display name to "Wait What" and short description to "Re-pitch that: simpler, with the context I'm missing". Sets `allow_implicit_invocation: false` under `policy` to mirror Claude Code's `disable-model-invocation: true`, ensuring that only the human user can invoke this corrective when an agent's message fails to land.

## Phase — required
matt:Productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill wait-what — skills/productivity/wait-what/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `display_name` — skills/productivity/wait-what/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/wait-what/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/productivity/wait-what/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex registration configuration for the `wait-what` skill. By enforcing `policy.allow_implicit_invocation: false`, it prevents models from triggering the corrective on their own, leaving invocation strictly in human hands when comprehension fails.

## Context cost
158 bytes, 6 lines, approximately 40 tokens.
