---
package: rjm
name: _duplicate_key
slug: duplicate-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _duplicate_key

## Definition — verbatim
(used, not defined)

> "def _duplicate_key(raw: str | None) -> str | None:" — scripts/validation/check_adr_lifecycle.py:332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 332 | defined here | Function returning the first duplicate YAML frontmatter key detected in raw text. |
| scripts/validation/hook_contracts.py | 722 | defined here | Function returning composite identity tuple used to detect duplicate hook registrations. |

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
A Python helper function identifier used across validation scripts to identify duplicate keys in YAML mappings or hook registries, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
