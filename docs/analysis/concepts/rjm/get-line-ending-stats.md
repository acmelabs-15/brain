---
package: rjm
name: get_line_ending_stats
slug: get-line-ending-stats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_line_ending_stats

## Definition — verbatim
(used, not defined)

> "def get_line_ending_stats(stage: str) -> dict[str, int]:" — scripts/normalize_line_endings.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 37 | defined here | Defines helper function counting LF and CRLF line endings in the Git index and working tree. |

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
defects: orphan

## Design notes
A Python helper function identifier querying repository line ending statistics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
