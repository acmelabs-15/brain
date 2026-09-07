---
package: matt
name: stage
slug: stage
kind: pattern
package_phase: matt:Engineering
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

# stage

## Definition — verbatim
> "A **stage** is one focused task on one screen. The script clears the terminal between stages, so a stage that overflows the screen loses the part that scrolled away." — docs/engineering/wizard.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 28 | defined here | Defined as one focused task on one terminal screen within a wizard script. |
| external/wizard.md | 35 | defined here | External guide definition of a stage as a single-screen wizard step. |
| skills/engineering/wizard/SKILL.md | 35 | defined here | Authoring instruction directing replacement of template stages with ordered task steps. |
| skills/engineering/wizard/template.sh | 51 | defined here | Shell function implementing stage boundary initialization and screen clearing. |

## Consumes
Specific task instructions, optional target URLs to open, and user input prompts.

## Produces
A cleared terminal view presenting one step with captured outputs persisted to environment or CI.

## When applied
Composed sequentially in dependency order to structure an interactive wizard script.

## Sub-concepts
none

## Part of
wizard, interactive-bash-script

## Implementation status
clean

## Design notes
A `stage` enforces cognitive focus in terminal wizard scripts. By restricting each stage to a single screen and clearing the terminal between stages, wizards ensure that users are not overwhelmed by verbose scrollback and that critical instructions or input fields remain clearly visible.
