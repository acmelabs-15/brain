---
package: rjm
name: Write-Host
slug: write-host
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

# Write-Host

## Definition — verbatim
(used, not defined)

> "- **Issue #632**: `Get-PRChecks` mixes JSON with human output via `Write-Host`" — .agents/architecture/ADR-056-skill-output-format-standardization.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 40 | used here | Cited PowerShell cmdlet writing directly to host console, prohibited in JSON mode. |

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
A PowerShell cmdlet identifier prohibited when emitting machine-readable output to prevent host stream contamination per D-023.
