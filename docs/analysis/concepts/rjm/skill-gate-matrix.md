---
package: rjm
name: Skill Gate Matrix
slug: skill-gate-matrix
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

# Skill Gate Matrix

## Definition — verbatim
> "## Skill Gate Matrix" — .agents/governance/SKILL-PHASE-GATES.md:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-PHASE-GATES.md | 219 | defined here | Audit table tracking phase gate coverage and compliance status across skills. |

## Consumes
Gate requirements across repository skills.

## Produces
Status matrix detailing which skills implement Evidence, Verification, Review, and Documentation gates.

## When applied
Consulted during governance audits to assess gate adoption and compliance.

## Sub-concepts
none

## Part of
skill-phase-gates

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A governance audit table tracking the adoption status of Evidence, Verification, Review, and Documentation gates across skills, ensuring critical workflows enforce required validation before completion.
