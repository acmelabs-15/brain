---
package: matt
name: hidden secret entry
slug: hidden-secret-entry
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hidden secret entry

## Definition — verbatim
> "hidden secret entry" — skills/engineering/wizard/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 10 | defined here | Lists hidden secret entry as a core UX capability provided by the wizard template library. |

## Consumes
Sensitive credentials (passwords, tokens, API keys) entered by a human in a terminal.

## Produces
Captured variable values in bash memory without echoing characters to the terminal screen.

## When applied
Whenever an interactive setup wizard prompts for credentials, secret keys, or passwords.

## Sub-concepts
ask_secret

## Part of
wizard

## Implementation status
clean

## Design notes
A terminal interaction technique in setup wizards that suppresses keyboard character echoing when reading sensitive values like API tokens or passwords, preventing shoulder surfing and ensuring credentials are not retained in terminal scrollback buffers.
