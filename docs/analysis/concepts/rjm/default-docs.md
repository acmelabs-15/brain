---
package: rjm
name: _DEFAULT_DOCS
slug: default-docs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_DOCS

## Definition — verbatim
(used, not defined)

> "_DEFAULT_DOCS: list[str] = [" — scripts/validation/check_python3_entrypoints.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 54 | defined here | Default list of documentation file paths scanned for bare python3 invocations. |

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
`_DEFAULT_DOCS` is an internal Python list constant specifying default documentation target files for entrypoint validation, classified as `kind: name-only` per D-023.
