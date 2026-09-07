---
package: rjm
name: Reflector
slug: reflector
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reflector

## Definition — verbatim
> "# Retrospective Agent (Reflector)" — .claude/agents/retrospective.md:9

## Also called — verbatim
"Retrospective Agent" — .claude/agents/retrospective.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 9 | defines | Heading introducing the retrospective agent under its alternate role title Reflector. |

## Consumes
Completed session logs, agent execution traces, and milestone deliverables.

## Produces
Post-mortem insights, process improvement recommendations, and evolutionary learnings.

## When applied
Invoked after milestone completions or session terminations to conduct structured retrospectives.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An alternate role designation for the retrospective agent, responsible for post-milestone reflection and continuous improvement. It analyzes completed workflows, session logs, and failure cases to extract process refinements and prevent repetitive errors in subsequent iterations.
