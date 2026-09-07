---
package: rjm
name: Valid Chains
slug: valid-chains
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Valid Chains

## Definition — verbatim
> "Complete REQ -> DESIGN -> TASK traces" — .claude/skills/retrospective/references/diagnosis-and-actions.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 38 | defined here | Traceability metric defined as complete REQ -> DESIGN -> TASK traces with a target of 100% of designs. |

## Consumes
Traceability links across requirement, design specification, and task files.

## Produces
Count and percentage of complete specification traces with a target of 100% of designs.

## When applied
Applied during specification layer health evaluation in retrospective Phase 2.

## Sub-concepts
none

## Part of
traceability-metrics

## Implementation status
clean

## Design notes
Valid Chains measures the proportion of specification artifacts that have an unbroken, verified lineage from requirement to design specification to executable task, ensuring complete architectural traceability.
