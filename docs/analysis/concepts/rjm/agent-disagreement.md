---
package: rjm
name: Agent Disagreement
slug: agent-disagreement
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

# Agent Disagreement

## Definition — verbatim
> "When agents produce conflicting recommendations:" — .agents/AGENT-SYSTEM.md:1687

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1685 | defines | 4-step conflict resolution protocol for handling conflicting agent recommendations via escalation to high-level-advisor. |

## Consumes
Conflicting recommendations, differing architectural analyses, and supporting evidence submitted by two or more specialist agents.

## Produces
An escalation dossier, definitive verdict, and documented rationale from the high-level-advisor.

## When applied
> "When agents produce conflicting recommendations:" — .agents/AGENT-SYSTEM.md:1687

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A structured conflict resolution protocol invoked when collaborating agents reach conflicting recommendations. Rather than stalling or silently choosing an arbitrary direction, the orchestrator documents both positions with evidence, escalates the conflict to high-level-advisor for a binding verdict, and records the underlying rationale.
