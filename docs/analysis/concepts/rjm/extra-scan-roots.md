---
package: rjm
name: EXTRA_SCAN_ROOTS
slug: extra-scan-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXTRA_SCAN_ROOTS

## Definition — verbatim
(used, not defined)

> "``EXTRA_SCAN_ROOTS`` (``.claude/commands``, ``templates/agents``, and" — scripts/validation/check_skill_md_portability.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 47 | defined here | Configuration tuple constant specifying additional non-skill directories to scan for path portability. |

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
`EXTRA_SCAN_ROOTS` is a Python configuration constant identifier specifying non-skill scan directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
