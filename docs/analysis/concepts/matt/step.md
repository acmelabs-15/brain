---
package: matt
name: step
slug: step
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh, sha256: 35103539fc36873eea36074769ad454f9379d6fc8b2dc0e26ce987fd3bfe5503}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step

## Definition — verbatim
> "step \"<instruction>\"          → show instruction, wait for Enter" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh | 10 | defined here | Shell helper function displaying an instruction to the user and pausing until Enter is pressed. |
| skills/engineering/wizard/SKILL.md | 35 | defined here | Listed as a library helper function for numbered human browser actions in wizard stages. |
| skills/engineering/wizard/template.sh | 61 | defined here | Shell function implementation printing a bulleted, numbered-feeling action for the user. |

## Consumes
An instruction string describing an action the human operator must perform.

## Produces
Formatted terminal prompt guiding human execution and waiting for acknowledgement.

## When applied
In interactive setup wizards and human-in-the-loop diagnostic scripts when user interaction is required.

## Sub-concepts
none

## Part of
wizard, diagnosing-bugs

## Implementation status
clean

## Design notes
A terminal helper function in interactive scripts (`template.sh` and `hitl-loop.template.sh`). It presents a discrete human action (such as performing a manual browser step or signing into a service) and pauses execution until confirmed, maintaining clear visual progress during guided operations.
