---
package: rjm
name: PowerShell parameter style
slug: powershell-parameter-style
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

# PowerShell parameter style

## Definition — verbatim
(used, not defined)

> "still specified the original PowerShell parameter style (`-OutputFormat`, a" — .agents/architecture/ADR-056-skill-output-format-standardization.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 22 | used here | Descriptive label for historical PascalCase parameter naming conventions in PowerShell scripts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
outputformat

## Part of
none

## Implementation status
clean

## Design notes
A historical naming style descriptor in ADR-056 distinguishing legacy PowerShell parameter conventions from modern Python CLI flags per D-023.
