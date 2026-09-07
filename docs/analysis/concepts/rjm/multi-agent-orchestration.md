---
package: rjm
name: Multi-Agent Orchestration
slug: multi-agent-orchestration
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-Agent Orchestration

## Definition — verbatim
> "| Multi-Agent Orchestration | ✓ Full (Task tool) | ✓ Full (@agent) | ✓ Full (Agent HQ) | ✗ Constrained |" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 190 | used here | Assesses cross-platform support for multi-agent delegation across supported AI harnesses. |

## Consumes
High-level task goals, agent role definitions, and inter-agent communication channels.

## Produces
Coordinated execution of complex multi-stage tasks by delegating subtasks to specialized personas.

## When applied
Employed when a complex goal spans multiple domains (e.g. architecture, security, quality assurance, implementation).

## Sub-concepts
handoff-protocols

## Part of
two-source-agent-template-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
An architectural execution pattern enabling autonomous agents to coordinate and delegate subtasks to specialized peers, ensuring each aspect of a software engineering task is handled by an agent with focused constraints and capabilities.
