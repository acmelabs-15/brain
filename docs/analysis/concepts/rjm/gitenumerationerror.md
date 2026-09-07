---
package: rjm
name: GitEnumerationError
slug: gitenumerationerror
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

# GitEnumerationError

## Definition — verbatim
(used, not defined)

> "class GitEnumerationError(RuntimeError):" — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 113 | defined here | Exception raised when git cannot reliably enumerate staged files for scanning. |

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
GitEnumerationError is a Python exception class raised upon git staged file enumeration failures rather than an agent lifecycle concept.
