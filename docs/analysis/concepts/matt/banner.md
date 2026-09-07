---
package: matt
name: banner
slug: banner
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# banner

## Definition — verbatim
> "shows the opening frame: what this wizard does." — skills/engineering/wizard/template.sh:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 39 | defined here | Function that renders the initial wizard title screen, stage count, and start prompt. |

## Consumes
A wizard title string and the configured `TOTAL_STAGES` count.

## Produces
A formatted initial terminal screen with title, explanation, stage count, and a start prompt.

## When applied
At the beginning of a wizard script before the first stage executes.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A presentation helper function in the wizard library that clears the terminal and displays an opening banner explaining what the procedure will do and how many stages it contains, establishing clear expectations for the human operator.
