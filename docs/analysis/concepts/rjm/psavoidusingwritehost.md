---
package: rjm
name: PSAvoidUsingWriteHost
slug: psavoidusingwritehost
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PSAvoidUsingWriteHost

## Definition — verbatim
(used, not defined)

> "| PSScriptAnalyzer rule fails | Update `.psscriptanalyzerrc.psd1` | Suppress `PSAvoidUsingWriteHost` with rationale |" — .claude/skills/validation-authority/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/validation-authority/SKILL.md | 56 | used here | Cited as an example PSScriptAnalyzer rule that may require documented suppression in configuration. |

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
`PSAvoidUsingWriteHost` is a specific PSScriptAnalyzer static analysis rule identifier discouraging direct console writes in PowerShell rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
