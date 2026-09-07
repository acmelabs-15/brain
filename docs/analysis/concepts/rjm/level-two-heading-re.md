---
package: rjm
name: _LEVEL_TWO_HEADING_RE
slug: level-two-heading-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _LEVEL_TWO_HEADING_RE

## Definition — verbatim
(used, not defined)

> "_LEVEL_TWO_HEADING_RE = re.compile(r\"(?m)^[ \t]{0,3}##[ \t]+(.+?)[ \t]*$\")" — scripts/validation/check_adr_lifecycle.py:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 179 | defined here | Regular expression constant used to identify level-two markdown headings bounding header searches. |

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
A compiled regular expression constant identifier matching level-two markdown headings to bound inline status searches, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
