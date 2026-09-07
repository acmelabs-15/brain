---
package: rjm
name: canonicalize_references
slug: canonicalize-references
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# canonicalize_references

## Definition — verbatim
(used, not defined)

> "def canonicalize_references(" — scripts/validate_memory_tier.py:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 193 | defined here | Function normalizing reference paths relative to the memory root directory. |

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
defects: always-failing-gate, doc-drift

## Design notes
A Python helper function identifier normalizing path strings rather than an agent lifecycle concept.
