---
package: matt
name: ask
slug: ask
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ask

## Definition — verbatim
(used, not defined)
> "ask() {" — skills/engineering/wizard/template.sh:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 65 | used here | Highlights a terminal input bug where arrow keys in ask prompts insert escape characters. |
| external/wizard.md | 49 | used here | External guide discussion of read -r limitations in the ask function implementation. |
| skills/engineering/wizard/SKILL.md | 35 | defined here | Lists ask as a standard library helper for capturing visible non-secret user input. |
| skills/engineering/wizard/template.sh | 100 | defined here | Shell function implementation prompting user input with default value support. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`ask` is a shell helper function in `template.sh` that prompts the user for terminal input with re-run default retention rather than a software lifecycle concept, classified as `kind: name-only` per D-023.
