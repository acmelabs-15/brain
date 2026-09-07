---
package: rjm
name: _frontmatter_of
slug: frontmatter-of
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _frontmatter_of

## Definition — verbatim
(used, not defined)

> "def _frontmatter_of(record: Record) -> dict[str, Any]:" — scripts/validation/check_adr_lifecycle.py:433

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 433 | defined here | Function extracting parsed frontmatter mapping from an ADR record or raising ValueError if absent. |

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
A Python helper function identifier extracting the parsed frontmatter dictionary from a Record dataclass, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
