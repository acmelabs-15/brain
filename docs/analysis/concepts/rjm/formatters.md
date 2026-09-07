---
package: rjm
name: FORMATTERS
slug: formatters
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FORMATTERS

## Definition — verbatim
(used, not defined)

> "FORMATTERS = {" — scripts/traceability/reconstruct_trace.py:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 168 | defined here | Dictionary mapping format names to trace graph rendering functions. |
| scripts/validation/hook_contracts.py | 936 | defined here | Dictionary mapping report format names to hook contract formatting functions. |
| scripts/validation/sha_pinning.py | 253 | defined here | Dictionary mapping output format names to SHA pinning violation formatters. |

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
Python dictionary constant mapping format names to CLI output formatters, classified as `name-only` per D-023.
