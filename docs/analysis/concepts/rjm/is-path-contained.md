---
package: rjm
name: _is_path_contained
slug: is-path-contained
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_path_contained

## Definition — verbatim
(used, not defined)

> "def _is_path_contained(candidate: Path, root: Path) -> bool:" — scripts/validation/check_skill_md_drift.py:325

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 325 | defined here | Helper function asserting that a resolved path is contained beneath the resolved repository root. |

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
An internal security containment helper function for filesystem path boundaries rather than an agent lifecycle concept.
