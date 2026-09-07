---
package: rjm
name: Sidecar memories
slug: sidecar-memories
kind: artifact
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

# Sidecar memories

## Definition — verbatim
> "Sidecar memories**: Per-agent persistent context with Serena tiering" — .agents/architecture/ADR-007-memory-first-architecture.md:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 295 | defined here | Proposed as a BMAD enhancement for storing per-agent persistent context tiered with Serena. |

## Consumes
Agent role definitions and task performance observations.

## Produces
Isolated agent memory files storing agent-specific context and preferences.

## When applied
During agent initialization to load role-specific memories and session teardown to persist learnings.

## Sub-concepts
none

## Part of
agent-sidecar-workflow

## Implementation status
not-implemented

## Design notes
Persistent context files associated with specific agent roles that store agent-specific insights, prompt modifications, and behavioral preferences. Layered with Serena tiering, they allow specialist agents to maintain private memory without polluting the global project knowledge base.
