---
package: matt
path: skills/productivity/grill-me/SKILL.md
type: skill
bytes: 157
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/grill-me/SKILL.md

## Purpose — required, verbatim
> "description: A relentless interview to sharpen a plan or design." — skills/productivity/grill-me/SKILL.md:3

## Design intent — required
User-invoked front door for the `grilling` interview primitive. Designed to be stateless and runnable anywhere without requiring an active codebase or project directory. Restricts invocation via `disable-model-invocation: true` so it only fires when explicitly commanded by the user (`/grill-me`). Defers its entire implementation to calling the `Skill` tool with `"grilling"`.

## Phase — required
matt:Productivity

## Inputs — required
Loose idea, design, or plan communicated by user during the interview.

## Outputs — required
Settled decisions and refined thinking produced during conversational interview rounds; no disk artifacts produced directly by this wrapper.

## Invokes — required
- skill grilling — skills/productivity/grill-me/SKILL.md:7

## Invoked by — required
- skill productivity — skills/productivity/README.md:9
- doc README.md — README.md:100, 222
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:17, 77
- doc grill-me.md — docs/productivity/grill-me.md:3, 15, 72

## Concepts named — required, verbatim
- `grill-me` — skills/productivity/grill-me/SKILL.md:2 — defined here
- `relentless interview` — skills/productivity/grill-me/SKILL.md:3 — defined here
- `disable-model-invocation` — skills/productivity/grill-me/SKILL.md:4 — defined here
- `Skill tool` — skills/productivity/grill-me/SKILL.md:7 — used here
- `grilling` — skills/productivity/grill-me/SKILL.md:7 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal one-line orchestration wrapper around the `grilling` primitive. As documented in `docs/productivity/grilling.md:70`, `grill-me` requires the `grilling` skill to be installed to function. Distinguishes from `grill-with-docs` by being completely stateless (writes no `CONTEXT.md` or ADRs).

## Context cost
157 bytes, 8 lines, approximately 40 tokens (loads `grilling` when invoked).
