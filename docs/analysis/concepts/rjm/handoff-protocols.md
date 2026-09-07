---
package: rjm
name: handoff protocols
slug: handoff-protocols
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

# handoff protocols

## Definition — verbatim
> "- **Content**: Claude-specific prompts with unique sections (MCP tools, Serena integration, handoff protocols)" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 56 | used here | Identifies handoff protocols as unique Claude-specific prompt sections enabling structured agent-to-agent task delegation. |

## Consumes
Current execution context, remaining task requirements, and destination agent capabilities.

## Produces
Structured handoff artifacts enabling context-preserving task transitions between agents.

## When applied
Applied when an autonomous agent finishes a workflow segment and transfers execution authority to another agent.

## Sub-concepts
none

## Part of
multi-agent-orchestration

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
A coordination pattern defining explicit conventions for transferring execution state and requirements between specialized agents, preventing context loss during multi-agent workflows.
