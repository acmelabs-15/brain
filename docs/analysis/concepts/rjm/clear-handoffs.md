---
package: rjm
name: Clear Handoffs
slug: clear-handoffs
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

# Clear Handoffs

## Definition — verbatim
> "Explicit protocols prevent context loss between agents" — .agents/AGENT-SYSTEM.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 23 | defined here | Listed in the Key Benefits table defining explicit handoff protocols between agents. |

## Consumes
Agent completion state, working artifacts, decisions made, and pending actions.

## Produces
Structured handoff documents, context transfers, and input parameters for subsequent agents.

## When applied
Applied whenever work transitions from one specialized agent or session to another across lifecycle boundaries.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Clear handoffs formalize the transfer of responsibility and operational state between agents and across sessions. By establishing explicit handoff protocols with structured artifacts, rjm eliminates context loss, reduces token overhead from conversational relay, and ensures that receiving agents start with unambiguous preconditions.
