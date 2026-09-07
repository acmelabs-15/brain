---
package: rjm
name: SecurityRetrospective
slug: securityretrospective
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

# SecurityRetrospective

## Definition — verbatim
(used, not defined)

> "class SecurityRetrospective:" — scripts/security/invoke_security_retrospective.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/invoke_security_retrospective.py | 68 | defined here | Orchestrator class executing security retrospective analysis, comparing agent reports with external reviews, and persisting findings. |

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
`SecurityRetrospective` is a Python class identifier coordinating retrospective analysis workflows in security scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
