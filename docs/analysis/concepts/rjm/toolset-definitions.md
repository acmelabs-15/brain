---
package: rjm
name: Toolset definitions
slug: toolset-definitions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .vscode/toolsets.jsonc, sha256: 419d9acfe3ca66bd6aed4b713acf4140bd823f1c65852507bdab3f8dee26de72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Toolset definitions

## Definition — verbatim
(used, not defined)

> "// Toolset definitions for GitHub Copilot agents in VS Code." — .vscode/toolsets.jsonc:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .vscode/toolsets.jsonc | 2 | defined here | Comment heading labeling the top-level toolset configuration object for GitHub Copilot agents. |

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
Toolset definitions is a descriptive comment heading in .vscode/toolsets.jsonc labeling the configuration structure for reusable tool groupings rather than an operational lifecycle concept, classified as kind: name-only per D-023.
