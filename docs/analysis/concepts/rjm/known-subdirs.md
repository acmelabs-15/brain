---
package: rjm
name: _KNOWN_SUBDIRS
slug: known-subdirs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _KNOWN_SUBDIRS

## Definition — verbatim
(used, not defined)

> "_KNOWN_SUBDIRS = frozenset({" — scripts/validation/check_skill_md_drift.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 59 | defined here | Frozenset of valid subdirectory names used to distinguish path references from prose phrases. |

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
A frozenset constant in `scripts/validation/check_skill_md_drift.py` of recognized repository subdirectories, classified as `name-only` per D-023.
