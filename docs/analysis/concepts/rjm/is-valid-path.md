---
package: rjm
name: _is_valid_path
slug: is-valid-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_valid_path

## Definition — verbatim
(used, not defined)

> "def _is_valid_path(normalized: str) -> bool:" — scripts/validation/check_skill_md_drift.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 110 | defined here | Nested helper function rejecting absolute paths, path traversal, and placeholder templates. |

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
An internal path validation function rejecting invalid and unsafe paths rather than an agent lifecycle concept.
