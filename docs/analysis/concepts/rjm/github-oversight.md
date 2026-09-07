---
package: rjm
name: github-oversight
slug: github-oversight
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .vscode/toolsets.jsonc, sha256: 419d9acfe3ca66bd6aed4b713acf4140bd823f1c65852507bdab3f8dee26de72}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# github-oversight

## Definition — verbatim
(used, not defined)

> "| `github-oversight` | 6 GitHub issue/PR/workflow tools | orchestrator |" — templates/README.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .vscode/toolsets.jsonc | 36 | defined here | Configuration key defining the github-oversight toolset for issue, PR, and workflow monitoring. |
| templates/README.md | 50 | defined here | Table entry cataloging the github-oversight toolset and assigning it to the orchestrator agent. |

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
github-oversight is a toolset configuration identifier bundling GitHub issue, PR, and CI/CD monitoring tools for supervisory agents rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
