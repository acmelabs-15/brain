---
package: matt
path: skills/productivity/wait-what/SKILL.md
type: skill
bytes: 394
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/wait-what/SKILL.md

## Purpose — required, verbatim
> "description: \"Stop. That last message did not land: re-pitch it.\"" — skills/productivity/wait-what/SKILL.md:3

## Design intent — required
Provides an immediate corrective reset when an agent's response becomes confusing, overly verbose, or technically inaccessible. When triggered by the user (`/wait-what`), it commands the agent to re-pitch its message by providing missing context, adhering strictly to ASD-STE100 Simplified Technical English, and utilizing the project's ubiquitous language from `CONTEXT.md` (or mapped via `CONTEXT-MAP.md`).

## Phase — required
matt:productivity

## Inputs — required
The prior conversational message that the user failed to understand.

## Outputs — required
A re-pitched, simplified explanation grounded in context and ubiquitous language.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:226
- doc docs/productivity/wait-what.md — docs/productivity/wait-what.md:3
- doc skills/productivity/README.md — skills/productivity/README.md:13
- skill skills/engineering/ask-matt/SKILL.md — skills/engineering/ask-matt/SKILL.md:84
- doc docs/productivity/teach.md — docs/productivity/teach.md:17
- doc CHANGELOG.md — CHANGELOG.md:76

## Concepts named — required, verbatim
- `wait-what` — skills/productivity/wait-what/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/wait-what/SKILL.md:4 — defined here
- `ASD-STE100` — skills/productivity/wait-what/SKILL.md:7 — used here
- `Simplified Technical English` — skills/productivity/wait-what/SKILL.md:7 — used here
- `ubiquitous language` — skills/productivity/wait-what/SKILL.md:7 — used here
- `CONTEXT.md` — skills/productivity/wait-what/SKILL.md:7 — used here
- `CONTEXT-MAP.md` — skills/productivity/wait-what/SKILL.md:7 — used here

## Structure
- `Wait, I don't understand where you've got to here.` — skills/productivity/wait-what/SKILL.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
A 394-byte micro-skill that functions as a single-turn conversational repair mechanism. References ASD-STE100 (Simplified Technical English) to force concise, active sentences and constrained technical terminology.

## Context cost
394 bytes (~90 tokens).
