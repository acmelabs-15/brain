---
package: rjm
name: Add-Member
slug: add-member
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

# Add-Member

## Definition — verbatim
(used, not defined)

> "`Add-Member`) no longer apply to any script in the corpus. The underlying" — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 19 | used here | Cited as obsolete PowerShell-specific cmdlet pattern for adding properties dynamically. |

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
PowerShell built-in cmdlet identifier used to add custom properties or members to existing objects, cited in obsolete scripting patterns, not a lifecycle methodology concept.
