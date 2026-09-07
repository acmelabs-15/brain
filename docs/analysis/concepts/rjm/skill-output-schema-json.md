---
package: rjm
name: skill-output.schema.json
slug: skill-output-schema-json
kind: name-only
package_phase: none
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

# skill-output.schema.json

## Definition — verbatim
(used, not defined)

> "- Schema defined in `.agents/schemas/skill-output.schema.json`" — .agents/architecture/ADR-056-skill-output-format-standardization.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 23 | used here | Cites schema file where Python output envelope validation rules reside. |
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 88 | defined here | Identifies the schema file defining the standardized skill output envelope structure. |

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
defects: missing-path, doc-drift

## Design notes
Schema file path (`.agents/schemas/skill-output.schema.json`) defining the JSON Schema for standardized skill output envelopes, an implementation artifact rather than a lifecycle methodology concept.
