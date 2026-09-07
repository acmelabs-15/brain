---
package: rjm
name: Skill vs Agent Decision
slug: skill-vs-agent-decision
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill vs Agent Decision

## Definition — verbatim
> "## Skill vs Agent Decision" — .agents/governance/SKILL-CREATION-CRITERIA.md:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 243 | defined here | Introduces decision matrix and rules of thumb comparing skills and agents across scope, invocation, context, persistence, and token cost. |

## Consumes
Task requirements, scope boundaries, invocation frequency, state persistence needs, token constraints.

## Produces
Architectural determination whether to implement a capability as a skill or as a specialized agent.

## When applied
Evaluated during agent or skill design triage when deciding between an on-demand procedural skill and a persistent, autonomous agent.

## Sub-concepts
none

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
A governance decision framework in rjm that distinguishes when capability belongs in a focused, on-demand, procedural skill versus a persistent, domain-expert agent. It prevents over-architecting procedural tasks as heavyweight agents while ensuring autonomous problem-solving is not constrained into rigid skill scripts.
