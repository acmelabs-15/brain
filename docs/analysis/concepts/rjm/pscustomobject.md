---
package: rjm
name: PSCustomObject
slug: pscustomobject
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-028-powershell-output-schema-consistency.md, sha256: 9470b04b02f666ddf7eed434937a28f6495aae7dcdc8eaf96d4616a2ab65851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PSCustomObject

## Definition — verbatim
(used, not defined)

> "$output = [PSCustomObject]@{" — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 99 | used here | Code example demonstrating rejected pattern of conditional property construction. |

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
PowerShell built-in type used for creating custom object instances in scripts, cited in example code for rejected alternative implementations, not a lifecycle methodology concept.
