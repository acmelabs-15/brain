---
package: rjm
name: Record
slug: record
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Record

## Definition — verbatim
(used, not defined)

> "class Record:" — scripts/validation/check_adr_lifecycle.py:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 207 | defined here | Dataclass representing a parsed ADR record with number, path, frontmatter, and body. |

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
A Python dataclass identifier representing an ADR file and its parsed sections, classified as `name-only` per D-023 because it is an internal data structure identifier rather than a development lifecycle concept.
