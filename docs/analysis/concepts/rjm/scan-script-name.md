---
package: rjm
name: SCAN_SCRIPT_NAME
slug: scan-script-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py, sha256: 5f404643d7e29b77bf9bff1ae2eb1e747d8641513abf85bccf62130e7220fd73}
  - {path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py, sha256: 7683c7365a23e18d99753f024c1c4a4ce49c01a2881863be56746d4fc3d11bca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SCAN_SCRIPT_NAME

## Definition — verbatim
(used, not defined)

> "SCAN_SCRIPT_NAME = \"invoke_codeql_scan.py\"" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py | 56 | defined here | Constant defining the delegate script name for invoking the CodeQL scan. |
| .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py | 56 | defined here | Constant defining the delegate script name for invoking the CodeQL scan. |

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
SCAN_SCRIPT_NAME is a script constant identifying the scan invocation delegate script rather than an independent lifecycle concept.
