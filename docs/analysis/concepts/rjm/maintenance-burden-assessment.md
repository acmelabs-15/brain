---
package: rjm
name: Maintenance Burden Assessment
slug: maintenance-burden-assessment
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

# Maintenance Burden Assessment

## Definition — verbatim
> "## Maintenance Burden Assessment" — .agents/governance/SKILL-CREATION-CRITERIA.md:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 323 | defined here | Outlines an estimation framework evaluating dependencies, update frequency, gate complexity, and documentation before skill creation. |

## Consumes
Skill design characteristics: external dependencies, update frequency, gate complexity, and documentation requirements.

## Produces
Maintenance risk rating and decision whether to proceed with skill creation (reconsidering if ≥2 factors are High).

## When applied
Conducted prior to authoring a new skill during the justification phase.

## Sub-concepts
none

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
A four-factor estimation rubric (dependencies, update frequency, gate complexity, documentation) evaluated before skill creation. If a proposed skill rates as "High" burden in two or more factors, its creation is reconsidered to avoid accumulating operational debt.
