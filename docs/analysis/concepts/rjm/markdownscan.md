---
package: rjm
name: MarkdownScan
slug: markdownscan
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MarkdownScan

## Definition — verbatim
(used, not defined)

> "class MarkdownScan(NamedTuple):" — scripts/validation/check_skill_md_portability.py:426

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 426 | defined here | NamedTuple encapsulating offending file counts and total scanned file count from Markdown scanning. |

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
`MarkdownScan` is a Python NamedTuple data container identifier tracking scanned markdown counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
