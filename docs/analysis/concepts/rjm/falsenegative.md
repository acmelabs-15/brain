---
package: rjm
name: FalseNegative
slug: falsenegative
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
