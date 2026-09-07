---
package: rjm
name: Command Disguised as Event
slug: command-disguised-as-event
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Command Disguised as Event

## Definition — verbatim
> "- **Command Disguised as Event**: an \"event\" called `SaveSession` whose handler can refuse. That is a command. Rename or restructure." — .claude/skills/software-engineering-library/references/domain-driven-design.md:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 237 | defined here | Anti-pattern catalog entry warning against labeling rejections or imperative instructions as past-tense events. |

## Consumes
Messages framed as events that actually mandate actions and allow handlers to reject execution.

## Produces
Guidance to restructure the interaction into an explicit command or decouple the workflow.

## When applied
Identified when an event uses imperative phrasing or when handlers are expected to validate and potentially reject the operation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Command Disguised as Event occurs when an imperative instruction masquerades as an asynchronous notification. True events represent historical facts that cannot be refused; pretending a command is an event obscures error handling and control flow.
