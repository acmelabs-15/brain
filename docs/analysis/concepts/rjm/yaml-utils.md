---
package: rjm
name: yaml_utils
slug: yaml-utils
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# yaml_utils

## Definition — verbatim
(used, not defined)

> "from yaml_utils import _parse_yaml_frontmatter # noqa: E402" — scripts/validation/check_adr_lifecycle.py:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 135 | used here | Imported to provide YAML frontmatter parsing functionality for ADR documents. |

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
A Python utility module identifier providing YAML parsing routines, classified as `name-only` per D-023 because it is a code module identifier rather than a development lifecycle concept.
