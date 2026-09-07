---
package: rjm
name: Broken References
slug: broken-references
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

# Broken References

## Definition — verbatim
> "References to non-existent specs" — .claude/skills/retrospective/references/diagnosis-and-actions.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 41 | defined here | Traceability metric defining references to non-existent specs, classified as a blocking error targeted at zero. |

## Consumes
Specification files containing references to missing or invalid spec IDs.

## Produces
Blocking error classification requiring immediate remediation by spec-generator or milestone-planner.

## When applied
Evaluated during specification layer validation in retrospective Phase 2.

## Sub-concepts
none

## Part of
traceability-metrics

## Implementation status
clean

## Design notes
Broken References flags specification links pointing to missing or nonexistent requirement, design, or task identifiers as blocking integrity errors that must be resolved to restore traceability.
