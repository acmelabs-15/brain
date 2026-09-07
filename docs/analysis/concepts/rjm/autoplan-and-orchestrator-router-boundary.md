---
package: rjm
name: Autoplan and Orchestrator Router Boundary
slug: autoplan-and-orchestrator-router-boundary
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Autoplan and Orchestrator Router Boundary

## Definition — verbatim
> "ADR-078: Autoplan and Orchestrator Router Boundary" — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 12 | defined here | Architectural decision title defining two-layer boundary between autoplan and orchestrator. |

## Consumes
User request inputs, skill catalog, multi-agent coordination requirements.

## Produces
Clear architectural separation: autoplan handles initial skill-level routing; orchestrator coordinates multi-agent, multi-domain task execution.

## When applied
Applied when triaging incoming requests entering the agent system.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An architectural boundary pattern resolving request routing ambiguity between the autoplan skill and the orchestrator agent. Autoplan acts as the outer, lightweight front door routing single-skill requests, while orchestrator coordinates complex, multi-agent workflows.
