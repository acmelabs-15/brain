---
package: matt
name: skill invocation
slug: skill-invocation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skill invocation

## Definition — verbatim
(used, not defined)

> "most harnesses expose skill invocation as a tool the model calls" — .agents/invocation.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 16 | used here | Explains that harnesses expose skill invocation as a tool call rather than text-matching slash commands. |

## Consumes
A target skill and execution context.

## Produces
Invocation and loading of a skill into the agent session.

## When applied
When executing a skill either autonomously via tool calling or interactively via human command.

## Sub-concepts
none

## Part of
invocation

## Implementation status
clean

## Design notes
Skill invocation is the mechanism through which an agent or user executes a skill. In matt's design, programmatic skill invocation is formalized as an explicit tool call rather than implicit prompt parsing, maximizing execution reliability across diverse LLM client environments.
