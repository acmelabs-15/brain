---
package: rjm
name: paths.py
slug: paths-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# paths.py

## Definition — verbatim
(used, not defined)

> "the ``paths.py`` helper resolves, mirroring the script ratchet's exclusion." — scripts/validation/check_skill_md_portability.py:25

## Also called — verbatim
`helper with `resolve_artifact_root` (write path),` — scripts/validation/check_vendor_portability.py:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 25 | used here | Cited as the helper resolving install-root-relative `.claude/skills/` paths. |
| scripts/validation/check_vendor_portability.py | 9 | used here | Cited as the library module providing path resolution helpers for vendored scripts. |

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
`paths.py` is a Python library script file name providing runtime path resolution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
