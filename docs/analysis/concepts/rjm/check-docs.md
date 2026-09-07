---
package: rjm
name: check_docs
slug: check-docs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_docs

## Definition — verbatim
(used, not defined)

> "def check_docs(" — scripts/validation/check_python3_entrypoints.py:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 233 | defined here | Scanner function parsing documentation files for bare python3 script invocations. |

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
`check_docs` is a Python function in `check_python3_entrypoints.py` that scans documentation files for bare python3 script invocations and detects third-party dependency imports, classified as `kind: name-only` per D-023.
