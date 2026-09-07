---
package: matt
name: read -r
slug: read-r
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

# read -r

## Definition — verbatim
(used, not defined)

> "because the prompt uses <code class=\"ah-code-inline\">read -r</code> rather than Readline" — external/wizard.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 49 | used here | Identifies the bash built-in command used by wizard ask prompts that causes cursor navigation bugs. |

## Consumes
Standard input lines without interpreting backslash escape sequences.

## Produces
Raw string variables captured from the user prompt.

## When applied
Used within the wizard template's `ask` function to capture user response text.

## Sub-concepts
none

## Part of
wizard

## Implementation status
defects: script-bug (Arrow keys in ask prompts insert escape codes rather than moving cursor because read -r lacks line-editing support)

## Design notes
`read -r` is the POSIX bash built-in command for capturing input without backslash escaping. While lightweight and portable, its lack of terminal line-editing causes escape sequences (such as arrow key movements) to be captured as literal text, presenting a documented UX limitation in setup wizards.
