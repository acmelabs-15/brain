---
package: rjm
name: _configured_hooks_path
slug: configured-hooks-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _configured_hooks_path

## Definition — verbatim
(used, not defined)

> "def _configured_hooks_path(repo_root: Path) -> tuple[str | None, str | None]:" — scripts/validation/check_git_hook_health.py:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 144 | defined here | Helper function inspecting git configuration to retrieve core.hooksPath and its config scope. |

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
_configured_hooks_path is an internal Python helper function identifier inspecting git configuration scopes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
