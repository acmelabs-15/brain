---
package: rjm
name: 8 Standardized Questions
slug: 8-standardized-questions
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 8 Standardized Questions

## Definition — verbatim
(used, not defined)

> "The 8 Standardized Questions" — .agents/governance/agent-interview-protocol.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 17 | defines | Section heading introducing the eight mandatory inquiry dimensions for agent capability interviews. |

## Consumes
Agent persona prompt and isolated agent execution context.

## Produces
Standardized answers across Core Specialty, Specific Tasks, Limitations, Agent Pairings, Input Expectations, Output Format, When to Use, and When NOT to Use.

## When applied
During Step 2 of the Agent Interview Protocol when interrogating an agent persona in isolation.

## Sub-concepts
- core-specialty
- specific-tasks
- limitations
- agent-pairings
- input-expectations
- when-to-use
- when-not-to-use

## Part of
- agent-interview-protocol

## Implementation status
defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix)

## Design notes
The 8 Standardized Questions form the structured interrogation rubric of the rjm interview protocol. They systematically cover the functional boundaries of an agent: identity, capabilities, negative constraints, collaboration affinities, input needs, output deliverables, positive entry criteria, and anti-patterns. Without these eight standardized questions, capability documentation would be ad-hoc and inconsistent across agents.
