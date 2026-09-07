---
package: rjm
name: resolve_path_within_root
slug: resolve-path-within-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# resolve_path_within_root

## Definition — verbatim
(used, not defined)

> "def resolve_path_within_root(root_resolved: Path, candidate: Path) -> Path | None:" — scripts/validation/portability_common.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 37 | used here | Imported to verify resolved path containment within the repository root. |
| scripts/validation/check_skill_md_portability.py | 110 | used here | Imported to ensure scanned candidate files and directories remain strictly within root boundaries. |
| scripts/validation/portability_common.py | 116 | defined here | Function returning the resolved path if it is relative to the repository root, or None if external. |

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
clean in scripts/validation/portability_common.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
A path containment validation utility ensuring paths do not escape the repository boundary rather than an agent lifecycle concept.
