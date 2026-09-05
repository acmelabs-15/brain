---
package: matt
path: .agents/invocation.md
type: agent
bytes: 3848
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/invocation.md

## Purpose — required, verbatim
> "Every `SKILL.md` in this repo is a skill. The one axis that splits them is **invocation**, who can reach it:" — .agents/invocation.md:3

## Design intent — required
Defines the dual-harness invocation architecture splitting all skills into user-invoked (orchestrators reachable only by a human typing `/<name>`, configured with `disable-model-invocation: true` in Claude Code and `policy.allow_implicit_invocation: false` in Codex) versus model-invoked (autonomous skills callable by model or user). Enforces strict composition invariants preventing user-invoked skills from calling one another, and mandates operative calling conventions ("Call the Skill tool with '<name>'") for runtime dependencies.

## Phase — required
cross-phase

## Inputs — required
Skill frontmatter schemas, Claude Code configuration, Codex `agents/openai.yaml` schema, and skill orchestration requirements.

## Outputs — required
Taxonomy definitions, frontmatter invariants, synchronization rules between Claude and Codex metadata, and operative skill invocation conventions.

## Invokes — required
- skill grilling — .agents/invocation.md:16
- skill ask-matt — .agents/invocation.md:18
- skill domain-modeling — .agents/invocation.md:20
- skill setup-matt-pocock-skills — .agents/invocation.md:22

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:35

## Concepts named — required, verbatim
- `invocation` — .agents/invocation.md:3 — defined here
- `User-invoked` — .agents/invocation.md:5 — defined here
- `disable-model-invocation` — .agents/invocation.md:5 — used here
- `allow_implicit_invocation` — .agents/invocation.md:5 — used here
- `Model-invoked` — .agents/invocation.md:6 — defined here
- `Skill tool` — .agents/invocation.md:16 — defined here
- `operative` — .agents/invocation.md:18 — defined here
- `Passive vs active domain work` — .agents/invocation.md:24 — defined here

## Structure
- Model-invoked vs user-invoked — .agents/invocation.md:1
- Dependencies between them — .agents/invocation.md:14
- Passive vs active domain work — .agents/invocation.md:24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides an important architectural principle: skills express operative dependencies by telling the model to call the `Skill` tool explicitly with the skill name (e.g., `Call the Skill tool with "grilling"`), rather than using cross-directory markdown links (`../other-skill/FILE.md`) or bare slash commands (`/skill`). Also states that the Skill tool takes exactly one skill per call, requiring separate calls for multiple dependencies.

## Context cost
3848 bytes, ~900 tokens. Self-contained architectural reference.
