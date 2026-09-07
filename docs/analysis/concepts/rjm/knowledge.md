---
package: rjm
name: knowledge
slug: knowledge
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

# knowledge

## Definition — verbatim
(used, not defined)

> "| `knowledge` | cloudmcp-manager/\*, serena/\*, memory | Most agents |" — templates/README.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .vscode/toolsets.jsonc | 18 | defined here | Configuration key defining the knowledge toolset for memory and persistent context tools. |
| templates/README.md | 48 | defined here | Table entry cataloging the knowledge toolset and mapping it to agents requiring cross-session context. |

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
knowledge is a configuration identifier defining a toolset for cross-session memory and persistence tools rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
