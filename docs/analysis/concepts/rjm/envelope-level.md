---
package: rjm
name: envelope level
slug: envelope-level
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-028-powershell-output-schema-consistency.md, sha256: 9470b04b02f666ddf7eed434937a28f6495aae7dcdc8eaf96d4616a2ab65851b}
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# envelope level

## Definition — verbatim
(used, not defined)

> "ADR-028 schema consistency is enforced at the envelope level" — .agents/architecture/ADR-056-skill-output-format-standardization.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 21 | used here | Cites ADR-056 consequence stating schema consistency is enforced at the outer output envelope. |
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 18 | used here | Describes re-platforming PowerShell schema consistency to Python at the skill-output envelope level. |

## Consumes
Skill execution results and error structures.

## Produces
Standardized wrapping structure across all skill outputs.

## When applied
When wrapping skill or script output for agent and human consumption.

## Sub-concepts
none

## Part of
output-envelope

## Implementation status
defects: missing-path, doc-drift

## Design notes
Refers to the architectural boundary layer where output schema consistency is enforced across all tool and skill executions. By enforcing schema validation at the outer envelope rather than inside individual domain payloads, calling agents can depend on universal top-level fields (`Success`, `Data`, `Error`, `Metadata`) regardless of the specific skill invoked.
