---
package: matt
name: WSL
slug: wsl
kind: reference
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

# WSL

## Definition — verbatim
(used, not defined)

> "cross-platform URL opening (including WSL)" — skills/engineering/wizard/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Highlights Windows Subsystem for Linux support as a standard capability of the wizard template. |
| skills/engineering/wizard/SKILL.md | 10 | used here | Notes built-in WSL compatibility when launching browser URLs during wizard execution. |

## Consumes
Windows Subsystem for Linux shell execution environment.

## Produces
Correct cross-environment URL opening into the host Windows browser from within Linux.

## When applied
Automatically handled when running wizard scripts on Windows development machines using WSL.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
Windows Subsystem for Linux (WSL) presents unique challenges for CLI tools that open web browsers. The wizard template incorporates cross-platform URL opening logic (`wslview`, `powershell.exe /c start`) to ensure setup links launch seamlessly on Windows machines without user friction.
