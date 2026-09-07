---
package: matt
name: confirm
slug: confirm
kind: gate
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# confirm

## Definition — verbatim
> "is a y/N gate; returns success on yes." — skills/engineering/wizard/template.sh:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Cited as a library helper function to require user confirmation before executing irreversible steps. |
| skills/engineering/wizard/template.sh | 84 | defined here | Interactive function that prompts a y/N question and returns success only on affirmative answer. |

## Consumes
A question prompt string describing an upcoming action or decision.

## Produces
A boolean exit status (returns 0 on affirmative 'y' or 'Y', non-zero otherwise).

## When applied
Immediately before executing any destructive, non-idempotent, or irreversible action in a wizard procedure.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
An interactive confirmation gate in bash wizards that requires explicit human validation (y/N) before proceeding with dangerous or irreversible actions like migrations, data truncations, or cutovers, ensuring safety in automated setup scripts.
