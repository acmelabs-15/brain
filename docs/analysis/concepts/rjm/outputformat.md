---
package: rjm
name: -OutputFormat
slug: outputformat
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# -OutputFormat

## Definition — verbatim
(used, not defined)

> "still specified the original PowerShell parameter style (`-OutputFormat`, a" — .agents/architecture/ADR-056-skill-output-format-standardization.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 22 | defined here | Specified parameter name for format switching in legacy PowerShell skill scripts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
skill-output-format-standardization

## Implementation status
clean

## Design notes
A PowerShell parameter name identifier in ADR-056 for switching between JSON, Human, and Auto output formats per D-023.
