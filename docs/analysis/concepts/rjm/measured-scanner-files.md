---
package: rjm
name: _MEASURED_SCANNER_FILES
slug: measured-scanner-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MEASURED_SCANNER_FILES

## Definition — verbatim
(used, not defined)

> "_MEASURED_SCANNER_FILES: frozenset[str] = frozenset(" — scripts/validation/check_skill_md_portability.py:771

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 771 | defined here | Constant frozenset listing scanner source files whose modifications invalidate existing stored baselines. |

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
`_MEASURED_SCANNER_FILES` is a Python module-level constant identifier tracking scanner source files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
