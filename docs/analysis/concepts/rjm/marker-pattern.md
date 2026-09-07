---
package: rjm
name: _MARKER_PATTERN
slug: marker-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MARKER_PATTERN

## Definition — verbatim
(used, not defined)

> "_MARKER_PATTERN = re.compile(" — scripts/validation/check_skill_md_drift.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 39 | defined here | Regex matching vendor-portability HTML comment markers in prose documentation. |
| scripts/validation/check_skill_md_exec_portability.py | 77 | defined here | Regex matching vendor-portability-exec HTML comment markers for executable invocations. |

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
defects: doc-drift, other

## Design notes
A compiled regular expression constant matching vendor portability suppression comments, classified as `name-only` per D-023.
