---
package: rjm
name: research
slug: research
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .vscode/toolsets.jsonc, sha256: 419d9acfe3ca66bd6aed4b713acf4140bd823f1c65852507bdab3f8dee26de72}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# research

## Definition — verbatim
(used, not defined)

> "| `research` | web, deepwiki, context7, perplexity | analyst |" — templates/README.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .vscode/toolsets.jsonc | 86 | defined here | Configuration key defining the research toolset for external web and documentation search. |
| docs/skill-reference.md | 34 | defined here | Category table entry grouping research, programming advice, and prompt engineering skills. |
| templates/README.md | 54 | defined here | Table entry cataloging the research toolset and assigning it to the analyst agent. |

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
defects: missing-path

## Design notes
research is a toolset configuration identifier and documentation category label grouping external information retrieval tools rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
