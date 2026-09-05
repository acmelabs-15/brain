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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/grilling/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Stress-test thinking a round of questions at a time\"" — skills/productivity/grilling/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent interface configuration metadata for the `grilling` skill. Establishes the display title ("Grilling") and a concise summary ("Stress-test thinking a round of questions at a time"). Unlike user-invoked skills, this configuration omits `policy.allow_implicit_invocation: false`, permitting autonomous model invocation across OpenAI-compatible agent environments.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `display_name` — skills/productivity/grilling/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/grilling/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/productivity/grilling/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/productivity/grilling/agents/openai.yaml:1: Codex interface configuration metadata not directly invoked or referenced by in-scope skills or workflows.

## Observations
Omits `policy.allow_implicit_invocation: false` (present in user-invoked skills such as `grill-me`, `handoff`, and `teach`), reflecting `grilling`'s design as a model-invoked interview primitive.

## Context cost
113 bytes (~30 tokens). Interface configuration metadata; negligible context footprint.
