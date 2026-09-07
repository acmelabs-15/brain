---
package: rjm
name: _no_duplicate_keys
slug: no-duplicate-keys
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _no_duplicate_keys

## Definition — verbatim
(used, not defined)

> "def _no_duplicate_keys(" — scripts/validate_workflows.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 42 | defined here | Constructor callback function raising ConstructorError when encountering duplicate mapping keys in YAML. |

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
`_no_duplicate_keys` is an internal Python constructor function identifier raising an error on duplicate mapping keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
