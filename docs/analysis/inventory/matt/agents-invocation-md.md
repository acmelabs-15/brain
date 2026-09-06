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
verified: 2026-09-06 quote-check+coverage
---

# .agents/invocation.md

## Purpose — required, verbatim
> "Every `SKILL.md` in this repo is a skill. The one axis that splits them is **invocation**, who can reach it:" — .agents/invocation.md:3

## Design intent — required
Defines the architectural taxonomy splitting all repository skills into user-invoked and model-invoked categories. User-invoked skills serve as top-level orchestrators triggered exclusively by humans via slash-commands, with explicit harness-level restrictions (`disable-model-invocation: true` in Claude Code, `policy.allow_implicit_invocation: false` in Codex). Model-invoked skills are autonomous capabilities that can be reached by both models and humans. Establishes the cross-skill dependency protocol: skills must instruct the agent to explicitly call the Skill tool with the exact skill name (omitting slashes for harness neutrality), and user-invoked skills can never be invoked by another skill.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill grilling — .agents/invocation.md:16
- skill ask-matt — .agents/invocation.md:18
- skill domain-modeling — .agents/invocation.md:20
- skill setup-matt-pocock-skills — .agents/invocation.md:22

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:35

## Concepts named — required, verbatim
- `Model-invoked` — .agents/invocation.md:1 — defined here
- `user-invoked` — .agents/invocation.md:1 — defined here
- `invocation` — .agents/invocation.md:3 — defined here
- `SKILL.md` — .agents/invocation.md:3 — used here
- `disable-model-invocation: true` — .agents/invocation.md:5 — defined here
- `policy.allow_implicit_invocation: false` — .agents/invocation.md:5 — defined here
- `agents/openai.yaml` — .agents/invocation.md:5 — used here
- `description` — .agents/invocation.md:5 — used here
- `auto-invocation` — .agents/invocation.md:6 — used here
- `interface.display_name` — .agents/invocation.md:10 — used here
- `interface.short_description` — .agents/invocation.md:10 — used here
- `Dependencies between them` — .agents/invocation.md:14 — defined here
- `Skill tool` — .agents/invocation.md:16 — defined here
- `skill invocation` — .agents/invocation.md:16 — used here
- `harness-neutral` — .agents/invocation.md:16 — defined here
- `trigger syntax` — .agents/invocation.md:16 — used here
- `cross-references` — .agents/invocation.md:16 — used here
- `operative` — .agents/invocation.md:18 — defined here
- `ask-matt` — .agents/invocation.md:18 — used here
- `grilling` — .agents/invocation.md:16 — used here
- `domain-modeling` — .agents/invocation.md:20 — used here
- `setup-matt-pocock-skills` — .agents/invocation.md:22 — used here
- `CONTEXT.md` — .agents/invocation.md:26 — used here
- `ADRs` — .agents/invocation.md:26 — used here

## Structure
- "# Model-invoked vs user-invoked" — .agents/invocation.md:1
- "## Dependencies between them" — .agents/invocation.md:14
- "## Passive vs active domain work" — .agents/invocation.md:24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clarifies the distinction between passive reading of `CONTEXT.md` and active engagement with the `domain-modeling` discipline. Prevents unintended cross-skill execution cycles by prohibiting skills from invoking user-invoked orchestrators.

## Context cost
3848 bytes, 27 lines, approximately 850 tokens.
