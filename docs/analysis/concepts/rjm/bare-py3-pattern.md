---
package: rjm
name: _BARE_PY3_PATTERN
slug: bare-py3-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _BARE_PY3_PATTERN

## Definition — verbatim
(used, not defined)

> "_BARE_PY3_PATTERN = re.compile" — scripts/validation/check_python3_entrypoints.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 29 | defined here | Regular expression compiled to match bare python3 script invocations in documentation files. |

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
defects: orphan

## Design notes
`_BARE_PY3_PATTERN` is an internal Python compiled regular expression constant in `check_python3_entrypoints.py` identifying unadorned python3 script invocations in documentation, classified as `kind: name-only` per D-023.
