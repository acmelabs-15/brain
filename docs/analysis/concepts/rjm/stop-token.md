---
package: rjm
name: STOP-TOKEN
slug: stop-token
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STOP-TOKEN

## Definition — verbatim
(used, not defined)

> "you'd like`). Delete it. (Mirrors the STOP-TOKEN rule in CLAUDE.md.)" — .claude/skills/prose-self-check/SKILL.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 93 | used here | Cited as the governance rule prohibiting trailing conversational offers in agent outputs. |

## Consumes
Agent task completion.

## Produces
Immediate conclusion of the agent response without unsolicited trailing work offers.

## When applied
Enforced at the end of every agent invocation or prose generation task.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A conversational termination rule requiring agents to stop output immediately upon completing the requested task without generating trailing conversational offers.
