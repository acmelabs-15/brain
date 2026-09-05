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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/wait-what/SKILL.md

## Purpose — required, verbatim
> "Stop. That last message did not land: re-pitch it." — skills/productivity/wait-what/SKILL.md:3

## Design intent — required
Productivity corrective skill designed to be invoked mid-conversation the moment an agent's response is unclear, verbose, or disorienting. It instructs the agent to stop and re-pitch its previous message by providing missing context, adhering to ASD-STE100 Simplified Technical English, and using the ubiquitous language defined in the project's `CONTEXT.md`.

## Phase — required
matt:Productivity

## Inputs — required
User invocation via `/wait-what`; the preceding conversational context (the message that failed to land); project domain vocabulary in `CONTEXT.md` (and optional `CONTEXT-MAP.md`).

## Outputs — required
A concise, simplified re-explanation of the previous message using ASD-STE100 Simplified Technical English and domain ubiquitous language.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:226
- doc skills/productivity/README.md — skills/productivity/README.md:13
- doc CHANGELOG.md — CHANGELOG.md:76
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:84
- doc docs/productivity/wait-what.md — docs/productivity/wait-what.md:3
- doc docs/productivity/teach.md — docs/productivity/teach.md:17

## Concepts named — required, verbatim
- `wait-what` — skills/productivity/wait-what/SKILL.md:2 — defined here
- `ASD-STE100 Simplified Technical English` — skills/productivity/wait-what/SKILL.md:7 — used here
- `ubiquitous language` — skills/productivity/wait-what/SKILL.md:7 — used here
- `CONTEXT.md` — skills/productivity/wait-what/SKILL.md:7 — used here
- `CONTEXT-MAP.md` — skills/productivity/wait-what/SKILL.md:7 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — "CONTEXT-MAP.md" — skills/productivity/wait-what/SKILL.md:7 — references `CONTEXT-MAP.md` which does not exist in this repository, though it is framed as a convention in repositories that maintain multiple context files.

## Observations
At only 394 bytes and 8 lines, this is one of the shortest skills in the package. It acts as an immediate conversational reset button. Uses `disable-model-invocation: true` so the agent cannot invoke it on itself; only the user can trigger it when they stop following the agent's explanation.

## Context cost
394 bytes, 8 lines, approximately 95 tokens.
