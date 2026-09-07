---
package: rjm
name: catalog_files
slug: catalog-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# catalog_files

## Definition — verbatim
(used, not defined)

> "    catalog_files = {\"README.md\", \"INDEX.md\", \"CATALOG.md\", \"CLAUDE.md\"}" — scripts/modules/slash_command_validator.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/slash_command_validator.py | 33 | defined here | Set of non-command documentation markdown files excluded from frontmatter validation. |

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
A local variable identifier (`catalog_files`) defining filenames exempt from frontmatter validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
