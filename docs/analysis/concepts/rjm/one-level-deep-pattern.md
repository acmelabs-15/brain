---
package: rjm
name: one-level-deep pattern
slug: one-level-deep-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# one-level-deep pattern

## Definition — verbatim
> "The orchestrator coordinates all agent delegation using a one-level-deep pattern (orchestrator → subagent → back to orchestrator)." — .agents/AGENT-SYSTEM.md:866

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 866 | defined here | Architectural rule mandating that all agent delegations route directly through the orchestrator rather than recursive subagent nesting. |

## Consumes
User requests requiring multi-agent delegation.

## Produces
Linear orchestrator-mediated execution cycles preventing unmonitored subagent chains.

## When applied
> "The orchestrator coordinates all agent delegation using a one-level-deep pattern" — .agents/AGENT-SYSTEM.md:866

## Sub-concepts
none

## Part of
- orchestrator
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
The one-level-deep pattern is a core safety constraint in rjm preventing recursive agent spawning. Subagents are strictly forbidden from delegating tasks to other subagents; every interaction must return results to the orchestrator, which evaluates findings and issues the next delegation. This flat delegation topology prevents unbounded token consumption, cyclical delegations, and loss of state observability.
