---
package: rjm
name: save_line_ending_audit
slug: save-line-ending-audit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# save_line_ending_audit

## Definition — verbatim
(used, not defined)

> "def save_line_ending_audit(output_path: Path) -> None:" — scripts/normalize_line_endings.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 61 | defined here | Defines helper function writing `git ls-files --eol` output to an audit file path. |

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
A Python helper function identifier writing line ending audit data to disk rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
