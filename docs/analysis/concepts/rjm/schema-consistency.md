---
package: rjm
name: schema consistency
slug: schema-consistency
kind: pattern
package_phase: cross-phase
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

# schema consistency

## Definition — verbatim
> "Include all properties in output objects with null/0 values when not populated, rather than conditionally excluding properties from the output schema." — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 52 | defined here | Principle mandating fixed output shapes where unpopulated properties remain present with null or zero values. |

## Consumes
Structured script output properties.

## Produces
Consistent output objects with stable property schemas.

## When applied
> "When designing PowerShell cmdlets and scripts that return structured data, a decision must be made about how to handle optional or conditional properties in output objects." — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:37

## Sub-concepts
none

## Part of
output-envelope

## Implementation status
defects: missing-path

## Design notes
An architectural design pattern ensuring that structured data outputs retain a consistent property schema regardless of runtime options or execution branches. Instead of conditionally omitting keys or properties when optional flags are unused, properties are populated with null or zero values. This guarantees deterministic object shapes, preventing deserialization errors in consuming agents and strict schema validators.
