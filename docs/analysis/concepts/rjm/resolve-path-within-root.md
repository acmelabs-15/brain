---
package: rjm
name: resolve_path_within_root
slug: resolve-path-within-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
