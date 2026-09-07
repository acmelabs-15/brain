---
package: rjm
name: _cell_text
slug: cell-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _cell_text

## Definition — verbatim
(used, not defined)

> "def _cell_text(cell: TableCell) -> str:" — scripts/validation/check_shipped_skill_routes.py:460

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 460 | defined here | Blanks syntax-illustrating code spans from markdown table cells before route scanning. |

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
A private table cell normalization helper in `scripts/validation/check_shipped_skill_routes.py` for markdown route scanning, classified as `name-only` per D-023.
