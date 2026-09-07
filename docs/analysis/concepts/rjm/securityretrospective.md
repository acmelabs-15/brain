---
package: rjm
name: SecurityRetrospective
slug: securityretrospective
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
