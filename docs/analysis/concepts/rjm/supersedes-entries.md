---
package: rjm
name: _supersedes_entries
slug: supersedes-entries
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _supersedes_entries

## Definition — verbatim
(used, not defined)

> "def _supersedes_entries(record: Record) -> list[Any] | None:" — scripts/validation/check_adr_lifecycle.py:460

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 460 | defined here | Helper function extracting raw supersedes entries from ADR frontmatter as a list or accepting a bare scalar. |

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
`_supersedes_entries` is a Python helper function extracting raw supersedes entries from frontmatter rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
