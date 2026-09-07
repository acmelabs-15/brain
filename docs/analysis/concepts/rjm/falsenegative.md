---
package: rjm
name: FalseNegative
slug: falsenegative
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FalseNegative

## Definition — verbatim
(used, not defined)

> "class FalseNegative:" — scripts/security/invoke_security_retrospective.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/invoke_security_retrospective.py | 55 | defined here | Dataclass representing a security vulnerability missed by the agent, capturing CWE ID, file, line, severity, and remediation. |

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
defects: orphan, doc-drift

## Design notes
`FalseNegative` is a Python dataclass identifier modeling missed security vulnerabilities in retrospective analysis rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
