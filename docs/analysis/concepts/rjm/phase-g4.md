---
package: rjm
name: Phase G4
slug: phase-g4
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase G4

## Definition — verbatim
(used, not defined)

> "Self-validation checklist for Phase G4. All items must pass before saving the ADR." — .claude/skills/adr-generator/references/quality-checklist.md:3

## Also called — verbatim
`Phase G4: Validate` — .claude/skills/adr-generator/SKILL.md:174

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/quality-checklist.md | 3 | used here | Referenced as the validation phase during which all checklist items must pass before an ADR is saved. |

## Consumes
Populated ADR document produced in Phase G3.

## Produces
Validated ADR ready for saving, or defect findings requiring correction.

## When applied
Following Phase G3 generation, before Phase G5 saving.

## Sub-concepts
adr-quality-checklist, structural-completeness, content-quality

## Part of
adr-generator

## Implementation status
clean

## Design notes
The validation phase of the ADR generator workflow. In Phase G4, the generator audits the drafted decision record against structural completeness, content rigor, and governance rules using the ADR Quality Checklist to ensure no defective or unvalidated records are written to disk.
