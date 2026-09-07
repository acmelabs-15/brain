---
package: rjm
name: EXIT_VULNERABILITIES
slug: exit-vulnerabilities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_constants.py, sha256: 4dec891d77fd21fe9f3fb63ee816f6e06dbb56287faa6db33af7dcc7e518c249}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_VULNERABILITIES

## Definition — verbatim
(used, not defined)

> "EXIT_VULNERABILITIES = 10" — .claude/skills/security-scan/scripts/scan_constants.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/scripts/scan_constants.py | 18 | defined here | Constant defining the process exit code (10) when vulnerabilities are detected. |

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
EXIT_VULNERABILITIES is an integer exit-code constant defined in a Python script module to signal vulnerability detection rather than an operational lifecycle concept.
