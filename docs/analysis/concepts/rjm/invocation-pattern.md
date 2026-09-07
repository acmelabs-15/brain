---
package: rjm
name: INVOCATION_PATTERN
slug: invocation-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# INVOCATION_PATTERN

## Definition — verbatim
(used, not defined)

> "INVOCATION_PATTERN = re.compile(" — scripts/validation/check_doc_interpreter_portability.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 196 | defined here | Compiled regular expression matching Python script invocations in documentation text. |

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
A Python regex constant in `check_doc_interpreter_portability.py` matching python command execution patterns, classified as name-only per D-023.
