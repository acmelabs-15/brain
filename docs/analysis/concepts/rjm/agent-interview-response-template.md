---
package: rjm
name: Agent Interview Response Template
slug: agent-interview-response-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/interview-response-template.md, sha256: ce90ef506e805f7ff9e945fb97ea609c0f56cfaa5fda3aac08c327770f3b680a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Interview Response Template

## Definition — verbatim
(used, not defined)

> "# Agent Interview Response Template" — .agents/governance/interview-response-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/interview-response-template.md | 1 | defines | Markdown template establishing the standard recording structure for agent interview responses. |

## Consumes
Responses elicited during the execution of the agent interview protocol.

## Produces
Standardized agent interview response files stored in `.agents/governance/interviews/[agent]-interview.md`.

## When applied
Used during Step 2 (Conduct Interview) and Step 4 (Document) of the Agent Interview Protocol.

## Sub-concepts
- core-specialty
- specific-tasks
- limitations
- technical-limitations
- agent-pairings
- input-expectations
- when-to-use
- when-not-to-use

## Part of
- agent-interview-protocol

## Implementation status
clean

## Design notes
The Agent Interview Response Template provides the canonical markdown structure for persisting discovered agent capabilities. Paired directly with the Agent Interview Protocol, it guarantees that every agent's capabilities, limitations, pairings, input/output schemas, and routing priorities are formatted identically across the codebase. Without this template, agent capability records would vary widely in structure, hindering automated comparison and routing.
