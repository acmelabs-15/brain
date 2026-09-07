---
package: matt
name: bash -n
slug: bash-n
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

# bash -n

## Definition — verbatim
(used, not defined)

> "It verifies statically instead: <code class=\"ah-code-inline\">bash -n</code>, <code class=\"ah-code-inline\">shellcheck</code> where available" — external/wizard.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 41 | used here | Used by the authoring agent to check bash syntax statically without executing the interactive script. |

## Consumes
A newly generated wizard bash script.

## Produces
Verification of bash syntax integrity and identification of parse errors.

## When applied
Executed statically immediately after script generation and prior to user handoff.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
`bash -n` performs a syntax check on shell scripts without executing commands. Because wizards contain interactive prompts and launch browser windows, the AI cannot run them end-to-end; `bash -n` provides a fast, zero-side-effect syntax gate before handoff.
