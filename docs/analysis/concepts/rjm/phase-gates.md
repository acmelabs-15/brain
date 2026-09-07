---
package: rjm
name: Phase gates
slug: phase-gates
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

# Phase gates

## Definition — verbatim
> "Phase gates are explicit checkpoints within skills that **force structured re-evaluation** at critical points. They prevent protocol bypasses by blocking progression until conditions are verified." — .agents/governance/SKILL-PHASE-GATES.md:5

## Also called — verbatim
`phase gates` — .agents/governance/SKILL-PHASE-GATES.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 5 | defined here | Defines phase gates as explicit checkpoints that force structured re-evaluation and prevent protocol bypasses. |

## Consumes
Task state, evidence sources, and execution preconditions.

## Produces
Blocking or proceed decision for workflow phase transitions.

## When applied
Evaluated at high-risk transition points (making conclusions, modifying files, delivering output).

## Sub-concepts
evidence-gate, verification-gate, documentation-gate

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Explicit checkpoints placed at critical workflow transitions to prevent protocol bypasses. They require verification of preconditions, documentation of evidence, or review verdicts before an agent can progress to downstream phases.
