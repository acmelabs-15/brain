---
package: rjm
name: Voting Pattern
slug: voting-pattern
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

# Voting Pattern

## Definition — verbatim
> "For critical decisions, use redundant execution:" — .agents/AGENT-SYSTEM.md:1433

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1431 | defines | Redundant execution pattern collecting independent agent votes and confidence levels for critical decisions. |

## Consumes
Critical architectural, security, or design questions requiring multi-perspective evaluation.

## Produces
Aggregated voting tally recording individual recommendations, confidence scores, and majority outcome.

## When applied
> "For critical decisions, use redundant execution:" — .agents/AGENT-SYSTEM.md:1433

## Sub-concepts
none

## Part of
parallel-execution

## Implementation status
clean

## Design notes
A redundant multi-agent consensus pattern applied to high-stakes decisions where multiple specialist agents (e.g. independent-thinker, architect, analyst) evaluate the same trade-off independently. Each agent provides a recommendation and a confidence percentage, allowing the orchestrator to synthesize a majority consensus or escalate persistent deadlocks.
