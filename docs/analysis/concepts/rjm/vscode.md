---
package: rjm
name: vscode
slug: vscode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# vscode

## Definition — verbatim
(used, not defined)

> "| `vscode`        | legacy | -      | -        | -     | -     | Header only; artifacts pending |" — templates/README.md:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 323 | used here | Matrix entry indicating VS Code provider support status in platform configuration schema. |

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
defects: cross-file-contradiction, doc-drift

## Design notes
vscode is a third-party IDE and target platform provider rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
