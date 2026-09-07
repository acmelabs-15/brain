---
package: rjm
name: Remediation Actions
slug: remediation-actions
kind: template
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

# Remediation Actions

## Definition — verbatim
> "### Remediation Actions" — .claude/skills/retrospective/references/diagnosis-and-actions.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 68 | defined here | Section defining the remediation action table template mapping issues to fixes and owners. |

## Consumes
Traceability errors and warnings identified during specification graph validation.

## Produces
A structured remediation table specifying the detected issue, concrete fix action, and designated owner.

## When applied
Applied whenever traceability health analysis identifies blocking errors or non-blocking warnings.

## Sub-concepts
none

## Part of
traceability-metrics, diagnosis

## Implementation status
clean

## Design notes
Remediation Actions provides a structured template table to assign explicit corrective tasks and owner roles for every detected traceability issue, ensuring specification defects are systematically resolved.
