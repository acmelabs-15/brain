---
package: rjm
name: _refuse_marker_files_growth
slug: refuse-marker-files-growth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _refuse_marker_files_growth

## Definition — verbatim
(used, not defined)

> "def _refuse_marker_files_growth(" — scripts/validation/check_skill_md_exec_portability.py:419

## Also called — verbatim
`def _refuse_marker_files_growth(` — scripts/validation/check_skill_md_portability.py:1139

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 419 | defined here | Prevents baseline updates from silently absorbing increases in suppressed execution counts without explicit flags. |
| scripts/validation/check_skill_md_portability.py | 1139 | defined here | Refuses baseline writes when suppressed path reference counts increase without `--allow-marker-grow`. |

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
defects: other, doc-drift

## Design notes
An internal Python validation function identifier rejecting unflagged growth in suppressed marker files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
