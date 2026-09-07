---
package: matt
name: note
slug: note
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

# note

## Definition — verbatim
> "note() {" — skills/engineering/wizard/template.sh:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 62 | defined here | Helper function that prints dimmed auxiliary text in the terminal. |

## Consumes
A text string message.

## Produces
Formatted dimmed console text sent to standard output.

## When applied
When presenting supplemental details, default options, or closing summary items in wizard screens.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A terminal output formatting helper function in `template.sh` used to render subtle, dimmed context and summary lines without competing visually with primary instructional steps.
