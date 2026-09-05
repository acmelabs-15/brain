---
package: matt
path: skills/misc/migrate-to-shoehorn/agents/openai.yaml
type: skill
bytes: 110
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/migrate-to-shoehorn/agents/openai.yaml, sha256: 395c2db852e66a199f1cd07f7ed92d66cb6f0787460c5475926f1a5e778b699d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/migrate-to-shoehorn/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Migrate to Shoehorn\"" — skills/misc/migrate-to-shoehorn/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI Codex interface configuration for the `migrate-to-shoehorn` skill, defining display title and concise descriptive summary for registration in compatible agent harnesses.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill migrate-to-shoehorn — skills/misc/migrate-to-shoehorn/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/misc/migrate-to-shoehorn/agents/openai.yaml:1 — defined here
- `display_name` — skills/misc/migrate-to-shoehorn/agents/openai.yaml:2 — defined here
- `Migrate to Shoehorn` — skills/misc/migrate-to-shoehorn/agents/openai.yaml:2 — defined here
- `short_description` — skills/misc/migrate-to-shoehorn/agents/openai.yaml:3 — defined here
- `Replace test assertions with shoehorn` — skills/misc/migrate-to-shoehorn/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal tool interface specification for Codex environments.

## Context cost
110 bytes, 4 lines, approximately 25 tokens.
