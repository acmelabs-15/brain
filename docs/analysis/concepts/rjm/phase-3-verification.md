---
package: rjm
name: Phase 3 Verification
slug: phase-3-verification
kind: gate
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

# Phase 3 Verification

## Definition — verbatim
> "### Phase 3 Verification" — .claude/skills/research-and-incorporate/references/workflow.md:296

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 296 | defined here | Blocking XML-tagged checkpoint gate verifying specific integration points, concrete applications, and justified priorities before proceeding to Phase 4. |

## Consumes
Completed applicability section of the analysis document with integration points and priorities.

## Produces
Verification pass verdict or instruction to return to Phase 3.

## When applied
Evaluated at the boundary between Phase 3 (Applicability Assessment) and Phase 4 (Memory Integration) in research-and-incorporate.

## Sub-concepts
none

## Part of
research-and-incorporate, phase-3-applicability

## Implementation status
defects: doc-drift

## Design notes
A blocking quality gate in research-and-incorporate requiring explicit validation that integration points are specific, applications are concrete with file paths or agent names, and priorities are justified by project goals before allowing memory integration.
