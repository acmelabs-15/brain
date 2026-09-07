---
package: rjm
name: _SIMPLE_ANCHOR
slug: simple-anchor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SIMPLE_ANCHOR

## Definition — verbatim
(used, not defined)

> "_SIMPLE_ANCHOR" — scripts/validation/check_skill_md_drift.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 58 | defined here | Regex pattern matching start of string or delimiters preceding candidate file path tokens. |

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
A regex lookbehind assertion constant in `scripts/validation/check_skill_md_drift.py` for path token boundary matching, classified as `name-only` per D-023.
