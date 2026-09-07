---
package: rjm
name: Constraint and Governance
slug: constraint-and-governance
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Constraint and Governance

## Definition — verbatim
> "**4. Constraint and Governance:**" — .claude/skills/research-and-incorporate/references/workflow.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 245 | defined here | Listed as the fourth analysis area in Phase 3 Applicability Assessment to evaluate project constraints, ADR review processes, and decision-making protocols. |

## Consumes
Research analysis document and synthesized knowledge from Phase 2.

## Produces
Evaluated applicability questions, proposed constraints, and ADR review recommendations.

## When applied
Applied during Phase 3 (Applicability Assessment) of research-and-incorporate when assessing external knowledge integration.

## Sub-concepts
none

## Part of
research-and-incorporate, phase-3-applicability

## Implementation status
defects: doc-drift

## Design notes
An evaluation technique and checklist area within the research-and-incorporate workflow that examines whether researched external principles or frameworks should be formalized into repository constraints, architectural decision records (ADRs), or governance protocols.
