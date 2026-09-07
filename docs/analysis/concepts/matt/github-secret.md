---
package: matt
name: GitHub secret
slug: github-secret
kind: name-only
package_phase: none
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

# GitHub secret

## Definition — verbatim
(used, not defined)
> "| GitHub secret | CI reads it, and it's sensitive |" — docs/engineering/wizard.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 37 | used here | Decision table entry identifying GitHub secret as the target when CI reads sensitive values. |
| external/wizard.md | 38 | used here | External guide decision table mapping sensitive CI variables to GitHub secrets. |

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
`GitHub secret` is an external platform security credential storage target in GitHub Actions rather than a software lifecycle concept, classified as `kind: name-only` per D-023.
