---
package: rjm
name: MEMORIES_ROOT
slug: memories-root
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
---

# MEMORIES_ROOT

## Definition — verbatim
(used, not defined)

> "MEMORIES_ROOT = Path(\".serena\") / \"memories\"" — scripts/validation/check_skill_memory_references.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 96 | defined here | Constant path pointing to the default directory root where Serena memory files reside. |

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
out-of-scope

## Design notes
`MEMORIES_ROOT` is a Python filesystem path constant identifier pointing to the excluded Serena memories directory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
