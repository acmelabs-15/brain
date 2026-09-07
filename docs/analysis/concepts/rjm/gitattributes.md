---
package: rjm
name: .gitattributes
slug: gitattributes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# .gitattributes

## Definition — verbatim
(used, not defined)

> "Applies .gitattributes rules to all existing files by renormalizing line endings." — scripts/normalize_line_endings.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 4 | used here | Git configuration file defining line ending normalization rules. |

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
A Git configuration filename (`.gitattributes`) specifying repository path attributes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
