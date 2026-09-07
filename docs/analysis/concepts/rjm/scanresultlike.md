---
package: rjm
name: _ScanResultLike
slug: scanresultlike
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_format.py, sha256: aa736a5f23675ecf04e4af3cf2aadc61fafba473407ed2d365ca13967b029bd1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _ScanResultLike

## Definition — verbatim
(used, not defined)

> "class _ScanResultLike(Protocol):" — .claude/skills/security-scan/scripts/scan_format.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_format.py | 36 | defined here | Protocol class defining structural interface for scan result objects consumed by console formatting functions. |

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
_ScanResultLike is a private Python typing Protocol used to decouple scan formatting subroutines from scanner dataclasses rather than a software lifecycle concept.
