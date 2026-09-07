---
package: matt
name: scoping
slug: scoping
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scoping

## Definition — verbatim
> "Scoping happens before a line is written. The [skill](https://www.aihero.dev/ai-coding-dictionary/skill) reads the repo instead of asking cold: `.env*`, `docker-compose*`, framework config, and every `secrets.*` / `vars.*` reference in `.github/workflows/`: each of those is a value the wizard has to produce." — docs/engineering/wizard.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 30 | defined here | Defined as the pre-generation analysis phase where the agent inspects the repo to determine required values. |
| external/wizard.md | 36 | defined here | External guide definition of scoping as repo inspection before script authoring. |

## Consumes
Local configuration files (.env*, docker-compose*), framework configurations, and CI workflow definitions.

## Produces
An ordered inventory of values to capture and their target storage locations (.env, GitHub secret, GitHub variable).

## When applied
Applied before writing any wizard script code to determine the required stages.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
`scoping` grounds wizard creation in repository evidence. Rather than asking developers open-ended questions about what configuration is required, scoping inspects existing workflow files and configuration schemas to automatically deduce what variables and secrets must be produced.
