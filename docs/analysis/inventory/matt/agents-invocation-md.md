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
verified: 2026-09-04 quote-check+coverage
---

# .agents/invocation.md

## Purpose — required, verbatim
> "Every `SKILL.md` in this repo is a skill. The one axis that splits them is **invocation**, who can reach it:" — .agents/invocation.md:3 (no explicit purpose statement)

## Design intent — required
Defines the architectural invocation taxonomy across Claude Code and Codex harnesses. Splits skills into user-invoked (`disable-model-invocation: true`, `policy.allow_implicit_invocation: false`, human-facing description) and model-invoked (default, rich trigger descriptions). Mandates the dependency invocation convention: operative instructions must instruct the model to call the "Skill tool" with the skill name, rather than using folder cross-references or slash commands. Clarifies that user-invoked skills cannot be called by other skills via the Skill tool and must instead be phrased as instructions to the human.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc .changeset/skill-tool-invocation-terminology.md — .changeset/skill-tool-invocation-terminology.md:9
- doc .changeset/user-invoked-skill-invocation.md — .changeset/user-invoked-skill-invocation.md:5

## Concepts named — required, verbatim
- `User-invoked` — .agents/invocation.md:5 — defined here
- `Model-invoked` — .agents/invocation.md:6 — defined here
- `disable-model-invocation` — .agents/invocation.md:5 — used here
- `policy.allow_implicit_invocation` — .agents/invocation.md:5 — used here
- `agents/openai.yaml` — .agents/invocation.md:5 — used here
- `Skill tool` — .agents/invocation.md:16 — defined here
- `domain-modeling` — .agents/invocation.md:20 — used here
- `grilling` — .agents/invocation.md:20 — used here
- `setup-matt-pocock-skills` — .agents/invocation.md:22 — used here
- `CONTEXT.md` — .agents/invocation.md:26 — used here

## Structure
- # Model-invoked vs user-invoked — .agents/invocation.md:1
- ## Dependencies between them — .agents/invocation.md:14
- ## Passive vs active domain work — .agents/invocation.md:24

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs calling the Skill tool sequentially for multiple dependencies rather than combining names in a single call. Separates passive domain vocabulary reading (`CONTEXT.md` pointer) from active modeling discipline (`domain-modeling` skill).

## Context cost
3848 bytes, ~900 tokens.
