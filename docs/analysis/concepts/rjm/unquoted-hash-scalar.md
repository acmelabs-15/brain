---
package: rjm
name: _UNQUOTED_HASH_SCALAR
slug: unquoted-hash-scalar
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _UNQUOTED_HASH_SCALAR

## Definition — verbatim
(used, not defined)

> "_UNQUOTED_HASH_SCALAR: re.Pattern[str] = re.compile(" — scripts/validate_workflows.py:441

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 441 | defined here | Regular expression pattern matching unquoted name or description scalar lines in YAML files containing unescaped hash comment markers. |

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
`_UNQUOTED_HASH_SCALAR` is an internal Python regex pattern in `validate_workflows.py` detecting unquoted hash scalars in YAML files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
