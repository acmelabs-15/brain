---
package: rjm
name: Agent Sidecar Workflow
slug: agent-sidecar-workflow
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Sidecar Workflow

## Definition — verbatim
> "Agent Sidecar Workflow" — .agents/architecture/ADR-007-memory-first-architecture.md:327

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 327 | defined here | Workflow sequence detailing pre-session reading and post-session updating of agent sidecar files. |

## Consumes
Role-specific sidecar memory files and session task prompts.

## Produces
Sequential agent execution flow from pre-task sidecar loading to post-task memory synchronization.

## When applied
When orchestrating specialist agents that maintain separate sidecar memory contexts across tasks.

## Sub-concepts
sidecar-memories, critical-actions

## Part of
memory-first-architecture

## Implementation status
not-implemented

## Design notes
A structured operational workflow where agents load their personal sidecar memory before task execution, perform reasoning with role-specific context, and persist verified new insights back to the sidecar at session conclusion, ensuring agent specialization compounds over successive sessions.
