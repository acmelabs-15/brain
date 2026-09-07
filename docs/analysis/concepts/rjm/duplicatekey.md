---
package: rjm
name: _DuplicateKey
slug: duplicatekey
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DuplicateKey

## Definition — verbatim
(used, not defined)

> "class _DuplicateKey(yaml.YAMLError):" — scripts/validation/check_adr_lifecycle.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 285 | defined here | Custom YAML error class raised when duplicate mapping keys are encountered in frontmatter. |

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
A Python exception class identifier raised during strict YAML frontmatter validation when duplicate keys are detected, classified as `name-only` per D-023 because it is an internal error class identifier rather than a development lifecycle concept.
