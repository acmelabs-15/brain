---
package: rjm
name: _extract_json_block
slug: extract-json-block
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _extract_json_block

## Definition — verbatim
(used, not defined)

> "def _extract_json_block(content: str) -> str | None:" — scripts/pr_branch_mapping.py:318

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 318 | defined here | Helper function extracting JSON payload content from fenced code blocks within markdown documents. |

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
`_extract_json_block` is a Python helper function identifier parsing JSON code fences out of markdown text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
