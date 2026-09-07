---
package: rjm
name: _STATUS_HEADING_RE
slug: status-heading-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _STATUS_HEADING_RE

## Definition — verbatim
(used, not defined)

> "_STATUS_HEADING_RE = re.compile(r\"(?m)^[ \t]{0,3}##[ \t]+Status[ \t]*$\", re.IGNORECASE)" — scripts/validation/check_adr_lifecycle.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 170 | defined here | Regular expression constant matching level-two Status headings in ADR markdown bodies. |

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
A compiled regular expression constant identifier used to locate level-2 Status sections in markdown documents, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
