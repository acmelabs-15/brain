---
package: rjm
name: REFERENCE_RE
slug: reference-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REFERENCE_RE

## Definition — verbatim
(used, not defined)

> "REFERENCE_RE = re.compile(" — scripts/sync/detect_spec_drift.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 89 | defined here | Regular expression compiling pattern to extract backticked code path references from specification documents. |

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
`REFERENCE_RE` is a compiled regular expression constant identifying backticked code paths in specification documents rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
