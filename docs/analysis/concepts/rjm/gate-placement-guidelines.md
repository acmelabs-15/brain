---
package: rjm
name: Gate Placement Guidelines
slug: gate-placement-guidelines
kind: reference
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

# Gate Placement Guidelines

## Definition — verbatim
> "## Gate Placement Guidelines" — .agents/governance/SKILL-PHASE-GATES.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 105 | defined here | Comprehensive rules defining when to introduce phase gates and when to omit them to avoid overhead. |

## Consumes
Workflow risk profile, operation reversibility, step count, and execution latency constraints.

## Produces
Gate architecture plan identifying required checkpoints and justified exemptions.

## When applied
Consulted when designing or modifying multi-step skill workflows.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Design guidance balancing enforcement rigor against operational latency. It prescribes gates for high-risk operations (conclusions, mutations, outputs, multi-step sequences) while forbidding gates for single-step, read-only, or time-critical workflows.
