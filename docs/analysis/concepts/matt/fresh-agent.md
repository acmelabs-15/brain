---
package: matt
name: fresh agent
slug: fresh-agent
kind: role
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fresh agent

## Definition — verbatim
> "Write a handoff document summarising the current conversation so a fresh agent can continue the work." — skills/productivity/handoff/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/handoff/SKILL.md | 8 | defined here | Designated as the intended consumer of the handoff document with an unpolluted context window. |

## Consumes
A handoff document saved in the OS temporary directory and pointers to referenced repository artifacts.

## Produces
Continuation of work in a clean context window.

## When applied
When starting a new session or subagent run following a handoff from an earlier conversational session.

## Sub-concepts
none

## Part of
handoff

## Implementation status
clean

## Design notes
The agent recipient in a multi-session workflow that receives a summarized handoff document, enabling task continuity across conversation context resets without inheriting context bloat.
