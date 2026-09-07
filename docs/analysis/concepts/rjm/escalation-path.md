---
package: rjm
name: Escalation Path
slug: escalation-path
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Escalation Path

## Definition — verbatim
(used, not defined)

> "Escalation Path" — .agents/governance/steering-committee-charter.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 129 | defined here | Section heading and matrix mapping operational agent issues to first responders and governance escalation tiers. |

## Consumes
Routing conflicts, agent execution failures, security concerns, design disagreements, and scope creep.

## Produces
Escalation routing to appropriate first responders (Orchestrator, QA, Security, Architect, Critic) or immediate committee referral.

## When applied
When agent execution or architectural coordination encounters unresolvable conflicts, failures, or security boundaries.

## Sub-concepts
none

## Part of
steering-committee-charter

## Implementation status
defects: doc-drift, missing-path

## Design notes
Hierarchical conflict resolution pattern defining explicit routing from autonomous agents to human and committee governance tiers. It ensures critical safety, security, and architectural conflicts are promptly triaged without deadlocking autonomous agent execution.
