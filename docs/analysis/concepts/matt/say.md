---
package: matt
name: say
slug: say
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

# say

## Definition — verbatim
> "prints a plain instruction line." — skills/engineering/wizard/template.sh:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Listed as a library helper function for printing descriptive guidance within a wizard stage. |
| skills/engineering/wizard/template.sh | 59 | defined here | Bash helper function that formats and prints an indented plain instruction line to the terminal. |

## Consumes
A text string containing an instruction or explanatory message.

## Produces
An indented line of formatted text output on stdout.

## When applied
When authoring wizard stages to provide explanatory text or instructions to the user.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A bash output helper function in the wizard library that formats plain text instructions with two spaces of indentation, providing readable visual hierarchy beneath stage headings during interactive setup flows.
