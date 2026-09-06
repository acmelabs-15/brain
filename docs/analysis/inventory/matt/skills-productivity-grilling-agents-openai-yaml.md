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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/grilling/agents/openai.yaml

## Purpose — required, verbatim
> "Stress-test thinking a round of questions at a time" — skills/productivity/grilling/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `grilling` skill. Defines the human-readable display name ("Grilling") and a concise short description summarizing the skill's purpose for Codex/OpenAI skill catalogs. Unlike user-invoked skills that include `policy.allow_implicit_invocation: false`, this file omits policy restrictions, allowing models to autonomously invoke `grilling` when stress-testing ideas or plans.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill grilling — skills/productivity/grilling/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `interface` — skills/productivity/grilling/agents/openai.yaml:1 — used here
- `display_name` — skills/productivity/grilling/agents/openai.yaml:2 — used here
- `Grilling` — skills/productivity/grilling/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/grilling/agents/openai.yaml:3 — used here
- `Stress-test thinking a round of questions at a time` — skills/productivity/grilling/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides dual-harness registration metadata for Codex/ChatGPT environments. The short description explicitly reflects the round-by-round rhythm ("a round of questions at a time") introduced in PR #593 (CHANGELOG.md:130).

## Context cost
113 bytes, 4 lines, approximately 25 tokens.
