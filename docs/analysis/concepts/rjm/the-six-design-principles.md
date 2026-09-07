---
package: rjm
name: The Six Design Principles
slug: the-six-design-principles
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Six Design Principles

## Definition — verbatim
> "All agents must adhere to these principles:" — docs/agent-governance.md:19

## Also called — verbatim
> "| Agent Design Principles | `.agents/governance/agent-design-principles.md` | 6 principles all agents must follow |" — docs/agent-governance.md:13

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 17 | defined here | Section heading and core principles defining the mandatory design criteria for all agents. |

## Consumes
Agent proposals, system prompt designs, and capability definitions.

## Produces
Compliant agent specifications with bounded overlap, explicit entry/exit criteria, and consistent interfaces.

## When applied
Applied during agent design, ADR proposals, and steering committee evaluations.

## Sub-concepts
none

## Part of
steering-committee

## Implementation status
clean

## Design notes
The foundational design constraints in rjm ensuring modularity and preventing agent sprawl across the multi-agent system. By enforcing a 20% overlap limit, fast entry decisions, explicit limitations, composability, verifiable metrics, and standard interfaces, they keep agent boundaries crisp and maintainable.
