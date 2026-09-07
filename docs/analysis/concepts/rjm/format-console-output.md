---
package: rjm
name: format_console_output
slug: format-console-output
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

# format_console_output

## Definition — verbatim
(used, not defined)

> "def format_console_output(result: _ScanResultLike) -> str:" — .claude/skills/security-scan/scripts/scan_format.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_format.py | 43 | defined here | Function that formats security scan results for terminal console display. |

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
format_console_output is a Python helper function rendering scan results into formatted terminal text rather than an operational lifecycle concept.
