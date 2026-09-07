---
package: rjm
name: is_line_suppressed
slug: is-line-suppressed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_line_suppressed

## Definition — verbatim
(used, not defined)

> "def is_line_suppressed(line: str, cwe: str) -> bool:" — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 209 | defined here | Function checking whether a source code line contains a valid inline suppression comment. |

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
defects: doc-drift

## Design notes
is_line_suppressed is a Python helper function checking regex match for suppression annotations rather than an operational lifecycle concept.
