---
package: rjm
name: Agent Communication
slug: agent-communication
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Communication

## Definition — verbatim
> "Agents communicate through the orchestrator using explicit handoffs." — docs/architecture.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 125 | defined here | Defines the hub-and-spoke agent coordination topology and handoff protocol. |

## Consumes
User tasks, complexity classifications, domain specialist findings, and structured handoff reports.

## Produces
Coordinated multi-agent task execution and synthesized responses.

## When applied
Governs all multi-agent interactions during task routing, execution, and handoff.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: doc-drift

## Design notes
A strict hub-and-spoke interaction pattern in rjm forbidding peer-to-peer agent calls and routing all inter-agent coordination through a central orchestrator. This pattern simplifies context transfer, maintains visibility over agent execution, and eliminates unbounded communication graph complexity.
