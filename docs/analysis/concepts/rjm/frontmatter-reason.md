---
package: rjm
name: _frontmatter_reason
slug: frontmatter-reason
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _frontmatter_reason

## Definition — verbatim
(used, not defined)

> "def _frontmatter_reason(raw: str | None, text: str) -> str:" — scripts/validation/check_adr_lifecycle.py:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 243 | defined here | Function generating specific diagnostic failure reasons when frontmatter cannot be parsed. |

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
A Python function identifier in `check_adr_lifecycle.py` providing human-readable diagnostic messages for frontmatter parsing errors, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
