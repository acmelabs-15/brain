---
package: rjm
name: deterministic router
slug: deterministic-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deterministic router

## Definition — verbatim
> "The orchestrator is a deterministic router with a retry policy. It is not a" — .agents/architecture/ADR-065-orchestrator-as-router.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 58 | defined here | Defines the canonical architectural role of the orchestrator, displacing manager/supervisor framing with code-governed routing. |

## Consumes
User requests, task objectives, and routing classification rules.

## Produces
Logged routing decisions assigning inputs to specialized sub-agents.

## When applied
Applied at workflow initiation and milestone boundaries to route tasks to appropriate specialized agents.

## Sub-concepts
retry-policy, routing-decisions

## Part of
orchestration-architecture

## Implementation status
defects: missing-path

## Design notes
The core architectural pattern established by ADR-065: the orchestrator agent operates strictly as a deterministic router and programmatic retry policy rather than an anthropomorphic manager. It strips vague supervisory prompts and relies on code-enforced rules and structured logs to route tasks predictably.
