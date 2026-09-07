---
package: rjm
name: extract_file_references
slug: extract-file-references
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# extract_file_references

## Definition — verbatim
(used, not defined)

> "def extract_file_references(content: str) -> list[str]:" — scripts/validate_memory_tier.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_memory_tier.py | 60 | defined here | Function extracting markdown file references from lookup table rows. |

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
A Python helper function identifier in validation scripting rather than an agent lifecycle concept.
