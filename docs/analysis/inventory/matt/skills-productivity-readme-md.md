---
package: matt
path: skills/productivity/README.md
type: skill
bytes: 1480
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/README.md

## Purpose — required, verbatim
> "General workflow tools, not code-specific." — skills/productivity/README.md:3

## Design intent — required
Serves as the directory catalog and invocation reference for all productivity skills in the repository. Partitions skills into user-invoked (`grill-me`, `handoff`, `teach`, `to-questionnaire`, `wait-what`) and model-invoked (`grilling`, `writing-for-agents`), documenting the corresponding configuration flags across Claude Code (`disable-model-invocation: true`) and Codex (`policy.allow_implicit_invocation: false`).

## Phase — required
matt:productivity

## Inputs — required
Productivity skills catalog in `skills/productivity/`.

## Outputs — required
Directory navigation index and categorization of productivity skills.

## Invokes — required
- skill grill-me — skills/productivity/README.md:9
- skill handoff — skills/productivity/README.md:10
- skill teach — skills/productivity/README.md:11
- skill to-questionnaire — skills/productivity/README.md:12
- skill wait-what — skills/productivity/README.md:13
- skill grilling — skills/productivity/README.md:19
- skill writing-for-agents — skills/productivity/README.md:20

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Productivity` — skills/productivity/README.md:1 — defined here
- `User-invoked` — skills/productivity/README.md:5 — defined here
- `disable-model-invocation` — skills/productivity/README.md:7 — used here
- `allow_implicit_invocation` — skills/productivity/README.md:7 — used here
- `grill-me` — skills/productivity/README.md:9 — used here
- `handoff` — skills/productivity/README.md:10 — used here
- `teach` — skills/productivity/README.md:11 — used here
- `to-questionnaire` — skills/productivity/README.md:12 — used here
- `wait-what` — skills/productivity/README.md:13 — used here
- `Model-invoked` — skills/productivity/README.md:15 — defined here
- `grilling` — skills/productivity/README.md:19 — used here
- `writing-for-agents` — skills/productivity/README.md:20 — used here

## Structure
- `# Productivity` — skills/productivity/README.md:1
- `## User-invoked` — skills/productivity/README.md:5
- `## Model-invoked` — skills/productivity/README.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/productivity/README.md:1: Directory README not linked from root README or other documentation files.

## Observations
Provides a clear structural partition between user-invoked workflow skills (which require deliberate invocation by the human) and model-invoked skills (which agents can trigger autonomously).

## Context cost
1480 bytes (~370 tokens). Directory overview and categorization document.
