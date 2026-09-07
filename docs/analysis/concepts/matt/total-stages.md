---
package: matt
name: TOTAL_STAGES
slug: total-stages
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TOTAL_STAGES

## Definition — verbatim
(used, not defined)
> "TOTAL_STAGES=0" — skills/engineering/wizard/template.sh:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 28 | defined here | Explains that setting TOTAL_STAGES drives the wizard script's progress display. |
| external/wizard.md | 35 | defined here | External guide mention of TOTAL_STAGES controlling the progress counter. |
| skills/engineering/wizard/SKILL.md | 35 | defined here | Instruction to set TOTAL_STAGES to match the count of authored script stages. |
| skills/engineering/wizard/template.sh | 23 | defined here | Shell variable declaration initializing the total stage count in the template. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`TOTAL_STAGES` is a shell script configuration variable in `template.sh` specifying the total number of wizard steps to render the terminal progress bar, classified as `kind: name-only` per D-023.
