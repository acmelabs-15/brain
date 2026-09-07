---
package: rjm
name: discover_roots
slug: discover-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# discover_roots

## Definition — verbatim
(used, not defined)

> "def discover_roots(repo_root: Path) -> list[Path]:" — scripts/validation/check_shipped_skill_routes.py:386

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 386 | defined here | Discovers bounded plugin roots containing plugin manifests within the repository. |

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
A Python helper function in `scripts/validation/check_shipped_skill_routes.py` that scans candidate plugin roots, classified as `name-only` per D-023.
