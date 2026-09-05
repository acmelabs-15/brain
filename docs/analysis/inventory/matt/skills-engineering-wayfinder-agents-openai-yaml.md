---
package: matt
path: skills/engineering/wayfinder/agents/openai.yaml
type: skill
bytes: 144
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wayfinder/agents/openai.yaml, sha256: 88bc81a11a6d52ac67aeaa76b8b619e387020d47c5133a4dd4927fd15c4ad073}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/wayfinder/agents/openai.yaml

## Purpose — required, verbatim
> "Map a large effort as decision tickets" — skills/engineering/wayfinder/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `wayfinder` skill. Defines the human-readable display name ("Wayfinder"), a concise summary of its multi-session mapping capability ("Map a large effort as decision tickets"), and explicit invocation policy (`allow_implicit_invocation: false`) ensuring the model does not trigger this large-scale planning skill implicitly without human request.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Wayfinder` — skills/engineering/wayfinder/agents/openai.yaml:2 — defined here
- `decision tickets` — skills/engineering/wayfinder/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/engineering/wayfinder/agents/openai.yaml:5 — used here

## Structure
- interface — skills/engineering/wayfinder/agents/openai.yaml:1
- policy — skills/engineering/wayfinder/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Sets `policy.allow_implicit_invocation: false` matching the frontmatter `disable-model-invocation: true` in `SKILL.md`, preventing autonomous agents from spontaneously triggering a full-effort mapping session.

## Context cost
144 bytes, 6 lines, ~35 tokens. Loads no external files.
