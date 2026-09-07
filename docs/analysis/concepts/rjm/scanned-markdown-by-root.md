---
package: rjm
name: scanned_markdown_by_root
slug: scanned-markdown-by-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scanned_markdown_by_root

## Definition — verbatim
(used, not defined)

> "def scanned_markdown_by_root(root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_portability.py:698

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 698 | defined here | Returns per-root markdown file read counts to verify coverage across all shipped roots. |

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
`scanned_markdown_by_root` is a Python validation function identifier returning per-root file counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
