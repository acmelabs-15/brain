---
package: matt
path: skills/productivity/grilling/agents/openai.yaml
type: skill
bytes: 113
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/grilling/agents/openai.yaml, sha256: 1411d7df7d99b7e621a1ff8283c8133cc2464be63d064e52d8ce169c6800ee9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/grilling/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Stress-test thinking a round of questions at a time\"" — skills/productivity/grilling/agents/openai.yaml:3
(first substantive purpose description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `grilling` skill. Defines the human-readable display title ("Grilling") and summary description for agent skill listings. Unlike companion configurations for user-invoked skills (`handoff`, `teach`), this file does not set `allow_implicit_invocation: false`, aligning with its classification as a model-invoked primitive that autonomous agents can invoke during planning and triage.

## Phase — required
matt:Productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/productivity/grilling/agents/openai.yaml:1 — defined here
- `display_name` — skills/productivity/grilling/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/grilling/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Lacks `policy.allow_implicit_invocation: false`, which is set in `handoff` and `teach`. This enables Codex-compatible harnesses to select and execute the grilling interview autonomously when decomposing user plans.

## Context cost
113 bytes, 4 lines, approximately 25 tokens.
