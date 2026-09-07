---
package: rjm
name: BUNDLED_FILES
slug: bundled-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BUNDLED_FILES

## Definition — verbatim
(used, not defined)

> "BUNDLED_FILES = [" — scripts/split_bundled_skills.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/split_bundled_skills.py | 21 | defined here | Constant list enumerating 37 bundled markdown memory files targeted for splitting per ADR-017. |

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
defects: exit-code-mismatch, orphan

## Design notes
`BUNDLED_FILES` is a Python constant list identifier referencing legacy bundled memory files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
