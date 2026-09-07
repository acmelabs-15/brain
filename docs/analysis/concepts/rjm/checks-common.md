---
package: rjm
name: checks_common
slug: checks-common
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# checks_common

## Definition — verbatim
(used, not defined)

> "from checks_common import ( # noqa: E402" — scripts/validation/check_adr_lifecycle.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 130 | used here | Imported to provide subprocess execution and git base ref resolution utilities. |
| scripts/validation/check_citation_freshness.py | 43 | used here | Cited in comment regarding python import path requirements for shared validation utilities. |

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
A shared Python validation module identifier providing common git subprocess and base ref resolution helpers, classified as `name-only` per D-023 because it is a software module identifier rather than a development lifecycle concept.
