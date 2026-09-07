---
package: rjm
name: _DATE_FORMAT
slug: date-format
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _DATE_FORMAT

## Definition — verbatim
(used, not defined)

> "_DATE_FORMAT = re.compile(r\"\d{4}-\d{2}-\d{2}\")" — scripts/hook_utilities/utilities.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 26 | defined here | Compiled regular expression validating YYYY-MM-DD date format strings. |

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
A private regular expression constant identifier used to validate calendar date strings rather than a lifecycle concept.
