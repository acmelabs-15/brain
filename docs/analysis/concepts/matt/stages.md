---
package: matt
name: STAGES
slug: stages
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

# STAGES

## Definition — verbatim
(used, not defined)
> "# STAGES: author this section. One stage() per step the human takes." — skills/engineering/wizard/template.sh:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 44 | used here | Identifies STAGES as the fixed marker above which library code must not be edited. |
| external/wizard.md | 40 | used here | External guide reference to the STAGES demarcation line in wizard templates. |
| skills/engineering/wizard/SKILL.md | 10 | defined here | Cites the STAGES marker separating immutable UX library helpers from custom step implementations. |
| skills/engineering/wizard/template.sh | 183 | defined here | Comment header marking the beginning of the custom authorable stages section. |

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
`STAGES` is a source code demarcation comment in `template.sh` separating the fixed shell utility library from user-authored procedure steps rather than a software lifecycle concept, classified as `kind: name-only` per D-023.
