---
package: matt
name: shellcheck
slug: shellcheck
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shellcheck

## Definition — verbatim
(used, not defined)

> "- `bash -n <script>`; run `shellcheck` if available." — skills/engineering/wizard/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 41 | used here | Highlights static analysis of generated shell scripts to prevent quoting and variable bugs. |
| skills/engineering/wizard/SKILL.md | 41 | used here | Mandates running shellcheck if available during verification before delivering the script. |

## Consumes
Generated shell script text.

## Produces
Linting feedback, edge-case warnings, and shell coding standards compliance.

## When applied
Applied during step 4 of the wizard authoring workflow when the shellcheck binary is present.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
ShellCheck is an industry-standard static analysis tool for shell scripts. In the wizard authoring workflow, running ShellCheck verifies quoting, variable expansion, and portability, ensuring scripts run reliably across varied user shell environments.
