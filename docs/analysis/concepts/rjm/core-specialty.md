---
package: rjm
name: Core Specialty
slug: core-specialty
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
  - {path: .agents/governance/interview-response-template.md, sha256: ce90ef506e805f7ff9e945fb97ea609c0f56cfaa5fda3aac08c327770f3b680a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Core Specialty

## Definition — verbatim
(used, not defined)

> "Enables quick agent identification and routing decisions." — .agents/governance/agent-interview-protocol.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 19 | defined here | Defined as Question 1 of the interview protocol requiring a single-sentence summary of an agent's primary focus. |
| .agents/governance/interview-response-template.md | 15 | used here | Section heading for Question 1 in the standardized interview response template. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
- 8-standardized-questions
- agent-interview-response-template

## Implementation status
clean

## Design notes
A question heading and documentation field within the agent interview protocol and response template rather than an executable lifecycle concept.
