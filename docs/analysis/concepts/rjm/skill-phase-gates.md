---
package: rjm
name: Skill Phase Gates
slug: skill-phase-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-PHASE-GATES.md, sha256: 57542e2a38b186872f2388bebe2f47c8b95c4a3743d6fcf63c473048bbb86f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Phase Gates

## Definition — verbatim
> "# Skill Phase Gates" — .agents/governance/SKILL-PHASE-GATES.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 1 | defined here | Primary governance specification defining checkpoints that force structured re-evaluation within skills. |

## Consumes
Multi-step skill workflows, intermediate outputs, and transition criteria.

## Produces
Standardized gating mechanisms and compliance requirements across multi-step skills.

## When applied
Designed into multi-step skills during development and invoked at phase transitions.

## Sub-concepts
evidence-gate, verification-gate, documentation-gate, gate-status

## Part of
skill-governance

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Architectural framework establishing mandatory checkpoints within multi-step skills. The core purpose is not absolute determinism but forcing iteration and structured re-evaluation at critical junctures while preserving LLM judgment.
