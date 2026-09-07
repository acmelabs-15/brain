---
package: rjm
name: refuse_symlinked_scan_root
slug: refuse-symlinked-scan-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# refuse_symlinked_scan_root

## Definition — verbatim
(used, not defined)

> "def refuse_symlinked_scan_root(root: Path, scan_dir: Path) -> bool:" — scripts/validation/portability_common.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 35 | used here | Imported to prevent scanning directories that symlink outside the repository root. |
| scripts/validation/check_skill_md_portability.py | 108 | used here | Imported to validate scan roots against symlink traversal attacks before directory traversal. |
| scripts/validation/portability_common.py | 131 | defined here | Function checking if a scan root resolves outside repository root and emitting an error. |

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
A filesystem security validation function preventing path traversal through symlinked scan roots rather than an agent lifecycle concept.
