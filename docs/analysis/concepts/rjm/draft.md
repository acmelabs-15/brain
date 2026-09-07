---
package: rjm
name: Draft
slug: draft
kind: phase
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Draft

## Definition — verbatim
> "Skill created but not validated" — .agents/archive/planning/PRD-skills-index-registry.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 147 | defined here | Defined as the initial lifecycle state for unvalidated skills. |

## Consumes
Newly authored skill files and provisional index entries.

## Produces
Provisional skill registrations awaiting validation gates.

## When applied
Applied upon initial skill creation prior to passing naming, atomicity, and evidence checks.

## Sub-concepts
none

## Part of
skill-lifecycle-states

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The initial incubation phase for skills in rjm's memory registry. Draft skills are visible in the index but are not yet certified for production agent workflows until validated against naming, atomicity, and evidence requirements.
