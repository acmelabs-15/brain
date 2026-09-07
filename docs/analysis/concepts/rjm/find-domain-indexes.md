---
package: rjm
name: find_domain_indexes
slug: find-domain-indexes
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# find_domain_indexes

## Definition — verbatim
(used, not defined)

> "def find_domain_indexes(memories_dir: Path) -> list[Path]:" — scripts/validate_memory_tier.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 96 | defined here | Function discovering all domain index files in the memories directory. |

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
A Python utility function identifier locating domain index files rather than an agent lifecycle concept.
