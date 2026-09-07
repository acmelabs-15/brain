---
package: matt
name: open_url
slug: open-url
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

# open_url

## Definition — verbatim
> "opens it in the human's browser, cross-platform incl. WSL." — skills/engineering/wizard/template.sh:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Listed as a library helper function for automatically launching browser URLs during setup steps. |
| skills/engineering/wizard/template.sh | 66 | defined here | Cross-platform bash function that opens a specified URL in the user's default web browser. |

## Consumes
A target web URL string.

## Produces
Spawns the system default web browser displaying the target web page.

## When applied
At the start of a wizard stage requiring human interaction with a third-party web dashboard or documentation page.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A cross-platform browser opening utility in the wizard template library that detects and uses available launcher commands (`wslview`, `explorer.exe`, `xdg-open`, or macOS `open`) to navigate the human to the exact dashboard page required, falling back to manual instruction if no browser launcher succeeds.
