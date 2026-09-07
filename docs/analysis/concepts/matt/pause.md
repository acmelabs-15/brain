---
package: matt
name: pause
slug: pause
kind: technique
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

# pause

## Definition — verbatim
> "waits for the human to confirm they've done the manual part." — skills/engineering/wizard/template.sh:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Cited as a library helper function for halting execution until the human confirms a manual step is complete. |
| skills/engineering/wizard/template.sh | 78 | defined here | Function that prints a dimmed prompt and reads from standard input to wait for Enter keypress. |

## Consumes
An optional message prompt string.

## Produces
A synchronous terminal pause awaiting Enter keypress from standard input.

## When applied
When a wizard stage requires an out-of-band manual action by the user before the script may safely proceed.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A synchronization helper function in the wizard framework that halts execution until the user manually performs an out-of-band action (such as navigating a dashboard or confirming an external state) and presses Enter to proceed.
