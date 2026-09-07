---
package: rjm
name: scan_skill_markdown
slug: scan-skill-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_skill_markdown

## Definition — verbatim
(used, not defined)

> "def scan_skill_markdown(" — scripts/validation/check_skill_md_portability.py:471

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 471 | defined here | Traverses a skills directory to count offending upstream path references in Markdown files. |

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
`scan_skill_markdown` is a Python validation function identifier for traversing markdown files under skills directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
