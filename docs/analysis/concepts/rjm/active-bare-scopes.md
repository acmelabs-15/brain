---
package: rjm
name: _active_bare_scopes
slug: active-bare-scopes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _active_bare_scopes

## Definition — verbatim
(used, not defined)

> "git overrides one scope with another: see :func:`_active_bare_scopes`." — scripts/validation/check_repo_health.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 30 | defined here | Referenced in module docstring explaining filtering of active unmasked bare scopes. |

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
`_active_bare_scopes` is an internal Python helper function filtering Git configuration scopes to identify active, unmasked `core.bare = true` settings, classified as `kind: name-only` per D-023.
