---
package: rjm
name: _CONTEXT_REFERENCE
slug: context-reference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _CONTEXT_REFERENCE

## Definition — verbatim
(used, not defined)

> "_CONTEXT_REFERENCE: re.Pattern[str] = re.compile(" — scripts/validate_workflows.py:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 338 | defined here | Regular expression pattern matching context references within GitHub Actions expressions regardless of wrapping functions. |

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
`_CONTEXT_REFERENCE` is an internal Python regex pattern in `validate_workflows.py` extracting context references from workflow expressions rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
