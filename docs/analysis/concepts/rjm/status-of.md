---
package: rjm
name: _status_of
slug: status-of
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _status_of

## Definition — verbatim
(used, not defined)

> "def _status_of(record: Record) -> str:" — scripts/validation/check_adr_lifecycle.py:440

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 440 | defined here | Function returning the normalized lowercase frontmatter status string of an ADR record. |

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
A Python helper function identifier extracting and normalizing the lowercase status string from an ADR record's frontmatter, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
