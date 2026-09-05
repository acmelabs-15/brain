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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/grill-me/SKILL.md

## Purpose — required, verbatim
> "description: A relentless interview to sharpen a plan or design." — skills/productivity/grill-me/SKILL.md:3

## Design intent — required
Acts as a user-invoked entry point for the stateless interview workflow (`grill-me`). Delegates immediately to the underlying `grilling` skill primitive (`Call the Skill tool with "grilling"`). Enforces `disable-model-invocation: true` in its frontmatter to guarantee that the skill is only executed when explicitly initiated by the user (e.g. `/grill-me`), preventing agents from autonomously entering recursive interview loops.

## Phase — required
matt:productivity

## Inputs — required
User prompts and answers during conversational interview.

## Outputs — required
none

## Invokes — required
- skill grilling — skills/productivity/grill-me/SKILL.md:7

## Invoked by — required
- doc README.md — README.md:100
- doc skills/productivity/README.md — skills/productivity/README.md:9
- skill skills/engineering/ask-matt/SKILL.md — skills/engineering/ask-matt/SKILL.md:17

## Concepts named — required, verbatim
- `grill-me` — skills/productivity/grill-me/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/grill-me/SKILL.md:4 — defined here
- `grilling` — skills/productivity/grill-me/SKILL.md:7 — used here

## Structure
- `Call the Skill tool with "grilling".` — skills/productivity/grill-me/SKILL.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Extremely lightweight 8-line adapter skill. Illustrates Matt Pocock's design pattern separating user-invoked entry point orchestrators (`grill-me`, `disable-model-invocation: true`) from reusable model-invoked execution primitives (`grilling`).

## Context cost
157 bytes (~40 tokens); 2144 bytes (~530 tokens) when including invoked `skills/productivity/grilling/SKILL.md`.
