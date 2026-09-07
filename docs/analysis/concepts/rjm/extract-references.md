---
package: rjm
name: extract_references
slug: extract-references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# extract_references

## Definition — verbatim
(used, not defined)

> "def extract_references(path: Path, text: str) -> list[MemoryReference]:" — scripts/validation/check_skill_memory_references.py:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 156 | defined here | Function that scans instruction Markdown text and returns literal Serena read/edit memory reference objects. |

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
A Python helper function identifier in `check_skill_memory_references.py`, classified as name-only per D-023.
