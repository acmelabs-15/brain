---
package: rjm
name: _refuse_exec_escape
slug: refuse-exec-escape
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _refuse_exec_escape

## Definition — verbatim
(used, not defined)

> "def _refuse_exec_escape(root_resolved: Path, path: Path, label: str) -> None:" — scripts/validation/check_skill_md_exec_portability.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 171 | defined here | Internal helper function raising OSError if a path resolves outside the repository root. |

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
defects: other

## Design notes
An internal Python helper function identifier preventing path-traversal escapes outside repository roots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
