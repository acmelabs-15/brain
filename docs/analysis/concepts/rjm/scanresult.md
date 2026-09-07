---
package: rjm
name: ScanResult
slug: scanresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ScanResult

## Definition — verbatim
(used, not defined)

> "\"ScanResult\"," — .claude/skills/golden-principles/scripts/scan_principles_core.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/scripts/scan_principles_core.py | 36 | defined here | Primary definition of `ScanResult` within scan_principles_core.py. |
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 4 | defined here | Primary definition of `ScanResult` within envelope.py. |
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 101 | defined here | Primary definition of `ScanResult` within scan_vulnerabilities.py. |
| .claude/skills/style-enforcement/scripts/check_style.py | 71 | defined here | Primary definition of `ScanResult` within check_style.py. |

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
defects: doc-drift, exit-code-mismatch, other, script-bug

## Design notes
A code identifier, type, or architectural heading (`ScanResult`) recorded during inventory analysis, classified as `name-only` per D-023.
