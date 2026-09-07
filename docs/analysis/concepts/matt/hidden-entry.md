---
package: matt
name: hidden entry
slug: hidden-entry
kind: technique
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hidden entry

## Definition — verbatim
(used, not defined)

> "hidden entry for secrets" — external/wizard.md:40

## Also called — verbatim
`hidden secret entry` — skills/engineering/wizard/SKILL.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Specifies blind terminal input for secrets to prevent credentials from echoing into terminal scrollback. |

## Consumes
Sensitive credentials typed or pasted by the user into the terminal prompt.

## Produces
Secure in-memory variables without exposing keys in terminal scrollback or command history.

## When applied
Used for any wizard stage capturing API keys, tokens, or passwords via `ask_secret`.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
Hidden entry is a terminal security technique implemented via `read -s` in the wizard template. By disabling character echo during sensitive inputs, it ensures passwords and API keys never persist in terminal logs, screenshots, or screen-sharing sessions.
